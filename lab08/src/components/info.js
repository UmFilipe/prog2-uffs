import React from 'react';

const CourseInfo = ({ course }) => {
  return (
    <div id="cursos">
      <div id="info-curso">
        <h3>{course.nome}</h3>
        <h4>{course.semestre}</h4>
        <p>Turno: {course.turno}, Coordenação: {course.coordenacao}</p>
        <table className="table">
          <thead>
            <tr>
              <th>Dia da Semana</th>
              <th>Aula</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(course.horarios).map(([dia, aula], index) => (
              <tr key={index}>
                <td>{dia}</td>
                <td>{aula}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseInfo
