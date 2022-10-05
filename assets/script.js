var customCurrentTime = moment().format("dddd, MMMM Do, YYYY, HH:mm:ss a");
$(".custom-current-time").text(customCurrentTime);
console.log(customCurrentTime);

function runningTime() {
    customCurrentTime = moment().format("dddd, MMMM Do, YYYY, HH:mm:ss a");
    $(".custom-current-time").text(customCurrentTime);
}

setInterval(runningTime, 1000);

$('btn').on('click', modalHandler)

function modalHandler () {
    var projectName = $('#projectName').value();
    var projectType = $('#projectType').value();
    var dueDate = $('#dueDate').value();
    var hourlyRate = $('#hourlyRate').value();

    console.log(projectName);
    console.log(projectType);

    console.log(dueDate);

    console.log(hourlyRate);

}

$('#savebtn').on('click', saveProject)

function saveProject() {
    trEl = $('<tr>');
    tdProjectName = $('<td>');
    tdProjectName.val($('#projectName').value);
    tdProjectType = $('<td>');
    tdProjectType.text($('#projectType').value);

    //Get
    var projectNameStr = $('#projectName').val();

    //Set
    tdProjectName.val(projectNameStr);

    console.log(projectNameStr);

    tdHourRate = $('<td>');
    tdHourRate.text($('#hourlyRate').value);

    tdDueDate = $('<td>');
    tdDueDate.text($('#dueDate').value);

    tdDaysLeft = $('<td>');
    tdEarnings = $('<td>');

    trEl.append(tdProjectName);
    trEl.append(tdProjectType);
    trEl.append(tdDueDate);
    trEl.append(tdHourRate);
    trEl.append(tdDaysLeft);
    trEl.append(tdEarnings);

    $('tbody').append(trEl);

}