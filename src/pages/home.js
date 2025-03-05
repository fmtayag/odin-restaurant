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
            <p class="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eius! Dignissimos aut exercitationem quibusdam praesentium laboriosam aperiam ducimus corporis illum similique officia, earum esse consequuntur sint ipsum voluptatum, debitis ea.</p>
            <button type="button" class="primary">See Our Menu</button>
        </div>
             
    </div>
    `;
};
