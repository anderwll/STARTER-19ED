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
    console.log(profile)
});