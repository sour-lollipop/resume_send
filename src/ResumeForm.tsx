import React from 'react';

interface ResumeFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  desiredPosition: string;
  fullName: string;
  photo: string | null;
  birthDate: string;
  birthPlace: string[];
  maritalStatus: string;
  children: string;
  height: number;
  weight: number;
  
  city_res: string;
  current_loc: string;
  nationality:string;
  citizenship: string;
  travel_p: boolean;
  covid_p: boolean;
  
  mobile: number;
  messenger: string;
  email: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  Vkontakte: string;

  rel_name: string;
  relationship: string;
  rel_mobile: number;
  dad_name: string;
  mom_name: string;

  country_work: string;
// Education
  degree: string;
  university: string;
  area_specific: string;
  years:string;

  degree2: string;
  university2: string;
  area_specific2: string;
  years2:string;

  seminar_year: string;
  seminar_name: string;
  seminar_period: string;
  
// Work
  workExperience: string[];
  englishLevel: string;
  consent: boolean;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    desiredPosition: '',
    fullName: '',
    photo: null,
    birthDate: '',
    birthPlace:[''],
    maritalStatus:'',
    children: '',
    height: 0,
    weight: 0,
    
    city_res:'',
    current_loc:'',
    nationality: '',
    citizenship:'',
    travel_p:false,
    covid_p:false,
    
    mobile:0,
    messenger:'',
    email: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    Vkontakte: '',

    rel_name: '',
    relationship: '',
    rel_mobile: 0,
    dad_name: '',
    mom_name: '',

    country_work: '',
// Education
    degree:'',
    university:'',
    area_specific:'',
    years:'',
  
    degree2:'',
    university2:'',
    area_specific2:'',
    years2:'',

    seminar_year: '',
    seminar_name: '',
    seminar_period: '',

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
