import { state } from "./index.js";
import { resetView } from "./display-utils.js";

const getRandomNum = () => {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max - min) + min);
};

const setTotalStep = () => {
  state.cars.forEach((car) => {
    const randomNum = getRandomNum();
    if (randomNum > 3) {
      car.go();
    }
  });
};

export const playGame = () => {
  const tryNumInput = document.getElementsByTagName("input")[1];
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });

  for (let i = 0; i < tryNumInput.value; i++) {
    setTotalStep();
  }
};

export const getWinner = () => {
  state.cars.sort((a, b) => {
    return b.totalStep - a.totalStep;
  });

  const maxTotalStep = state.cars[0].totalStep;
  const winners = state.cars.filter((car) => {
    if (car.totalStep === maxTotalStep) {
      return car;
    }
  });

  return winners.map((winner) => {
    return winner.name;
  });
};

export const resetGame = () => {
  const carNamesBtn = document.getElementsByTagName("button")[0];
  const tryNumBtn = document.getElementsByTagName("button")[1];
  const resetBtn = document.getElementsByTagName("button")[2];

  resetBtn.addEventListener("click", () => {
    resetView([2, 3, 4]);
    state.cars = [];

    sections[1].querySelector("input").value = "";
    sections[2].querySelector("input").value = "";
    tryNumBtn.disabled = false;
    carNamesBtn.disabled = false;
  });
};