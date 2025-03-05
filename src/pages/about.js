import '../styles/about.css';
import heroImage from '../../assets/hero-1.jpg';

export default function createAbout() {
    content.innerHTML = `
    <div class="about">
        <h1 class="title">About Us</h1>
        <div class="content">
            <div class="hero">
            <a href="    https://www.freepik.com/free-photo/roasted-steak-tomato-cutting-desk_7303153.htm#fromView=search&page=1&position=6&uuid=e67bc642-e933-4597-9deb-18d79ee9eed7&query=Steakhouse+chef" class="attribution" >
                Photo by KamranAydinov on Freepik.
            </a>
            </div>
            <h2>Only The Best Since 1066</h2>
            <p class="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p class="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            <h2>Authentic Valhalla Cuisine</h2>
            <p class="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        
        <div class="info">
            <ul class="location">
                <li><h2 class="name">Visit Us</h2></li>
                <li class="subheader"><h3>Valhalla Branch</h3></li>
                <li>123 Asgard Street, Valhalla</li>
                <li class="subheader"><h3>Jotunheim Branch</h3></li>
                <li>123 Mj&#xf6;lnir Street, Jotunheim</li>
                <li>All branches open from 12nn to 9pm.</li>
            </ul>
            <ul class="contact">
                <li><h2 class="name">Contact us</h2></li>
                <li><span class="material-symbols-outlined">mail</span>theodinsteakhouse@odinmail.com</li>
                <li><span class="material-symbols-outlined">call</span>(001) 1234567890</li>
                <li>Lines are open 24/7 .</li>
            </ul>
        </div>
    </div>
    `;
}