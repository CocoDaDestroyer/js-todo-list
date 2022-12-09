import { blankProjectLoad } from "./blank-project-load";

export function initialDomManip() {
    const contentDiv = document.querySelector(".content");
    const heading = document.createElement("h1");
    heading.textContent = "Todo List";
    contentDiv.append(heading);
    
    const projectListDiv = document.createElement("div");
    projectListDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectListDiv);
}