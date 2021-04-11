import { maxNumber, minNumber } from "../constants/constants.js";
import { randomNumber } from "./utils.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function addLoading(cars, i) {
  const goCars = [];

  for (const car of cars) {
    const random = randomNumber(minNumber, maxNumber);
    if (random > 4) {
      car.go();
      const target = [...$$(".car-progress-details")].find((target) => target.dataset.name === car.name);
      car.showSpinning(target, i);
      goCars.push(car);
    }
  }

  return goCars;
}

async function removeSpinner() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...$$(".js-spinner")].forEach((spinner) => (spinner.style.display = "none"))), 1000);
  });
}

export { $, $$, addLoading, removeSpinner };
