
var resultado = 0;
var displayContent = '';

// agregados ***//

const display = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach(btn =>{
    btn.addEventListener( 'click', buttonClick);});

function buttonClick (evt) {
    const ingreso = evt.target.textContent;
    if(display.textContent === '0'){
        display.textContent = ingreso;
    }
    else{
        display.textContent += ingreso;
    }
}

function limitarAnchoDisplay(num) {
    var maxChars = 13;
    const str = String(num);
    return str.length <= maxChars ? str : str.slice(0, maxChars);
}

  //b.addEventListener( 'click', () => { console.log(b.textContent) });


/*
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
    console.log(displayContent)
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

function limpiarDisplay(){
    const disp = document.getElementById('display');
    disp.addEventListener('dblclick', resetDisplay());
    return
}

function resetDisplay(){
    displayContent = '88'
    console.log(displayContent)
    return displayContent
}

mostrarResultado();*/
//var res = calcular(suma, 3, 33);
//alert(res);