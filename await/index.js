// Função assíncrona que espera por uma Promise
async function executarTarefa() {
    try {
      const resultado = await esperarPor(2);
      console.log(resultado); // Saída após 2 segundos: "Esperei por 2 segundos."
    } catch (erro) {
      console.error(erro);
    }
  }
  
  executarTarefa();
  