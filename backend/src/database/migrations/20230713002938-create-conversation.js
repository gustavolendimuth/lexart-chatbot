/* eslint-disable no-undef */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('conversations', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('conversations');
  },
};
