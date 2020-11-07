var respostaUsuario;
let possiveisCores,
resposta;

function startGame()
{
    respostaUsuario = prompt(GerarSorteio());

        
    //recebe array e index de resposta
    possiveisCores = getCoresPergunta();
    resposta = getResposta();
    
    //se usuário clicar enviar sem digitar nada
    while (respostaUsuario === "")
    {
        respostaUsuario = prompt("I'm sorry, please try again! \n\n" + promptQuestion() + "\n \nWhich color am i thinking of?");
    }

    let responseExists,
    hint,
    responseIsCorrect = false;

    //repete até usuário acertar
    do{

        //se resposta existir mas não for correta, exibir hint de posição
        responseExists = false;
        hint = "";

            //se usuário clicar cancelar
        if(respostaUsuario === null){
           
            document.getElementById("result").textContent = "You cancelled out! Reload and try again.";
            document.getElementById("result").style.visibility = 'visible';
            document.getElementById("gameButton").disabled = true;
        }


        //compara resposta com array
        for(var i = 0; i < possiveisCores.length; i++){
        
        //checa se resposta existe
        if(respostaUsuario.toUpperCase() === possiveisCores[i].toUpperCase())
        {   
            //se resposta existe, checa se está na mesma posição que o index da resposta
            if(i === resposta){
                responseIsCorrect = true;

                //muda cor do background, deixa botão invisível, exibe texto "you won!"
                document.getElementById("background").style.backgroundColor = possiveisCores[i];
                document.getElementById("gameButton").disabled = true;
                document.getElementById("result").textContent = "You won!";
                document.getElementById("result").style.visibility = "visible";
                break;
            }
            //se não, checa posição no array e exibe hint de ordem alfabética
            else{
                
                if (i < resposta){
                    hint ="lower";
                }
                else{
                    hint = "lower";
                }

                respostaUsuario = prompt("You're almost there! hint: Your color is alphabetically " + hint + " than mine.\n\n" + promptQuestion() + "\n \nWhich color am i thinking of?");
                responseExists = true;
            }
        }
    }

    if (!responseExists && !responseIsCorrect){
        respostaUsuario = prompt("I couldn't find your answer, try again.\nMaybe try typing it all together!\n \n" + promptQuestion() + "\n \nWhich color am i thinking of?");
    }

    } while (!responseIsCorrect);


}
