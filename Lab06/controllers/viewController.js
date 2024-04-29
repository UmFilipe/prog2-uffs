const viewController = {
    mostraInfoCurso: function(curso) {
        const divInfoCurso = $('#info-curso')
        divInfoCurso.empty()

        const headerCurso = $('<h3>').text(curso.nome)
        const headerSemestre = $('<h4>').text(curso.semestre)
        const infoCurso = $('<p>').text(`Turno: ${curso.turno}, Coordenação: ${curso.coordenacao}`)

        const tabelaHorarios = $('<table>').addClass('table').append(
            $('<thead>').append(
                $('<tr>').append(
                    $('<th>').text('Dia da Semana'),
                    $('<th>').text('Aula')
                )
            ),
            $('<tbody>')
        )

        const tbody = tabelaHorarios.find('tbody')

        $.each(curso.horarios, function(dia, horario) {
            let linha = $('<tr>').append(
                $('<td>').text(dia),
                $('<td>').text(horario)
            )
            tbody.append(linha)
        })

        $('#info-curso').append(headerCurso, headerSemestre, infoCurso, tabelaHorarios)
        $('#cursos').css('display', 'block')
    },

    adicionaCursoDropdown: function(dadosCursos) {
        const dropdownCursos = $('#dropdown-cursos')

        $.each(dadosCursos, function(index, curso) {
            const optionCurso = $('<option>').val(curso.nome).text(curso.nome)
            dropdownCursos.append(optionCurso)
        })

        dropdownCursos.on('change', function() {
            const cursoSelecionado = $(this).val()

            const curso = dadosCursos.find(function(curso) {
                return curso.nome === cursoSelecionado
            })

            if (curso) {
                viewController.mostraInfoCurso(curso)
            }
        })
    }
}