const botao = document.getElementById('botao');

botao.addEventListener('click', async function () {
  const senha = document.getElementById('senha').value;
  const email = document.getElementById('email').value;

  if (email === '' || senha === '') {
    alert('Preencha os campos corretamente !!!');
    return;
  }

  try {
    const responseApi = await fetch('http://localhost:5080/usuario');
    const listUsers = await responseApi.json();

    if (!Array.isArray(listUsers)) {
      throw new Error('A resposta da API não é um array de usuários.');
    }

    const user = listUsers.find(user => user.email === email && user.senha === senha);

    if (!user) {
      alert('Usuário ou senha inválidos.');
      return;
    }

    localStorage.setItem('IdUsuario', user.id);
    localStorage.setItem('nomeUsuario', user.nome);
    alert('Usuario Logado com Sucesso !!');
    window.location.href = '/Target_front/tarefas/tarefas.html';
  } catch (error) {
    console.error(error);
    alert('Ocorreu um erro ao tentar logar. Tente novamente mais tarde.');
  }
});
