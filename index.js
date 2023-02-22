function computerSelection   (){        /* Jogada do Computador */
    const escolha = ["pedra","papel","tesoura"]
    const randomN = Math.floor(Math.random()*(3 - 0) + 0);
    return escolha[randomN];
}


function playerSelection() {            /* Jogada da Pessoa */
    const player1 = prompt("Qual a sua escolha?").toLowerCase();
    return player1; 

}

let playerScore = 0
let ComputerScore = 0



function round (playerSelection,computerSelection) {


    if (playerSelection === computerSelection){
        console.log(`Ambos os jogadores jogaram ${playerSelection}`);

    }else if (playerSelection === "pedra" && computerSelection ==="papel" ){
        console.log(`O Jogador perdeu! O ${computerSelection} derrota a ${playerSelection} `)
        ComputerScore++
    }else if (playerSelection === "tesoura" && computerSelection ==="pedra" ){
        console.log(`O Jogador perdeu! A ${computerSelection} derrota a ${playerSelection}`)
        ComputerScore++
    }else if (playerSelection === "papel" && computerSelection ==="tesoura" ){
        console.log(`O Jogador perdeu! A ${computerSelection} derrota a ${playerSelection}`)
        ComputerScore++
    }else if (playerSelection === "pedra" && computerSelection ==="tesoura" ){
        console.log(`O Jogador ganhou! A ${playerSelection} derrota a ${computerSelection}`)
        playerScore++
    }else if (playerSelection === "papel" && computerSelection ==="pedra") {
        console.log(`O Jogador ganhou! O ${playerSelection} derrota a ${computerSelection}`)
        playerScore++
    }else if (playerSelection === "papel" && computerSelection ==="pedra") {
        console.log(`O Jogador ganhou! O ${playerSelection} derrota a ${computerSelection}` ) 
        playerScore++
    
    }

}



 function game() {

    for (let i = 0;i < 5; i++) {

        round(playerSelection(),computerSelection())
        console.log(playerScore,ComputerScore)
        
    } 

    if (playerScore < ComputerScore) {
        console.log("Voce ganhou!")
    } else console.log("Voce perdeu!")
   
}




 

 game()


