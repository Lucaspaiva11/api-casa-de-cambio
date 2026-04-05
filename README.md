# 💱 API Casa de Câmbio

Uma API RESTful desenvolvida em Node.js e TypeScript que realiza conversões de moedas em tempo real consumindo dados da [AwesomeAPI](https://docs.awesomeapi.com.br/).

## 🚀 Tecnologias Utilizadas

* **Node.js** & **Express**: Construção do servidor web e roteamento.
* **TypeScript**: Tipagem estática para maior segurança no código.
* **Axios**: Cliente HTTP para consumir APIs externas.
* **Dotenv**: Gerenciamento de variáveis de ambiente.
* **Programação Orientada a Objetos (POO)**: Regras de negócio isoladas em classes.

## ⚙️ Funcionalidades

* Consulta de cotações de moedas estrangeiras em tempo real.
* Cálculo matemático de conversão baseado no valor fornecido pelo usuário.
* Tratamento de exceções e erros para moedas não suportadas.

## 🛣️ Como usar a API (Endpoints)

### `GET /converter/:moeda/:valor`

Retorna a conversão de um valor específico da moeda desejada para o Real Brasileiro (BRL).

**Exemplo de Requisição:**
`http://localhost:3000/converter/USD/100`

**Exemplo de Resposta (Sucesso - 200 OK):**
```json
{
  "moedaOrigem": "USD",
  "valorOriginal": 100,
  "taxaDeCambio": 5.12,
  "valorConvertido": 512.00
}

´´´

## ❌ Exemplo de Resposta (Erro - 400 Bad Request)

```json
{
  "erro": "Moeda inválida ou não suportada"
}