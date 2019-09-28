window.onload = function () {
    var arrayToHtml = function (x) {
        data = "";
        x.forEach(element => {
            data +=
                '<tr><td>' + element.name + '</td>' +
                '<td>' + element.phone + '</td>' + '</tr>';
        });
        return data;
    }

    document.getElementById("output").innerHTML = arrayToHtml(names2);

    var btn = document.getElementById('btn');
    btn.onclick = function () {

        document.getElementById("output").innerHTML = arrayToHtml(names2);
    }
}