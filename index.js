import Car from "./src/js/state/car.js";
import { gameProgressTemplate, tryCountTemplate, gameResultTemplate } from "./src/js/templates/templates.js";
import { $, $$, addLoading, removeSpinner } from "./src/js/utils/dom.js";
import { isCarNameLengthValid, trimSpaceInCarNames } from "./src/js/utils/validation.js";

function CarGame() {
  const cars = [];

  const initEvents = () => {
    carNameEvent();
    tryCountEvent();
  };

  const carNameEvent = () => {
    $("#game-car-name").addEventListener("submit", (e) => {
      e.preventDefault();

      const uniqueCarNamesArray = trimSpaceInCarNames([...new Set(e.target["car-name"].value.split(","))]);

      if (!isCarNameLengthValid(uniqueCarNamesArray)) {
        $("#game-car-name").reset();
        alert("자동차의 이름은 0자 이상 5자 이하이어야 합니다. 다시 입력해 주세요.");
        e.target["car-name"].focus();

        return;
      }

      uniqueCarNamesArray.forEach((carName) => cars.push(new Car(carName)));

      $("#game-try-count").innerHTML = tryCountTemplate;
    });
  };

  const tryCountEvent = () => {
    $("#game-try-count").addEventListener("submit", async (e) => {
      e.preventDefault();

      cars.forEach((car) => {
        $("#game-progress").innerHTML += gameProgressTemplate(car.name);
      });

      const tryCount = Number(e.target["try-count"].value);

      for (let i = 0; i < tryCount; i++) {
        const goCars = await startGame(cars, i);
        await removeSpinner();

        goCars.forEach((car) => {
          const target = [...$$(".car-progress-details")].find((target) => target.dataset.name === car.name);
          car.showArrow(target);
        });
      }

      const counts = cars.map((car) => car.count);
      const maxCount = Math.max(...counts);
      const winners = cars.filter((car) => car.count === maxCount);

      $("#game-result").innerHTML = gameResultTemplate(winners.map((winner) => winner.name));

      resetGame();
    });
  };

  const resetGame = () => {
    $("#reset-game").addEventListener("click", () => {
      $("#game-car-name").reset();
      $("#game-try-count").reset();
      $("#game-car-name").innerHTML = "";
      $("#game-try-count").innerHTML = "";
      $("#game-progress").innerHTML = "";
      $("#game-result").innerHTML = "";
    });
  };

  const startGame = async function (cars, i) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(addLoading(cars, i)), 1000);
    });
  };

  initEvents();
}

new CarGame();
