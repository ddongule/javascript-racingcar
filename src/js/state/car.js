import { progressTemplate, spinnerTemplate } from "../templates/templates.js";

function Car(name) {
  this.name = name;
  this.count = 0;
}

Car.prototype.go = function () {
  this.count += 1;
};

Car.prototype.showArrow = function (target) {
  target.innerHTML += progressTemplate;
};

Car.prototype.showSpinning = function (target, index) {
  target.innerHTML += spinnerTemplate(index);
};

Car.prototype.removeSpinning = function (target) {
  return new Promise((resolve) => {
    setTimeout(() => resolve((target.style.display = "none")), 1000);
  });
};

export default Car;
