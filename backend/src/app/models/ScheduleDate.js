import Sequelize, { Model } from 'sequelize';

class Workdays extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.STRING,
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'workdays'
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.WorkdayGradeHours, {
      targetKey: 'id',
      foreignKey: 'idWorkday'
    });
  }
}

export default Workdays;