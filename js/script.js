// $("#btnMenu").on('click', function(){
//     const menu = document.getElementById("menuNav");

//     $("#menuNav").slideToggle();
// })

$(".dropdownConta").click(function () {
    $("#opDropdownConta").slideToggle()
})

$('#linkEditar').click(function(){
    // Define a cor do link ativo
    $('#linkDeletar').addClass('text-dark')
    $('#linkEditar').removeClass('text-dark')

    // Define o link ativo
    $('#linkDeletar').removeClass('active')
    $('#linkEditar').addClass('active')
    
    // Altera o conteúdo mostrado para 'Editar dados'
    $('#deletarConta').hide()
    $('#editarDados').show()
})

$('#linkDeletar').click(function(){
    // Define a cor do link ativo
    $('#linkEditar').addClass('text-dark')
    $('#linkDeletar').removeClass('text-dark')

    // Define o link ativo
    $('#linkEditar').removeClass('active')
    $('#linkDeletar').addClass('active')

    // Altera o conteúdo mostrado para 'Deletar conta'
    $('#editarDados').hide()
    $('#deletarConta').show()
})

$('#btnComentario').click(function() {
    // Define visibilidade no botão para none
    $('#btnComentario').hide()
    $('#textoComentarioFeito').hide()

    // Define visibilidade para campo de comentário e botão
    $('#comentarioPost').show()
    $('#btnPostarComentario').show()
})

// Deletar o texto quando o usuário clica para digitar o comentário
$('#comentarioPost').click(function() {
    $('#comentarioPost').val('')
})

$('#btnPostarComentario').click(function() {
    $('#comentarioPost').hide()
    $('#btnPostarComentario').hide()

    $('#textoComentarioFeito').show()
    $('#btnComentario').show()
})