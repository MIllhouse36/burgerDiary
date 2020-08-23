const orm = require("../config/orm");
const { json } = require("express");

const burger = {
  selectAll: (cb)=>{
    orm.selectAll(`Burgers`, (res)=>{
      cb(res);
    });
  },
  insertOne: (cols, vals, cb)=>{
    orm.insertOne(`Burgers`, cols, vals, (res)=>{
      cb(res);
    });
  },
 updateOne: (objColVals, condition, cb)=>{
    orm.insertOne(`Burgers`, objColVals, condition, cb, (res)=>{
      cb(res);
    });
  },
  deleteOne: (condition, cb)=>{
    orm.deleteOne(`Burgers`, condition, cb, (res)=>{
      cb(res);
    });
  }
}
