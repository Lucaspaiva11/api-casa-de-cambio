import dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import axios from 'axios';
import { CalculadoraCambio } from './index';

// pega variavel do .env e traz para o node
dotenv.config();

// Inicializa o express
const app = express();
app.use(express.json())

// pega o valor que o dotenv injetou na memória, se der erro roda na 3000
const porta = process.env.PORTA_SERVIDOR || 3000;


app.get('/converter/:moeda/:valor', async (req: Request, res: Response) => {
    try {
        // pega o retorno de moeda e guarga como maiuscula
        const moeda = String(req.params.moeda).toUpperCase();
        // pega o valor e joga como number
        const valor = Number(req.params.valor);
        // usa o axios para pegar a API e adicionar a moeda
        const response = await axios.get("https://economia.awesomeapi.com.br/last/" + moeda + "-BRL");
        // calcula a taxa o que voltou da API
        const taxa = Number(response.data[moeda + 'BRL'].ask);
        // usa nossa classe e o metodo converter para o valor * taxa
        const convertido = CalculadoraCambio.converter(valor,taxa);
        // resultado
        res.status(200).json({moedaOrigem: moeda, valorOriginal: valor, taxaDeCambio: taxa, valorConvertido: convertido});

    } catch (error) {

        res.status(400).json({ erro:"Moeda inválida ou não suportada"})
        
    }
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})
