const api = axios.create({
    baseURL: 'https://api-recados-xs31.onrender.com',
})

async function postSignup(nome, email, senha) {
    try {
        const dadosUsuario = {
            name: nome,
            email: email,
            password: senha
        }
        const resposta = await api.post('/signup', dadosUsuario)

        return resposta.data // {succes, message, data}
    } catch (error) {
        return error.response.data // {succes, message, data}
    }
}