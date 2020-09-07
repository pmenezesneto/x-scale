'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.STRING(32),
        allowNull: false,
        primaryKey: true,
        // defaultValue: Sequelize.literal("REPLACE(UUID(),'-','')"),

      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
