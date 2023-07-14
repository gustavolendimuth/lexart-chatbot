/* eslint-disable no-undef */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'Gustavo Lendimuth',
      email: 'gustavolendimuth@gmail.com',
      password: 'senha',
      role: 'admin',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
