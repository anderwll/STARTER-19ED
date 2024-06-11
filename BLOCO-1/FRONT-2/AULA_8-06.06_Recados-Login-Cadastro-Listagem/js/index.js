// {"id": 123123, "name": "sei la o nome", email...}
const usuarioLogadoComoString = localStorage.getItem("usuarioLogado");
/* 
  {
    id: 123123,
    name: "sei la o nome"
    email....
  }
*/
const usuarioLogado = JSON.parse(usuarioLogadoComoString);
console.log(usuarioLogado);

document.addEventListener("DOMContentLoaded", function () {
  if (!usuarioLogado) {
    alert("DEU RUIMMM, FAZ O LOGIN AI");
    window.location.href = "./login.html";
    return;
  }

  if (oouasd) {
    return;
  }

  ///
});

// Lista os recados
const tableBody = document.getElementById("tbody-recados");
const buttonEditar = document.getElementById("buttonEditar");

async function listarRecados() {
  try {
    // const getRecados = await api.get(`/recados`, {
    //   headers: { Authorization: userLoggedId },
    // });

    // api.METHOD('enpoint')

    // GET => api.get('endipont', configurações )  configurações = { header: {}, ... }
    // POST => api.post('enpoint', dadosBody, configurações )

    const getRecados = await api.get(`/recados`);

    const listarRecado = getRecados.data.data.recados;
    console.table(listarRecado)

    for (let indice = 0; indice < listarRecado.length; indice++) {
      tableBody.innerHTML += `
        <tr>
          <td>${listarRecado[indice].id}</td>
          <td>${listarRecado[indice].title}</td>
          <td>${listarRecado[indice].description}</td>
          <td class="td-actions">
            <button id="buttonEditar" class="btn btn-att" onClick="updatedRecado(${listarRecado[indice].id})">Editar</button>
            <button class="btn btn-delete" onClick="deleteRecado(${listarRecado[indice].id})">Excluir</button>
          </td>
        </tr>
      `;
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function deleteRecado(id) {
  try{
    const delet = confirm("Deseja realmente deletar o recado?")

    if(delet){
      const response = await api.delete(`recados/${id}`)
  
      location.reload()

      return alert(response.data.message)
    }

  }catch(error){
    return console.error(error)
  }
}

function updatedRecado(id){

  window.location.href = `/atualizar.html?id=${id}`

}

window.onload = listarRecados();
