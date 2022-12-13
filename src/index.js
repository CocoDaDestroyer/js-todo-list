import "./style.css"
import { createLeftPanel } from "./createLeftPanel";
import { showForm } from "./showForm";
import { addTodoToLibrary } from "./addToDo";
import { displayTasksOnPage } from "./addCard";
createLeftPanel();
showForm();
addTodoToLibrary();
let projectList = [];
let today = [];
let thisWeek = [];
projectList.push(today,thisWeek)
let currentProject = 0;
let btns = document.querySelectorAll(".projectBtn");
let rHeader = document.querySelector(".rightHeader")
for (let i =0;i<btns.length;i++){
    btns[i].addEventListener("click",function() {
        currentProject = i;
        displayTasksOnPage(projectList[currentProject]);
        rHeader.textContent = btns[i].textContent;
    })
}
const submit = document.querySelector(".submit-button")
submit.addEventListener("click",function() {
    addTodoToLibrary(projectList[currentProject]);
    displayTasksOnPage(projectList[currentProject]);
})
