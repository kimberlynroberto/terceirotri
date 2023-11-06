function tocaSomPom(idElementoAudio){
   const document = querySelector(idElementoAudio);
if(elemento===null){
    alert('Elemento não encontrado');
}
if(elemento != null && elemento.localName ==='audio'){
elemento.play();
}else {
    alert('Elemento não encontrado');
}
}
const listaDeTeclas=document.querySelectorAll('.tecla');
//Estrutura de repetição - Enquanto
for(contador = 0 ; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

tecla.onclick = function(){
    tocaSom(idAudio);
};
tecla.onkeydown = function(evento){
    if(evento.code ==='Enter' || evento.code ==='Space'){
        tecla.classList.add('ativa');
    }
};
tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}
console.log(instrumento);
console.log(contador);
}
