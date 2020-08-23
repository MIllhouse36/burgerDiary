const connection = require("../config/connection");

const printQuestionMarks = (num)=>{
  let arr = [];
  for(let i = 0; i < num; i++){
    arr.push("?");
  }
  return arr.toString();
}

const objToSql = (ob)=>{
  let arr = [];
  for (const key in ob) {
    var value = ob[key]
    if (Object.hasOwnProperty.call(ob, key)) {
     if (typeof value === 'string' && value.indexOf(' ') >= 0){
       value = `'${value}'`;
     }
      arr.push(`${key} = ${value}`)
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: (tableInput, cb)=>
  {
    let queryString = `SELECT * FROM ${tableInput} ;`;
    connection.query(queryString, (err,res)=>{
      if (err){
        throw err;
      }
      cb(res);
    });
  },
  insertOne: (table, cols, vals, cb)=>{
    let queryString = `INSERT INTO ${table}`;
    queryString += `(`;
    queryString += `VALUES (`;
    queryString += printQuestionMarks(vals.length);
    queryString += `) `

    connection.query(queryString, vals, (err,res)=>{
      if (err){
        throw err;
      }
      cb(res);
    })
  },
  updateOne: (table, objColVals, condition, cb)=>{
    let queryString = `UPDATE ${table}`;
    queryString += `SET `;
    queryString += objToSql(objColVals);
    queryString += ` WHERE `;
    queryString += condition;

    connection.query(queryString, (err,res)=>{
      if (err){
        throw err;
      }
      cb(res);
    });
  },
  deleteOne: (table, condition, cb)=>{
    let queryString = `DELETE FROM ${table}`;
    queryString += ` WHERE `;
    queryString += condition;

    connection.query(queryString, (err,res)=>{
      if(err){
        throw err;
      }
      cb(res);
    });
  }
}

module.exports = orm;
