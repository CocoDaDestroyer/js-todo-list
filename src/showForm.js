export function showForm(){
    const button = document.querySelector("#createNewToDo");
    button.addEventListener("click",function(){
        document.getElementById("add-todo-form").style.display="";
        document.getElementById("createNewToDo").style.display="none";
    })
    const projectBtn = document.querySelector("#createNewProject");
    projectBtn.addEventListener("click",function(){
        document.getElementById("add-project-form").style.display="";
        document.getElementById("createNewProject").style.display="none";
    })
}