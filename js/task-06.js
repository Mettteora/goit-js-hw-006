const refs = {
  inputEl: document.querySelector(`input`),
};

refs.inputEl.addEventListener(`blur`, checkLength);

function checkLength(event) {
  console.log(refs.inputEl.dataset.length);
  console.log(event.currentTarget.value.length);

  if (refs.inputEl.dataset.length == event.currentTarget.value.length) {
    refs.inputEl.classList.remove(`invalid`);
    refs.inputEl.classList.add(`valid`);
  } else {
    refs.inputEl.classList.remove(`valid`);
    refs.inputEl.classList.add(`invalid`);
  }
}
