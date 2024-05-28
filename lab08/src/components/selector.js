import React from 'react';

const CourseSelector = ({ courses, onCourseChange }) => {
  const handleChange = (event) => {
    onCourseChange(event.target.value);
  };

  return (
    <div id="selecionar-curso">
      <select id="dropdown-cursos" onChange={handleChange}>
        <option value="" disabled selected>Selecione um curso</option>
        {courses.map((course, index) => (
          <option key={index} value={course.nome}>{course.nome}</option>
        ))}
      </select>
    </div>
  );
};

export default CourseSelector
