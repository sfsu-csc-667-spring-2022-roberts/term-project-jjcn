'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages', {
      messageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        refrences:{
          model:"user",
          key:"userID",
        },
      },
      message: {
        type: Sequelize.STRING
      },
      gameID: {
        type: Sequelize.INTEGER,
        refrences:{
          model:"gameboard",
          key:"gameID",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('messages');
  }
};