const express = require("express");
const router = express.Router();
const burger = require("../models/burger-models")

router.get("/", (req,res)=>{
  burger.selectAll((data)=>{
    let hbsOb = {
      burgers: data
    };
    res.render("index", hbsOb);
  });
});

router.post("/api/burgers", (req,res)=>{
  burger.insertOne([
    "name"
  ], [
    req.body.name
  ], (res)=>{
    res.json({id: res.insertId})
  })
})

router.put("/api/burgers/:id", (req,res)=>{
  const condition = `id = ${req.params.id}`;
  burger.updateOne({
    eaten: req.body.eaten
  }, condition, (result)=>{
    if( result.changedRows == 0){
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", (req, res)=>{
  const condition = `id = ${req.params.id}`;

  burger.deleteOne(condition, (result)=>{
    if(result.affectedRows == 0) {
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  })
})

module.exports = router;