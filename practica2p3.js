function sumar(){
    var bruhh,bruh,suma;
    bruh=document.getElementById("bruh").value;
    bruhh=document.getElementById("bruhh").value;
    suma=parseInt(bruh)+parseInt(bruhh);
    document.getElementById("resul").innerHTML=suma;
}
function restar(){
    var bruhh,bruh,resta;
    bruh=document.getElementById("bruh").value;
    bruhh=document.getElementById("bruhh").value;
    resta=parseInt(bruh)-parseInt(bruhh);
    document.getElementById("resul").innerHTML=resta;
}
function multiplicar(){
    var bruhh,bruh,mult;
    bruh=document.getElementById("bruh").value;
    bruhh=document.getElementById("bruhh").value;
    mult=parseInt(bruh)*parseInt(bruhh);
    document.getElementById("resul").innerHTML=mult;
}
function dividir(){
    var bruhh,bruh,div;
    bruh=document.getElementById("bruh").value;
    bruhh=document.getElementById("bruhh").value;
    div=parseFloat(bruh)/parseFloat(bruhh);
    document.getElementById("resul").innerHTML=div;
}