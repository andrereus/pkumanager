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
    var day,
        id;
    
    if (localStorage.getItem("day") !== null) {
        day = JSON.parse(localStorage.getItem("day"));
        id = day[day.length - 1].id + 1;
    } else {
        day = [];
        id = 1;
    }
    
    var food = {
        "id": id,
        "typ": type.value,
        "desc": description.value,
        "wg": Number(weight.value),
        "phe": Number(phenylalanine.value),
        "prot": Number(protein.value),
        "kcal": Number(energy.value)
    };

    day.push(food);
    localStorage.setItem("day", JSON.stringify(day));
    
    var today = JSON.parse(localStorage.getItem("day"));
    console.log(today);
}
