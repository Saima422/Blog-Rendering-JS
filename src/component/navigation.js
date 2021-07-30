import { NavLogo } from "./logo.js";
import { HamBurger} from "./hamburger.js";
import { NavLinks } from "./navlinks.js";

export const Navigation = (navData) => {
    const markup = document.createElement('div');
    markup.classList.add('navigation');

    markup.appendChild(NavLogo(navData));
    markup.appendChild(HamBurger());
    markup.appendChild(NavLinks(navData));

    return markup;
};