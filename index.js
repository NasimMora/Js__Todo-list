// --- 1. first define elements which necessary for logic and functionality ---

const addButton = document.getElementById("add-button");
const inputName = document.getElementById("input-name");
const inputDesc = document.getElementById("input-desc");
const content = document.querySelector(".to-do__content");

const headerBtns = document.querySelectorAll(".header__item");
const allTasks = document.getElementById("all-tasks");
const todoTasks = document.getElementById("todo-tasks");
const completedTasks = document.getElementById("completed-tasks");

// --- 2. create function clickHandler to add items to the list  ---

const clickHandler = () => {
  // const todoItem = `
  // 	<div class="to-do__item item-to-do">
  // 		<div class="item-to-do__number">#1</div>
  // 		<div class="item-to-do__name">${inputName.value}</div>
  // 		<div class="item-to-do__desc">${inputDesc.value}</div>
  // 		<div class="item-to-do__actions">
  // 			<button class="item-to-do__btn complete">
  // 				<img src="img/btn-complete.png" alt="" />
  //				<img src="img/btn-update.png"/>
  // 			</button>
  // 			<button class="item-to-do__btn delete">
  // 				<img src="img/btn-delete.png" alt="" />
  // 			</button>
  // 		</div>
  // </div>
  // `;
  // content.insertAdjacentHTML("beforeend", todoItem);

  // 3. --- create function with condition to add text for input ---

  if (!inputName.value && !inputDesc.value) {
    inputDesc.classList.add("error");
    inputName.classList.add("error");
  } else if (!inputName.value) {
    inputDesc.classList.remove("error");
    inputName.classList.add("error");
  } else if (!inputDesc.value) {
    inputName.classList.remove("error");
    inputDesc.classList.add("error");
  } else if (inputName.value && inputDesc.value) {
    const todoItem = document.createElement("div");
    todoItem.setAttribute("class", "to-do__item item-to-do");

    // 4. --- create elements for js and html ---

    const todoNumber = document.createElement("div");
    todoNumber.setAttribute("class", "item-to-do__number");

    const todoName = document.createElement("div");
    todoName.setAttribute("class", "item-to-do__name");

    // 5. --- add innerHtml to inputs ---

    todoName.innerHTML = inputName.value;
    inputName.value = "";

    const todoDesc = document.createElement("div");
    todoDesc.setAttribute("class", "item-to-do__desc");
    todoDesc.innerHTML = inputDesc.value;
    inputDesc.value = "";

    const todoActions = document.createElement("div");
    todoActions.setAttribute("class", "item-to-do__actions");

    const completeBtn = document.createElement("button");
    completeBtn.setAttribute("class", "item-to-do__btn complete");

    const imgComplete = document.createElement("img");
    imgComplete.setAttribute("src", "img/btn-complete.png");

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "item-to-do__btn delete");

    const imgDelete = document.createElement("img");
    imgDelete.setAttribute("src", "img/btn-delete.png");

    // 6. --- append img to btn ---

    completeBtn.append(imgComplete);
    deleteBtn.append(imgDelete);

    // 7. --- append btn to actions ---

    todoActions.append(completeBtn, deleteBtn);

    // 8. --- append elements to item ---

    todoItem.append(todoNumber, todoName, todoDesc, todoActions);

    // 9. --- append elements to main block(content) ---

    content.append(todoItem);

    // 10. --- add remove function addEventListener ---

    const removeTodoItem = () => todoItem.remove();
    deleteBtn.addEventListener("click", removeTodoItem);

    const updateTodoItem = () => {
      if (completeBtn.classList.contains("complete")) {
        imgComplete.src = "img/btn-update.png";
        todoItem.classList.add("completed");
        completeBtn.classList.add("update");
        completeBtn.classList.remove("complete");
      } else {
        imgComplete.src = "img/btn-complete.png";
        todoItem.classList.remove("completed");
        completeBtn.classList.add("complete");
        completeBtn.classList.remove("update");
      }
    };

    completeBtn.addEventListener("click", updateTodoItem);

    inputDesc.classList.remove("error");
    inputName.classList.remove("error");
  }
};

// 11. --- add addEventListener to btn ---

addButton.addEventListener("click", clickHandler);

allTasks.addEventListener("click", () => {
  content.classList.remove("todo");
  content.classList.remove("completed");
  /*
  allTasks.classList.add("active");
  todoTasks.classList.remove("active");
  completedTasks.classList.remove("active");
	*/
});

todoTasks.addEventListener("click", () => {
  content.classList.add("todo");
  content.classList.remove("completed");
  /*
  todoTasks.classList.add("active");
  allTasks.classList.remove("active");
  completedTasks.classList.remove("active");
		*/
});

completedTasks.addEventListener("click", () => {
  content.classList.add("completed");
  content.classList.remove("todo");
  /*
  completedTasks.classList.add("active");
  allTasks.classList.remove("active");
  todoTasks.classList.remove("active");
	*/
});

for (const btn of headerBtns) {
  btn.addEventListener("click", () => {
    for (const btn of headerBtns) {
      btn.classList.remove("active");
    }
    btn.classList.add("active");
  });
}
//New tasks
// On click done
// block add classs complete
// .block.complete border
// hide tick icon and show restor icon

// New tasks
// 1. New items will  be show in top
// 2. Filtering, All tasks -> will show all, To do -> only wthout border, completed -> with green border

// let data = [
//   {
//     id: 0,
//     name: "taskname",
//     desc: "taskdesc",
//     completed: false,
//   },
//   {
//     id: 1,
//     name: "taskname",
//     desc: "taskdesc",
//     completed: true,
//   },
//   {
//     id: 2,
//     name: "taskname",
//     desc: "taskdesc",
//     completed: true,
//   },
// ];

// let i = 0;

// console.log(data);
// console.log(data.filter((el) => el.completed));

// console.log([1, 1, 2, 2, 1, 1].filter((el) => el === 1));
