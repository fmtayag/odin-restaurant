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
            <h2>The Best Since 1066</h2>
            <p class="secondary">Established in 1066, the Odin Steakhouse has had a long history of serving Kings, Queens, warriors, and wanderers alike. Ever since our forefathers arrived in the shores of Albion, the Odin Steakhouse has been a bastion for quality, and has served its patrons faithfully and unceasingly as the best steakhouse in all of Midgard. Through war and peace, our hearth has never grown cold, and our mead has never ceased flowing.</p>
            <h2>Authentic Valhalla Cuisine</h2>
            <p class="secondary">Experience <em>the best</em> steakhouse in all of Midgard. Our ingredients are carefully vetted and curated, ensuring that only the finest will make it onto your table. Trained by Andhrímnir himself, our chefs are second to none, and will relentlessly guarantee that the food on your plate will be fit for a Norse god. That, is the Odin promise.</p>
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