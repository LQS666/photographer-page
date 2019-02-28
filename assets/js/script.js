const body = document.body;

document.querySelector('.o-mnie-text').addEventListener('click', () => {
    body.classList.add('o-mnie-on');
})

document.querySelector('.o-mnie-close').addEventListener('click', () => {
    body.classList.remove('o-mnie-on');
})

document.querySelector('.contact-text').addEventListener('click', () => {
    body.classList.add('contact-on');
})

document.querySelector('.contact-close').addEventListener('click', () => {
    body.classList.remove('contact-on');
})

document.querySelector('.gallery').addEventListener('click', () => {
    body.classList.add('gallery-on');
})

document.querySelector('.gallery-close').addEventListener('click', () => {
    body.classList.remove('gallery-on');
})