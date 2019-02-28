const body = document.body;

document.querySelector('.o-mnie-text').addEventListener('click', () => {
    body.classList.add('o-mnie-on');
})

document.querySelector('.o-mnie-close').addEventListener('click', () => {
    body.classList.remove('o-mnie-on');
})