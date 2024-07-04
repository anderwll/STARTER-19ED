const modalSignup = new bootstrap.Modal('#modal-signup')

const formLogin = document.getElementById('form-login')
const formSignup = document.getElementById('form-signup')

formLogin.addEventListener('submit', async (event) => {
  event.preventDefault()
//checkvalidity verifica se o elemento está correto, verificando o required, minLength etc - retorna true ou false
    if (!formLogin.checkValidity()) {
        event.stopPropagation()
        formLogin.classList.add('was-validated')
        return
      }

      const email = event.target.email.value
      const password = event.target.password.value

      showLoading(true, "btn-login")
      const response = await postLogin(email, password)
      showLoading(false, "btn-login")

      if(!response.success) {
        alertSign(true, "danger", response.message, "feedback-login")
        return
      }
      
      alertSign(true, "success", response.message, "feedback-login")      
      formLogin.reset()      
      document.location.href = './home.html'
})

formSignup.addEventListener('submit', async (event) => {
  event.preventDefault()

    if (!formSignup.checkValidity()) {
        event.stopPropagation()
        formSignup.classList.add('was-validated')
        return
      }

      const name = event.target['name-signup'].value
      const email = event.target['email-signup'].value
      const password = event.target['password-signup'].value
      const passwordConfirm = event.target['password-confirm'].value

      if(password !== passwordConfirm) {
        alertSign(true, "danger", "Senhas não conferem!", "feedback-signup")
        return
      }

      showLoading(true, "btn-confirm-signup")

      const response = await postSignup(name, email, password)

      showLoading(false, "btn-confirm-signup")

      if(!response.success) {
        return alertToast(response.message, "danger")
      }      
      alertToast(response.message, "success")      
      
      formSignup.reset()     
      setTimeout(() => {
        modalSignup.hide()
      }, 2000)
})