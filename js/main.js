
var resultado = 0;


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




function calcular(operacion, operandoA, operandoB) {
    return operacion(operandoA, operandoB);
    }

function mostrarResultado(){
    calcular()
}

document.getElementById("display").innerHTML = <h2>toString.resultado</h2>;

var res = calcular(suma, 3, 33);
alert(res);