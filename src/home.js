export function loadContent() {
    const contentDiv = document.getElementById('content');

    const heading = document.createElement('h4');
    heading.textContent = 'Welcome to Pizzeria';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'lorem ipsum yooooooooo';
    
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
}