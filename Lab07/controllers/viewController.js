const viewController = {
    carregarDadosCursos: function() {
        return $.getJSON("/model/dadosCursos")
            .then(function(dadosCursos) {
                return dadosCursos;
            })
            .fail(function(error) {
                console.error('Erro ao carregar dados dos cursos:', error);
                throw error; 
            });
    },

    alterarTema: function() {
        const botaoAlterarTema = $("#alterarTema");

        botaoAlterarTema.click(function() { 
            $("body").toggleClass("dark-theme");

            if (botaoAlterarTema.hasClass("btn-light")) {
                botaoAlterarTema.removeClass("btn-light").addClass("btn-dark");
            } else {
                botaoAlterarTema.removeClass("btn-dark").addClass("btn-light");
            }
        });
    },

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

exports.getIndex = (req, res) => {
    return res.sendFile(process.cwd() + "/view/index.html")
}

exports.getViewController = (req, res) => {
    res.sendFile(process.cwd() + '/controllers/viewController.js')
}

