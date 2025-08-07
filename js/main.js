
var resultado = 0;
var displayContent = '';


function main() {
    return;
}

function suma(arg1, arg2) {
    return arg1 + arg2;
}

function resta(arg1, arg2) {
    return arg1 - arg2;
}

function multiplicacion(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    try {
        if (arg2 == 0) {
            throw "El divisor debe ser distinto de cero";
        }
        else {
            var res = arg1 / arg2;
        }
    }
    catch (err) {
        alert("Error : " + err + "!!");
        exit;
    }
    return res;
}


function uno(){
    displayContent += '1';
    return displayContent;
}

function dos(){
    displayContent += '2';
    return displayContent;
}

function tres(){
    displayContent += '3';
    return displayContent;
}

function cuatro(){
    displayContent += '4';
    return displayContent;
}

function cinco(){
    displayContent += '5';
    return displayContent;
}

function seis(){
    displayContent += '6';
    return displayContent;
}

function siete(){
    displayContent += '7';
    return displayContent;
}

function ocho(){
    displayContent += '8';
    return displayContent;
}

function nueve(){
    displayContent += '9';
    return displayContent;
}

function cero(){
    if(displayContent.length >= 1){
        displayContent += '0';
    }
    return displayContent;
}




function calcular(operacion, operandoA, operandoB) {
    return operacion(operandoA, operandoB);
    }


function mostrarResultado(){
    const displayResultado = document.getElementById('display');
    var normalizado = limitarAnchoDisplay(displayContent);
    displayResultado.innerText = `${normalizado}`;
}

function limitarAnchoDisplay(num) {
    var maxChars = 13;
    const str = String(num);
    return str.length <= maxChars ? str : str.slice(0, maxChars);
}


mostrarResultado();
//var res = calcular(suma, 3, 33);
//alert(res);