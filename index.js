function getComputerChoice (){
    const escolha = ["pedra","papel","tesoura"]
    const randomN = Math.floor(Math.random()*(3 - 0) + 0);
    return escolha[randomN];
}

console.log(getComputerChoice());