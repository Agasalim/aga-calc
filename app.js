let display= document.getElementById("display");
function appendToDisplay(input){display.value+=input;}
function clearDisplay(){display.value="";}
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