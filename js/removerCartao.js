var botoes =  document.querySelectorAll('.cartao-botao')

for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', removeCartao)
}
function removeCartao(){

  console.log(this.parentNode);
  this.parentNode.style.display='none'
  //document.querySelector('.cartao').style.display='none'
}
