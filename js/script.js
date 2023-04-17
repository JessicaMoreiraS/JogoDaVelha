var casas = [9,9,9, 9,9,9, 9,9,9];
var vez = 1;
var contaClick = 0;

var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

function verifica(casa){
    if(casas[casa] == 9){
        casas[casa] = vez;
        if(vez == 1){
            document.getElementById("img"+casa).src = "imagens/tardis.png"
        }else{
            document.getElementById("img"+casa).src = "imagens/dalek.png"
        }
        vez *= -1;
        contaClick++;
        confere(); 
    }
}

function confere(){
    var i;
    var lGanhou = false;
    var lAcabou = true;
    for(i=0; i<casas.length; i++){
        if(casas[i] == 9){
            lAcabou = false;
        }
    }
    if(contaClick == 9){
        lAcabou = true;
    }
    //os tres primeiros são referentes a linha, os tres do meio são referentes as colunas e os dois ultimos são referentes a diagonal
    var soma = [casas[0]+casas[1]+casas[2], 
                casas[3]+casas[4]+casas[5],
                casas[6]+casas[7]+casas[8], 
                casas[0]+casas[3]+casas[6], 
                casas[1]+casas[4]+casas[7], 
                casas[2]+casas[5]+casas[8], 
                casas[0]+casas[4]+casas[8], 
                casas[2]+casas[4]+casas[6]];

    for(i=0; i<soma.length; i++){
        if(soma[i] == -3){
            lGanhou = true;
            sResposta = "Dalek Ganhol!!!";
            iPontosO++;
            document.getElementById("bola").innerHTML = "Pontos Dalek: " + iPontosO;
            break; 
        }else if(soma[i] == 3){
            lGanhou = true;
            sResposta = "Doctor Ganhol!!!";
            iPontosX++;
            document.getElementById("xis").innerHTML = "Pontos Doctor: " + iPontosX;
            break;     
        }
    }
    if(lGanhou == false && lAcabou == true){
        sResposta = "Deu Velha!!!";
        iPontosV++;
        document.getElementById("velha").innerHTML = "Velha: " + iPontosV;
    }

    if(lGanhou || lAcabou){
        for(i=0; i<casas.length;i++){
            document.getElementById("casa"+i).disable = true;
            casas[i]=0;
        }
        document.getElementById("resposta").innerHTML =sResposta;
        document.getElementById("resposta").style.color = "#ffc400";
        document.getElementById("resposta").style.fontSize = "xx-large";
    }
}

function recomeca(){
    for(i=0; i<casas.length; i++){
        document.getElementById("img"+i).ondragstart = function(){return false;}; //nao permite arrastar a imagem
        document.getElementById("casa"+i).disable= false;
        document.getElementById("img"+i).src= "";

        document.getElementById("resposta").innerHTML = "Resultado:";
        document.getElementById("resposta").style.color = "#f5ff00";
        document.getElementById("resposta").style.fontSize = "large";

        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        contaClick = 0;
        vez = 1;
    }
}