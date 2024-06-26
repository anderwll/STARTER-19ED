function alertCadastro(mostrar, tipo, mensagem) {
    const feedCadastro = document.getElementById('feedback-cadastro')

    if (mostrar) {
        feedCadastro.innerHTML = `
            <div
                class="alert alert-${tipo} alert-dismissible fade show"
                role="alert"
            >
               ${mensagem}
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>
        `
    } else {
        feedCadastro.innerHTML = ''
    }


    setTimeout(() => {
        feedCadastro.innerHTML = ''
    }, 2000)
}

// SPINNSER LOADING
function showLoading(mostrar) {
    const btn = document.getElementById('btn-cadastro-usuario')

    if (mostrar) {
        btn.classList.add("px-5")
        btn.setAttribute('disabled', "true")
        btn.innerHTML = `
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        `
    } else {
        btn.classList.add("px-0")
        btn.removeAttribute("disabled")
        btn.innerText = 'Confirmar'
    }
}