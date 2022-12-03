window.addEventListener("load", () => {
  const btnSubmit = document.querySelector(".task-form__submit");
  const input = document.querySelector(".task-form__input");
  const listContent = document.querySelector(".content");

  function addClass(element, style) {
    element.classList.add(style);
  }

  btnSubmit.addEventListener("click", (e) => {
    const task = input.value;
    if (!task) {
      alert("Please fill out the task");
      return;
    }

    const taskElement = document.createElement("div");
    addClass(taskElement, "task-list__tasks");

    const taskContentElement = document.createElement("div");
    addClass(taskContentElement, "task-list__container-input");

    taskElement.appendChild(taskContentElement);

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = task;
    addClass(taskInput, "task-list__input");
    taskInput.setAttribute("readonly", "readonly");

    taskContentElement.appendChild(taskInput);

    const actionsTasksBtns = document.createElement("div");
    addClass(actionsTasksBtns, "task-list__actions");

    const taskBtnModify = document.createElement("button");
    taskBtnModify.innerHTML = `<i class="fa-solid fa-pencil icon-modify icon"></i>`;

    const taskBtnDelete = document.createElement("button");
    taskBtnDelete.innerHTML = `<i class="fa-solid fa-trash icon-delete icon"></i>`;

    actionsTasksBtns.appendChild(taskBtnModify);
    actionsTasksBtns.appendChild(taskBtnDelete);

    taskContentElement.appendChild(actionsTasksBtns);
    listContent.appendChild(taskElement);

    input.value = "";

    taskBtnModify.addEventListener("click", () => {
      taskInput.hasAttribute("readonly")
        ? ((taskBtnModify.innerHTML = `<i class="fa-solid fa-check icon icon-save"></i>`),
          taskInput.removeAttribute("readonly"),
          taskInput.focus())
        : ((taskBtnModify.innerHTML = `<i class="fa-solid fa-pencil icon-modify icon"></i>`),
          taskInput.setAttribute("readonly", "readonly"));
    });

    taskBtnDelete.addEventListener("click", () => {
      listContent.removeChild(taskElement);
    });
  });
});
