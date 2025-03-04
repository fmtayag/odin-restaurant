import '../styles/home.css';
import backgroundImage from '../../assets/overlay.png';

export default function createHome() {
    content.innerHTML = `
    <div class="home">
        <div>
            <h1 class="title">The Odin Steakhouse</h1>
            <p class="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eius! Dignissimos aut exercitationem quibusdam praesentium laboriosam aperiam ducimus corporis illum similique officia, earum esse consequuntur sint ipsum voluptatum, debitis ea.</p>
            <button type="button" class="primary">See Our Menu</button>
        </div>

    </div>
    `;
};
