const botaoAlterarTema = $("#alterarTema")

botaoAlterarTema.click(function() { 
    $("body").toggleClass("dark-theme")

    if (botaoAlterarTema.hasClass("btn-light")) {
        botaoAlterarTema.removeClass("btn-light").addClass("btn-dark")
    } else {
        botaoAlterarTema.removeClass("btn-dark").addClass("btn-light")
    }
})

$(document).ready(function() {
    $.getJSON("/model/dadosCursos") 
        .done(function(dadosCursos) {
            viewController.adicionaCursoDropdown(dadosCursos)
        })  
        .fail(function(error) {
            console.error('Erro ao carregar dados dos cursos:', error)
        })
})
