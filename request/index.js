// Fazendo uma requisição GET usando fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados.');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Exibe os dados recebidos do servidor
  })
  .catch((error) => {
    console.error(error);
  });

//Este exemplo faz uma solicitação GET para um serviço de teste (JSONPlaceholder) e exibe os dados retornados no console
