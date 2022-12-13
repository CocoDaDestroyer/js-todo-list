export function showForm(){
    const button = document.querySelector("#createNewToDo");
    button.addEventListener("click",function(){
        document.getElementById("add-todo-form").style.display="";
        document.getElementById("createNewToDo").style.display="none";
        console.log("test");
    })
}