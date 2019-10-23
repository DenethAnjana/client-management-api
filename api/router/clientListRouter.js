const express = require('express');
const router = express();

router.get("/", (req, res, next) => {
  const member = require('../../data.json').clients;
  res.status(200).json(member);
  // res.status(200).json(member[0]);
});

router.post("/", (req, res, next) => {
  const member = {
    "name" : req.body.name,
    "age" : req.body.age
  }
  res.status(201).json({
    "message" : "Handling POST request to /clientList",
    "newMember" : member
  })
});

router.get("/:clientId", (req, res, next) => {
  const id = req.params.clientId;
  const member = require('../../data.json').clients;
  var i=0;

  // res.status(200).json(member[i].id);
   while(i < member.length-1 && member[i].id != id) i++;
   // res.status(200).json(member[i].id);
  if(member[i].id == id){
    res.status(200).json(member[i]);
  } else {
    res.status(200).json({
      "message" : "id not found"
    })
  }
});

module.exports = router;
