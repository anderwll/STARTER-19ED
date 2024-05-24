
/*
    Axios é uma ferramenta que nos permite fazer requisições HTTP (Hypertext Transfer Protocol).

    Usa "promessas" (promises), que ajudam a lidar com operações assíncronas.

    Utiliza verbos HTTP
    - get
    - post
    - delete
    - put

    Retorna:
    - status Code: 1xx, 2xx, 3xx, 4xx, 5xx
    - sata: Contem o conteúdo da api de fato. => [], {}, "", 0
    - ...outros dados (documentação)

*/

// -------------- LISTAGEM DE USUÁRIOS --------------------

// THEN / CATCH / FINALLY

function buscarUsuarios() {
    api.get('/users')
        .then(function (resposta) {

            // Requisição foi bem-sucedida
            console.log(resposta);
        })
        .catch(function (erro) {

            // Requisão falhar.
            console.error(erro);
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
    AWAIT: Aguarando até a api responder

*/

async function listaUsuarios() {
    try {
        const resposta = await api.get('/users')

        // Requisição bem-sucedida
        console.log(resposta)
    } catch (erro) {

        // Requisão falhar.
        console.log(erro)
    } finally {

        // Independente se for sucesso ou não
        console.log('Finalizou a requisição...')
    }
}

// -------------- CHAMADA DAS FUNCÕES --------------------
// window.onload = buscarUsuarios()
window.onload = listaUsuarios()


// EXEMPLO DE COMO FUNCIONA THEN/CATCH E TRY/CATCH
/*
    - THEN / TRY
    if(sucesso) {
        faz algo
    }

    - CATH
    if(erro) {
        faz algo
    }

    - FINALLY
    faz algo
*/