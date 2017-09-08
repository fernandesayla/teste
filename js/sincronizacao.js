(function() {
  'use strict'

  $.getJSON('http://ceep.herokuapp.com/cartoes/carregar?usuario=fernandes.ayla@gmail.com&callback=?',
function(resposta){
    resposta.cartoes.forEach(function(cartaoAtual){
      controladorDeCartao.adicionaCartao(cartaoAtual.conteudo, cartaoAtual.cor)
    })
  })

  $("#sync").click(function(){
    var listaCartao = []

    $('.cartao').each(function(){

      var cartao={}

      cartao.conteudo=$(this).find('.cartao-conteudo').text()
      cartao.cor=$(this).css('background')
      listaCartao.push(cartao)
      console.log(cartao);
    })



    var mural={cartoes: listaCartao,
      usuario:'fernandes.ayla@gmail.com'}

      $.ajax({
        data:mural,
        url:'http://ceep.herokuapp.com/cartoes/salvar',
        method:'POST',
        success:function(resposta){
          console.log('Rolou!', resposta);
        }
        ,error:function(){

          console.log('Deu ruim');
        }
      })

    })
  })()
