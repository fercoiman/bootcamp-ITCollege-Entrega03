
const display = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach(btn =>{btn.addEventListener( 'click', buttonClick);});
display.addEventListener("click",resetDisplay);

function buttonClick (evt) {
    const ingreso = evt.target.textContent;
    
    if(display.textContent === '0' || display.textContent === "Error!" ){
        display.textContent = ingreso;
    }

    else {
        const maxChars = 13
        display.textContent.length < maxChars ? 
        display.textContent += ingreso : display.textContent.slice(0, -1);
        }

    if( display.textContent.slice(-1) === "="){
        try{
            let resultado = eval(display.textContent.slice(0,-1));
            let res = String(resultado);
            display.textContent = res.slice(0,12);
            }
        catch{
             display.textContent = "Error!";
            }
        }
    return;  
    }


function resetDisplay(evt){
    const rst = evt.target.textContent;
    display.textContent = '0';
}
