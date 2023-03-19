const refs = {
  inputEl: document.querySelector(`#font-size-control`),
  spanTextEl: document.querySelector(`#text`),
};

console.log(refs.inputEl.min);

refs.inputEl.addEventListener(`input`, changeSize);

function changeSize(event) {
  if (refs.inputEl.min == 16) {
    refs.spanTextEl.style.fontSize = `12px`;
  } else if (refs.inputEl.max == 92) {
    refs.spanTextEl.style.fontSize = `96px`;
  }
}

console.log(refs.spanTextEl.changeSize);
