// Função que retorna uma Promise que resolve após um tempo
function esperarPor(segundos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Esperei por ${segundos} segundos.`);
      }, segundos * 1000);
    });
  }
  
  // Usando a Promise
  esperarPor(3)
    .then((mensagem) => {
      console.log(mensagem); // Saída após 3 segundos: "Esperei por 3 segundos."
    })
    .catch((erro) => {
      console.error(erro);
    });
  