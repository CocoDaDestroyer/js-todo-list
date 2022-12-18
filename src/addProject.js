export function addProject(arr) {
    let projectBtn = document.querySelector(".project-button")
    let newBtn = document.querySelector("#createNewProject")
    let list = document.querySelector(".projectList")
    projectBtn.addEventListener("click",function() {
        let array = [];
        let projectName = document.querySelector("#Name").value;
        arr.push(array)
        let clickBtn = document.createElement("button");
        document.getElementById("add-project-form").style.display="none";
        clickBtn.classList.add("projectBtn");
        console.log(projectName);
        clickBtn.textContent = projectName;
        list.appendChild(clickBtn);
        projectBtn.style.display = "none";
        newBtn.style.display = "";


        
    })
}