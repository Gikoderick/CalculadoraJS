let total = 0;
let aux = "0";
let operadorAnterior;
const screen = document.querySelector('.screen');

function clickBotao(valor){
    if(isNaN(valor)){
        pegaSimbolo(valor);
    }else{
        pegaNumero(valor);
    }
    screen.innerText = aux;  
}

function pegaSimbolo(simbolo){
    switch(simbolo){
        case'C':
            aux = '0';
            total= 0;
            break;
        case '=':
            if(operadorAnterior === null){
                return
            }
            resetaOperacao(parseInt(aux));
            operadorAnterior = null;
            aux = total;
            total = 0;
            break;
        case'←':
            if(aux.length === 1){
                aux = '0';
            }else{
                aux = aux.substring(0, aux.length -1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            pegaOperador(simbolo);
            break;
    }
}

function pegaOperador(simbolo){
    if(aux === '0'){
        return
    }
    const intAux= parseInt(aux);

    if(total === 0){
        total = intAux;
    }else{
        resetaOperacao(intAux);
    }
    operadorAnterior = simbolo;
    aux = '0';
}

function resetaOperacao(intAux){
    if(operadorAnterior === '+'){
        total += intAux;
    }else if(operadorAnterior === '−'){
        total -= intAux;
    }else if(operadorAnterior === '×'){
        total *= intAux;
    }else if(operadorAnterior === '÷'){
        total /= intAux;
    }
}

function pegaNumero(numeroString){
    if(aux === '0'){
        aux = numeroString;
    }else{
        aux += numeroString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        clickBotao(event.target.innerText);
    })
}

init();