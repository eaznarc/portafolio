function rfc(){ 
    var x=document.getElementById("nom1").value; 
    x=x.substring(0,2); 
    var y=document.getElementById("nom2").value; 
    y=y.charAt(0); 
    var z=document.getElementById("nom").value; 
    z=z.charAt(0); 
    var año=document.getElementById("year").value; 
    año=año.substring(2,4); 
    var mes=document.getElementById("month").value; 
    var dia=document.getElementById("day").value; 

    var conc=x+y+z+año+mes+dia; 
    var mayusc=conc.toUpperCase(); 
    document.getElementById("resul").value=mayusc; 
}