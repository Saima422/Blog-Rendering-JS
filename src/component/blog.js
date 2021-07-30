
export const blog = (dataObj) =>{
    const markup = document.createElement('div');
    markup.classList.add('blog-container');

    const h1 = document.createElement('h1');
    h1.classList.add('blog-heading');
    h1.innerText = dataObj.title;

    const h4 = document.createElement('h4');
    h4.classList.add('blog-author');
    h4.innerText = `Author - ${dataObj.author}`;

    const image = document.createElement('img');
    image.classList.add('blog-img');
    image.src = dataObj.imageUrl;

    const para = document.createElement('p');
    para.classList.add('blog-para');
    para.innerText = dataObj.content;   

    markup.appendChild(h1);
    markup.appendChild(h4);
    markup.appendChild(image);
    markup.appendChild(para);

    return markup;
};