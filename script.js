window.addEventListener('load', () => {
    let hour = document.querySelector("#hour");
    let minute = document.querySelector("#minute");
    let second = document.querySelector("#second");
    // let currenthour = time.getHours();
    let beneth = document.querySelector('.beneth');
    for (let index = 0; index < 30; index++) {
        const element = document.createElement('div');
        element.style.transform = `rotate(${index * 6}deg)`;
        beneth.appendChild(element);
    }

    let remove_alarm = [];
    let settime_hour = [];
    let settime_minute = [];
    let alarmadd = document.getElementById("ring");
    let val = 0;
    alarmadd.addEventListener("click", () => {
        let alarmlist = document.getElementById("alarmlist");
        let makesound = document.createElement("div");
        let alarm_hour = prompt("Enter Hours:");
        let alarm_minute = prompt("Enter Minute");
        settime_hour[val] = alarm_hour;
        settime_minute[val] = alarm_minute;
        val++;
        let alarm_time = document.createTextNode(alarm_hour + " : " + alarm_minute);
        makesound.appendChild(alarm_time);
        let button = document.createElement("button");
        button.innerText = "Delete alarm";
        makesound.appendChild(button);
        alarmlist.appendChild(makesound);
        remove_alarm = document.querySelectorAll("#alarmlist div");
        for (let index = 0; index < remove_alarm.length; index++) {
            remove_alarm[index].addEventListener("click", () => {
                document.getElementById("alarmlist").removeChild(remove_alarm[index]);
                settime_hour[index]=25;
                settime_minute[index]=61;
            });
        }
    });
    let tone = new Audio("alarm_tone.mp3");
    function play_music() {
        tone.play();
        setTimeout(() => {
            tone.pause();
        }, 10000);
    }
    setInterval(() => {
        let time = new Date();
        let second_time = time.getSeconds();
        let minute_time = time.getMinutes();
        let hour_time = time.getHours() % 12;
        second.style.transform = `rotate(${second_time * 6 - 90}deg)`;
        minute.style.transform = `rotate(${minute_time * 6 - 90 + 6 * second_time / 60}deg)`;
        hour.style.transform = `rotate(${hour_time * 30 - 90 + 0.5 * minute_time}deg)`;
        for (let index = 0; index < settime_hour.length; index++) {
            if (settime_hour[index] == hour_time && settime_minute[index] == minute_time && second_time == 0) {
                play_music();
            }
        }
    }, 1000);
});