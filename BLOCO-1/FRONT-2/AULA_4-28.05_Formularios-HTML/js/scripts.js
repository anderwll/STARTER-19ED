// ------------------ SUBMETER ---------------------------

// 1 - Buscamos o nosso form
const formCadastro = document.getElementById('form-cadastro')

// 2 - Adicionamos um ouvinte com o evento submit
formCadastro.addEventListener('submit', function (evento) {

    // Previnir o comportamento padrão do form, 
    // ex: recarregar a pagina e tentar fazer um GET
    evento.preventDefault()

    // console.log(evento)

    // console.log(evento.target.nome.value)
    // console.log(formCadastro.nome.value)

    const dados = {
        nome: evento.target.nome.value,
        email: evento.target.email.value,
        nascimento: Date(evento.target.nascimento.value),
        telefone: parseInt(evento.target.telefone.value),
        idade: Number(evento.target.idade.value),
        sobre: evento.target.sobre.value
    }

    if (dados.nome) {
        /// validrrr...
    }

    console.log(dados)
})


// ------------------ RESET ---------------------------
/*
    Por padrão, sem adicionarmos nenhum evento, a input to tipo reset
    limpa o formulário.

    Caso precisamos além de limpar, ter outra ação podemos add um evento
    a ele, como no exemplo abaixo:
*/

formCadastro.addEventListener('reset', function () {
    alert('deu bommmm......')
    formCadastro.reset()
})

// const btnReset = document.getElementById('btn-reset')
// btnReset.addEventListener('click', function () {
//     alert('resetando.........')
//     formCadastro.reset()
// })