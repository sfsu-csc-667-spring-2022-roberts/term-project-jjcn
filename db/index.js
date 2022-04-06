const pgp = require('pg-promise')();
console.log('asdfasdf');
console.log(process.env.DATABASE_URL)
const connection = pgp(process.env.DATABASE_URL); // env variable in order to connect to db
console.log(connection)
module.exports = connection;

