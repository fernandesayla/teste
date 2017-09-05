var contator = $('cartao').length

$('.novoCartao').on('submit',function(event){
 contator++
  event.preventDefault()

  var conteudo = $('.novoCartao-conteudo').val()

  if(conteudo){

    var cartao = $('<div>').addClass('cartao').attr('id','cartao_'+contator)

    var divBtnRemove = $('<div>').addClass('opcoesDoCartao')

    var btnRemove = $('<button>').addClass('').attr('data-ref',contator).text('X').click(removeCartao)



    var tagConteudo = $('<p>').addClass('cartao-conteudo').text(conteudo)

    cartao.append(divBtnRemove).append(btnRemove).append(tagConteudo).prependTo('.mural')

    $('.novoCartao-conteudo').val('')

  }
})


/*, function(event) {
event.preventDefault()
console.log(document.querySelector('.novoCartao-conteudo').value);
})
*/
