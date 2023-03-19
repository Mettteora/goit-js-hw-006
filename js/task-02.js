const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const inputEl = array.forEach((element) => {});

const UlEl = document.querySelector(`#ingredients`);
console.log(UlEl);
for (const ingredient of ingredients) {
  const createNewLiEl = document.createElement(`li`);
  createNewLiEl.textContent = ingredient;
  console.log(createNewLiEl);
  UlEl.appendChild(createNewLiEl);
}
console.log(UlEl);
