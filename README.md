# Validador de Cartão de Crédito

Este é um projeto simples de validação de cartões de crédito. Ele permite que os usuários insiram o número de um cartão e verifiquem se ele é válido ou não, utilizando o algoritmo de Luhn. O design da interface é moderno, com aparência profissional, inspirado em sistemas bancários.

## Funcionalidades

- Validação de números de cartão de crédito.
- Feedback visual para o usuário.
- Design responsivo e centralizado.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização moderna com aparência de banco.
- **JavaScript**: Lógica de validação e interatividade.

## Estrutura do Projeto

- `index.html`: Estrutura principal da página.
- `styles.css`: Estilos para a interface do usuário.
- `index.js`: Lógica de validação e interatividade.

## Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/validador-cartao.git
    ```markdown
# Validador de Cartão de Crédito

Este é um projeto simples de validação de cartões de crédito. Ele permite que os usuários insiram o número de um cartão e verifiquem se ele é válido ou não, utilizando o algoritmo de Luhn. O design da interface é moderno, com aparência profissional, inspirado em sistemas bancários.

## Funcionalidades

- Validação de números de cartão de crédito.
- Feedback visual para o usuário.
- Design responsivo e centralizado.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização moderna com aparência de banco.
- **JavaScript**: Lógica de validação e interatividade.

## Estrutura do Projeto

- `index.html`: Estrutura principal da página.
- `styles.css`: Estilos para a interface do usuário.
- `index.js`: Lógica de validação e interatividade.

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/validador-cartao.git
   ```

2. Abra o arquivo `index.html` em seu navegador.
   
3. Insira o número do cartão no campo de entrada e veja o resultado.

## Funcionalidade de Interatividade

O projeto inclui uma funcionalidade de animação para o campo de entrada. Quando o usuário clica no campo, o contêiner recebe a classe `shrink`, é utilizada para efeito de responsividade mas também pode ser usada para criar efeitos visuais, como animações ou mudanças de estilos futuramente .

### Exemplo de Código
```javascript
input.addEventListener('focus', () => {
  container.classList.add('shrink');
});

input.addEventListener('blur', () => {
  container.classList.remove('shrink');
});
```

## Melhorias Futuras

- Adicionar suporte para diferentes bandeiras de cartão.
- Implementar validação em tempo real.
- Criar uma API para validação de cartões.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

