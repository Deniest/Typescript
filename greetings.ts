import { DayPhase } from "./interfaces/day-phase-interface";

const date = new Date();
let getCurrentHour: number = Number(date.getHours().toLocaleString());

let printScreen: HTMLSpanElement = document.getElementById(
  "sayHello"
)! as HTMLSpanElement;

const dayTime: DayPhase = { start: 6, finish: 10 };
const evening: DayPhase = { start: 11, finish: 16 };
const night: DayPhase = { start: 17, finish: 23 };

if (getCurrentHour >= dayTime.start && getCurrentHour <= dayTime.finish) {
  printScreen.textContent = "Günaydın 😊";
} else if (
  getCurrentHour >= evening.start &&
  getCurrentHour <= evening.finish
) {
  printScreen.textContent = "Tünaydın 👽";
} else if (getCurrentHour >= night.start && getCurrentHour <= night.finish) {
  printScreen.textContent = "İyi geceler (❁´◡`❁)";
}
