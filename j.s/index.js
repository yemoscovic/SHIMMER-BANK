let days = 29; //starting number of days
let hours = 14; // starting number of hours
let minutes = 9; // starting number of minutes
let seconds = 0; // starting number of seconds

// converts all to seconds
let totalSeconds =
  days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
    if (value > inSeconds) {
        let x = value % inSeconds;
        tempSeconds = x;
        return (value - x) / inSeconds;
    } else {
        return 0;
    }
};

// Set seconds
const setSeconds = (s) => {
    document.querySelector("#seconds").textContent = s;
};

//sets minutes
const setMinutes = (m) => {
    document.querySelector("#minutes").textContent = m;
};

//sets hours
const setHours = (h) => {
    document.querySelector("#hours").textContent = h;
};

//sets Days
const setDays = (d) => {
    document.querySelector("#days").textContent = d;
};

// Update the count-down every 1 second
const x = setInterval(() => {
    //clears countdown when all seconds are counted
    if (totalSeconds <= 0) {
        clearInterval(x);
    }
    setDays(convert(tempSeconds, 24 * 60 * 60));
    setHours(convert(tempSeconds, 60 * 60));
    setMinutes(convert(tempSeconds, 60));
    setSeconds(tempSeconds === 60 ? 59 : tempSeconds);
    totalSeconds--;
    tempSeconds = totalSeconds;
}, 1000);


const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#mobile-menu-icon');
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
