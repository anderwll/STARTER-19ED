
const api = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 1000,
    headers: {}
});

// http://localhost:3333/recados?id=asd (query)

// http://localhost:3333/message/:email (params)