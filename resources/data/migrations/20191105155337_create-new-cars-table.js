
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments('id');
      //vin, make, model, mileage ==> not null

      table.text('make', 128).notNullable();
      table.varchar('model', 128).notNullable();
      table.integer('vin').notNullable();
      table.integer('mileage').notNullable();
      table.text('transmission', 128);
      //transmissiontype
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
