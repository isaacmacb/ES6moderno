function esperarPor(segundos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Esperei por ${segundos} segundos.`);
      }, segundos * 1000);
    });
  }
  
  esperarPor(3)
    .then((mensagem) => {
      console.log(mensagem);
    });
  