const api = axios.create({
    baseURL: 'https://postnotes-api.onrender.com'
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
        localStorage.setItem("user",user)
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
                Authorization: userId
            }
        }

        const response = await api.post(`/message`, noteData, config)
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

        const response = await api.get(`/message?page=${page}&limit=${limit}`, config)

        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function deleteNote(noteId) {
    try {
        const response = await api.delete(`/message/${noteId}`)
        
        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function updateNote(noteId, title, description) {
    try {
        const noteData = {
            title: title,
            description: description
        }

        const response = await api.put(`/message/${noteId}`, noteData)

        return response.data
    } catch (error) {
        return error.response.data
    }

}