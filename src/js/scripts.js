const button = document.querySelector(".list__container-input__button");
const task = document.querySelector(".list__container-input__task");
const list = document.querySelector(".list__container-tasks__list");

button.addEventListener("click", (e) => {
  const taskValue = `<li>${task.value}</li>`;
  list.innerHTML += taskValue;
});
