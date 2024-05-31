import glazedImg from './images/glazed.png';
import chocolateImg from './images/chocolate.png';
import strawberryImg from './images/strawberry.png';

export function menuLoad() {
    const contentDiv = document.getElementById('content');

    const menuContent = document.createElement('div');
    menuContent.className = 'menu-content';

    const heading = document.createElement('h1');
    heading.textContent = "Sweetie's menu";
    heading.className = 'menu-heading';

    const cardOne = document.createElement('div');
    cardOne.className = 'menu-card';
    const cardOneTitle = document.createElement('h3');
    cardOneTitle.textContent = "Glazed Donut: $1.50";
    cardOneTitle.className = 'menu-card-title';
    const cardOneParagraph = document.createElement('p');
    cardOneParagraph.textContent = "A timeless favorite with a light, sweet glaze.";
    cardOneParagraph.className = 'menu-card-p';
    const cardOneImage = document.createElement('img');
    cardOneImage.src = glazedImg;
    cardOneImage.alt = 'glazed donut img';
    cardOneImage.className = 'menu-card-img';

    const cardTwo = document.createElement('div');
    cardTwo.className = 'menu-card';
    const cardTwoTitle = document.createElement('h3');
    cardTwoTitle.textContent = "Chocolate Frosted Donut: $1.75";
    cardTwoTitle.className = 'menu-card-title';
    const cardTwoParagraph = document.createElement('p');
    cardTwoParagraph.textContent = "Covered in rich chocolate frosting.";
    cardTwoParagraph.className = 'menu-card-p';
    const cardTwoImage = document.createElement('img');
    cardTwoImage.src = chocolateImg;
    cardTwoImage.alt = 'chocolate donut img';
    cardTwoImage.className = 'menu-card-img';

    const cardThree = document.createElement('div');
    cardThree.className = 'menu-card';
    const cardThreeTitle = document.createElement('h3');
    cardThreeTitle.textContent = "Strawberry Frosted Donut: $2.00";
    cardThreeTitle.className = 'menu-card-title';
    const cardThreeParagraph = document.createElement('p');
    cardThreeParagraph.textContent = "Strawberry glaze with colorful sprinkles.";
    cardThreeParagraph.className = 'menu-card-p';
    const cardThreeImage = document.createElement('img');
    cardThreeImage.src = strawberryImg;
    cardThreeImage.alt = 'strawberry donut img';
    cardThreeImage.className = 'menu-card-img';

    const cards = document.createElement('div');
    cards.className = 'menu-cards';


    cardOne.appendChild(cardOneTitle);
    cardOne.appendChild(cardOneParagraph);
    cardOne.appendChild(cardOneImage);

    cardTwo.appendChild(cardTwoTitle);
    cardTwo.appendChild(cardTwoParagraph);
    cardTwo.appendChild(cardTwoImage);

    cardThree.appendChild(cardThreeTitle);
    cardThree.appendChild(cardThreeParagraph);
    cardThree.appendChild(cardThreeImage);

    cards.appendChild(cardOne);
    cards.appendChild(cardTwo);
    cards.appendChild(cardThree);

    menuContent.appendChild(heading);
    menuContent.appendChild(cards);
    contentDiv.appendChild(menuContent);
}