import React from 'react';

interface ResumeFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  fullName: string;
  desiredPosition: string;
  photo: string | null;
  birthDate: string;
  birthPlace: string;
  workExperience: string[];
  englishLevel: string;
  consent: boolean;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    fullName: '',
    desiredPosition: '',
    photo: null,
    birthDate: '',
    birthPlace: '',
    workExperience: [''],
    englishLevel: '',
    consent: false,
  });

  const handleChange = (
    key: keyof FormData,
    value: string | File | string[] | boolean | null
  ) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleAddExperience = () => {
    if (formData.workExperience.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        workExperience: [...prevData.workExperience, ''],
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange('photo', URL.createObjectURL(file));
    } else {
      handleChange('photo', null);
    }
  };

  const handleSubmit = () => {
    if (formData.consent) {
      onSubmit(formData);
      console.log(formData)
    } else {
      alert('Вы должны согласиться на обработку данных.');
    }
  };

  return (
    <div className="resume-form">
       <label>
        ФИО:
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
        />
      </label>
      <br />

      <label>
        Желаемая должность:
        <input
          type="text"
          value={formData.desiredPosition}
          onChange={(e) => handleChange('desiredPosition', e.target.value)}
        />
      </label>
      <br />

      <label>
        Фото 3x4:
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      <br />

      <label>
        Дата рождения:
        <input
          type="text"
          value={formData.birthDate}
          onChange={(e) => handleChange('birthDate', e.target.value)}
        />
      </label>
      <br />

      <label>
        Место рождения:
        <input
          type="text"
          value={formData.birthPlace}
          onChange={(e) => handleChange('birthPlace', e.target.value)}
        />
      </label>
      <br />

      <label>
        Опыт работы:
        {formData.workExperience.map((experience, index) => (
          <div key={index}>
            <input
              type="text"
              value={experience}
              onChange={(e) => {
                const newWorkExperience = [...formData.workExperience];
                newWorkExperience[index] = e.target.value;
                handleChange('workExperience', newWorkExperience);
              }}            />
          </div>
        ))}
        <button onClick={handleAddExperience}>Добавить опыт работы</button>
      </label>
      <br />

      <label>
        Уровень английского языка:
        <select
          value={formData.englishLevel}
          onChange={(e) => handleChange('englishLevel', e.target.value)}
        >
          <option value="">Выберите уровень</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="native">Носитель</option>
        </select>
      </label>
      <br />
      <div className='check'>
      <label>
        Согласие на обработку данных:
      </label>
      <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => handleChange('consent', e.target.checked)}
        />
      </div>
      <br />


      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
};

export default ResumeForm;
