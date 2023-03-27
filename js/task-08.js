const formLog = document.querySelector(".login-form");
const btnSub = document.querySelector(`button`);
console.log(formLog.email);

const emailInput = formLog.name;
const password = formLog.password;
formLog.addEventListener(`submit`, submitFunc);

function submitFunc(event) {
  event.preventDefault();
  console.log(`Нажали на кнопку, форма отправилась`);
  console.dir(`Введенный Email: ${event.currentTarget.elements.email.value}`);
  console.dir(
    `Введенный password: ${event.currentTarget.elements.password.value}`
  );
  if (event.currentTarget.elements.password.value === ``) {
    event.preventDefault();
    alert(`Введите пожалуйста пароль`);
  }
  if (event.currentTarget.elements.email.value === ``) {
    event.preventDefault();
    alert(`Введите пожалуйста Почту`);
  }

  // сбросить значения полей формы
  event.currentTarget.reset();
}
