
import createHome from "./pages/home.js";
import createMenu from "./pages/menu.js";
import createAbout from "./pages/about.js";
import './styles/index.css';
import './styles/nav.css';

const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");
let currentPage = "home";
createHome();
setButtonAsActive("home");

function setButtonAsActive(item) {
    home.classList.remove("active");
    menu.classList.remove("active");
    about.classList.remove("active");

    switch(item) {
        case "home":
            home.classList.add("active");
            break;
        case "menu":
            menu.classList.add("active");
            break;
        case "about":
            about.classList.add("active");
            break;
    }
}

btnHome.addEventListener("click", (e) => {
    if(currentPage != "home") {
        content.replaceChildren();
        createHome();
        currentPage = "home";
        setButtonAsActive("home");
    }
});

btnMenu.addEventListener("click", (e) => {
    if(currentPage != "menu") {
        content.replaceChildren();
        createMenu();
        currentPage = "menu";
        setButtonAsActive("menu");
    }
});

btnAbout.addEventListener("click", (e) => {
    if(currentPage != "about") {
        content.replaceChildren();
        createAbout();
        currentPage = "about";
        setButtonAsActive("about");
    }
});