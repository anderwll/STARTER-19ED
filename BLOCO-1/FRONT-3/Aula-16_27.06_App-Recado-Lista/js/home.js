const formRecado = document.getElementById("form-recado");

const userId = JSON.parse(localStorage.getItem("user")).id;
let page = 1
let limite = 10

// BUSCAR OS RECADOS NO F5 DA PÁGINA
document.addEventListener("DOMContentLoaded", async function () {
  await listarRecados()
})


// EVENTO OUVINTE PARA PEGAR OS DADOS DO USUÁRIO DO LOCAL STORAGE
document.addEventListener("DOMContentLoaded", () => {
  const username = JSON.parse(localStorage.getItem("user")).name;
  const userLogin = document.getElementById("user-login");
  userLogin.innerText = username;
});


// EVENTO OUVINTE CADASTRO DE RECADOS
formRecado.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!formRecado.checkValidity()) {
    event.stopPropagation();
    formRecado.classList.add("was-validated");
    return;
  }

  const title = event.target.title.value;
  const description = event.target.description.value;

  showLoading(true);

  const response = await postMessage(userId, title, description);

  showLoading(false);

  if (!response.success) {
    alertSign(true, "danger", response.message);
    return;
  }

  alertSign(true, "success", response.data.message);
  formRecado.reset();
});


// EVENTO OUVINTE LISTAGEM DE RECADOS
async function listarRecados() {
  showLoadingRecados(true)

  const resposta = await getRecados(userId, page, limite)

  showLoadingRecados(false)

  if (!resposta.success) {
    // MOSTRAR ALERTA
    logout()
    return
  }

  // RESPOSTA =  { success, message, data: { recados, total  }  }
  mostrarCards(resposta.data.recados)
  criarPaginacao(resposta.data.total)
}

function mostrarCards(recados) {
  const rowListaRecados = document.getElementById('lista-recados')

  if (recados.length === 0) {
    const p = document.createElement('p')

    p.classList.add('text-center', 'fst-italic', 'fs-4', 'text-secondary')
    p.innerText = 'Nenhum recado cadastrado!'

    rowListaRecados.appendChild(p)
  }


  rowListaRecados.innerHTML = ''

  recados.forEach((recado) => {
    const divCol = document.createElement('div')
    divCol.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4')

    divCol.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">${recado.title}</h5>
        </div>
        <div class="card-body">
          <p class="card-text text-ellipsis">${recado.description}</p>
        </div>
        <div class="card-footer d-flex gap-2 justify-content-end">
          <button type="button" class="btn btn-danger" onclick="prepararExclusao('${recado.id}')">
            Deletar
            <i class="bi bi-trash"></i>
          </button>
          <button type="button" class="btn btn-success" onclick="prepararAtualizacao('${recado.id}', '${recado.title}', '${recado.description}')">
            Editar
            <i class="bi bi-pencil-square"></i>
          </button>
        </div>
      </div>
    `
    rowListaRecados.appendChild(divCol)
  })
}

function criarPaginacao(totalRecados) {
  const totalPaginas = Math.ceil(totalRecados / limite) // 10 = 2 paginas
  const containerPaginacao = document.getElementById('container-pagination')

  containerPaginacao.innerHTML = `
    <li class="page-item">
      <a class="page-link" id="prev-link">Voltar</a>
    </li>
  `

  for (let i = 1; i <= totalPaginas; i++) {
    if (page === i) {
      containerPaginacao.innerHTML += `
      <li class="page-item active">
        <a class="page-link">${i}</a>
      </li>
    `
    } else {
      containerPaginacao.innerHTML += `
      <li class="page-item">
        <a class="page-link">${i}</a>
      </li>
    `
    }


  }

  containerPaginacao.innerHTML += `
    <li class="page-item">
      <a class="page-link" id="next-link">Próximo</a>
    </li>
  `

  const links = document.querySelectorAll('.page-link')

  links.forEach((link) => {
    link.addEventListener('click', async function () {
      switch (link.id) {
        case 'prev-link':
          page--
          break;
        case 'next-link':
          page++
          break;
        default:
          page = Number(link.innerText)
      }

      await listarRecados()
    })
  })

  const prevLink = document.getElementById('prev-link')
  const nextLink = document.getElementById('next-link')


  if (page === 1) {
    prevLink.classList.add('disabled')
  } else {
    prevLink.classList.remove('disabled')
  }

  if (page === totalPaginas) {
    nextLink.classList.add('disabled')
  } else {
    nextLink.classList.remove('disabled')
  }

}


// EXCLUSÃO DO RECADO
function prepararExclusao(id) {
  alert(`RECADO -> ${id}`)
}

// ATUALIZAR DO RECADO
function prepararAtualizacao(id, titulo, descricao) {
  alert(`RECADO -> ${id}, ${titulo} ${descricao}`)
}


function logout() {
  localStorage.removeItem('user')

  window.location.href = '/index.html'
}
