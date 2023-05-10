const bgcolor=document.querySelector('#bgcolor');
const suma=document.querySelector('#suma');
const w=new Worker('worker.js');

bgcolor.addEventListener("click", event=>{
    w.postMessage('hola')
});

suma.addEventListener("click",(event)=>{
    let sum=0;
    for(let i=0;i<500;i++)
        sum+=i;
    alert('La suma es de ${sum}');
});