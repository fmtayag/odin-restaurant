export default function createHome() {
    const content = document.querySelector("#content");
    const paragraph = document.createElement("p");

    paragraph.textContent = "Home!";
    content.appendChild(paragraph);
};
