import aboutImg from './images/about.png';

export function aboutLoad() {
    const contentDiv = document.getElementById('content');
    contentDiv.classList.add('about-active');

    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';

    const heading = document.createElement('h1');
    heading.textContent = "About Sweetie";
    heading.className = 'about-heading';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "Welcome to Sweetie, where every bite is a delightful journey! Our cozy spot is dedicated to serving freshly made donuts, crafted with love and the finest ingredients. Whether you're stopping by for your morning coffee and a classic glazed donut or indulging in one of our unique, seasonal creations, we're here to make your day a little sweeter. Join us for a warm, welcoming atmosphere, friendly service, and donuts that are sure to put a smile on your face.";
    paragraph.className = 'about-p';

    const text = document.createElement('div');
    text.className = 'about-text';

    const imgStart = document.createElement('img');
    imgStart.src = aboutImg;
    imgStart.alt = 'about img';
    imgStart.className = 'about-img';

    const imgEnd = document.createElement('img');
    imgEnd.src = aboutImg;
    imgEnd.alt = 'about img';
    imgEnd.className = 'about-img';

    text.appendChild(heading);
    text.appendChild(paragraph);
    aboutContent.appendChild(text);
    contentDiv.appendChild(aboutContent);
}
