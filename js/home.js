var today = document.getElementById("today");

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

if (localStorage.getItem("day") !== null) {
    var list = JSON.parse(localStorage.getItem("day"));
    var date;

    var table = "<thead><tr><th>" +
        "Description</th><th>" +
        "Phenyl&shy;alanine</th><th>" +
        "Protein</th><th>" +
        "Energy</th></tr></thead><tbody>";

    for (var i = 0; i < list.length; i++) {
        date = new Date(list[i].date);

        table += "<tr><td>" +
            // addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + " - " +
            list[i].wg + "&nbsp;g " + list[i].desc + "</td><td class=\"nowrap\">" +
            list[i].phe.toFixed(2).replace(/\.?0+$/, "") + " mg</td><td class=\"nowrap\">" +
            list[i].prot.toFixed(2).replace(/\.?0+$/, "") + " g</td><td>" +
            list[i].kcal.toFixed(2).replace(/\.?0+$/, "") + " kcal</td></tr>";
    }

    table += "</tbody><br><p>Reset list under <a href=\"settings.html\">Settings</a>.</p>";
    today.innerHTML = table;
} else {
    var empty = "<tbody><tr><td>No food added.</td></tr></tbody>";
    today.innerHTML = empty;
}
