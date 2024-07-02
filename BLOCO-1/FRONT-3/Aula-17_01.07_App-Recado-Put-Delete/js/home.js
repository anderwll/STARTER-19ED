let idNote = null
const modalNote = new bootstrap.Modal('#modal-note')
const modalDelete = new bootstrap.Modal('#modal-delete')

const formNote = document.getElementById('form-note')
const btnLogout = document.getElementById('btn-logout')
const btnDelete = document.getElementById('btn-delete')

window.addEventListener("DOMContentLoaded", () => {
  try {
      const userId = JSON.parse(localStorage.getItem("user")).id
      return userId
          
  } catch (error) {
      alert('Faça login!')
      return window.location.href = 'login.html'
  }
})

let page = 1
let limit = 8

document.addEventListener('DOMContentLoaded', async function() {
  await listNotes()
})

document.addEventListener('DOMContentLoaded', () => {
    const username = JSON.parse(localStorage.getItem("user")).name
    const userLogin = document.getElementById('user-login')
    userLogin.innerText = username
})

btnLogout.addEventListener('click', (event) => {
    event.preventDefault()
    logout()
})

formNote.addEventListener('submit', async (event) => {
    event.preventDefault() 

    const title = event.target.title.value
    const description = event.target.description.value  
    const userId = JSON.parse(localStorage.getItem("user")).id  
    
    if(!formNote.checkValidity) {
      event.stopPropagation()
      formNote.classList.add("was-validated")
      return
    }

    if(idNote) {      

      showLoading(true, "btn-confirm-note")
      const response = await updateNote(idNote, title, description)
      showLoading(false, "btn-confirm-note")

    if(!response.success) {
        alertSign(true, "danger", response.message, "feedback-note")
        return
      }
      
      alertSign(true, "success", response.message, "feedback-note")      
      formNote.reset()
      listNotes()
      idNote = null      
      setTimeout(() => {
        modalNote.hide()
      }, 1000)
      return
    }

    showLoading(true, "btn-confirm-note")
    const response = await postNote(userId, title, description)
    showLoading(false, "btn-confirm-note")

    if(!response.success) {
        alertSign(true, "danger", response.message, "feedback-note")
        return
      }
      
      alertSign(true, "success", response.message, "feedback-note")      
      formNote.reset()
      listNotes()
      setTimeout(() => {
        modalNote.hide()
      }, 1000)
})

async function listNotes() {
  const userId = JSON.parse(localStorage.getItem("user")).id

  showLoadingNotes(true)
  const response = await getNotes(userId, page, limit)
  showLoadingNotes(false)

  if(!response.success) {
    alertToast(response.message, "danger")
    logout()
    return
  }
  showCards(response.data.notes)
  createPagination(response.data.total)
}

function showCards(notes) {
  const rowListNotes = document.getElementById('list-notes')

  if(notes.length === 0) {
    const p = document.createElement('p')

    p.classList.add('text-center', 'fst-italic', 'fs-4', 'text-secondary')
    p.innerText = 'Nenhum recado cadastrado!'

    rowListNotes.appendChild(p)
  }

  rowListNotes.innerHTML = ''

  notes.forEach((note) => {
    const divCol = document.createElement('div')
    divCol.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4')

    divCol.innerHTML = `
      <div class="card">
          <div class="card-header">
            <h5 class="card-title">${note.title}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">${note.description}</p>
          </div>
          <div class="card-footer text-end d-flex gap-2 justify-content-end">
              <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal-delete" onclick="preDelete('${note.id}')">
                <i class="bi bi-trash3"></i> Deletar</button>
              <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-note" onclick="preUpdate('${note.id}', '${note.title}', '${note.description}')">
                <i class="bi bi-pencil"></i> Editar</button>
          </div>
        </div>
    `
    rowListNotes.appendChild(divCol)
  })
}

function createPagination(notes) {
  const totalPages = Math.ceil(notes / limit)
  const containerPagination = document.getElementById('ul-pagination')

  containerPagination.innerHTML = `
    <li class="page-item">
      <a class="page-link" id="prev-link">Voltar</a>
    </li>
  `

  for(let i = 1; i <= totalPages; i++){
    if(page === i) {
      containerPagination.innerHTML += `
        <li class="page-item active">
          <a class="page-link">${i}</a>
        </li>
      `
    } else {
      containerPagination.innerHTML += `
      <li class="page-item">
        <a class="page-link">${i}</a>
      </li>
    `
    }    
  }

  containerPagination.innerHTML += `
    <li class="page-item">
      <a class="page-link" id="next-link">Próxima</a>
    </li>
  `

  const links = document.querySelectorAll('.page-link')

  links.forEach((link) => {
    link.addEventListener('click', async () => {

      switch (link.id) {
        case 'prev-link':
          page--          
          break;
        case 'next-link':
          page++
          break;      
        default:
          page = Number(link.innerText)
          break;
      }

      await listNotes()
    })
  })

  const prevLink = document.getElementById('prev-link')
  const nextLink = document.getElementById('next-link')

  if(page === 1) {
    prevLink.classList.add('disabled')
  } else {
    prevLink.classList.remove('disabled')
  }

  if(page === totalPages) {
    nextLink.classList.add('disabled')
  } else {
    nextLink.classList.remove('disabled')
  }
}

//DELETAR RECADO
function preDelete(noteId) {
  btnDelete.addEventListener('click', async function() {

    showLoading(true, 'btn-delete')
    const response = await deleteNote(noteId)
    showLoading(false, 'btn-delete')
  
    if(!response.success) {
      alertToast(response.message, 'danger')
      return
    }
  
    setTimeout(() => {
      listNotes()
      modalDelete.hide()
    }, 1000);
    
    alertToast(response.message, 'success')
    })
}

//ATUALIZAR RECADO
function preUpdate(noteId, title, description) {
  idNote = noteId
  const newTitle = document.getElementById('title')
  const newDescription = document.getElementById('description')
  const label = document.getElementById('modal-note-sign')
  label.innerText = 'Atualizar Recado'

  newTitle.value = title
  newDescription.value = description
}

function logout() {
  localStorage.removeItem('user')
  window.location.href = '/index.html'
}