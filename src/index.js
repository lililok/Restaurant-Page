import { homeLoad } from './home.js';
import { menuLoad } from './menu.js';
import { aboutLoad } from './about.js';
import './style.css';

function navBar() {
    const tabFunction = {
        'home': homeLoad,
        'menu': menuLoad,
        'about': aboutLoad
    };

    const tab = document.querySelectorAll('.tab');
    const content = document.getElementById('content');

    tab.forEach(button => {
        button.addEventListener('click', () => {
            const activeTab = document.querySelector('.tab.active');
            if (activeTab) {
                activeTab.classList.remove('active');
            }
            button.classList.add('active');

            const contentLoader = tabFunction[button.id];
            if (contentLoader) {
                content.innerHTML = ''; 
                content.classList.remove('about-active');
                contentLoader();
            }
        });
    });

    document.getElementById('home').click();
}

document.addEventListener('DOMContentLoaded', () => {
    navBar();
});
