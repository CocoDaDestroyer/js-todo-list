export function createLeftPanel() {
    const defaultDiv = document.querySelector(".defaultProjects");
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");
    const homeHeading = document.createElement("h2");
    homeHeading.textContent = "Home";
    const todayBtn = document.createElement("button");
    todayBtn.classList.add("projectBtn");
    todayBtn.textContent = "Today";
    const weekBtn = document.createElement("button");
    weekBtn.classList.add("projectBtn");
    weekBtn.textContent = "This Week";

    homeDiv.appendChild(homeHeading);
    homeDiv.appendChild(todayBtn);
    homeDiv.appendChild(weekBtn);
    defaultDiv.appendChild(homeDiv);
}