var todasAsCores = [];
var coresPergunta = [];
var indexResposta;
var stringLista = "";

///////////////////INTERNAL USE///////////////////////

//chamado internamente para prompt, para tratar necessidade de exibir o mesmo prompt múltiplas vezes
function promptQuestion(){
    return stringLista;
}

//chamado internamente para retornar prompt
function GerarSorteio ()
{

    todasAsCores = GetTodasAsCores();
    
    var indexCores = sortearCores(10);

    //percorrer vetor de index de cores, adicionar as cores correspondentes no vetor CoresPergunta
    for(var i = 0; i < indexCores.length; i++)
    {
        coresPergunta.push(todasAsCores[indexCores[i]]);
    }

    //organiza por ordem alfabética
    coresPergunta.sort();

    //sorteia index da resposta
    indexResposta = sortearResposta(coresPergunta);

    for(var i = 0; i < coresPergunta.length; i++){
        if( (i+1) == coresPergunta.length){
            stringLista += coresPergunta[i] +"."
        }
        else {
            stringLista += coresPergunta[i] + ", "
        }
    }
    return "I'm thinking of one of these colors: \n\n" + stringLista + "\n\nWhich color am i thinking of?";
}

//chamado internamente nesse arquivo para sortear resposta
function sortearResposta (vetor){
    //sortear x index para selecionar resposta
    return Math.floor(Math.random() * (vetor.length - 1) ) + 1;
}

//chamado internamente nesse arquivo para preencher a array de possíveis cores
function sortearCores(){
    var IndexPossiveisCores = [];

    var arrayNums = [];

    for (var i = 0; i < 147; i ++){
        arrayNums.push(i);
    }

    arrayNums = randomize(arrayNums);

    for (var i = 0; i < 10; i++){
        IndexPossiveisCores.push(arrayNums[i]);
    }

    return IndexPossiveisCores;
}

//chamado internamente nesse arquivo para sortear index
function randomize(array){

        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }


//chamado internamente para retornar lista de cores    
function getCoresPergunta(){
    //chamado internamente, leva cores para próximo arquivo js
    return coresPergunta;
}

//chamado internamente para retornar index de resposta
function getResposta()
{
    //chamado internamente, leva index da resposta para próximo arquivo js
    return indexResposta;
}
