const button = document.querySelector(".list__container-input__button");
const task = document.querySelector(".list__container-input__task");
const list = document.querySelector(".list__container-tasks__list");
const divIcons = document.createElement("div");

button.addEventListener("click", (e) => {
  // const taskValue = `<li class="task">${task.value}</li>`;
  list.innerHTML += `<li class="task"><input class="input-main" value="${task.value}" readonly><div class="div-icons"> <i class="fa-solid fa-pencil icon-modify"></i> <i class="fa-solid fa-trash icon-delete"></i></div> </li>`;
  const btnDelete = document.querySelectorAll(".icon-delete");
  const btnModify = document.querySelectorAll(".icon-modify");

  task.value = "";
  btnDelete.forEach((el) =>
    el.addEventListener("click", (e) => {
      list.removeChild(e.path[2]);
    })
  );
  btnModify.forEach((el) =>
    el.addEventListener("click", (e) => {
      console.log(e.path[2].firstChild.removeAttribute("readonly"));
    })
  );
});
