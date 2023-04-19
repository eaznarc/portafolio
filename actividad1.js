function sumar(){
    var num1,num2,suma;
    num1=prompt("Escribe un numero","Numero");
    num2=prompt("Escribe otro numero","Numero");
    suma=parseInt(num1)+parseInt(num2);
    alert("La suma es de: "+suma);
}
function restar(){
    var num1,num2,resta;
    num1=prompt("Escribe un numero","Numero");
    num2=prompt("Escribe otro numero","Numero");
    resta=parseInt(num1)-parseInt(num2);
    alert("La resta es de: "+resta);
}
function multiplicar(){
    var num1,num2,mult;
    num1=prompt("Escribe un numero","Numero");
    num2=prompt("Escribe otro numero","Numero");
    mult=parseInt(num1)*parseInt(num2);
    alert("La multiplicación es de: "+mult);
}
function dividir(){
    var num1,num2,div;
    num1=prompt("Escribe el numerador","Numero");
    num2=prompt("Escribe el denominador","Numero");
    div=parseFloat(num1)/parseFloat(num2);
    alert("La division es de: "+div);
}
function posneg(){
    var num1;
    num1=prompt("Escribe un numero","Numero");
    if (parseInt(num1)>0)
        alert("Es positivo");
    if (parseInt(num1)<0)
        alert("Es negativo");
    if (parseInt(num1)=0)
        alert("Es cero");
}