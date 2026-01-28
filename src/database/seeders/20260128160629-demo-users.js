'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await queryInterface.bulkInsert('users', [
      {
        id: '550e8400-e29b-41d4-a716-446655440001',
        username: 'john_doe',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        password: hashedPassword,
        created_at: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440002',
        username: 'jane_smith',
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane@example.com',
        password: hashedPassword,
        created_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
