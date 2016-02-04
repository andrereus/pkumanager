/* Initialize */
var beta = document.getElementById("beta");

function addListener(element, event, funct) {
    if (element.addEventListener) {
        return element.addEventListener(event, funct);
    } else if (element.attachEvent) {
        return element.attachEvent(event, funct);
    }
}

/* Beta version */
var info;
addListener(beta, "click", info);

function info() {
    alert("This app is a beta version. It is recommended to reset the app (under Settings) from time to time during this period.");
}
