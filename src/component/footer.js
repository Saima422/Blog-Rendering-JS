import { footerLinks } from "./footer-links.js";
// import { baseLink } from "../data/data.js";
import { Contact } from "./contact.js";

export const footer = (footer) => {
    const container = document.createElement('div');
    container.classList.add('section-container');

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');

    const footerLogo = document.createElement('img');
    footerLogo.classList.add('footer-logo');
    // footerLogo.src = `${baseLink}/webpage/surfboard-logo.png`;
    footerLogo.src = footer.logo.imgSrc;


    footerDiv.appendChild(footerLogo);
    footerDiv.appendChild(footerLinks(footer.links));

    container.appendChild(Contact());
    container.appendChild(footerDiv);

    return container;
}

