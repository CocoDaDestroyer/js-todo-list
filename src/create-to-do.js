let toDoArray = []
export function createToDoList(title,description,dueDate,priority){
    toDoArray.push({title,description,dueDate,priority})
    return {title,description,dueDate,priority}
}