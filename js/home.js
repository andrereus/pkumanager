var today = document.getElementById("today");

if (localStorage.getItem("day") !== null) {
    var list = JSON.parse(localStorage.getItem("day"));
    var phe = 0;
    var prot = 0;
    var kcal = 0;

    var table = "<thead><tr><th>" +
        "Description</th><th>" +
        "Phenyl&shy;alanine</th><th>" +
        "Protein</th><th>" +
        "Energy</th></tr></thead><tbody>";

    for (var i = 0; i < list.length; i++) {
        table += "<tr><td>" +
            list[i].wg.toFixed(2).replace(/\.?0+$/, "") + "&nbsp;g " +
            list[i].desc + "</td><td class=\"nowrap\">" +
            list[i].phe.toFixed(2).replace(/\.?0+$/, "") + " mg</td><td class=\"nowrap\">" +
            list[i].prot.toFixed(2).replace(/\.?0+$/, "") + " g</td><td>" +
            list[i].kcal.toFixed(2).replace(/\.?0+$/, "") + " kcal</td></tr>";

        phe += list[i].phe;
        prot += list[i].prot;
        kcal += list[i].kcal;
    }

    table += "<tr><td>" +
        "Sum</td><td class=\"nowrap\">" +
        phe.toFixed(2).replace(/\.?0+$/, "") + " mg</td><td class=\"nowrap\">" +
        prot.toFixed(2).replace(/\.?0+$/, "") + " g</td><td>" +
        kcal.toFixed(2).replace(/\.?0+$/, "") + " kcal</td></tr></tbody><br><p>" +
        "Reset list under <a href=\"settings.html\">Settings</a>.</p>";

    today.innerHTML = table;
} else {
    var empty = "<tbody><tr><td><a href=\"add.html\">Add food</a> to see it here.</td></tr></tbody>";
    today.innerHTML = empty;
}
