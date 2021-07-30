import { blog } from "./blog.js";
import { aside } from "./aside.js";

export const mainBody = (id, dataArr) => {

    window.arrData = [...dataArr];
    // console.log(window.arrData);

    const markup = document.createElement('div');
    markup.classList.add('main-container');

    const dataObj = dataArr.find((item) => item.id == id);

    markup.appendChild(blog(dataObj));
    markup.appendChild(aside(dataObj));

    return markup;
};

export const getIdFunc = (event) => {
    // console.log(event.target.id);
    // console.log(window.arrData);
    const markup = mainBody(event.target.id, window.arrData);

    const el = document.getElementsByClassName('main-container')[0];
    const root = document.getElementById('root');
    // root.innerHTML = "";
    root.replaceChild(markup, el);
    // console.log(markup.innerHTML);

    // root.appendChild(markup);
};