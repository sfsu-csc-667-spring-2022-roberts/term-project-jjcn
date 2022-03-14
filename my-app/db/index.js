const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL); // env variable in order to connect to db

module.exports = connection;