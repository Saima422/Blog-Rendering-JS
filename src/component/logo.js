// import { navData } from "../data/data.js";

export const NavLogo = (navData) => {
    const markup = document.createElement('div');
    markup.classList.add('company-logo');

    let logoImage = document.createElement('img');
    logoImage.classList.add('logo');
    logoImage.src = navData.logo.imgSrc;
    logoImage.alt = navData.logo.alt;

    markup.appendChild(logoImage);

    return markup;
};