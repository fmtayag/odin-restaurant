
import createHome from "./pages/home.js";
import createMenu from "./pages/menu.js";
import createAbout from "./pages/about.js";
import './styles/index.css';
import './styles/nav.css';

const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");
// createHome();
createAbout();

btnHome.addEventListener("click", (e) => {
    content.replaceChildren();
    createHome();
});

btnMenu.addEventListener("click", (e) => {
    content.replaceChildren();
    createMenu();
});

btnAbout.addEventListener("click", (e) => {
    content.replaceChildren();
    createAbout();
});