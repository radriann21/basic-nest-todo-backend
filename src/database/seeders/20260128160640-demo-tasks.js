'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        id: '660e8400-e29b-41d4-a716-446655440001',
        title: 'Complete project documentation',
        description: 'Write comprehensive documentation for the API',
        completed: false,
        user_id: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '660e8400-e29b-41d4-a716-446655440002',
        title: 'Review pull requests',
        description: 'Review and merge pending PRs',
        completed: true,
        user_id: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '660e8400-e29b-41d4-a716-446655440003',
        title: 'Setup CI/CD pipeline',
        description: 'Configure GitHub Actions for automated testing',
        completed: false,
        user_id: '550e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '660e8400-e29b-41d4-a716-446655440004',
        title: 'Update dependencies',
        description: 'Update all npm packages to latest versions',
        completed: false,
        user_id: '550e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};