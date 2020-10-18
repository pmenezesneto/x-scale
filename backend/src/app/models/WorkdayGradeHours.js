import Sequelize, { Model } from 'sequelize';

class WorkdayGradeHours extends model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.STRING,
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'workdayGradeHours',
      }
    );

    return this;
  }
}

export default WorkdayGradeHours;
