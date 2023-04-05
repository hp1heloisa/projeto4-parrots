let quantidade = prompt('Quantas cartas você quer?')
while (4>quantidade || quantidade>14 || (quantidade%2)!=0){
    quantidade = prompt('Quantas cartas você quer?');
}
let carta = document.querySelector('.cartas');
for (i=0;i<quantidade;i++){
    carta.innerHTML += '<div class="carta">oi</div>'
}