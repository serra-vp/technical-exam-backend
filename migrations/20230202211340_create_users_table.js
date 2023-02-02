/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('first_name', 100).notNullable();
    table.string('last_name', 100).notNullable();
    table.text('address').notNullable();
    table.string('post_code', 50).notNullable();
    table.string('contact_phone_number', 100).notNullable();
    table.string('email', 100).notNullable();
    table.string('username', 100).notNullable();
    table.string('password', 100).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
