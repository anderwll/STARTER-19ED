document.addEventListener("DOMContentLoaded", () => {
  const username = JSON.parse(localStorage.getItem("user")).name;
  const userLogin = document.getElementById("user-login");
  userLogin.innerText = username;
});

const token = JSON.parse(localStorage.getItem("user")).id;

const formRecado = document.getElementById("form-recado");

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

  const response = await postMessage(token, title, description);

  showLoading(false);

  if (!response.success) {
    alertSign(true, "danger", response.message);
    return;
  }

  alertSign(true, "success", response.data.message);
  formRecado.reset();
});
