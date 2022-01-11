//VARIABLES
const resultado = document.querySelector('.result');
const spinner = document.querySelector('#spinner');
const input = document.querySelector('.cuadro');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const resultArea = document.querySelector('.result');
const invertido = document.querySelector('.invertida')


//EVENTLISTENERS
document.addEventListener('DOMContentLoaded', ocultarSpinner);
document.addEventListener('DOMContentLoaded', deshabilitarBtn);
document.addEventListener('DOMContentLoaded', deshabilitarInput);
input.addEventListener('blur', activarBtn)
btn.addEventListener('click', string)
//FUNCIONES
function string(e) {
    e.preventDefault();
    let newString = "";
    let str = document.querySelector('.cuadro').value;
    let strCheck = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let newStringCheck = newString.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    for(let i = strCheck.length -1; i >= 0; i--)
    newStringCheck += strCheck[i];

    if(newStringCheck == strCheck) {
      crearTexto('Es un palindromo', 'exito');
    } else {
      crearTexto('No es un palindromo', 'error');
    }
    
    console.log(newStringCheck)
    invertido.value = newStringCheck;
  
    return newStringCheck;

}

function deshabilitarBtn() {
    btn.disabled = true
    btn.classList.add('btn-quit')
}

function deshabilitarInput() {
    invertido.disabled = true
}

function ocultarSpinner() {
    spinner.classList.add('quit');
}


function crearTexto(mensaje, tipo) {
    const aviso = document.createElement('p')
    aviso.textContent = mensaje
    aviso.classList.add('generado')

    if(tipo === 'exito') {
        aviso.classList.add('bg-success')
    } else {
        aviso.classList.add('bg-danger')
    }

    spinner.classList.remove('quit')

    setTimeout(() => {
        spinner.classList.add('quit')
        resultArea.appendChild(aviso);
    }, 4000);

    setTimeout(() => {
        aviso.remove();
        form.reset();
        deshabilitarBtn();
    }, 7000);

    while(resultArea.firstChild) {
        resultArea.removeChild(resultArea.firstChild)
    }

}

function activarBtn() {
    let texto = document.querySelector('.cuadro').value;
    if(texto.length > 0) {
        btn.disabled = false
        btn.classList.remove('btn-quit')
    }
}