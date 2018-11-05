var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var timer = d.toLocaleTimeString();
    var hours = d.getHours().toString();
    var minutes = d.getMinutes().toString();
    var seconds = d.getSeconds().toString();
    if(seconds.length == 1) {
        seconds = [0, seconds[0]]
    }
    if(minutes.length == 1) {
        minutes = [0, minutes[0]]
    }
    if(hours.length == 1) {
        hours = [0, hours[0]]
    }

    document.getElementById("hours1").innerHTML = hours[0];
    document.getElementById("hours2").innerHTML = hours[1];
    document.getElementById("minutes1").innerHTML = minutes[0];
    document.getElementById("minutes2").innerHTML = minutes[1];
    document.getElementById("seconds1").innerHTML = seconds[0];
    document.getElementById("seconds2").innerHTML = seconds[1];
}