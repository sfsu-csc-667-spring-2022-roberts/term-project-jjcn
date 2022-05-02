'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gameCards', {
      gameID: {
        type: Sequelize.INTEGER,
        userID: {
          type: Sequelize.INTEGER,
          refrences: {
            model:"gameboard",
            key: "gameID"
          },
        },
      },
      cardID: {
        type: Sequelize.INTEGER,
        userID: {
          type: Sequelize.INTEGER,
          refrences: {
            model:"card",
            key: "cardID"
          },
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        userID: {
          type: Sequelize.INTEGER,
          refrences: {
            model:"user",
            key: "userID"
          },
        },
      },
      inDeck:{
        type: Sequelize.BOOLEAN,
      },
      played:{
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('gameCards');
  }
};