const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 23 ${currentYear +1 } 10:10:00`);

function updateCoundown() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

    const secondsLeft = Math.floor(diff / 1000) % 60;

    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;

}

updateCoundown();

setInterval(updateCoundown, 1000);

