import path from 'path';

//Arquivo de configuração do Knex

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname,'src','database','database.sqlite'),
  },
  // Mostra ao knex onde criamos nossas migrations
  migrations: {
    directory: path.resolve(__dirname,'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname,'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
};