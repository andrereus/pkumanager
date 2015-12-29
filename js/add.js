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
    var desc = description.value,
        wg = weight.value,
        phe = phenylalanine.value,
        prot = protein.value,
        kcal = energy.value;
    console.log(desc, wg, phe, prot, kcal);
}
