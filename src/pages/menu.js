export default function createMenu() {
    const content = document.querySelector("#content");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Menu!";
    content.appendChild(paragraph);
}