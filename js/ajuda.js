;(function() {
  'use strict'
  $("#ajuda").on('click',function(){
    var ListaAjuda=['No Creep be Creep', 'Mudar Linhas', 'Manipule seus cartões']

    ListaAjuda.forEach(function(ajudaAtual){
        adicionaCartao(ajudaAtual)

    })

  })


}
)()
