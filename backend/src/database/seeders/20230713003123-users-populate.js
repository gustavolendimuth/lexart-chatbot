/* eslint-disable no-undef */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'Admin',
      email: 'join-us@lexartlabs.com',
      password: '$2b$10$4ZrnwlH.h7Lviy97NMkJ5Oh5J5rlxYtyMykAG3IkOtgMP.Voyd3a6',
      role: 'admin',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
