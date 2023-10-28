// import mysql from "mysql"

// export const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"social"
// })

// const mysql = require('mysql');
import mysql from 'mysql'
// const dotenv = require("dotenv");
// dotenv.config();

export const db = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "xxxx" ,
    database : "social"
});

db.connect(function(err) {
  if(err) throw err;
  console.log('hey db is connected!');
});

