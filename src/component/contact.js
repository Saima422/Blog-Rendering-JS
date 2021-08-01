export const Contact = () => {
    const markup = document.createElement('div');
    markup.classList.add('contact');
    markup.id = 'contact';

    const h3 = document.createElement('h3');
    h3.classList.add('contact-heading');
    h3.innerText = 'JOIN US';

    const para = document.createElement('para');
    para.classList.add('contact-text');
    para.innerText = 'Share Your Travel Journey with the World';

    const input = document.createElement('input');
    input.placeholder = 'EMAIL';
    input.id = 'contactValue';
    input.classList.add('contact-input');

    const btn = document.createElement('button');
    btn.classList.add('contact-submit');
    btn.innerText = 'Submit';
    btn.addEventListener('click', sendAlert);

    markup.appendChild(h3);
    markup.appendChild(para);
    markup.appendChild(input);
    markup.appendChild(btn);

    return markup;
}

export const sendAlert = () => {
    if(document.getElementById('contactValue').value != ''){
        alert('Your Email Id is Noted. Thanks for Joining Us!');
        document.getElementById('contactValue').value = '';
    }
    else{
        alert('Please Enter Your Email Id.');
    }
} 