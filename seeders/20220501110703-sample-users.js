'use strict';
//populating user db table for test purpose
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Peter",
          lastName: "Griffin",
          email: "peteremail@gmail.com",
          //password: "password", //it says doesn't exist , might need to update db
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Test",
          lastName: "User",
          email: "testuser@gmail.com",
          //password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nusan",
          lastName: "last name",
          email: "nusan@gmail.com",
          //password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nushan",
          lastName: "lasts name",
          email: "nusan11@gmail.com",
          //password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "test5",
          lastName: "lasts name",
          email: "nusan00@gmail.com",
          //password: "password",
          //createdAt: new Date(),
          //updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
