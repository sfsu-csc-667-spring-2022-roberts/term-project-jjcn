'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gameHasUsers', {
      gameID: {
        type: Sequelize.INTEGER,
        gameID: {
          type: Sequelize.INTEGER,
          refrences: {
            model:"gameboard",
            key: "gameID"
          },
        },
      },
      userID: {
        type: Sequelize.INTEGER,
        userID: {
          type: Sequelize.INTEGER,
          refrences: {
            model:"user",
            key: "userID",
          },
        },
      },
      order: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('gameHasUsers');
  }
};