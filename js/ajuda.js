;(function() {
  'use strict'
  $("#ajuda").on('click',function(){
    var ListaAjuda=[{conteudo:'No Creep be Creep',cor:'red'},
    {conteudo:'Mudar Linhas', cor:'blue'},
    {conteudo:'Manipule seus cartões', cor:'orange'}]

    ListaAjuda.forEach(function(ajudaAtual){
      controladorDeCartao.adicionaCartao(ajudaAtual.conteudo, ajudaAtual.cor)

    })

  })


}
)()
