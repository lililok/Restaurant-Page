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
    const cardOneParagraph = document.createElement('p');
    cardOneParagraph.textContent = "A timeless favorite with a light, sweet glaze.";
    const cardOneImage = document.createElement('img');
    /*cardOneImage.src = !!!;
    cardOneImage.alt = 'glazed donut img';
    cardOneImage.className = 'about-card-img';*/

    const cardTwo = document.createElement('div');
    cardTwo.className = 'menu-card';
    const cardTwoTitle = document.createElement('h3');
    cardTwoTitle.textContent = "Chocolate Frosted Donut: $1.75";
    const cardTwoParagraph = document.createElement('p');
    cardTwoParagraph.textContent = "Covered in rich chocolate frosting.";
    const cardTwoImage = document.createElement('img');
    /*cardTwoImage.src = !!!;
    cardTwoImage.alt = 'chocolate donut img';
    cardTwoImage.className = 'about-card-img';*/

    const cardThree = document.createElement('div');
    cardThree.className = 'menu-card';
    const cardThreeTitle = document.createElement('h3');
    cardThreeTitle.textContent = "Cinnamon Sugar Donut: $1.50";
    const cardThreeParagraph = document.createElement('p');
    cardThreeParagraph.textContent = "Coated in a blend of cinnamon and sugar.";
    const cardThreeImage = document.createElement('img');
    /*cardThreeImage.src = !!!;
    cardThreeImage.alt = 'cinnamon donut img';
    cardThreeImage.className = 'about-card-img';*/

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