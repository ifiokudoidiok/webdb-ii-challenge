
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'Toyota', 
        model: 'Camry',
        vin: '89289378',
        mileage: '30000',
        transmission: 'auto'},
        { make: 'Honda', 
        model: 'Civic',
        vin: '89289378',
        mileage: '30000',
        transmission: 'manual'},
        { make: 'Mercedes', 
        model: 'GLK',
        vin: '89289378',
        mileage: '30000',
        transmission: 'semi-auto'},
       
      ]);
    });
};
