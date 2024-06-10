import React, { useEffect, useState } from 'react';
import Header from './components/header';
import CourseInfo from './components/info';
import CourseSelector from './components/selector';
import ThemeButton from './components/themeButton';
import './style.css';

function App() {
  const [coursesData, setCoursesData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5372/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoursesData(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseChange = (courseName) => {
    const course = coursesData.find(c => c.nome === courseName);
    setSelectedCourse(course);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
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

export default App;
