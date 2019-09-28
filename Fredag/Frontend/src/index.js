import "bootstrap/dist/css/bootstrap.css";
var url = "http://localhost:8080/CountryProxy/proxy/countries/";
window.onload = function() {
  document.getElementById("svg2").onclick = function(e) {
    if (!Array.isArray) {
      data = [data];
    }

    fetch(url + e.target.id)
      .then(res => res.json())
      .then(data => {
        document.getElementById("infoTable").innerHTML =
          "<ul>" +
          "<li>Country: " +
          data[0].name +
          "</li>" +
          "<li>Population: " +
          data[0].population +
          "</li>" +
          "<li>Area: " +
          data[0].area +
          "</li>" +
          "<li>Borders: " +
          data[0].borders.join(", ") +
          "</li>" +
          "</ul>";
      });
  };
};
