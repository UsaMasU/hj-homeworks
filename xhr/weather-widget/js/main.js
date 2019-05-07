
function onLoad() {
  if (request.status === 200) {
   const response = JSON.parse(request.responseText);
   setData(response);
  }
}

const request = new XMLHttpRequest();
request.addEventListener("load", onLoad);

request.open('GET', 'https://neto-api.herokuapp.com/weather', true);
request.send();
