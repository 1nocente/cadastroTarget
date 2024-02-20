

function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar_senha").value;

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Verificar se o usuário já existe
    if (localStorage.getItem(email)) {
        alert("Este email já está cadastrado.");
        return;
    }

    // Armazenar os dados do usuário no localStorage
    var usuario = {
        nome: nome,
        senha: senha
    };

    localStorage.setItem(email, JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
}

function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Verificar se o usuário existe
    var usuarioArmazenado = localStorage.getItem(email);

    if (!usuarioArmazenado) {
        alert("Usuário não encontrado. Faça o cadastro primeiro.");
        return;
    }

    // Verificar se a senha está correta
    var usuario = JSON.parse(usuarioArmazenado);

    if (usuario.senha !== senha) {
        alert("Senha incorreta. Tente novamente.");
        return;
    }

    alert("Login bem-sucedido!");
}
