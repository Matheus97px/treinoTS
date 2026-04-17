function anoNasc(idade:number):number {
    const hoje: number = new Date();
    const anoHoje: number = hoje.getFullYear();

    return anoHoje - idade;

}

const idade:number = 29;

console.log("voce tem " + idade + " anos e nasceu em :"+ anoNasc(idade));