function alertCadastro(mostrar, tipo, mensagem) {
  const feedCadastro = document.getElementById("feedback-cadastro");

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
        `;
  } else {
    feedCadastro.innerHTML = "";
  }

  setTimeout(() => {
    feedCadastro.innerHTML = "";
  }, 2000);
}

// SPINNSER LOADING
function showLoading(mostrar) {
  const btn = document.getElementById("btn-cadastro-usuario");

  if (mostrar) {
    btn.classList.add("px-5");
    btn.setAttribute("disabled", "true");
    btn.innerHTML = `
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        `;
  } else {
    btn.classList.add("px-0");
    btn.removeAttribute("disabled");
    btn.innerText = "Confirmar";
  }
}

// TOAST

function alertToast(mensagem, tipo) {
  const container = document.getElementById("containerToast");

  container.innerHTML = `<div class="toast align-items-center text-bg-${tipo}" id="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${mensagem}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>`;

  const toastNotificacao = new bootstrap.Toast("#toast");
  toastNotificacao.show();
}
