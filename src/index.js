import "./style.css"
import { createLeftPanel } from "./createLeftPanel";
import { showForm } from "./showForm";
import { addTodoToLibrary } from "./addToDo";
import { displayTasksOnPage } from "./addCard";
import { addProject } from "./addProject";
createLeftPanel();
showForm();
addTodoToLibrary();

let projectList = [];
let today = [];
let thisWeek = [];
projectList.push(today,thisWeek)

addProject(projectList);
let currentProject = 0;



let btns = document.querySelectorAll(".projectBtn");
let rHeader = document.querySelector(".toDoHeader");
let projectButton = document.querySelector(".project-button");
projectButton.addEventListener("click",function(){
    btns = document.querySelectorAll(".projectBtn");
    for (let i =0;i<btns.length;i++){
        btns[i].addEventListener("click",function() {
            currentProject = i;
            displayTasksOnPage(projectList[currentProject]);
            rHeader.textContent = btns[i].textContent;
        })
    }
})
for (let i =0;i<btns.length;i++){
    btns[i].addEventListener("click",function() {
        currentProject = i;
        console.log(btns.length);
        displayTasksOnPage(projectList[currentProject]);
        console.log(projectList.length);
        rHeader.textContent = btns[i].textContent;
    })
}
const submit = document.querySelector(".submit-button")
submit.addEventListener("click",function() {
    addTodoToLibrary(projectList[currentProject]);
    console.log(projectList[0][0])
    displayTasksOnPage(projectList[currentProject]);
})
