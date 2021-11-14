const { Client } = require('pg');

const client = process.env.DATABASE_URL
/*const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "system",
  port: 5432,
})
*/
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports = client