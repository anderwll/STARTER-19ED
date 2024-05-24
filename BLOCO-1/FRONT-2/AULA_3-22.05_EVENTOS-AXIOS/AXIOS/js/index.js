
/*
    Axios utiliza verbos HTTP
    - get
    - post
    - delete
    - put

    Axios retorna:
    - Status Code: 1xx, 2xx, 3xx, 4xx, 5xx
    - Data: Contem o conteúdo da api de fato. => [], {}, "", 0

*/

// -------------- LISTAGEM DE USUÁRIOS --------------------

// THEN / CATCH / FINALLY

function buscarUsuarios() {
    api.get('/users')
        .then(function (resposta) {

            // Requisição foi bem-sucedida
            console.log(resposta);
        })
        .catch(function (error) {

            // Requisão falhar.
            console.error(error);
        })
        .finally(function () {

            // Independente se for sucesso ou não
            console.log('Finalizou a requisição...')
        })
}

// TRY / CATCH / FINALLY (forma mais moderna, atual)

/* 
    ---- PROMISE ----
    ASYNC: Requisição assíncrona, temos que esperar
    AWAIT: Aguarando enquanto até responder

*/

async function listaUsuarios() {
    try {
        const resposta = await api.get('/users')

        // Requisição bem-sucedida
        console.log(resposta)
    } catch (error) {

        // Requisão falhar.
        console.log(error)
    } finally {
        // Independente se for sucesso ou não
        console.log('Finalizou a requisição...')
    }
}

// EXEMPLO DE COMO FUNCIONA THEN/CATCH E TRY/CATCH
/*
    if(sucesso) {
        faz algo
    }

    if(erro) {
        faz algo
    }

    faz algo
*/


// window.onload = buscarUsuarios()
window.onload = listaUsuarios()