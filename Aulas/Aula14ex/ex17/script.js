/*👉 🏁*/
function contar(){
    let a=document.getElementById('value1')
    let b=document.getElementById('value2')
    let c=document.getElementById('valueP3')

    let n1=Number(document.getElementById('value1').value);
    let n1d=Number(document.getElementById('value1').value);
    let n2=Number(document.getElementById('value2').value);
    let n3p=Number(document.getElementById('valueP3').value);
    let paragrafo_=document.getElementById('exhibition');
    paragrafo_.innerHTML=''
    
    if(a.value.length == 0 || b.value.length == 0 || c.value.length === 0){
        alert('Impossível contar')
    } //[ERRO] Impossível contar
        
    else{ 
        if(n3p<=0){
            alert('Passo inválido! Considerando PASSO 1');
            n3p=1;
        }
        if(n1<n2){  //Crescente
            paragrafo_.innerHTML='Contando: </br> '
            for(;n1<=n2;n1+=n3p){ 
                paragrafo_.innerHTML+=`👉  ${n1} `;
            }
            paragrafo_.innerHTML+=' 🏁'
        } 
         
        else{  //Decrescente
            paragrafo_.innerHTML='Contando: </br> '
            for(;n1>n2;n1-=n3p){ 
                paragrafo_.innerHTML+=`👉  ${n1} `;
            }
            paragrafo_.innerHTML+='🏁'
        }
        
    } 
           
            
    
}