document.getElementById("alterarTema").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
});

document.getElementById("alterarTema").addEventListener("click", function() {
    const botao = document.getElementById("alterarTema");
    if (botao.classList.contains("btn-light")) {
        botao.classList.remove("btn-light");
        botao.classList.add("btn-dark");
    } else {
        botao.classList.remove("btn-dark");
        botao.classList.add("btn-light");
    }
});

function mostraInfoCurso(curso) {
    const divInfoCurso = document.getElementById('info-curso');
    divInfoCurso.innerHTML = '';

    const headerCurso = document.createElement('h3');
    headerCurso.textContent = curso.nome;

    const headerSemestre = document.createElement('h4');
    headerSemestre.textContent = curso.semestre;

    const infoCurso = document.createElement('p');
    infoCurso.textContent = `Turno: ${curso.turno}, Coordenação: ${curso.coordenacao}`;

    const tabelaHorarios = document.createElement('table');
    tabelaHorarios.classList.add('table');
    tabelaHorarios.innerHTML = `
        <thead>
            <tr>
                <th>Dia da Semana</th>
                <th>Aula</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = tabelaHorarios.querySelector('tbody');

    for (const [dia, horario] of Object.entries(curso.horarios)) {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${dia}</td>
            <td>${horario}</td>
        `;
        tbody.appendChild(linha);
    }

    divInfoCurso.appendChild(headerCurso);
    divInfoCurso.appendChild(headerSemestre);
    divInfoCurso.appendChild(infoCurso);
    divInfoCurso.appendChild(tabelaHorarios);

    document.getElementById('cursos').style.display = 'block';
}
function adicionaCursoDropdown(dadosCursos) {
    const dropdownCursos = document.getElementById('dropdown-cursos');

    dadosCursos.forEach(curso => {
        const optionCurso = document.createElement('option');
        optionCurso.value = curso.nome;
        optionCurso.textContent = curso.nome;

        dropdownCursos.appendChild(optionCurso);
    });

    dropdownCursos.addEventListener('change', function() {
        const cursoSelecionado = this.value;

        const curso = dadosCursos.find(curso => curso.nome === cursoSelecionado);

        if (curso) {
            mostraInfoCurso(curso);
        }
    });
}

window.addEventListener('DOMContentLoaded', function() {
    fetch('dadosCursos.json')
        .then(response => response.json())
        .then(dadosCursos => { 
            adicionaCursoDropdown(dadosCursos);
        })
        .catch(error => console.error('Erro ao carregar dados dos cursos:', error));
});