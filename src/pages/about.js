export default function createAbout() {
    const content = document.querySelector("#content");
    const paragraph = document.createElement("p");
    paragraph.textContent = "About!";
    content.appendChild(paragraph);
}