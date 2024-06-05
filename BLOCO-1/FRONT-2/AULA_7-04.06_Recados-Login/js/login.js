const formLogin = document.getElementById('form-login');

async function login(email, password) {
    try {

        const dadosBody = {
            email,
            password
        }

        // -------- requeried - requeried - opcional
        // api.post('enpoint', dadosBody, configs)
        const resposta = await api.post('/login', dadosBody)


        // SUCESSO
        // nomeVariavel.data => data da requisição 
        console.log(resposta.data)

        // Uma garantia, mas não necessário.
        if (!resposta.data.success) {
            alert(resposta.data.message)
        }
        /* 
            Dentro do window.location temos acesso metodos 
            e variaveis relacionado do url do nosso navegador

            href = Temos acesso a qual página HTML estamos,
                e podemos navegar para outra.
        */
        window.location.href = 'listagem.html'
        formLogin.reset()

    } catch (meuErro) {
        // ERROR
        console.error(meuErro)
        alert(meuErro.response.data.message)
    }
}

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    // evento.target.[name da tag input].value
    const email = event.target.email.value
    const password = event.target.password.value

    // CHAMA A FUNÇÃO
    login(email, password)
    console.log({ email, password })
})
