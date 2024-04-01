function addCourse(courseData) {
    const coursesDiv = document.getElementById('courses');
    coursesDiv.innerHTML = '';

    courseData.forEach(course => {
        const courseHeader = document.createElement('h2');
        courseHeader.textContent = course.nome;

        const semesterHeader = document.createElement('h3');
        semesterHeader.textContent = course.semestre;

        const courseInfoParagraph = document.createElement('p');
        courseInfoParagraph.textContent = `Turno: ${course.turno}, Coordenação: ${course.coordenacao}`;

        coursesDiv.appendChild(courseHeader);
        coursesDiv.appendChild(semesterHeader);
        coursesDiv.appendChild(courseInfoParagraph);
    });
}

// Exemplo de dados de cursos
const coursesData = [
    {
        nome: 'Curso 1',
        semestre: '1º Semestre',
        turno: 'Matutino',
        coordenacao: 'Coordenador 1'
    },
    {
        nome: 'Curso 2',
        semestre: '2º Semestre',
        turno: 'Vespertino',
        coordenacao: 'Coordenador 2'
    }
    // Adicione mais dados de cursos conforme necessário
];

window.addEventListener('DOMContentLoaded', function() {
    addCourse(coursesData);
});