/* eslint-disable no-undef */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'Admin',
      email: 'join-us@lexartlabs.com',
      password: '1d9e579683f89a3373c32b7b320e326208b125d82f770f08e3fe40a0d804c8a9',
      role: 'admin',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
