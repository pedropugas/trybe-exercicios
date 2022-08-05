const botao = document.querySelector('#submit-button');
const form = document.querySelector('#my-form');
const botaoRst = document.querySelector('#reset-button')

function btnPrevent(event) {
    event.preventDefault();
}

botao.addEventListener('click', btnPrevent);

//

function rstBtn() {
    form.reset();
}

botaoRst.addEventListener('click', rstBtn)