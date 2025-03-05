import '../styles/menu.css';

export default function createMenu() {
    const LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
    content.innerHTML = `
<div class="menu">
            <h1 class="title">Our Menu</h1>
            <div>
                <h2 class="category">Main Dishes</h2>
                <ul class="food-list">
                    <li class="food-item">
                        <div class="name">Odin's Ire</div>
                        <div class="price">$60</div>
                        <div class="description">Pan-seared T-bone steak, basted with garlic and our trade-secret compound butter.</div>
                    </li>
                    <li class="food-item">
                        <div class="name">Thor's Hammer</div>
                        <div class="price">$30</div>
                        <div class="description">Prime tomahawk steak, basted with garlic butter, and served with mashed potatoes.</div>
                    </li>
                    <li class="food-item">
                        <div class="name">Asgardian's Feast</div>
                        <div class="price">$20</div>
                        <div class="description">Prime sirloin steak coated in melted butter made with freshly minced garlic.</div>
                    </li>
                    <li class="food-item">
                        <div class="name">Jötunn's Bounty</div>
                        <div class="price">$20</div>
                        <div class="description">Prime flank steak marinated in butter, and garnished with lemon and rosemary.</div>
                    </li>
                    <li class="food-item">
                        <div class="name">Fenrir's Bite</div>
                        <div class="price">$15</div>
                        <div class="description">Prime filet mignon garnished with rosemary, and pan-seared to perfection.</div>
                    </li>
                </ul>
                <h2 class="category">Sides</h2>
                <ul class="food-list">
                    <li class="food-item">
                        <div class="name">Hasselback Potatoes</div>
                        <div class="price">$7</div>
                        <div class="description">Lorem ipsum dolor sit amet adipisicing elit.</div>
                    </li>
                    <li class="food-item">
                        <div class="name">Northern Slaw</div>
                        <div class="price">$4</div>
                        <div class="description">Lorem ipsum dolor sit amet elit.</div>
                    </li>
                    <li class="food-item">
                        <div class="name">Valkyrie's Greens</div>
                        <div class="price">$8</div>
                        <div class="description">Lorem ipsum dolor sit amet adipisicing elit.</div>
                    </li>
                </ul>
                <h2 class="category">Drinks</h2>
                <ul class="food-list">
                    <li class="food-item">
                        <div class="name">Valhallan Mead</div>
                        <div class="price">$10</div>
                        <div class="description">Lorem ipsum dolor sit amet adipisicing elit.</div>
                    </li>
                    <li class="food-item">
                        <div class="name">Odin's Chalice</div>
                        <div class="price">$8</div>
                        <div class="description">Lorem ipsum dolor sit amet adipisicing elit.</div>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

