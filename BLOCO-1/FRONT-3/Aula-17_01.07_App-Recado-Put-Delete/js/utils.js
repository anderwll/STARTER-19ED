function checkUser() {
    const userId = JSON.parse(localStorage.getItem("user")).id
    if (!userId) {
        alert('Faça login!')
        return window.location.href = 'index.html'
    }
}

function alertSign(show, type, message, idTag) {
    const tag = document.getElementById(idTag)
    const prevText = tag.innerHTML

    if(show) {
        tag.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert"> 
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>        
        `
    } else {
        tag.innerHTML = ''
    }

    setTimeout(() => {
        tag.innerHTML = prevText
    }, 2000)
}

function alertToast(message, type) {
    const container = document.getElementById("container-toast")
  
    container.innerHTML = `        
        <div class="toast align-items-center text-bg-${type}" id="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>`
  
    const toastNotification = new bootstrap.Toast("#toast")
    toastNotification.show()
  }

function showLoading(show, idTag) {
    const btn = document.getElementById(idTag)

    if(show) {
        btn.setAttribute('disabled', true)
        btn.innerHTML = `
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Aguarde</span>
        `
    } else {
        btn.removeAttribute('disabled')
        btn.innerText = 'Confirmar'
    }
}

function showLoadingNotes(show) {
    const listNotes = document.getElementById('list-notes')

    if (show) {
        listNotes.innerHTML = `
        <div class="d-flex align-items-center text-center justify-content-center gap-1">
            <h5 class="fst-italic fs-4 text-secondary me-2">
            Buscando seus recados
            </h5>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            </div>
        </div>
        `
    } else {
        listNotes.innerHTML = ''
    }
}
