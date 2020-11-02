import * as Yup from 'yup';
import User from '../models/User';

class EventController {
  async store(req, res) {
    const validatedBody = Yup.object().shape({
      name: Yup.string().required().max(100),
      email: Yup.string().required().max(100),
      password: Yup.string().required().min(8).max(100),
    })

    if (!(await validatedBody.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    let createUser = await User.create(req.body);

    console.log(JSON.stringify(createUser));
    console.log('acabou mané')
  }
}

export default new EventController();