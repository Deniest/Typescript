const date = new Date();
let getCurrentHour = Number(date.getHours().toLocaleString());
let printScreen = document.getElementById("sayHello");
const dayTime = { start: 6, finish: 10 };
const evening = { start: 11, finish: 16 };
const night = { start: 17, finish: 23 };
if (getCurrentHour >= dayTime.start && getCurrentHour <= dayTime.finish) {
    printScreen.textContent = "Günaydın 😊";
}
else if (getCurrentHour >= evening.start &&
    getCurrentHour <= evening.finish) {
    printScreen.textContent = "Tünaydın 👽";
}
else if (getCurrentHour >= night.start && getCurrentHour <= night.finish) {
    printScreen.textContent = "İyi geceler (❁´◡`❁)";
}
export {};
