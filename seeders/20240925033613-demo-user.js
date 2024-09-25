'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: "handrawanw.dev@gmail.com",
      password: "$2a$12$rxnfxGYVTKWRBkc/cJFEDOgWhmpab6FEXAdb04frp3sbidinFMWZW",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
