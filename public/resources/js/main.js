function show(){
  var xhttp = new XMLHttpRequest();
  var i, x="";
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      for(i in data.clients){
        x += data.clients[i].id +"<br>"+ data.clients[i].name + "<br>" + data.clients[i].age + "<br><br>";
      }
      document.getElementById("clientList").innerHTML = x;
    }
  }
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

//User clicks search button
//If "member" has value, fetch value and search for value in json
document.getElementById('search').addEventListener('click', function() {
  var value = document.getElementById('member').value; //fetch value
  var temp = "";

  if (value) {
    var xhttp = new XMLHttpRequest();
    // document.getElementById('check').innerHTML = value;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var i = 0;

        while(data.clients[i].name != value && i < data.clients.length) i++;

        if(data.clients[i].name == value){
            temp += data.clients[i].id +"<br>"+ data.clients[i].name + "<br>" + data.clients[i].age + "<br><br>";
        }

        document.getElementById('searchResult').innerHTML = temp;
      }
    }
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
})

document.getElementById('add').addEventListener('click', function() {
  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var newClient = { id: id, name: name, age: age };

  var xhttp = new XMLHttpRequest();
  var jsonStr = JSON.parse(xhttp.responseText);
  jsonStr['clients'].push(newClient);
  jsonStr = JSON.stringify(jsonStr);

  xhttp.open("POST", "data.json", true);
  xhttp.send(json);
})
