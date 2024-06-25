// FORM DE LOGIN
const formLogin = document.getElementById('form-login')

formLogin.addEventListener('submit', function (evento) {
    if (!formLogin.checkValidity()) {
        evento.preventDefault()
        evento.stopPropagation()
    }

    formLogin.classList.add('was-validated')
})