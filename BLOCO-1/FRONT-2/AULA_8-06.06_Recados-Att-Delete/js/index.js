
// Lista os recados
const tableBody = document.getElementById("tbody-recados");
const buttonEditar = document.getElementById("buttonEditar")

async function listarRecados() {
  try {
    // const getRecados = await api.get(`/recados`, {
    //   headers: { Authorization: userLoggedId },
    // });

    // api.METHOD('enpoint')

    // GET => api.get('endipont', configurações )  configurações = { header: {}, ... }
    // POST => api.post('enpoint', dadosBody, configurações )

    const getRecados = await api.get(`/recados`);

    console.log(getRecados.data)

    const listarRecado = getRecados.data.data.recados

    for (let indice = 0; indice < listarRecado.length; indice++) {
      tableBody.innerHTML += `
        <tr>
          <td>${listarRecado[indice].id}</td>
          <td>${listarRecado[indice].title}</td>
          <td>${listarRecado[indice].description}</td>
          <td class="td-actions">
            <button id="buttonEditar" class="btn btn-att">Editar</button>
            <button class="btn btn-delete">Excluir</button>
          </td>
        </tr>
        <br>
      `
    }
  } catch (error) {
    console.error(error.message);
  }
}

window.onload = listarRecados();
