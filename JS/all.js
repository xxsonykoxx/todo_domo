const todo_input = document.querySelector(".todo_input");
const send = document.querySelector("#addBTN");
const todoarrLength = document.querySelector(".length");
let todos = []; // todo list 陣列

//★＝＝＝＝　監聽　＝＝＝＝★
send.addEventListener("click", addTodos);

function addTodos() {
  //★＝＝＝＝　新增的每一筆todo　＝＝＝＝★
  let todo = {
    name: "",
    id: "",
  };
  //★＝＝＝＝　防呆　＝＝＝＝★
  if (todo_input.value == "") {
    alert("請輸入資料");
  } else {
    todo.name = todo_input.value;
    todos.push(todo); // 將物件丟入todos 陣列
    todo_input.value = ""; // 輸入完清空
  }
  render(); // 呼叫渲染函式
}

//★＝＝＝＝　渲染　＝＝＝＝★
const todoList = document.querySelector(".todolist");
function render() {
  let str = "";
  todos.forEach((i, index) => {
    str += `<li class="todo">
    <div class="text_group">
      <p class="id">${index + 1}.</p>
      <p class="text">${i.name}</p>
    </div>
    <i class="fas fa-trash" id='single_del' data-set='${index}'></i>
  </li>`;
  });
  todoList.innerHTML = str;

  //★＝＝＝＝　共 ... 筆　＝＝＝＝★
  todoarrLength.textContent = `${todos.length} `;
}

const deleteAll = document.querySelector(".del");
deleteAll.addEventListener("click", deleteArr);

function deleteArr() {
  todos = [];
  render();
}

todoList.addEventListener("click", deleteSingle);
function deleteSingle(e) {
  if (e.target.nodeName !== "I") {
    return;
  } else {
    let getIndex = e.target.dataset.set;
    // console.log(getIndex);
    todos.splice(getIndex, 1);
  }
  render();
}
