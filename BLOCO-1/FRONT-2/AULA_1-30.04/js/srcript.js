// console.log('PADRÃO')
// console.warn('cuidadooo')
// console.error('msg de erroooo')
// console.info('infoooooooooo')
// console.table([{ nome: 'João', idade: 18 }])


// GET BY TAG NAME = retorna lista []
const titles = document.getElementsByTagName('title')
const metas = document.getElementsByTagName('meta')

console.log(titles[0])
for (const meta of metas) {
    console.log(meta)
}

// GET BY CLASS NAME = retorna lista []
const meusCards = document.getElementsByClassName('div-card')

console.log(meusCards[0])

// GET BY ID

// QUERY SELECTOR

// QUERY SELECTOR ALL