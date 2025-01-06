const usuarioLogadoComoString = localStorage.getItem('usuarioLogado')
/* 
  {
    id: 123123,
    name: "sei la o nome"
    email....
  }
*/
const usuarioLogado = JSON.parse(usuarioLogadoComoString)
console.log(usuarioLogado);

document.addEventListener('DOMContentLoaded', function () {
    if (!usuarioLogado) {
        alert('DEU RUIMMM, FAZ O LOGIN AI')
        window.location.href = '/login.html';
        return;
    }
})


// 6 - SE FOR CRIADO COM SUCESSO, limpar o form, navegar p/ index.html

// 1 - Buscar o elemento => form
const form = document.querySelector(".form-recado");

// 2 - Console log no form
console.log(form);

// function enviarDados(titulo, descricao) {
//     api.post('/recados', {
//         title: titulo,
//         description: descricao
//     })
//         .then(function (response) {
//             console.log(response);
//             alert("Recado enviado com sucesso!");
//         })
//         .catch(function (error) {
//             console.error('Erro ao salvar o recado', error);
//             alert('Erro ao salvar o recado. Por favor, tente novamente :D')
//         })
// }

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 3 - Acessar os valores das inputs, textares => cosole.log()
    const titulo = document.querySelector("#ftitle").value;
    const descricao = document.querySelector("#fdescription").value;
    // const tituloName = e.target.titulo.value
    // const descName = e.target.descricao.value
    // console.log(tituloName, descName)


    // 4 - Fazer as validações:
    /*
    - Se não tem titulo e não tem descrição
    - Minimo 2 caracteres...
      */
    if (titulo.length < 2) {
        alert("Título: insirra mínimo 2 carecteres :D");
        return
    }

    if (descricao.length < 10) {
        alert("Descrição: insirra mínimo 10 caracteres ^^");
        return
    }


    // 5 - Enviar os dados para a api
    /*
        Tratemento de erro => alert()

        ENPOINT: /recados
        BODY: {
            title: "",
            description: ""
        }
     */
    // enviarDados(titulo, descricao)

    // http://localhost:3333/recados
    api.post('/recados', {
        title: titulo,
        description: descricao
    })
        .then(function (response) {
            console.log(response.data);
            // alert("Recado enviado com sucesso!");

            alert(response.data.message);
            form.reset()

            // const titulo = document.getElementById('ftitle')
            // titulo.value = ''
        })
        .catch(function (error) {
            console.error(error.response.data.message);
            alert("Erro ao salvar o recado. Por favor, tente novamente :D");
        })
});
