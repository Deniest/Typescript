"use strict";
const date = new Date();
let hour = date.getHours().toLocaleString();
let printScreen = document.getElementById('sayHello');
let afternoonStart, afternoonFinish, morningStart, morningFinish, eveningStart, eveningFinish;
morningStart = "6";
morningFinish = "10";
afternoonStart = "11";
afternoonFinish = "16";
eveningStart = "17";
eveningFinish = "23";
if (Number(hour) >= Number(morningStart) && Number(hour) <= Number(morningFinish)) {
    printScreen.textContent = "Günaydın 👻";
}
if (Number(hour) >= Number(afternoonStart) && Number(hour) <= Number(afternoonFinish)) {
    printScreen.textContent = "Tünaydın 👽";
}
if (Number(hour) >= Number(eveningStart) && Number(hour) <= Number(eveningFinish)) {
    printScreen.textContent = "İyi Akşamlar 🤖";
}
