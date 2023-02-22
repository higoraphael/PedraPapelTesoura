function getComputerChoice (){        /* Jogada do Computador */
    const escolha = ["pedra","papel","tesoura"]
    const randomN = Math.floor(Math.random()*(3 - 0) + 0);
    return escolha[randomN];
}


function playerSelection() {            /* Jogada da Pessoa */
    const player1 = prompt("Qual a sua escolha?").toLowerCase();
    return player1; 

}

let scorePlayer = 0
let scoreComputer = 0

function round (playerSelection,computerSelection) {    /* Possibilidades de ganhar ou perder*/
        
        if (computerSelection === playerSelection){           
            console.log("Entao e igual a empate!")
       
        } else if (playerSelection==="pedra" && computerSelection==="papel"){
            scoreComputer++
            console.log("Entao voce perde!papel vence pedra",computerSelection)
       
        } else if (playerSelection==="pedra" && computerSelection==="tesoura"){
            scorePlayer++
            console.log("Entao voce ganhou!pedra vence tesoura",computerSelection)
      
        } else if (playerSelection ==="tesoura" && computerSelection==="papel"){
            scorePlayer++
            console.log("Entao voce ganhou!tesoura vence papel",computerSelection)
        
        } else if (playerSelection ==="tesoura" && computerSelection==="pedra"){
            scoreComputer++
            console.log("Entao voce perdeu!pedra vence tesoura",computerSelection)
       
        } else if (playerSelection === "papel" && computerSelection==="tesoura"){
            scoreComputer++
            console.log("Entao voce perdeu! tesoura vence papel",computerSelection)
        
        } else if (playerSelection === "papel" && computerSelection==="pedra"){
            scorePlayer++
            console.log("Entao voce venceu!papel vence pedra",computerSelection)
        }
        
    }


    function game (round) {
        while (scorePlayer < 5 && scoreComputer < 5 ) {
            
        }

    }


game(round);

