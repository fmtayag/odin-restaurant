
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

btnHome.addEventListener("click", (e) => {
    if(currentPage != "home") {
        content.replaceChildren();
        createHome();
        currentPage = "home";
    }
});

btnMenu.addEventListener("click", (e) => {
    if(currentPage != "menu") {
        content.replaceChildren();
        createMenu();
        currentPage = "menu";
    }
});

btnAbout.addEventListener("click", (e) => {
    if(currentPage != "about") {
        content.replaceChildren();
        createAbout();
        currentPage = "about";
    }
});