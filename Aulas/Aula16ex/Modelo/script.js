let a = document.getElementById('entradaNumber'); //Inserir número
let s = document.getElementById('_select'); //select
let g=[ ] //array de armazenagem dos valores

function addElement(){  //adicionar valor no array
let b=Number(a.value)
g.push(b)
console.log(g);
let p=document.createElement('option')
p.text=`Valor ${b} adicionado.`
s.appendChild(p); //Frase no select
a.value=''

}

function Decrescente(a, b) {
  return b - a;
}
let soma=0
function exibirResult(){
console.log(g.sort(Decrescente))
console.log(`Ao todo temos ${g.length} cadastrados`)
console.log(`O maior valor informado foi ${g[0]}`)
console.log(`O menor valor informado foi ${g[g.length-1]}`)
for(let s = 0;s <g.length; s++){
  soma+=g[s]
}
console.log(`Somando todos os valores,temos ${soma}`)
console.log(`A soma  dos valores digitados é: ${soma/g.length}`)}

