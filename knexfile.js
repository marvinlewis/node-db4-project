// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
  },

    migrations: {
      tableName: 'knex_migrations',
      directory : './data/migrations'

    }
  };
