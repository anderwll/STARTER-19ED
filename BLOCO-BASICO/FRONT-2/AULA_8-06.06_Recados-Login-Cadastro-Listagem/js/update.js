const usuarioLogadoComoString = localStorage.getItem('usuarioLogado')
window.onload = listarRecado
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
        
        // URLSearchParams - Serve pra buscar um valor no meu params(url)
        // get* -  Serve para pegar o valor deseja

const urlId = new URLSearchParams(window.location.search)
const id = urlId.get('id')

const form = document.querySelector(".form-recado");

const inputTitle = document.getElementById('ftitle')
const inputDescription = document.getElementById('fdescription')

async function listarRecado(){
    try{
        // Rota que lista recados por id de recado
        const response = await api.get(`/recados/${id}`)

        const recado = response.data.data

        inputTitle.value= recado.title
        inputDescription.value = recado.description
    }catch(error){
        console.error(error)
    }
}


form.addEventListener('submit', async function(){
    try {
        if (inputTitle.value < 2) {
            alert("Título: insirra mínimo 2 carecteres :D");
            return
        }
    
        if (inputDescription.value < 10) {
            alert("Descrição: insirra mínimo 10 caracteres ^^");
            return
        }
        const objectRecado = {title: inputTitle.value, description: inputDescription.value}

        const response = await api.put(`/recados/${id}`, objectRecado)
        
        return window.location.href = '/index.html'

    } catch (error) {
        console.error(error)
    }
})