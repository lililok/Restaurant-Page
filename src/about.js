export function aboutLoad() {
    const contentDiv = document.getElementById('content');

    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';

    const heading = document.createElement('h1');
    heading.textContent = "About Sweetie";
    heading.className = 'about-heading';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "Welcome to Sweetie, where every bite is a delightful journey! Our cozy spot is dedicated to serving freshly made donuts, crafted with love and the finest ingredients. Whether you're stopping by for your morning coffee and a classic glazed donut or indulging in one of our unique, seasonal creations, we're here to make your day a little sweeter. Join us for a warm, welcoming atmosphere, friendly service, and donuts that are sure to put a smile on your face.";
    paragraph.className = 'about-p';

    aboutContent.appendChild(heading);
    aboutContent.appendChild(paragraph);
    contentDiv.appendChild(aboutContent);
}