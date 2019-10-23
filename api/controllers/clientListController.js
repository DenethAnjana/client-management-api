'use strict';

/**
 * API for List of Client Member
 */
exports.list_all_member = function(req, res, next) {
  var xhttp = new XMLHttpRequest();
  var temp = "";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      for (i in data.clients){
        client = data.clients[i];
        temp += client.id + "<br>" + client.name + "<br>" + client.age + "<br><br>";
      }
    }
  }
  xhttp.open('GET', '../public/data.json', true);
  xhttp.send();
}
