function createElement(tag, className = '', textContent = '') {
    const elemento = document.createElement(tag);
    if (className) elemento.className = className;
    if (textContent) elemento.textContent = textContent;
    return elemento;
}

function clearMain() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    return main;
}

function loadHeader() {
    const header = document.getElementById('header');
    const containerTitle = createElement('div', 'containerTitle');
    const titleHeader = createElement('h1', 'titleHeader', 'Diego Ortino');
    titleHeader.addEventListener('click', loadAboutMe);

    containerTitle.appendChild(titleHeader);
    header.appendChild(containerTitle);

    // Nav
    const navContainer = createElement('nav', 'nav-container');
    const navLinks = createElement('ul', 'nav-links');

    const linksData = [
        { text: 'Sobre mi', action: loadAboutMe },
        { text: 'Skills', action: loadSkills },
        { text: 'Contacto', action: loadContact }
    ];

    linksData.forEach(link => {
        const li = createElement('li', 'nav-link', link.text);
        li.onclick = link.action;
        navLinks.appendChild(li);
    });

    navContainer.appendChild(navLinks);
    header.appendChild(navContainer);
}

function loadAboutMe() {
    clearMain();
    const main = document.getElementById('main');

    // Hero Section, main container
    const containerHero = createElement('div', 'containerHero');
    
    // Hero Text
    const containerTextHero = createElement('div', 'containerTextHero');
    const titleHero = createElement('h1', 'titleHero', 'Bienvenido a mi Portfolio');
    const textHero = createElement('p', 'textHero', 'Soy Diego Ortino, un apasionado desarrollador web con experiencia en JavaScript, HTML y CSS. Me encanta crear aplicaciones web interactivas y funcionales.');

    containerTextHero.appendChild(titleHero);
    containerTextHero.appendChild(textHero);
    containerHero.appendChild(containerTextHero)

    // Hero Image
    const containerImgHero = createElement('div', 'containerImgHero');
    const imgHero = createElement('img', 'imgHero');
    imgHero.src = 'images/selfie.png';

    containerImgHero.appendChild(imgHero);
    containerHero.appendChild(containerImgHero);

    // Hero 2 section
    const containerHero2 = createElement('div', 'containerHero2');
    const containerTextHero2 = createElement('div', 'containerTextHero');
    const titleHero2 = createElement('h1', 'titleHero2', 'Sobre mi');

    containerTextHero2.appendChild(titleHero2);
    containerHero2.appendChild(containerTextHero2);

    // Hero 2 cards
    const containerCards = createElement('div', 'containerCards');
    let cardsData = [
        { title: 'Vivo en Tandil', text: 'Desde 2017, nací en ayacucho, pcia de Bs As',srcIcon: 'images/tandil.png' },
        { title: 'Tengo un gatito', text: 'Llegó por los techos y el me adoptó a mi. Lo bauticé como Bolillo', srcIcon: 'images/gato.png' },
        { title: 'Amo la musica', text: 'En mis tiempos libres toco la guitarra y la bateria', srcIcon: 'images/musica.png' },
        { title: 'Juego al futbol', text: 'Formo parte de un equipo con el que entrenamos', srcIcon: 'images/futbol.png' }
    ];
    cardsData.forEach(card => {
        const cardElement = createElement('div', 'cardElement');
        const cardTitle = createElement('h3', 'cardTitle', card.title);
        const imgIcon = createElement('img', 'imgIcon');
        imgIcon.src = card.srcIcon;
        const cardText = createElement('p', 'cardText', card.text);

        cardElement.appendChild(cardTitle);
        cardElement.appendChild(imgIcon);
        cardElement.appendChild(cardText);
        containerCards.appendChild(cardElement);
    });

    containerHero2.appendChild(containerCards);

    // Append elements
    main.appendChild(containerHero);
    main.appendChild(containerHero2);
}

function loadSkills() {
    clearMain();
    const main = document.getElementById('main');

    // Main container Skills
    const containerSkills = createElement('div', 'containerSkills');

    // Title Skills
    const divTitleSkills = createElement('div', 'divTitleSkills');
    const titleSkills = createElement('h1', 'titleSkills', 'Mis skills');  
    divTitleSkills.appendChild(titleSkills);
    containerSkills.appendChild(divTitleSkills);

    // Skills cards
    const containerCardsSkills = createElement('div', 'containerCardsSkills');
    let skillsData = [
        { title: 'HTML', text: 'lorem ipsum', srcIcon: 'images/html.png' },
        { title: 'CSS', text: 'lorem ipsum', srcIcon: 'images/css.png' },
        { title: 'JavaScript', text: 'lorem ipsum', srcIcon: 'images/js.png' },
        { title: 'Bootstrap 5', text: 'lorem ipsum', srcIcon: 'images/bootstrap.png' },
        { title: 'Prog Orientada a Objetos', text: 'lorem ipsum', srcIcon: 'images/poo.png' },
        { title: 'NestJS', text: 'lorem ipsum', srcIcon: 'images/nestjs.png' },
        { title: 'Google AppScripts', text: 'lorem ipsum', srcIcon: 'images/appscripts.png' },
        { title: 'MySql', text: 'lorem ipsum', srcIcon: 'images/mysql.png' },
        { title: 'Python', text: 'lorem ipsum', srcIcon: 'images/python.png' },
        { title: 'Git', text: 'lorem ipsum', srcIcon: 'images/git.png' },
        { title: 'GitHub', text: 'lorem ipsum', srcIcon: 'images/github.png' }
    ];

    skillsData.forEach(skill => {
        const cardSkill = createElement('div', 'cardSkill');
        const cardTitleSkill = createElement('h3', 'cardTitleSkill', skill.title);
        const divIconSkill = createElement('div', 'divIconSkill');
        const imgIconSkill = createElement('img', 'imgIconSkill');
        imgIconSkill.src = skill.srcIcon;
        const cardTextSkill = createElement('p', 'cardTextSkill', skill.text);

        cardSkill.appendChild(cardTitleSkill);
        divIconSkill.appendChild(imgIconSkill);
        cardSkill.appendChild(divIconSkill);
        cardSkill.appendChild(cardTextSkill);
        containerCardsSkills.appendChild(cardSkill);
    });
    containerSkills.appendChild(containerCardsSkills);

    // Append elements
    main.appendChild(containerSkills);
}

function loadContact() {}   

function loadFooter() {
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadAboutMe();
    loadFooter();
});