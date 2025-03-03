
import createHome from "./home";

const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");

btnHome.addEventListener("click", (e) => {
    
    // Clear
    content.replaceChildren();

    // Append
    createHome();
});

btnMenu.addEventListener("click", (e) => {
    const content = document.querySelector("#content");
    const paragraph = document.createElement("p");
    // Clear
    content.replaceChildren();

    // Append
    paragraph.textContent = "Menu!";
    content.appendChild(paragraph);
});

btnAbout.addEventListener("click", (e) => {
    const content = document.querySelector("#content");
    const paragraph = document.createElement("p");
    // Clear
    content.replaceChildren();

    // Append
    paragraph.textContent = "About!";
    content.appendChild(paragraph);
});