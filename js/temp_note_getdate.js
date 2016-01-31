function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

if (localStorage.getItem("day") !== null) {
    var list = JSON.parse(localStorage.getItem("day"));
    var date = new Date(list[i].date);
    console.log(addZero(date.getHours()) + ":" + addZero(date.getMinutes()));
}
