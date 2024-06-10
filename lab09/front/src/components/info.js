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
            <tr>
              <td>Segunda</td>
              <td>{course.segunda}</td>
            </tr>
            <tr>
              <td>Terça</td>
              <td>{course.terca}</td>
            </tr>
            <tr>
              <td>Quarta</td>
              <td>{course.quarta}</td>
            </tr>
            <tr>
              <td>Quinta</td>
              <td>{course.quinta}</td>
            </tr>
            <tr>
              <td>Sexta</td>
              <td>{course.sexta}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseInfo;
