const modalCadastro = new bootstrap.Modal("#modalCadastro");

const formLogin = document.getElementById("form-login");
const formCadastro = document.getElementById("form-cadastro");

// --------- EVENTO OUVINTE PARA O LOGIN --------------
formLogin.addEventListener("submit", async function (evento) {
  evento.preventDefault();

  if (!formLogin.checkValidity()) {
    evento.preventDefault();
    evento.stopPropagation();
  }

  formLogin.classList.add("was-validated");

  const email = evento.target.email.value;
  const senha = evento.target.senha.value;

  showLoading(true);
  const resposta = await postLogin(email, senha);
  showLoading(false);

  if (!resposta.success) {
    alertToast(resposta.message, "danger");
    return;
  }

  alertToast(resposta.message, "success");
  formLogin.reset();
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1500);
});

// --------- EVENTO OUVINTE PARA O CADASTRO --------------

formCadastro.addEventListener("submit", async function (evento) {
  evento.preventDefault();

  /*
        checkValidity()
        É uma função fornecida pela API do HTML5 que valida se o form ou elemento
        esta correto => requerid, minLength,....
    
        retorne true ou false
    */
  if (!formCadastro.checkValidity()) {
    evento.stopPropagation();
    formCadastro.classList.add("was-validated");
    return;
  }

  const nome = evento.target["nome-cadastro"].value;
  const email = evento.target["email-cadastro"].value;
  const senha = evento.target["senha-cadastro"].value;
  const reSenha = evento.target["reSenha-cadastro"].value;

  if (senha !== reSenha) {
    alertCadastro(true, "danger", "As senhas não conferem!");
    return;
  }

  // ENVIAR OS DADOS PARA A API
  showLoading(true);
  const resposta = await postSignup(nome, email, senha);
  showLoading(false);

  if (!resposta.success) {
    alertCadastro(true, "danger", resposta.message);
    return;
  }

  alertCadastro(true, "success", resposta.message);
  formCadastro.reset();
  setTimeout(() => {
    modalCadastro.hide();
  }, 2000);
});
