const refs = {
  input: document.querySelector(`#name-input`),
  spanEl: document.querySelector(`#name-output`),
};

refs.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  console.log((refs.spanEl.textContent = event.currentTarget.value));
}
