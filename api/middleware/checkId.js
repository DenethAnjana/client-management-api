module.exports = (req, res, next) => {
  const member = require('../../data.json').clients;

  if (!isIdExist(req.body.id)) {
    next();
  } else {
    res.status(201).json({
      'message': 'ada eror, id tidak unik'
    })
  }
}

function isIdExist(id){
  const member = require('../../data.json').clients;
  var i=0;

  while(i < member.length-1 && member[i].id != id) i++;

  if(member[i].id == id){
    return true;
    // res.status(200).json(member[i]);
  } else {
    return false;
    // res.status(200).json({
    //   // "message" : "id not found"
    // })
  }
}
