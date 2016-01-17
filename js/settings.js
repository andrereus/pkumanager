var reset = document.getElementById("reset");

var resetapp;

if (reset.addEventListener) {
    reset.addEventListener("click", resetapp);
} else if (reset.attachEvent) {
    reset.attachEvent("onclick", resetapp);
}

function resetapp() {
    localStorage.clear();
    alert("Reset done");
}
