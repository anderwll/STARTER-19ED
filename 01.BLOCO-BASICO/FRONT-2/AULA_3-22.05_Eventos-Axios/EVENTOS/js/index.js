// EVENTOS

// ------ ON LOAD -------
/*
    O evento onload é acionado quando nossa página carrega 
    por completo.
*/

window.onload = function () {
    // alert('Carregou á página por completo...')

    const h1 = document.querySelector('h1')
    // console.log(h1)
}


// ------ ON CLICK -------
/*
    Acionado quando a pessoa usuária clica em um 
    determinado elemento HTML
*/

function funcaoNaTag() {
    alert('Clicou no botão....')
}

function funcaoNaTagComParamentro(qualquercoisa) {
    console.log(`Parametro da tag: ${qualquercoisa.target.tagName}`)
}


// ------ ADD EVENT LISTENER -------
/*
    ADICIONAR OUVINTE DE EVENTOS

    É metodo utilizado para adicionar um evento um elemento HTML.
    Ele recebe dois paramentros:
     1 - Nome do evento.
     2 - Função que será disparada quando o evento acontecer.
*/

// 1 - Buscar o elemento desejado.
const btn = document.getElementById('btnAddEventListener')

// 2 - Adicionar o evento desejado, passando ele deve fazer.
btn.addEventListener('click', () => {
    alert('Clicou no botão, addEventListener!!')
})

// ------ ON MOUSE OVER -------
/*
    É acionado quando o mouse ENTRA no elemento HTML.
*/

function funcaoMostraLog() {
    console.log('Mouse ingressou no elemento')
}

// 1 - Buscar a div => .my-div
const myDiv = document.querySelector('.my-div')
// console.log(myDiv);

// 2 - Adiconar a função mudaCor()
function mudaCor() {
    myDiv.style.backgroundColor = 'red'
}

// 3 - Adiconar o ouvinte e a função mudaCor()
myDiv.addEventListener('mouseover', mudaCor)


// ------ ON MOUSE OUT -------
/*
    É acionado quando o mouse SAI do elemento HTML.
*/

myDiv.addEventListener('mouseout', () => {
    myDiv.style.backgroundColor = 'yellow'
    // myDiv.style.width = '300px'
})

// ------ KEY UP -------
/*
    O evento é acionado quando a pessa usuária SOLTA A TECLA
    pressionada.
*/

// 1 - Buscar os elementos => INPUT, P 
const inputKeyUp = document.getElementById('keyUp')
const infoKeyUp = document.getElementById('keyUp-info')

// 2 - Declarar a função
function funcaoKeyUp() {
    console.log('Pressiounouuuu....')
    console.log(inputKeyUp.value)

    infoKeyUp.textContent = `Tecla Solta: ${inputKeyUp.value}`
}

// ------ KEY DOWN -------
/*
    O evento é acionado quando a pessa usuária PRESSIONA A TECLA.
*/

// 1 - Buscar os elementos => INPUT, P
const inputKeyDown = document.querySelector('#keyDown')
const infoKeyDown = document.querySelector('#keyDown-info')
// console.log({ inputKeyDown, infoKeyDown });

// 2 - Adioncar o evento ouvinte => KEYDOWN + AÇÃO
inputKeyDown.addEventListener('keydown', () => {
    infoKeyDown.innerText = `Tecla Pressionada: ${inputKeyDown.value}`
})


