/* Initialize */
var view = document.getElementById("view");

function addListener(element, event, funct) {
    if (element.addEventListener) {
        return element.addEventListener(event, funct);
    } else if (element.attachEvent) {
        return element.attachEvent(event, funct);
    }
}

/* Food list */
if (localStorage.getItem("day") !== null) {
    var list = JSON.parse(localStorage.getItem("day"));
    var phe = 0;
    var prot = 0;
    var kcal = 0;

    var table = "<h1>Food entries</h1>" +
        "<a class=\"button right-button\" href=\"add.html\">Add</a>" +
        "<div class=\"width-wrapper\"><input type=\"text\" class=\"wide-input\" id=\"datepicker\"></div>";

    view.innerHTML = table;
    $("#datepicker").datepicker();
    $("#datepicker").datepicker("option", "dateFormat", "dd.mm.yy");
    $("#datepicker").datepicker("setDate", new Date());

    // function renderEntries() {
        table += "<table><thead><tr><th>" +
            "Description</th><th>" +
            "Phenyl&shy;alanine</th><th>" +
            "Protein</th><th>" +
            "Energy</th></tr></thead><tbody>";

        for (var i = 0; i < list.length; i++) {
            var date1 = new Date(list[i].date);
            // Rewrite in JavaScript
            var date2 = $("#datepicker").datepicker("getDate");

            if (date1.getDate() == date2.getDate()) {
                table += "<tr><td><a href=\"edit.html?" + list[i].id + "\" class=\"table-link\">" +
                    list[i].wg.toFixed(2).replace(/\.?0+$/, "") + "&nbsp;g " +
                    list[i].desc + "</a></td><td class=\"nowrap\">" +
                    list[i].phe.toFixed(2).replace(/\.?0+$/, "") + " mg</td><td class=\"nowrap\">" +
                    list[i].prot.toFixed(2).replace(/\.?0+$/, "") + " g</td><td>" +
                    list[i].kcal.toFixed(2).replace(/\.?0+$/, "") + " kcal</td></tr>";

                phe += list[i].phe;
                prot += list[i].prot;
                kcal += list[i].kcal;
            }
        }

        table += "<tr><td>" +
            "Total</td><td class=\"nowrap\">" +
            phe.toFixed(2).replace(/\.?0+$/, "") + " mg</td><td class=\"nowrap\">" +
            prot.toFixed(2).replace(/\.?0+$/, "") + " g</td><td>" +
            kcal.toFixed(2).replace(/\.?0+$/, "") + " kcal</td></tr>";

        if (localStorage.getItem("tolerance") !== null) {
            var tolerance = JSON.parse(localStorage.getItem("tolerance"));
            var phetol = tolerance.phetol - phe;
            var prottol = tolerance.prottol - prot;
            var kcaltol = tolerance.kcaltol - kcal;

            table += "<tr><td>" +
                "Remaining</td><td class=\"nowrap\">" +
                phetol.toFixed(2).replace(/\.?0+$/, "") + " mg</td><td class=\"nowrap\">" +
                prottol.toFixed(2).replace(/\.?0+$/, "") + " g</td><td>" +
                kcaltol.toFixed(2).replace(/\.?0+$/, "") + " kcal</td></tr>";
        }

        table += "</tbody></table><br>" +
            "<button class=\"button button-outline resetfood\" id=\"resetfood\">Reset</button>" +
            "<a class=\"button button-clear float-right\" href=\"settings.html\">Settings</a>";

        view.innerHTML = table;
    // }
    // renderEntries();
} else {
    var empty = "<h1>Food entries</h1>" +
    "<a class=\"button right-button\" href=\"add.html\">Add</a>" +
    "<div class=\"width-wrapper\"><input type=\"text\" class=\"wide-input\" id=\"datepicker\"></div>" +
    "<table><tbody><tr><td>No food entries.</td></tr></tbody></table>";
    view.innerHTML = empty;
}

/* Reset food list */
var conf;

document.getElementById("view").addEventListener("click", function(event) {
    if (event.target && event.target.matches("#resetfood")) {
        conf = confirm("Please confirm to reset food entries.");
        if (conf === true) {
            localStorage.removeItem("day");
            location.reload();
        }
    }
});

/* Datepicker */
// Rewrite in JavaScript
if ($("#datepicker")) {
    $("#datepicker").datepicker();
    $("#datepicker").datepicker("option", "dateFormat", "dd.mm.yy");
    $("#datepicker").datepicker("setDate", new Date());
}

// $("#datepicker").datepicker({
//     onSelect: function() {
//         renderEntries();
//     }
// });
