'use strict'; //!!find out why
module.exports = function(app){
  var clientList = require('../controllers/clientListController');

  //clientList route
  app.route('/member')
  .get(clientList.list_all_member)
  .post(clientList.add_member);

  app.route('/member/:memberID')
  .get(clientList.read_member_data);

};
