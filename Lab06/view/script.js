$(document).ready(function() {
    viewController.alterarTema()
    viewController.carregarDadosCursos()
        .then(function(dadosCursos) {
            const dropdownCursos = viewController.adicionaCursoDropdown(dadosCursos);
            $('#dropdown-container').append(dropdownCursos);
        })
        .catch(function(error) {
            console.error('Erro ao carregar dados dos cursos no arquivo principal:', error);
        });
});
