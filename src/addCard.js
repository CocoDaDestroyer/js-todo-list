export function displayTasksOnPage(category) {
    const tasks = document.querySelector(".taskList");
    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0;i<removeDivs.length;i++) {
      removeDivs[i].remove();
    }
  
    let index = 0;
    category.forEach(categorys => {
        const card = document.createElement("div");
        card.classList.add("card");
        tasks.appendChild(card);
  
        const check = document.createElement("button");
        check.classList.add("check-button");

  
        check.dataset.linkedArray = index;
        card.appendChild(check);
  
        check.addEventListener("click",removeTask);
        function removeTask() {
          let taskNumber = check.dataset.linkedArray;
          category.splice(parseInt(taskNumber),1);
          card.remove();
          displayTasksOnPage(category);
        }
  
        
  
        for (let key in categorys) {
          console.log(`${key}: ${categorys[key]}`);
          const para = document.createElement("p");
          para.textContent = (`${key}: ${categorys[key]}`);
          card.appendChild(para);
        }
      index++
      })
  }