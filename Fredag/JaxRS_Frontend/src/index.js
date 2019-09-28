//import "bootstrap/dist/css/bootstrap.css";
var url = "http://localhost:8080/jpareststarter/api/person/all";

window.onload = function() {
  getAll();
  document.getElementById("btn").onclick = () => {
    getAll();
  };

  function getAll() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
          data = [data];
        }
        document.getElementById("tableData").innerHTML = data
          .map(
            x =>
              "<tbody><tr><td>" +
              x.id +
              "</td>" +
              "<td>" +
              x.fName +
              "</td>" +
              "<td>" +
              x.lName +
              "</td>" +
              "<td>" +
              x.phone +
              "</td></tr></tbody>"
          )
          .join("");
      });
  }
};
