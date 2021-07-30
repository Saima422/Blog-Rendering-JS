// import { footerData } from "../data/data.js";

export const footerLinks = (links) =>{
    const markup = document.createElement('ul');
    markup.classList.add('footer-links-container');

    links.forEach((item)=>{
        const footerItem = document.createElement('li');
        footerItem.classList.add('footer-item');

        const anchor = document.createElement('a');
        anchor.classList.add('footer-link');
        anchor.href = item.href;

        const itag = document.createElement('i');
        itag.classList.add(item.classList[0],item.classList[1],item.classList[2]);
    
        anchor.appendChild(itag);
        footerItem.appendChild(anchor);
        markup.appendChild(footerItem);
    });
    return markup;
};
