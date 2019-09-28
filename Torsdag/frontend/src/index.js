import "bootstrap/dist/css/bootstrap.css";
window.onload = function() {
  let url = "https://williamhuusfeldt.dk/thursdaybackend/api/user/";

  document.getElementById("all").onclick = function() {
    getUsers(url + "all");
    document.getElementById("inputElements").style = "display: none";
    document.getElementById("addUser").style = "display: none";
    document.getElementById("table").style = "display: block";
  };

  this.document.getElementById("single").onclick = function() {
    document.getElementById("inputElements").style = "display: block";
    document.getElementById("addUser").style = "display: none";
    document.getElementById("table").innerHTML = "";

    document.getElementById("btn").onclick = function() {
      getUsers(url + "id/" + document.getElementById("input").value);
    };
  };

  this.document.getElementById("newUser").onclick = function() {
    document.getElementById("inputElements").style = "display: none";
    document.getElementById("addUser").style = "display: block";
    document.getElementById("table").innerHTML = "";
  };

  document.getElementById("addBtn").onclick = function() {
    const data = {
      name: document.getElementById("name").value
    };
    const options = makeOptions("POST", data);
    fetchSome(url, options);
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
          "</tr>" +
          "</thead>" +
          data
            .map(x => "<tbody><tr><td>" + x.name + "</td></tr></tbody>")
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
        document.getElementById("name").innerHTML =
          "<thead>" +
          "<tr>" +
          "<th>Name</th>" +
          "</tr>" +
          "</thead>" +
          data
            .map(x => "<tbody><tr><td>" + x.name + "</td></tr></tbody>")
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
