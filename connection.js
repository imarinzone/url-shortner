const { Client } = require('pg');
// to do connect through Heroku
// var connectionString = "postgres://bowsbkwvyzsvez:070918effc9eb86d35ce0c053593ef341c6957d96105d54c2376a8a97c0ffd39@ec2-44-198-236-169.compute-1.amazonaws.com:5432/d9bjci1mvjoovm"
// const client = new Client({
//     connectionString: connectionString,
//     ssl: true
// });
// Update your PostgresSQL Database credentials here
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "system",
  port: 5432,
})
// creates a new table if not exists
queryString = `CREATE TABLE IF NOT EXISTS url_db (
      id SERIAL NOT NULL PRIMARY KEY,
      long_url varchar (255) NOT NULL UNIQUE,
      short_url varchar (255) NOT NULL UNIQUE
      );`
client.connect(function(err) {
    if (err) throw err;
    else{
      console.log("Connected!")
      client.query(queryString, (error, results) => {
          if (error) {
              throw error
          }})
    }
  })
module.exports = client