// const button = document.querySelector(".list__container-input__button");
// const task = document.querySelector(".list__container-input__task");
// const list = document.querySelector(".list__container-tasks__list");
// const divIcons = document.createElement("div");

// button.addEventListener("click", (e) => {
//   const buttonModify = `<i class="fa-solid fa-pencil icon-modify"></i>`;
//   list.innerHTML += `<li class="task"><input class="input-main" value="${task.value}" readonly><div class="div-icons"> ${buttonModify} <i class="fa-solid fa-trash icon-delete"></i></div> </li>`;
//   const btnDelete = document.querySelectorAll(".icon-delete");
//   const btnModify = document.querySelectorAll(".icon-modify");
//   task.value = "";

//   btnDelete.forEach((el) =>
//     el.addEventListener("click", (e) => {
//       list.removeChild(e.path[2]);
//     })
//   );

//   btnModify.forEach((el) =>
//     el.addEventListener("click", (e) => {
//       e.path[2].firstChild.removeAttribute("readonly");
//       // e.path[3].removeChild(e);
//       // e.target.innerHTML = " ";
//       // divIcons.removeChild(btnModify);
//       e.target.innerHTML = "JAJA";
//       console.log(e.target.innerHTML);
//     })
//   );
// });

window.addEventListener("load", () => {
  const btnSubmit = document.querySelector(".task-form__submit");
  const input = document.querySelector(".task-form__input");
  const listContent = document.querySelector(".content");

  btnSubmit.addEventListener("click", (e) => {
    const task = input.value;
    if (!task) {
      alert("Please fill out the task");
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task-list__tasks");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("task-list__container-input");
    taskContentElement.innerText = task;

    taskElement.appendChild(taskContentElement);
    const taskInput = document.createElement("input");
    taskInput.classList.add("task-list__input");
    listContent.appendChild(taskElement);
  });
});
