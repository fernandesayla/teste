
;(function() {
  'use strict'


  $('.novoCartao').on('submit',function(event){


    event.preventDefault()
    var conteudo = $('.novoCartao-conteudo').val().trim().replace(/\n/g,'<br>')
    if(conteudo){
      controladorDeCartao.adicionaCartao(conteudo)
    }

    /*  if(conteudo){conteudo
    var	tipoCartao = decideTipoCartao(conteudo);
    var cartao = $('<div>').addClass('cartao').addClass(tipoCartao).attr('id','cartao_'+contator)
    var divBtnRemove = $('<div>').addClass('opcoesDoCartao')

    var btnRemove = $('<button>').addClass('opcoesDoCartao-remove opcoesDoCartao-opcao').attr('data-ref',contator).text('X').click(removeCartao)
    var tagConteudo = $('<p>').addClass('cartao-conteudo').append(conteudo)

    cartao.append(divBtnRemove.append(btnRemove)).append(tagConteudo).prependTo('.mural')

    $('.novoCartao-conteudo').val('')

  }*/



})

})()

//{ 3 + 1 } + -3 // -3


/*, function(event) {
event.preventDefault()
console.log(document.querySelector('.novoCartao-conteudo').value);
})
*/
