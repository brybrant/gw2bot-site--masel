let request = new XMLHttpRequest(),
    element = document.getElementById("api-status");
request.open("GET", "https://api.guildwars2.com/v2/quaggans", true);

request.onreadystatechange = function() {
  if(request.readyState==4) {
    if (request.status>=200&&request.status<400) {
      element.innerHTML = "API is Online!";
      element.className = "success";
    } else {
      element.innerHTML = "Error reaching API";
      element.className = "failure";
    }
  }
};

/*request.onerror = function() {
  element.innerHTML = "Error reaching API";
};*/

request.send();
