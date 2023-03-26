`use strict`;

// this is my first project using html, javascript and css all in one. I am currently working on appending the shuffled array. the random function is 
//working, just need to figure out how to append the new items into the html elements. 

// const plcHolder = document.querySelector("#placheholder");
const btnAdd = document.querySelector(".add-btn");
const btnRan = document.querySelector(".ran-btn");
const btnDeleteAll = document.getElementById("delete");
const namesBtn = document.querySelector(".add-name");
let list = [];
let names = [];
// console.log(list);
console.log(names);
//ADD TODOS FUNCTION///////////

btnAdd.addEventListener(`click`, function () {
  var plcHolder = document.getElementById("placeholder").value;

  if (plcHolder === "") {
    alert(`Please type a todo`);
  } else {
    var getParent = document.querySelector(".ul-list-container");
    var listTodo = document.createElement("li");
    listTodo.textContent = plcHolder;
    // console.log(plcHolder);
    listTodo.className = "text list-todos flexbox-space";
    list.push(plcHolder);
    getParent.appendChild(listTodo);
    console.log(list);
    document.getElementById("placeholder").value = "";
  }
});
////// DELETEALL FUNCTION

const deleteAll = function () {
  var getParent = document.querySelector(".ul-list-container");
  // var listTodo = document.createElement("li");
  if (list.length > 0) {
    list.length = [];
    while (getParent.firstChild) {
      getParent.removeChild(getParent.firstChild);
    }
  }
};
btnDeleteAll.addEventListener(`click`, deleteAll);

/// DELETE Single //

const addNameBtn = function () {
  var namePlcHolder = document.querySelector(`.name-placeholder`).value;

  if (namePlcHolder === "") {
    console.log(alert(`Please type a name`));
  } else {
    const getUlNames = document.querySelector(`.names`);
    const createDiv = document.createElement("div");
    createDiv.className = "name-container";
    const createLiName = document.createElement(`li`);
    createLiName.className = "text list-todos";
    document.getElementById(`name-holder`).value = "";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 490 500");
    svg.setAttribute("class", "bin");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
    );
    svg.appendChild(path);

    // createElem.src =
    const createDelete = document.createElement(`button`);
    // createDelete.innerHTML = "a";
    createDelete.id = "bin-btn";
    getUlNames.appendChild(createDiv);
    createDiv.appendChild(createDelete);
    createDelete.appendChild(svg);
    createLiName.textContent = namePlcHolder;
    names.push(namePlcHolder);
    var childre = getUlNames.appendChild(createLiName);
    // console.log(createLiName, names); // turn this one to see the whole line created with text content
    createDiv.appendChild(childre);

    // var getBin = document.getElementsByClassName("bin-btn");

    createDelete.addEventListener("click", function () {
      createDiv.remove();
      // const index = names.indexOf(names);
    });
  }
};

const random = function () {
  const nameHolder = document.getElementById("name-holder");
  const getDiv = document.querySelector(".name-container");
  const listname = document.getElementById("names-list");
  var temp;

  for (var i = names.length; i > 0; i--) {
    var randomNumber = Math.floor(Math.random() * (i + 1));
    if (names[randomNumber] !== undefined) {
      temp = names[randomNumber];
      names[randomNumber] = names[i - 1];
      names[i - 1] = temp;
      listname.value = names[i];
    }
  }
  console.log(names);
  return names;
};
btnRan.addEventListener("click", random);
// var result = names.random();
namesBtn.addEventListener("click", addNameBtn);

// if (names.length <= 1) {
//   alert("There arent enough names to randomize");
// }

//delete all
// if (names.length > 0) {
//   names.length = [];
//   while (listname.firstChild) {
//     listname.removeChild(listname.firstChild);
//   }
// }
