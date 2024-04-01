function alterarTema(){
    document.body.classList.toggle("dark-theme")
}

document.getElementById("alterarTema").addEventListener("click", alterarTema());

function selecionaCurso(horario) {
    const divHorarioCurso = document.getElementById('horario-curso');
    divHorarioCurso.innerHTML = '';

    const paragrafoHorario = document.createElement('p');
    paragrafoHorario.textContent = `Curso: ${horario.curso}, Horário: ${horario.horario}`;

    divHorarioCurso.appendChild(paragrafoHorario);

    document.getElementById('cursos').style.display = 'block';
}

function mostraInfoCurso(curso) {
    const divInfoCurso = document.getElementById('info-curso');
    divInfoCurso.innerHTML = '';

    const headerCurso = document.createElement('h3');
    headerCurso.textContent = curso.nome;

    const headerSemestre = document.createElement('h4');
    headerSemestre.textContent = curso.semestre;

    const infoCurso = document.createElement('p');
    infoCurso.textContent = `Turno: ${curso.turno}, Coordenação: ${curso.coordenacao}`;

    divInfoCurso.appendChild(headerCurso);
    divInfoCurso.appendChild(headerSemestre);
    divInfoCurso.appendChild(infoCurso);

    document.getElementById('cursos').style.display = 'block';
}

document.getElementById("alterarTema").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

function adicionaCursoDropdown(dadosCursos) {
    const dropdownCursos = document.getElementById('dropdown-cursos');

    dadosCursos.forEach(curso => {
        const optionCurso = document.createElement('option');
        optionCurso.value = curso.nome;
        optionCurso.textContent = curso.nome;

        dropdownCursos.appendChild(optionCurso);
    });

    // Adiciona um listener para o evento change do dropdown
    dropdownCursos.addEventListener('change', function() {
        const cursoSelecionado = this.value;

        const curso = dadosCursos.find(curso => curso.nome === cursoSelecionado);

        if (curso) {
            mostraInfoCurso(curso);
        }
    });
}

window.addEventListener('DOMContentLoaded', function() {
    adicionaCursoDropdown(dadosCursos);
});


// Exemplo de dados de cursos
const dadosCursos = [
    {
        nome: 'Administração',
        semestre: '1º Semestre',
        turno: 'Matutino',
        coordenacao: 'Coordenador 1'
    },
    {
        nome: 'Agronomia',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 2'
    },
    {
        nome: 'Ciência da Computação',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 4'
    },
    {
        nome: 'Ciências Sociais',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 5'
    },
    {
        nome: 'Enfermagem',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 6'
    },
    {
        nome: 'Engenharia Ambiental e Sanitária',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 7'
    },
    {
        nome: 'Filosofia',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 8'
    },
    {
        nome: 'Geografia',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 9'
    },
    {
        nome: 'História',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 10'
    },
    {
        nome: 'Letras: Português e Espanhol',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 11'
    },
    {
        nome: 'Matemática',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 12'
    },
    {
        nome: 'Medicina',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 13'
    },
    {
        nome: 'Pedagogia',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 14'
    }
];

window.addEventListener('DOMContentLoaded', function() {
    adicionaCursoDropdown(dadosCursos);
});