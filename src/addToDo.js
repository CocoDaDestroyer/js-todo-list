import { Task } from "./toDoClass";

export function addTodoToLibrary(array) {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;
    if((Title == "")||(Description == "")||(Priority == "")||(DueDate == "")){
        return;
    }
    document.getElementById("todo-form").reset();

    let toDo = new Task(Title,Description,DueDate,Priority);
    document.getElementById("add-todo-form").style.display="none";
    document.getElementById("createNewToDo").style.display="";
    array.push(toDo);

}


  
    

  
