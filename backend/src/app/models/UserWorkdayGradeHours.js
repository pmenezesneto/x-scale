import Sequelize, { Model } from 'sequelize';

class UserWorkdayGradeHours extends model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.STRING,
        idUser: Sequelize.STRING,
        idWorkdayGradeHour: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'userWorkdayGradeHours',
      }
    );

    return this;
  }

}

export default UserWorkdayGradeHours;
