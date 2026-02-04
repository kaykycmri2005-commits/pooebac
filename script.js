class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcularTempo() {
    if (this.valor < 1.00) {
      return {
        erro: true,
        mensagem: "Valor insuficiente"
      };
    }

    let tempo = 0;
    let valorUsado = 0;

    if (this.valor >= 3.00) {
      tempo = 120;
      valorUsado = 3.00;
    } else if (this.valor >= 1.75) {
      tempo = 60;
      valorUsado = 1.75;
    } else if (this.valor >= 1.00) {
      tempo = 30;
      valorUsado = 1.00;
    }

    let troco = (this.valor - valorUsado).toFixed(2);

    return {
      erro: false,
      tempo: tempo,
      troco: troco
    };
  }
}

function calcular() {
  const valorInput = document.getElementById("valor").value;
  const resultadoDiv = document.getElementById("resultado");

  const parquimetro = new Parquimetro(parseFloat(valorInput));
  const resultado = parquimetro.calcularTempo();

  if (resultado.erro) {
    resultadoDiv.innerHTML = `<p class="erro">${resultado.mensagem}</p>`;
  } else {
    resultadoDiv.innerHTML = `
      <p>⏱️ Tempo: <strong>${resultado.tempo} minutos</strong></p>
      <p>💰 Troco: <strong>R$ ${resultado.troco}</strong></p>
    `;
  }
}
