// console.log('opaaa')
// console.log('DEU MAIS QUE BOM - js')
// alert('OPAAA')


// ---------------------------- BUSCAR ELEMENTOS -----------------
// get Element By Id => buscar UM elemento por id
// const btn = document.getElementById('id-nao-existe')
// const btn = document.getElementById('my-btn')
// console.log(btn)


// query Selector => consulta por seletores

// CONSULTA POR TAG HTML:
// const texto = document.querySelector('p')

// CONSULTA POR CLASS NAME:
// const texto = document.querySelector('.meu-paragrafo')

// CONSULTA POR ID:
// const texto = document.querySelector('#texto-dinamico')

// CONSULTA POR VARIOS SELETORES CONCATENADOS
// const texto = document.querySelector('p.verde')
// const button = document.querySelector('button#my-btn')


// query Selector All = consulta por seletores => [] - lista

// CONSULTA POR TAG, ID E CLASS
// const listaBtn = document.querySelectorAll('button.teste')



// get Elements By Tag Name = busca OS ELEMENTOS pelo noma da tag
// const ps = document.getElementsByTagName('p')


// get Elements By Class Name = busca OS ELEMENTOS pelo nome da classe
// const varios = document.getElementsByClassName('normal')


// get Elements By Name => buscar ELEMENTOS pelo nome => name="" => []
// const p = document.getElementsByName('meu-texto')



// ---------------------------- MANIPULAÇÃO DOS ELEMENTOS -----------------

const paragrafo = document.getElementById('texto-dinamico')
const section = document.querySelector('section')

// INNER TEXT
// Acessar: Retorna o conteúdo da tag (apenas texto)
// console.log('TEXT ----->  ', paragrafo.innerText)

// Atribuição: Apenas atribuimos texto.
// paragrafo.innerText = "MUDOU HEHEHEHE"


// INNER HTML
// Acessar: Retorna o conteúdo da tag (todo conteúdo, inclusive tags se existir)
// console.log('HTML ----->  ', paragrafo.innerHTML)

// Atribuição: Texto e tags, sobrescresve todo o conteúdo filho
// paragrafo.innerHTML = `TEXTO <span style="font-weight: bold;">HEHEHE</span>`
// section.innerHTML = `<p>DEU BOM</p>`


// SET ATTRIBUTE
// Adicona o atributo caso não exista,
// Caso exita sobrescreve com o novo valor
const btnAzul = document.getElementById("my-btn")

// name, id, class
// -------------- NOME ATTRIBUTO , NOVO VALOR
// btnAzul.setAttribute('name', 'adicionado-set')
// btnAzul.setAttribute('id', 'id-trocado')

// setTimeout(() => {
//     btnAzul.setAttribute('id', 'my-btn-vermelho')
// }, [3000])

// GET ATTRIBUTE
// Buscar UM atributo da tag, retorna o valor
const btnAzulAtributoId = btnAzul.getAttribute('id')
console.log(btnAzulAtributoId)

// TOGGLE ATTRIBUTE
// Utilzado para atualizar um atributo, somente valor boleanos
btnAzul.toggleAttribute('disabled', false)


/// --------------------  tema dark || EXEMPLO
const btnTema = document.getElementById('tema-btn')
btnTema.addEventListener('click', () => {
    const body = document.querySelector('body')
    const temaAtual = body.getAttribute('class')

    // temaAtual === 'light-tema' ?
    //     body.setAttribute('class', 'dark-tema') :
    //     body.setAttribute('class', 'light-tema')

    if (temaAtual === 'light-tema') {
        body.setAttribute('class', 'dark-tema')
        return
    }
    body.setAttribute('class', 'light-tema')
})














