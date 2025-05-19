function validarCartao() {
  const input = document.querySelector('#numeroCartao');
  let numeroCartao = input.value.replace(/\D/g, "");

  const bandeiras = {
    Visa: { prefixos: ["4"], comprimentos: [13, 19] },
    VisaElectron: { prefixos: ["4026", "4173", "4508", "4844", "4913"], comprimentos: [16] },
    MasterCard: {
      prefixos: [
        ...Array.from({ length: 5 }, (_, i) => (51 + i).toString()),
        ...Array.from({ length: 500 }, (_, i) => (2221 + i).toString())
      ],
      comprimentos: [16]
    },
    "American Express": { prefixos: ["34", "37"], comprimentos: [15] },
    "Diners Club": {
      prefixos: ["300", "301", "302", "303", "304", "305", "36", "38"],
      comprimentos: [14]
    },
    Discover: {
      prefixos: [
        "6011",
        "65",
        ...Array.from({ length: 6 }, (_, i) => (644 + i).toString())
      ],
      comprimentos: [16, 19]
    },
    JCB: {
      prefixos: Array.from({ length: 62 }, (_, i) => (3528 + i).toString()),
      comprimentos: [16, 19]
    },
    Maestro: { prefixos: ["5018", "5020", "5038", "6304", "6759"], comprimentos: [12, 13, 14, 15, 16, 17, 18, 19] },
    Elo: { prefixos: ["4011", "4312", "4389", "4514", "4576", "4577", "5041", "5067", "5090", "6277", "6362"], comprimentos: [16, 17, 18, 19] },
    Hipercard: { prefixos: ["606282", "637095", "637599", "637609", "637612", "637613", "637614", "637615", "637616"], comprimentos: [16, 17, 18, 19] }
  };

  function luhnCheck(numero) {
    let soma = 0;
    let alternar = false;
    for (let i = numero.length - 1; i >= 0; i--) {
      let digito = parseInt(numero[i], 10);
      if (alternar) {
        digito *= 2;
        if (digito > 9) digito -= 9;
      }
      soma += digito;
      alternar = !alternar;
    }
    return soma % 10 === 0;
  }

  const valido = luhnCheck(numeroCartao);
  let bandeira = null;

  if (valido) {
    for (const [nome, regras] of Object.entries(bandeiras)) {
      for (const prefixo of regras.prefixos) {
        if (
          numeroCartao.startsWith(prefixo) &&
          regras.comprimentos.includes(numeroCartao.length)
        ) {
          bandeira = nome;
          break;
        }
      }
      if (bandeira) break;
    }
  }

  const mensagem = document.querySelector('#mensagem');
  if (valido && bandeira) {
    mensagem.textContent = `Seu cartão tem a bandeira ${bandeira}.`;
  } else {
    mensagem.textContent = 'Número de cartão inválido ou bandeira não identificada.';
  }
}

const input = document.getElementById('numeroCartao');
const container = document.getElementById('container');

input.addEventListener('focus', () => {
  container.classList.add('shrink');
});

input.addEventListener('blur', () => {
  container.classList.remove('shrink');
});