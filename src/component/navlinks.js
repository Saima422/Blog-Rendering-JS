
export const NavLinks = (navData) => {
    const markup = document.createElement('ul');
    markup.classList.add('nav-container');

    const p = document.createElement('p');
    p.classList.add('nav-text');
    p.innerText = 'Travel Blogging';
    markup.appendChild(p);

    navData.navLinks.forEach((link) => {
        let liElem = document.createElement('li');
        liElem.classList.add('nav-item');
        liElem.id = link.id;

        let anchor = document.createElement('a');
        link.isCta ? anchor.classList.add('nav-link', 'btn') : anchor.classList.add('nav-link');
        anchor.href = link.href;
        anchor.textContent = link.title;

        liElem.appendChild(anchor);
        markup.appendChild(liElem);
    });
    return markup;
};