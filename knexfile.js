// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './resources/data/car.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './resources/data/migrations'
    },
    seeds: {
      directory: './resources/data/seeds'
    }
  },

 

};
