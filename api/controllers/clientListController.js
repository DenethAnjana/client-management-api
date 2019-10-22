'use strict';

exports.list_all_member = function(req, res) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', '../public/data.json', true);
  xhttp.send();
}
