import "bootstrap/dist/css/bootstrap.css";

window.onload = function() {
  let url = "http://localhost:3333/api/users";

  document.getElementById("all").onclick = function() {
    getUsers(url);
    document.getElementById("inputElements").style = "display: none";
    document.getElementById("addUser").style = "display: none";
  };

  this.document.getElementById("single").onclick = function() {
    document.getElementById("inputElements").style = "display: block";
    document.getElementById("addUser").style = "display: none";
    document.getElementById("table").innerHTML = "";
    document.getElementById("btn").innerText = "Get Person";

    document.getElementById("btn").onclick = function() {
      getUsers(url + "/" + document.getElementById("input").value);
    };
  };

  this.document.getElementById("newUser").onclick = function() {
    document.getElementById("inputElements").style = "display: block";
    document.getElementById("addUser").style = "display: block";
  };

  document.getElementById("addBtn").onclick = function() {
    const data = {
      age: document.getElementById("age").value,
      name: document.getElementById("name").value,
      gender: document.getElementById("gender").value,
      email: document.getElementById("email").value
    };
    const options = makeOptions("POST", data);
    fetchSome(url, options);
  };

  this.document.getElementById("edit").onclick = function() {
    document.getElementById("inputElements").style = "display: block";
    document.getElementById("table").innerHTML = "";

    document.getElementById("btn").onclick = function() {
      getUsers(url + "/" + document.getElementById("input").value);
    };
  };

  this.document.getElementById("delete").onclick = function() {
    document.getElementById("inputElements").style = "display: block";
    document.getElementById("table").innerHTML = "";
    document.getElementById("btn").innerText = "Delete Person";

    document.getElementById("btn").onclick = function() {
      getUsers(url + "/" + document.getElementById("input").value);
    };
  };

  function getUsers(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
          data = [data];
        }
        document.getElementById("table").innerHTML =
          "<thead>" +
          "<tr>" +
          "<th>Name</th>" +
          "<th>Age</th>" +
          "<th>Gender</th>" +
          "<th>Email</th>" +
          "</tr>" +
          "</thead>" +
          data
            .map(
              x =>
                "<tbody><tr><td>" +
                x.name +
                "</td>" +
                "<td>" +
                x.age +
                "</td>" +
                "<td>" +
                x.gender +
                "</td>" +
                "<td>" +
                x.email +
                "</td></tr></tbody>"
            )
            .join("");
      });
  }

  function fetchWithErrorCheck(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  function fetchSome(url, option) {
    fetch(url, option)
      .then(res => fetchWithErrorCheck(res))
      .then(data => {
        if (!Array.isArray(data)) {
          data = [data];
        }
        document.getElementById("addUser").innerHTML =
          "<thead>" +
          "<tr>" +
          "<th>Name</th>" +
          "<th>Age</th>" +
          "<th>Gender</th>" +
          "<th>Email</th>" +
          "</tr>" +
          "</thead>" +
          data
            .map(
              x =>
                "<tbody><tr><td>" +
                x.name +
                "</td>" +
                "<td>" +
                x.age +
                "</td>" +
                "<td>" +
                x.gender +
                "</td>" +
                "<td>" +
                x.email +
                "</td></tr></tbody>"
            )
            .join("");
      })
      .catch(err => {
        if (err.status) {
          err.fullError.then(e => console.log(e.detail));
        } else {
          console.log("Network error");
        }
      });
  }

  function makeOptions(http_method, body) {
    var options = {
      method: http_method,
      headers: {
        "Content-type": "application/json"
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  }
};
