const botao = document.querySelector('#submit-button');
const form = document.querySelector('#my-form');
const botaoRst = document.querySelector('#reset-button')
const nome = document.querySelector('#nome-completo')

// function btnPrevent(event) {
//     event.preventDefault();
// }

// botao.addEventListener('click', btnPrevent);

//

function rstBtn() {
    form.reset();
}

botaoRst.addEventListener('click', rstBtn)

//

// function caracteresCheck(name) {
//     let char = name.value.trim();
//     if(char.length < 10 || char.length > 40) {
//         alert('Dados Inválidos')
//     } else {
//         alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
//     }
// }

// nome.addEventListener('change', caracteresCheck)