import React from 'react';
import ResumeForm from './ResumeForm'; // Подключаем компонент формы резюме
import './App.css';

function App() {
  // Функция, которая будет вызвана при отправке формы
  const handleFormSubmit = (formData: any) => {
    // Вместо вывода в консоль можно отправить данные на сервер или выполнить другие действия
    console.log('Форма была отправлена с данными:', formData);
  };

  return (
    <div className="App">
      <ResumeForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
