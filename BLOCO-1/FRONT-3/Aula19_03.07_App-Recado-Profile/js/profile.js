const changeForm = document.getElementById("form-change-password") 
const nome = document.getElementById("name")
const email = document.getElementById("email")
const userId = JSON.parse(localStorage.getItem('user')).id

async function getProfile(){
    const response = await getUser(userId)
    if(!response.success){
        alertToast(response.message, "danger")
        return
    }
    return response.data
}

window.addEventListener("DOMContentLoaded", async () => {
    const profile = await getProfile()
    nome.value = profile.name
    email.value = profile.email

});

changeForm.addEventListener("submit", function(event){
    event.preventDefault()
    if(!changeForm.checkValidity()){
        event.stopPropagation()
        changeForm.classList.add("was-validated")
        return
    }
    const newPassword = event.target.password.value
    const confirmPassword = event.target.passwordConfirm.value

    if(newPassword !== confirmPassword){
        alertToast("Senhas não coincidem", "danger")
        return
    }

    alertToast("Sucesso", "success")
   console.log(`senha: ${newPassword},Confirmação de senha: ${confirmPassword}`)
   
    



} );


 