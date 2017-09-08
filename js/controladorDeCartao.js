var controladorDeCartao=(function() {
  'use strict'


  var contador = $('.cartao').length

  function adicionaCartao(conteudo, cor){
    contador++
    var	tipoCartao = decideTipoCartao(conteudo);
    var cartao = $('<div>').addClass('cartao').addClass(tipoCartao).attr('id','cartao_'+contador).css('background', cor)
    var divBtnRemove = $('<div>').addClass('opcoesDoCartao')

    var btnRemove = $('<button>').addClass('opcoesDoCartao-remove opcoesDoCartao-opcao').attr('data-ref',contador).text('X').click(removeCartao)
    var tagConteudo = $('<p>').addClass('cartao-conteudo').append(conteudo)

    cartao.append(divBtnRemove.append(btnRemove)).append(tagConteudo).prependTo('.mural')

    $('.novoCartao-conteudo').val('')



  }
  //window.adicionaCartao = adicionaCartao


  function	decideTipoCartao(conteudo){
    var	quebras	=	conteudo.split("<br>").length;
    var	totalDeLetras	=	conteudo.replace(/<br>/g,	"	").length;
    var	ultimoMaior	=	"";
    conteudo.replace(/<br>/g,	"	")
    .split("	")
    .forEach(function(palavra){
      if	(palavra.length	>	ultimoMaior.length)	{
        ultimoMaior	=	palavra;
      }
    });
    var	tamMaior	=	ultimoMaior.length;
    //no	mínimo,	todo	cartão	tem	o	texto	pequeno
    var	tipoCartao	=	"cartao--textoPequeno";
    if	(tamMaior	<	9	&&	quebras	<	5	&&	totalDeLetras	<	55)	{
      tipoCartao	=	"cartao--textoGrande";
    }	else	if	(tamMaior	<	12	&&	quebras	<	6	&&	totalDeLetras	<	75)	{
      tipoCartao	=	"cartao--textoMedio";
    }
    return	tipoCartao;
  }

  return {
      adicionaCartao:adicionaCartao,
      idUltimoCartao:contador
  }


})()
