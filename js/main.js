
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


function mostrarResultado(resultado = calcular(division, 303, 22)){
    const displayResultado = document.getElementById('display');
    displayResultado.innerText = `${resultado}`;
}

function limitarAnchoDisplay(num) {
    var maxChars = 13;
    const str = String(num);
    return str.length <= maxChars ? str : str.slice(0, maxChars);
}


mostrarResultado();
//var res = calcular(suma, 3, 33);
//alert(res);