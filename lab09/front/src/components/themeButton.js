import React from 'react';

const ThemeButton = ({ toggleTheme, darkTheme }) => {
  return (
    <button type="button" className="theme-button" onClick={toggleTheme}>
      {darkTheme ? 'Desativar Tema Escuro' : 'Ativar Tema Escuro'}
    </button>
  );
};

export default ThemeButton
