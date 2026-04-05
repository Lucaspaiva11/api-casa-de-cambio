# 💱 API Casa de Câmbio

Uma API RESTful desenvolvida em Node.js e TypeScript que realiza conversões de moedas em tempo real consumindo dados da [AwesomeAPI](https://docs.awesomeapi.com.br/).

## 🚀 Tecnologias Utilizadas

- **Node.js** & **Express**: Construção do servidor web e roteamento.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **Axios**: Cliente HTTP para consumir APIs externas.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Programação Orientada a Objetos (POO)**: Regras de negócio isoladas em classes.

## ⚙️ Funcionalidades

- Consulta de cotações de moedas estrangeiras em tempo real.
- Cálculo matemático de conversão baseado no valor fornecido pelo usuário.
- Tratamento de exceções e erros para moedas não suportadas.

## 🛣️ Endpoints

### `GET /converter/:moeda/:valor`

Retorna a conversão de um valor específico da moeda desejada para o Real Brasileiro (BRL).

**Exemplo de Requisição:**

```
http://localhost:3000/converter/USD/100
```

**Resposta de Sucesso — `200 OK`:**

```json
{
  "moedaOrigem": "USD",
  "valorOriginal": 100,
  "taxaDeCambio": 5.12,
  "valorConvertido": 512.00
}
```

**Resposta de Erro — `400 Bad Request`:**

```json
{
  "erro": "Moeda inválida ou não suportada"
}
```

## 💻 Como Rodar Localmente

**1. Clone o repositório:**

```bash
git clone https://github.com/Lucaspaiva11/api-casa-de-cambio.git
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Crie um arquivo `.env` na raiz do projeto:**

```env
PORTA_SERVIDOR=3000
```

**4. Inicie o servidor:**

```bash
npx ts-node server.ts
```