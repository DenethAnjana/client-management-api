exports.show_all = (req, res, next) => {
  const member = require('../../data.json').clients;
  res.status(200).json(member);
  //res.status(200).json(member[0]);
}

exports.add_new = (req, res, next) => {
    //import file system module and
    //var fs = require('fs');
    var list = require('../../data.json').clients;

    //assign request properties
    const member = {
          "id" : req.body.id,
          "name" : req.body.name,
          "age" : req.body.age
    };

    list.push(member);

    res.status(201).json(list);
}

exports.show_by_id = (req, res, next) => {
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
}
