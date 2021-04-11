const tryCountTemplate = `
  <p>시도할 횟수를 입력해주세요.</p>
  <div class="d-flex">
    <input type="number" name="try-count" class="w-100 mr-2" placeholder="시도 횟수" min="1" />
    <button class="btn btn-cyan">확인</button>
  </div>
`;

const progressTemplate = `<div class="forward-icon mt-2">⬇️️</div>`;

const spinnerTemplate = (index) => {
  return `
    <div class="js-spinner d-flex justify-center mt-4" data-id="${index}">
      <div class="relative spinner-container">
        <span class="material spinner"></span>
      </div>
    </div>
  `;
};

const gameProgressTemplate = (name) => {
  return `
    <div>
      <div class="car-player mr-2">${name}</div>
      <div class="car-progress-details" data-name="${name}"></div>
    </div>
  `;
};

const gameResultTemplate = (winners) => {
  return `
    <h2>🏆 최종 우승자: ${winners.join(", ")} 🏆</h2>
    <div class="d-flex justify-center">
      <button id="reset-game" type="button" class="btn btn-cyan">다시 시작하기</button>
    </div>
  `;
};

export { tryCountTemplate, gameProgressTemplate, progressTemplate, gameResultTemplate, spinnerTemplate };
