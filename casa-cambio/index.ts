export class MoedaInvalidaError extends Error {

    constructor(mensagem: string){
        super(mensagem)
        this.name = "MoedaInvalidaError"
    }
}


export class CalculadoraCambio {

    static converter (valor: number, taxaDeCambio: number):number {
        return valor * taxaDeCambio
    }
}