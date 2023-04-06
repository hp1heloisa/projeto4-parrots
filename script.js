let imagens = ['./imagens/bobrossparrot.gif','./imagens/explodyparrot.gif','./imagens/fiestaparrot.gif',
'./imagens/metalparrot.gif','./imagens/revertitparrot.gif', './imagens/tripletsparrot.gif',
'./imagens/unicornparrot.gif']
let quantidade = prompt('Quantas cartas você quer?')
while (4>quantidade || quantidade>14 || (quantidade%2)!=0){
    quantidade = prompt('Quantas cartas você quer?');
}
imagens.sort(comparador);
let selecionadas = [];
for (i=0;i<(quantidade/2);i++){
    selecionadas.push(imagens[i]);
    selecionadas.push(imagens[i]);
}
selecionadas.sort(comparador);
let carta = document.querySelector('.cartas');
for (i=0;i<quantidade;i++){
    carta.innerHTML += `<div class="carta" onclick="virarcarta(this)">
                            <img src="./imagens/back.png" class="frentecarta face" />
                            <img src="${selecionadas[i]}" class="versocarta face" />
                        </div>`
}

function virarcarta(carta){
    let frente = carta.querySelector('.frentecarta');
    frente.setAttribute("style","transform: rotateY(-180deg);");
    let tras = carta.querySelector('.versocarta');
    tras.setAttribute("style","transform: rotateY(0deg);");
}

function comparador() { 
	return Math.random() - 0.5; 
}
