import '../styles/about.css';

export default function createAbout() {
    content.innerHTML = `
    <div class="about">
        <h1 class="title">About Us</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        
        <div class="contact">
            <ul class="location">
                <li><h2 class="header name">Visit Us</h2></li>
                <li class="subheader"><h3>Valhalla Branch</h3></li>
                <li>123 Asgard Street, Valhalla</li>
                <li class="subheader"><h3>Jotunheim Branch</h3></li>
                <li>123 Mj&#xf6;lnir Street, Jotunheim</li>
                <li>All branches open from 12nn to 9pm.</li>
            </ul>
            <ul class="details">
                <li><h2 class="header name">Contact us</h2></li>
                <li>theodinsteakhouse@odinmail.com</li>
                <li>(001) 1234567890</li>
            </ul>
        </div>
    </div>
    `;
}