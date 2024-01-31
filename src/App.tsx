import React from 'react';
import ResumeForm from './ResumeForm'; // Подключаем компонент формы резюме
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  // Функция, которая будет вызвана при отправке формы
  const handleFormSubmit = (formData: any) => {
    // Вместо вывода в консоль можно отправить данные на сервер или выполнить другие действия
    console.log('Форма была отправлена с данными:', formData);
  };

  return (
    <div className="App">
       <I18nextProvider i18n={i18n}>
      <ResumeForm onSubmit={handleFormSubmit} />
      </I18nextProvider>
    </div>
  );
}

export default App;
