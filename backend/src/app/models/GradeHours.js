import Sequelize, { Model } from 'sequelize';

class GradeHours extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.STRING,
        start: Sequelize.STRING,
        end: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'gradeHours'
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.WorkdayGradeHours, {
      targetKey: 'id',
      foreignKey: 'idGradeHour'
    });
  }
}

export default GradeHours;