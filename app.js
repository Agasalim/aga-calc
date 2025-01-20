let display= document.getElementById("display");
// function appendToDisplay(input){display.value+=input;}
function appendToDisplay(input) {
    if (display.value === "0") {
        display.value = input; // Replace "0" with the first input
    } else {
        display.value += input; // Continue appending inputs
    }
}
function clearDisplay(){display.value="0";}
function calculate(){
    try{display.value=eval(display.value);}
    catch(error){display.value=""}
}
function kokalti(){
    let eded=parseFloat(document.getElementById("display").value);
    document.getElementById("display").value=Math.sqrt(eded);
}
function kvadrat(){
    let eded=parseFloat(document.getElementById("display").value);
    document.getElementById("display").value=Math.pow(eded,2);
}
clearDisplay();