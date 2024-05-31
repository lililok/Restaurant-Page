import homeImg from './images/home-img.png';

export function homeLoad() {
    const contentDiv = document.getElementById('content');

    const homeContent = document.createElement('div');
    homeContent.className = 'home-content';

    const text = document.createElement('div');
    text.className = 'home-content-text';

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Sweetie!';
    heading.className = 'home-heading';
    
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'A <em>NEW</em> DESSERT EXPERIENCE';
    paragraph.className = 'home-p';

    const img = document.createElement('img');
    img.src = homeImg;
    img.alt = 'home img';
    img.className = 'home-img';
    
    homeContent.appendChild(img);
    text.appendChild(heading);
    text.appendChild(paragraph);
    homeContent.appendChild(text);
    contentDiv.appendChild(homeContent);
}