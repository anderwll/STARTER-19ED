const api = axios.create({
  // baseURL: "https://api-recados-xs31.onrender.com",
  baseURL: "http://localhost:3333",
});

async function postSignup(nome, email, senha) {
  try {
    const dadosUsuario = {
      name: nome,
      email: email,
      password: senha,
    };

    const resposta = await api.post("/signup", dadosUsuario);

    return resposta.data; // {succes, message, data}
  } catch (error) {
    return error.response.data; // {succes, message, data}
  }
}

async function postLogin(email, senha) {
  try {
    const login = {
      email: email,
      password: senha,
    };

    const resposta = await api.post("/login", login);

    localStorage.setItem("user", JSON.stringify(resposta.data.data));

    return resposta.data;
  } catch (error) {
    return error.response.data;
  }
}

async function postMessage(token, titulo, descricao) {
  try {
    const objetoMensagem = {
      title: titulo,
      description: descricao,
    };

    const config = {
      headers: {
        Authorization: user.id,
      },
    };

    const resposta = await api.post("/recados", objetoMensagem, config);



  } catch (error) { }
}

// BUSCAR RECADOS
async function getRecados(userId, pagina, limite) {
  try {
    const config = {
      headers: {
        Authorization: userId
      }
    }

    const resposta = await api.get(`/recados?page=${pagina}&limit=${limite}`, config)

    return resposta.data // { success, message, data: { recados, total  }  }

  } catch (error) {
    return error.response.data
  }
}

