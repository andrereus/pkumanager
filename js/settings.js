/* Initialize */
var reset = document.getElementById("reset");
var resetfood = document.getElementById("resetfood");

function addListener(element, event, funct) {
    if (element.addEventListener) {
        return element.addEventListener(event, funct);
    } else if (element.attachEvent) {
        return element.attachEvent(event, funct);
    }
}

/* Reset food list */
var resetlist;
addListener(resetfood, "click", resetlist);

function resetlist() {
    localStorage.removeItem("day");
    window.location.assign("view.html");
}

/* Reset app */
var resetapp;
addListener(reset, "click", resetapp);

function resetapp() {
    localStorage.clear();
    window.location.assign("index.html");
}
