// login.js

document.addEventListener("DOMContentLoaded", function() {
    var botaoLogin = document.getElementById("botao");
    botaoLogin.addEventListener("click", fazerLogin);
});

function fazerLogin() {
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
