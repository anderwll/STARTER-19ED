const api = axios.create({
    baseURL: "https://api-recados-xs31.onrender.com"
})

async function postSignup(name, email, password) {
    try {
        const userData = {
            name: name,
            email: email,
            password: password
        }

        const response = await api.post(`/signup`, userData)
        return response.data

    } catch (error) {
        return error.response.data
    }
}

async function postLogin(email, password) {
    try {
        const userData = {
            email: email,
            password: password
        }

        const response = await api.post(`/login`, userData)

        const user = JSON.stringify(response.data.data)
        localStorage.setItem("user", user)
        return response.data

    } catch (error) {
        return error.response.data
    }
}

async function postNote(userId, title, description) {
    try {
        const noteData = {
            title: title,
            description: description
        }

        const config = {
            headers: {
                Authorization: userId // 12321321
            }
        }

        const response = await api.post(`/recados`, noteData, config)
        return response.data

    } catch (error) {
        return error.response.data
    }
}

async function getNotes(userId, page, limit) {
    try {
        const config = {
            headers: {
                Authorization: userId
            }
        }

        const response = await api.get(`/recados?page=${page}&limit=${limit}`, config)

        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function deleteNote(userId, noteId) {
    try {
        const config = {
            headers: {
                Authorization: userId
            }
        }

        const response = await api.delete(`/recados/${noteId}`, config)

        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function updateNote(userId, noteId, title, description) {
    try {
        const config = {
            headers: {
                Authorization: userId
            }
        }

        const noteData = {
            title: title,
            description: description
        }

        const response = await api.put(`/recados/${noteId}`, noteData, config)

        return response.data
    } catch (error) {
        return error.response.data
    }

}

async function getUser(userId) {
    try {
        const config = {
            headers: {
                Authorization: userId
            }
        }
        const response = await api.get(`/users/${userId}`, config)

        return response.data
    } catch (error) {
        return error.response.data
    }
}

/* 
    Rota: users/:id 
	Verbo: GET
	Autenticação: Sim
*/