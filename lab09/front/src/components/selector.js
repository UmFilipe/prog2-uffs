import React from 'react';

const CourseSelector = ({ courses, onCourseChange }) => {
  const handleChange = (event) => {
    onCourseChange(event.target.value);
  };

  return (
    <div id="selecionar-curso">
      <select id="dropdown-cursos" onChange={handleChange} defaultValue="">
        <option value="" disabled>Selecione um curso</option>
        {courses.map((course) => (
          <option key={course.id} value={course.nome}>{course.nome}</option>
        ))}
      </select>
    </div>
  );
};

export default CourseSelector;
