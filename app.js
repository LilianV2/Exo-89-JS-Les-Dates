let timestampDiv = document.getElementById('timestamp')
let localDateDiv = document.getElementById('localDate')
let localTimeDiv = document.getElementById('localTime')

//               ---     1 - 2 et 3    ----

let timestampDate = new Date();
timestampDiv.innerHTML = timestampDate;

let localDate = new Date();
localDateDiv.innerHTML = localDate.toLocaleDateString();

let localTime = new Date();
localTimeDiv.innerHTML = localTime.toLocaleTimeString();

//    ------------ 4 ----------

let today = new Date();
let futureDay = new Date();
futureDay.setDate(today.getDate() + 1)
futureDay.setHours(today.getHours() + 6)

if (futureDay > today){
    let interval = today.getTime() + futureDay.getTime();

    let days = Math.floor(interval / 1000 / 60 / 60 / 24)
    let hours = Math.floor(interval / 1000 / 60 / 60)
    let min = Math.floor(interval / 1000 / 60)
    let sec = interval / 1000;

    let display = document.createElement('div')
    display.innerHTML = "Entre ajd et dans le futur, il se passera: " + days + " jours " + hours + " heures " + min + " minutes " + sec + " secondes "

    document.body.appendChild(display)
}












