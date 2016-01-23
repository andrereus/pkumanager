/* Initialize */
var type = document.getElementById("type");
var description = document.getElementById("name");
var weight = document.getElementById("weight");
var phenylalanine = document.getElementById("phenylalanine");
var protein = document.getElementById("protein");
var energy = document.getElementById("energy");
var add = document.getElementById("add");
var calculate = document.getElementById("calculate");

function addListener(element, event, funct) {
    if (element.addEventListener) {
        return element.addEventListener(event, funct);
    } else if (element.attachEvent) {
        return element.attachEvent(event, funct);
    }
}

function addParameter(element, event, funct, p1, p2) {
    if (element.addEventListener) {
        return element.addEventListener(event, function() { funct(p1, p2); });
    } else if (element.attachEvent) {
        return element.attachEvent(event, function() { funct(p1, p2); });
    }
}

function removeParameter(element, event, funct, p1, p2) {
    if (element.removeEventListener) {
        return element.removeEventListener(event, function() { funct(p1, p2); });
    } else if (element.detachEvent) {
        return element.detachEvent(event, function() { funct(p1, p2); });
    }
}

/* Save */
var save;
addListener(add, "click", save);

function save() {
    var day, id,
        date = new Date();

    if (localStorage.getItem("day") !== null) {
        day = JSON.parse(localStorage.getItem("day"));
        id = day[day.length - 1].id + 1;
    } else {
        day = [];
        id = 1;
    }

    var food = {
        "id": id,
        "date": date,
        "type": type.value,
        "desc": description.value,
        "wg": Number(weight.value),
        "phe": Number(phenylalanine.value),
        "prot": Number(protein.value),
        "kcal": Number(energy.value)
    };

    day.push(food);
    localStorage.setItem("day", JSON.stringify(day));
    window.location.assign("index.html");
}

/* Calculate */
var check, calc;
addListener(calculate, "click", check);

function check() {
    if (calculate.checked) {
        localStorage.setItem("weight", weight.value);
        localStorage.setItem("phenylalanine", phenylalanine.value);
        localStorage.setItem("protein", protein.value);
        localStorage.setItem("energy", energy.value);

        addParameter(weight, "keyup", calc, weight, "weight");
        addParameter(phenylalanine, "keyup", calc, phenylalanine, "phenylalanine");
        addParameter(protein, "keyup", calc, protein, "protein");
        addParameter(energy, "keyup", calc, energy, "energy");
    } else {
        //Change this: Anonymous function can't be removed ...
        removeParameter(weight, "keyup", calc, weight, "weight");
        removeParameter(phenylalanine, "keyup", calc, phenylalanine, "phenylalanine");
        removeParameter(protein, "keyup", calc, protein, "protein");
        removeParameter(energy, "keyup", calc, energy, "energy");
    }
}

function calc(original, saved) {
    weight.value = original.value * localStorage.getItem("weight") / localStorage.getItem(saved);
    phenylalanine.value = original.value * localStorage.getItem("phenylalanine") / localStorage.getItem(saved);
    protein.value = original.value * localStorage.getItem("protein") / localStorage.getItem(saved);
    energy.value = original.value * localStorage.getItem("energy") / localStorage.getItem(saved);
}
