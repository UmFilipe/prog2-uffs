const botaoAlterarTema = $("#alterarTema");

botaoAlterarTema.click(function() {
    $("body").toggleClass("dark-theme");

    if (botaoAlterarTema.hasClass("btn-light")) {
        botaoAlterarTema.removeClass("btn-light");
        botaoAlterarTema.addClass("btn-dark");
    } else {
        botaoAlterarTema.removeClass("btn-dark");
        botaoAlterarTema.addClass("btn-light");
    }
});

function mostraInfoCurso(curso) {
    const divInfoCurso = $('#info-curso');
    divInfoCurso.empty();

    let headerCurso = $('<h3>').text(curso.nome);
    let headerSemestre = $('<h4>').text(curso.semestre);
    let infoCurso = $('<p>').text(`Turno: ${curso.turno}, Coordenação: ${curso.coordenacao}`);

    let tabelaHorarios = $('<table>').addClass('table').append(
        $('<thead>').append(
            $('<tr>').append(
                $('<th>').text('Dia da Semana'),
                $('<th>').text('Aula')
            )
        ),
        $('<tbody>')
    );

    let tbody = tabelaHorarios.find('tbody');

    $.each(curso.horarios, function(dia, horario) {
        let linha = $('<tr>').append(
            $('<td>').text(dia),
            $('<td>').text(horario)
        );
        tbody.append(linha);
    });

    $('#info-curso').append(headerCurso, headerSemestre, infoCurso, tabelaHorarios);
    $('#cursos').css('display', 'block');
}

function adicionaCursoDropdown(dadosCursos) {
    let dropdownCursos = $('#dropdown-cursos');

    $.each(dadosCursos, function(index, curso) {
        let optionCurso = $('<option>').val(curso.nome).text(curso.nome);
        dropdownCursos.append(optionCurso);
    });

    dropdownCursos.on('change', function() {
        let cursoSelecionado = $(this).val();

        let curso = dadosCursos.find(function(curso) {
            return curso.nome === cursoSelecionado;
        });

        if (curso) {
            mostraInfoCurso(curso);
        }
    });
}

$(document).ready(function() {
    $.getJSON('dadosCursos.json')
        .done(function(dadosCursos) {
            adicionaCursoDropdown(dadosCursos);
        })
        .fail(function(error) {
            console.error('Erro ao carregar dados dos cursos:', error);
        });
});
