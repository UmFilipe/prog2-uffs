import React, { useState } from 'react';
import Header from './components/header';
import CourseInfo from './components/info';
import CourseSelector from './components/selector';
import ThemeButton from './components/themeButton';
import coursesData from './data/courses';
import './style.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleCourseChange = (courseName) => {
    const course = coursesData.find(c => c.nome === courseName);
    setSelectedCourse(course);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  };

  return (
    <div className={`app ${darkTheme ? 'dark-theme' : ''}`}>
      <Header />
      <ThemeButton toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <CourseSelector courses={coursesData} onCourseChange={handleCourseChange} />
      {selectedCourse && <CourseInfo course={selectedCourse} />}
      <div id="alerta">
        Entre em <a href="https://www.uffs.edu.br/">uffs.edu.br</a> para mais informações.
      </div>
    </div>
  );
}

export default App


