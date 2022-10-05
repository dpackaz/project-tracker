var customCurrentTime = moment().format("dddd, MMMM Do, YYYY, HH:mm:ss a");
$(".custom-current-time").text(customCurrentTime);
console.log(customCurrentTime);

function runningTime() {
    customCurrentTime = moment().format("dddd, MMMM Do, YYYY, HH:mm:ss a");
    $(".custom-current-time").text(customCurrentTime);
}

setInterval(runningTime, 1000);