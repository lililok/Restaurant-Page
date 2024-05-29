export function loadContent() {
    const contentDiv = document.getElementById('content');

    const heading = document.createElement('h4');
    heading.textContent = 'Welcome to Sweetie!';
    
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'A <em>NEW</em> DESSERT EXPERIENCE';

    const img = document.createElement('img');
    
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(img);
}