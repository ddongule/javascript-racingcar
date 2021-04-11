function trimSpaceInCarNames(carNames) {
  return carNames.map((carName) => carName.trim());
}

function isCarNameLengthValid(carNames) {
  return carNames.every((carName) => carName.length <= 5 && carName.length > 0);
}

export { trimSpaceInCarNames, isCarNameLengthValid };
