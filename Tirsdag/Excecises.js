//#region 1) Using existing functions that takes a callback as an argument

var names = ['Lars', 'Peter', 'Andreas', 'Asger', 'Martin', 'William'];

noA = names.filter(name => name.toLocaleLowerCase().includes('a'));

reversed = names.map(name => name.split("").reverse().join(""));

console.table(reversed);

//#endregion

//#region 2) Implement user defined functions that take callbacks as an argument

// a)
myFilter = function (arr, callback) {
    newArr = [];
    arr.forEach(e => {
        if (callback(e)) {
            newArr.push(e);
        }
    });
    return newArr;
};

myArray = myFilter(names, n => n.toLocaleLowerCase().includes('a'))
console.table(myArray);

// b)
myMap = function (arr, callback) {
    newArr = [];
    arr.forEach(e => {
        newArr.push(callback(e));
    })
    return newArr;
}

mySecondArray = myMap(names, n => n.split("").reverse().join(""));
console.table(mySecondArray);

//#endregion

//#region 3) Using the Prototype property to add new functionality to existing objects

Array.prototype.myFiltered = function (cb) {
    newArr = [];
    this.forEach(e => {
        if (cb(e)) {
            newArr.push(e);
        }
    });
    return newArr;
}


Array.prototype.myMapped = function (cb) {
    newArr = [];
    this.forEach(e => {
        newArr.push(cb(e));
    })
    return newArr;
}

console.table(names.myFiltered(n => n.toLocaleLowerCase().includes('a')));
console.table(names.myMapped(n => n.split("").reverse().join("")));

//#endregion

//#region 4) Getting really comfortable with filter and map

// a)
var numbers = [1, 3, 5, 10, 11];


// b)
var ankor = "<nav>\n" + names.map(name => "<a href=\"\">" + name + "</a>").join("\n") + "\n</nav>";
console.log(ankor);

// c)
var names2 = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

var ankor2 = "<table>\n" + "<tr>\n<th>name</th>\n" + "<th>phone</th>\n</tr>\n" + names2.map(n => "\n<tr>\n<td>"
    + n.name + "</td>\n" + "<td>" + n.phone + "</td>\n</tr>").join("\n") + "\n</table>"
console.log(ankor2)

// d) Findes i index.js - IKKE FÆRDIG



//#endregion

//#region Reduce

// a)
var all = ["Lars", "Peter", "Jan", "Bo"];

console.log(all.join(", "));
console.log(all.join(" "));
console.log(all.join("#"));

// b)
var numbers = [2, 3, 67, 33];
console.log(numbers.reduce((a, b) => a + b, 0))


// c) IKKE FÆRDIG
var members = [{ name: "Peter", age: 18 }, { name: "Jan", age: 35 }, { name: "Janne", age: 25 }, { name: "Martin", age: 22 }];


// d) Semi løst
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

var occurence = function (array) {

    var result = {};
    if (array instanceof Array) {
        array.forEach(function (v, i) {
            if (!result[v]) {
                result[v] = [i];
            } else {
                result[v].push(i);
            }
        })
    }
    return result;
}

console.log(occurence(votes))
//#endregion

//#region Hoisting

var hoist = 'True';
console.log(hoist);

console.log(hoist2);
var hoist2 = 'False';

// Hoisting er JavaScript's standard "opførsel" at rykke alle deklarationer op øverst i scopet, altså øverst i scriptet eller funktion.
// Oveniver ses at hoist bliver deklareret med stringen 'True' før vi logger den, hvilket printer 'True' i konsollen.
// Nedenunder ses hvordan jeg logger hoist2 før den deklareres med en værdi. Her får vi 'undefined' logget i konsollen, 
// da værdien først kobles på efter hoist2 deklareres.
// Hverken let eller const er hoisted. Forskellen på let og var er, at var er function scoped og let er block scoped.

//#endregion

