window.addEventListener('load', () => {
    let hour = document.querySelector("#hour");
    let minute = document.querySelector("#minute");
    let second = document.querySelector("#second");
    // let currenthour = time.getHours();
    let beneth = document.querySelector('.beneth');
    for (let index = 0; index < 60; index++) {
        const element = document.createElement('div');
        element.style.transform = `rotate(${index * 6}deg)`;
        beneth.appendChild(element);
    }

    setInterval(() => {
        let time = new Date();
        let second_time = time.getSeconds();
        let minute_time = time.getMinutes();
        let hour_time = time.getHours() % 12;
        second.style.transform = `rotate(${second_time * 6 - 90}deg)`;
        minute.style.transform = `rotate(${minute_time * 6 - 90 + 6 * second_time / 60}deg)`;
        hour.style.transform = `rotate(${hour_time * 30 - 90 + 0.5 * minute_time }deg)`;
        console.log(minute_time)
    }, 1000);
});