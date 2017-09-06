  var contator = $('.cartao').length

function adicionaCartao(conteudo){

    var	tipoCartao = decideTipoCartao(conteudo);
    var cartao = $('<div>').addClass('cartao').addClass(tipoCartao).attr('id','cartao_'+contator)
    var divBtnRemove = $('<div>').addClass('opcoesDoCartao')

    var btnRemove = $('<button>').addClass('opcoesDoCartao-remove opcoesDoCartao-opcao').attr('data-ref',contator).text('X').click(removeCartao)
    var tagConteudo = $('<p>').addClass('cartao-conteudo').append(conteudo)

    cartao.append(divBtnRemove.append(btnRemove)).append(tagConteudo).prependTo('.mural')

    $('.novoCartao-conteudo').val('')


}
/*
function submit(){


}


function getConteudo{

}




;(function() {



})()*/
