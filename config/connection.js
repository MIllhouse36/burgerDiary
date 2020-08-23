const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "losthost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "Burgers_db"
});

connection.connect((err)=>{
  if(err){
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection;