export function maiorDeIdade(idade: number): boolean {
    return idade >= 18;
}

const idade: number = 17 ;

console.log(`É maior de idade? ${maiorDeIdade(idade)}`);