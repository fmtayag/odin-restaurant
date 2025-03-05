import '../styles/home.css';

export default function createHome() {
    content.innerHTML = `
    <div class="home">
        <div>
            <a href="https://www.pexels.com/photo/white-ceramic-mug-with-coffee-beside-brown-dried-leaf-10749578/" class="attribution" >
                Photo by hasan kurt on Pexels.
            </a>
        </div>   
        <div>
            <h1 class="title">The Odin Steakhouse</h1>
            <p class="secondary">Dine and wine like a Norse god straight out of Valhalla. We offer only the finest steaks - hand cut, and cooked to perfection fit for Odin himself. Afterwards, indulge yourself in the best red wine that Valhalla has to offer. That is the Odin promise.</p>
            <button type="button" class="primary">See Our Menu</button>
        </div>
             
    </div>
    `;
};
