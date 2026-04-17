export function retornarDobro(numero: number): number {
    return numero * 2;
}

const numeroEscolhido: number = 7;

console.log(`O dobro de ${numeroEscolhido} é ${retornarDobro(numeroEscolhido)}`);