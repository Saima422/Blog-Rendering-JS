import { getIdFunc } from "./main-body.js";

export const aside = (dataObj) => {

    const markup = document.createElement('div');
    markup.classList.add('aside-container');

    const h1 = document.createElement('h1');
    h1.classList.add('aside-heading');
    h1.innerText = "Related Links";

    markup.appendChild(h1);

    dataObj.links.forEach((item) => {
        const para = document.createElement('p');
        para.classList.add('aside-link');

        const anchor = document.createElement('a');
        anchor.classList.add('aside-anchor');
        anchor.id = item.id;
        anchor.href = '#';
        anchor.innerText = item.title;
        anchor.addEventListener('click', getIdFunc);
        // para.setAttribute('onclick', `getIdFunc()`);

        para.appendChild(anchor);
        markup.appendChild(para);
    });

    return markup;
};
