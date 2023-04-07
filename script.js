let imagens = ['./imagens/bobrossparrot.gif','./imagens/explodyparrot.gif','./imagens/fiestaparrot.gif',
'./imagens/metalparrot.gif','./imagens/revertitparrot.gif', './imagens/tripletsparrot.gif',
'./imagens/unicornparrot.gif']
let quantidade = prompt('Escolha um número de cartas entre 4 e 14?')
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
    carta.innerHTML += `<div class="carta" onclick="virarcarta(this)" data-test="card">
                            <img src="./imagens/back.png" class="frentecarta face" data-test="face-down-image" />
                            <img src="${selecionadas[i]}" class="versocarta face" data-test="face-up-image" />
                        </div>`
}
let cartasviradas = [];
let nomes = [];
let jogadas = 0;
let tamanho = 0;
let contador = 0
const relogio = document.querySelector('.tempo');
function conta(){
    contador++;
    relogio.innerHTML = contador;
}
const idInterval = setInterval(conta,1000);

function remover(){
    const clicar = document.querySelectorAll('.carta')
    for (i=0;i<clicar.length;i++){
        clicar[i].removeAttribute('onclick');
    }
}
function colocar(){
    const clicar = document.querySelectorAll('.carta')
    for (i=0;i<clicar.length;i++){
        clicar[i].setAttribute("onclick","virarcarta(this)");
    }
}

function virarcarta(carta){
    let frente = carta.querySelector('.frentecarta');
    let tras = carta.querySelector('.versocarta');
    tamanho = cartasviradas.length
    function desvirar(){
        let antestras = nomes[tamanho-1].querySelector('.versocarta');
        let antesfrente = nomes[tamanho-1].querySelector('.frentecarta');
        antestras.classList.remove('back');
        antesfrente.classList.remove('front');
        tras.classList.remove('back');
        frente.classList.remove('front');
        nomes.pop();
        cartasviradas.pop();
    }
    let teste = 0;
    for (i=0;i<tamanho;i++){
        if (tras.getAttribute("src")==cartasviradas[i]){
            teste++;
        }
    }
    if (tamanho==0){
        cartasviradas.push(tras.getAttribute("src"));
        nomes.push(tras.parentNode);
        frente.classList.add('front');
        tras.classList.add('back');
    }
    else if (cartasviradas[tamanho-1]==tras.getAttribute("src")){
        if (teste<2){
            frente.classList.add('front');
            tras.classList.add('back');
            cartasviradas.push(tras.getAttribute("src"));
            nomes.push(tras.parentNode);
        }
    } else if (cartasviradas[tamanho-1]!=tras.getAttribute("src") && (tamanho%2)!=0){
        frente.classList.add('front');
        tras.classList.add('back');
        setTimeout(desvirar,1000);
    } else{
        if (teste<2){
            frente.classList.add('front');
            tras.classList.add('back');
            cartasviradas.push(tras.getAttribute("src"));
            nomes.push(tras.parentNode);
        }
    }
    jogadas++;
    tamanho = cartasviradas.length;
    function ganho(){
        clearInterval(idInterval);
        alert(`Você ganhou em ${jogadas} jogadas! A duração do jogo foi de ${contador} segundos!`);
        const escolha = prompt('Você gostaria de reiniciar a partida? (sim ou não)')
        if (escolha=='sim'){
            window.location.reload()
        }
    }
    if (tamanho==quantidade){
        setTimeout(ganho,500);
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}