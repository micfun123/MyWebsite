// DOM Elements


const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;
// Button Event handels

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
}

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
}

solarButton.onclick = () => {

}