import { footerLinks } from "./footer-links.js";
// import { baseLink } from "../data/data.js";

export const footer = (footer) => {
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');

    const footerLogo = document.createElement('img');
    footerLogo.classList.add('footer-logo');
    // footerLogo.src = `${baseLink}/webpage/surfboard-logo.png`;
    footerLogo.src = footer.logo.imgSrc;

    footerDiv.appendChild(footerLogo);
    footerDiv.appendChild(footerLinks(footer.links));

    return footerDiv;
}

