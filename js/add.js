var type = document.getElementById("type");
var description = document.getElementById("name");
var weight = document.getElementById("weight");
var phenylalanine = document.getElementById("phenylalanine");
var protein = document.getElementById("protein");
var energy = document.getElementById("energy");

var add = document.getElementById("add");

var save;

if (add.addEventListener) {
    add.addEventListener("click", save);
} else if (add.attachEvent) {
    add.attachEvent("onclick", save);
}

function save() {
    if (localStorage.getItem("day") !== null) {
        var list = JSON.parse(localStorage.getItem("day"));

        var food = {
            "id": 1,
            "typ": type.value,
            "desc": description.value,
            "wg": weight.value,
            "phe": phenylalanine.value,
            "prot": protein.value,
            "kcal": energy.value
        };

        list.push(food);
        localStorage.setItem("day", JSON.stringify(list));
    } else {
        var day = [{
            "id": 1,
            "typ": type.value,
            "desc": description.value,
            "wg": weight.value,
            "phe": phenylalanine.value,
            "prot": protein.value,
            "kcal": energy.value
        }];

        localStorage.setItem("day", JSON.stringify(day));
    }

    var today = JSON.parse(localStorage.getItem("day"));
    console.log(today);
}
