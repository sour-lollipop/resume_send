import React from "react";
import img1 from "./Images/photo1.jpg";
import img2 from "./Images/photo2.jpg";
import img3 from "./Images/photo3.jpg";
interface ResumeFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  desiredPosition: string;
  fullName: string;
  photo: string | null;
  photo2: string | null;
  photo3: string | null;
  birthDate: string;
  birthPlace: string[];
  maritalStatus: string;
  children: string;
  height: number;
  weight: number;

  city_res: string;
  current_loc: string;
  nationality: string;
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

  qatar_work: string;
  uae_work: string;
  bahrain_work: string;
  oman_work: string;
  // Education
  degree: string;
  university: string;
  area_specific: string;
  years: string;

  degree2: string;
  university2: string;
  area_specific2: string;
  years2: string;

  seminar_year: string;
  seminar_name: string;
  seminar_period: string;

  tattoo_piersing_discribe: string;
  tattoo_piercing_photos: (string | null)[];
  
  // Work
  workPosition: string;
  workLocation: string;
  workName: string;
  workResponsibilities: string;

  workPosition2: string;
  workLocation2: string;
  workName2: string;
  workResponsibilities2: string;

  workPosition3: string;
  workLocation3: string;
  workName3: string;
  workResponsibilities3: string;

  comp_program: string;

  driver_license: string;
  car_category: string;

  russianLevel: string;
  englishLevel: string;
  otherLevel: string;
  job_sroke: string;
  how_knaws: string;
  consent: boolean;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    desiredPosition: "",
    fullName: "",
    photo: null,
    photo2: null,
    photo3: null,
    birthDate: "",
    birthPlace: [""],
    maritalStatus: "",
    children: "",
    height: 0,
    weight: 0,

    city_res: "",
    current_loc: "",
    nationality: "",
    citizenship: "",
    travel_p: false,
    covid_p: false,

    mobile: 0,
    messenger: "",
    email: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    Vkontakte: "",

    rel_name: "",
    relationship: "",
    rel_mobile: 0,
    dad_name: "",
    mom_name: "",

    qatar_work: "",
    uae_work: "",
    bahrain_work: "",
    oman_work: "",
    // Education
    degree: "",
    university: "",
    area_specific: "",
    years: "",

    degree2: "",
    university2: "",
    area_specific2: "",
    years2: "",

    seminar_year: "",
    seminar_name: "",
    seminar_period: "",

    tattoo_piersing_discribe: "",
    tattoo_piercing_photos: [null, null, null],

    // Work
    workPosition: "",
    workLocation: "",
    workName: "",
    workResponsibilities: "",

    workPosition2: "",
    workLocation2: "",
    workName2: "",
    workResponsibilities2: "",

    workPosition3: "",
    workLocation3: "",
    workName3: "",
    workResponsibilities3: "",

    comp_program: "",

    driver_license: "",
    car_category: "",

    russianLevel: "",
    englishLevel: "",
    otherLevel: "",
    job_sroke: "",
    how_knaws: "",
    consent: false,
  });

  const handleChange = (
    key: keyof FormData,
    value: string | File | string[] | boolean | null
  ) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange("photo", URL.createObjectURL(file));
      console.log('Photo',URL.createObjectURL(file))
    } else {
      handleChange("photo", null);
    }
  };

  const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange("photo2", URL.createObjectURL(file));
      console.log('Photo2',URL.createObjectURL(file))
    } else {
      handleChange("photo2", null);
    }
  };

  const handleFileChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange("photo3", URL.createObjectURL(file));
      console.log('Photo3',URL.createObjectURL(file))
    } else {
      handleChange("photo3", null);
    }
  };


  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const urls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        urls.push(URL.createObjectURL(file));
      }
      handleChange('tattoo_piercing_photos', urls);
      console.log('tattoo_piercing_photos',urls)
    } else {
      handleChange('tattoo_piercing_photos', []);
    }
  };


  const handleSubmit = () => {
    if (formData.consent) {
      onSubmit(formData);
      console.log(formData);
    } else {
      alert("Вы должны согласиться на обработку данных.");
    }
  };

  return (
    <div className="resume-form">
      <label>
        ФИО:
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
      </label>
      <br />

      <label>
        Желаемая должность:
        <input
          type="text"
          value={formData.desiredPosition}
          onChange={(e) => handleChange("desiredPosition", e.target.value)}
        />
      </label>
      <br />
      <div className="img_add">
        <label>
          <p>Добавьте свое фото , по примеру данной картинки :</p>
          <img src={img1} width={130} height={200} />
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>
      <br />

      <div className="img_add">
        <label>
          <p>Добавьте свое фото , по примеру данной картинки :</p>
          <img src={img2} width={150} height={200} />
          <input type="file" accept="image/*" onChange={handleFileChange2} />
        </label>
      </div>
      <br />

      <div className="img_add">
        <label>
          <p>Добавьте свое фото , по примеру данной картинки :</p>
          <img src={img3} width={130} height={250} />
          <input type="file" accept="image/*" onChange={handleFileChange3} />
        </label>
      </div>

      <br />

      <label>
        Дата рождения:
        <input
          type="text"
          value={formData.birthDate}
          onChange={(e) => handleChange("birthDate", e.target.value)}
        />
      </label>
      <br />

      <label>
        Страна рождения:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Город или поселок рождения:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Семейное положение:
        <select>
          <option>Замужем</option>
          <option>Незамужем</option>
        </select>
      </label>
      <br />

      <label>
        Наличие детей:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Рост:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Вес:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Город проживания:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Текущее местоположение:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Национальность:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Гражданство:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        У вас есть заграничный паспорт?
        <select>
          <option>Нет</option>
          <option>Да</option>
        </select>
      </label>
      <br />

      <label>
      Ты получил COVID-19 вакцину?
        <select>
          <option>Нет</option>
          <option>Да</option>
        </select>
      </label>
      <br />

      <label>
        Номер мобильного телефона:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        Мессенджеры Whatsapp/viber/telegram:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
        E-mail адресс:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Facebook:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Instagram:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Linkedin:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      VKontakte
      :
        <input
          type="text"
        />
      </label>
      <br />
      <h3>Контактные данные родственника на случай чрезвычайной ситуации:</h3>
      <label>
      Имя:
        <input
          type="text"
        />
      </label>
      <br />
      
      <label>
      Кем он(а) вам приходится ?
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Номер мобильного:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Имя вашего отца:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Имя вашей матери:
        <input
          type="text"
        />
      </label>
      <br />
    <h3>Предпочтительные страны для переезда и работы:</h3>
      <label>
      Катар
        <select>
          <option>Нет</option>
          <option>Да</option>
        </select>
      </label>
      <br />

      <label>
      ОАЭ
        <select>
          <option>Нет</option>
          <option>Да</option>
        </select>
      </label>
      <br />

      <label>
      Бахрейн
        <select>
          <option>Нет</option>
          <option>Да</option>
        </select>
      </label>
      <br />

      <label>
      Оман
        <select>
          <option>Нет</option>
          <option>Да</option>
        </select>
      </label>
      <br />

      <h3>Образование</h3>
      <label>
      Сертификат/степень оброзования:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Наименование колледжа или университета:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Специализация:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Начало оброзованияя:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Конец оброзованияя:
        <input
          type="text"
        />
      </label>
      <br />
      <h3>Посещенные семинары/обучение/пройденные краткосрочные курсы:</h3>
      <label>
      Начало курса(семинара и т.д.):
        <input
          type="text"
        />
      </label>
      <br />
      <label>
      Название курса(семинара и т.д.):
        <input
          type="text"
        />
      </label>
      <br />
      <label>
      Период посещения курса(семинара и т.д.):
        <input
          type="text"
        />
      </label>
      <br />
      <h3>Есть ли у вас татуировки или пирсинг?</h3>
      <label>
      Опишите пожалуйста:
        <input
          type="text"
        />
      </label>
      <br />
      <div className="img_add">
      <label>
        <p>Добавьте свои фотографии пирсинга или татуировок:</p>
        <input type="file" accept="image/*" onChange={handleFilesChange} multiple />
      </label>
    </div>
    <br />

      <h3>Опыт работы</h3>
      <label>
      Должность:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Обязанности:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Название компании:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Местоположение компании:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Дата начало работы:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Дата конца работы:
        <input
          type="text"
        />
      </label>
      <br />

      <h3>Компьютерные программы, с которыми вы работаете:</h3>
<label>
Программы гостеприимства:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Финансовые программы:
        <input
          type="text"
        />
      </label>
      <br />
      <label>
      Программы путешествий и бронирования:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Программы графики и дизайна:
        <input
          type="text"
        />
      </label>
      <br />

      <label>
      Другое программное обеспечение:
        <input
          type="text"
        />
      </label>
      <br />

      <h3>Наличие водительских прав</h3>
      <label>
      Категория:
        <input
          type="text"
        />
      </label>
      <br />

      <h3>Знание языков:</h3>
      <label>
        Уровень английского языка:
        <select
          value={formData.englishLevel}
          onChange={(e) => handleChange("englishLevel", e.target.value)}
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
      <label>
        Уровень русского языка:
        <select
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

      <label>
      Дополнительный язык:
        <input
          type="text"
        />
      </label>
      <br />
      <label>
        Уровень дополнительного языка:
        <select
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

      <label>
      <h3>Как вы о нас узнали?</h3>
        <select
        >
          <option value="">Google поисковик</option>
          <option value="A1">Facebook</option>
          <option value="A2">Instagram</option>
          <option value="B1">Vk.com</option>
          <option value="B2">Рекомендация друзей</option>
          <option value="C1">Другие источники поиска работы</option>
        </select>
      </label>
      <br />

      <label>
      <h3>Предпочитаемая продолжительность работы</h3>
        <input
          type="text"
        />
      </label>
      <br />

      <h3>Важная информация для кандидата:</h3>
      <p>
      Отправляя данную анкету, я даю согласие на обработку моих персональных данных.
      <br />
      Я понимаю и согласен с тем, что агентство вправе отказать мне в прохождении интервью с тем или иным
работодателем, поскольку представляет интересы последних по подбору персонала.
<br />
Я понимаю и согласен с тем, что агентство может отказать мне в дальнейшем сотрудничестве в следующих
случаях:
      <br />
      1. Отказ от должности и компании, в которую сначала давал (а) согласие трудоустраиваться.
      <br />
      2. Отказ после утверждения работодателем моей кандидатуры.
      </p>
      <div className="check">
        <label>Согласие на обработку данных:</label>
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => handleChange("consent", e.target.checked)}
        />
      </div>
      <br />

      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
};

export default ResumeForm;
