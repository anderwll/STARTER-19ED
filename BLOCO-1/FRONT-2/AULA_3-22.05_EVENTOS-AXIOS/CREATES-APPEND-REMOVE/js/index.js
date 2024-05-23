// CREATE
/*
    Criar elementos HTML
*/

const imagem = document.createElement('img')
imagem.src = './images/image.png'
imagem.alt = 'Arquitetura DOM'
imagem.style.width = '300px'
imagem.height = 250

console.log(imagem);

// APPEND CHILD
/*
    Para adicionar um elemento no HTML
*/

const divImagem = document.getElementById("aqui-vai-imagem")
divImagem.appendChild(imagem)

console.log(divImagem)


// REMOVE CHILD
/*
    Para remover um elemento no HTML
*/

const myBtn = document.querySelector('#my-btn')
const main = document.querySelector('.container')
const section = document.querySelector('.principal')

section.removeChild(myBtn)

console.log(myBtn)

