import React,{useState} from "react";
import img1 from "./Images/photo1.jpg";
import img2 from "./Images/photo2.jpg";
import img3 from "./Images/photo3.jpg";
import axios from 'axios';
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
  birthPlaceCountry:string;
  birthPlaceCity:string;
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
  workTime:string;

  workPosition2: string;
  workLocation2: string;
  workName2: string;
  workResponsibilities2: string;
  workTime2:string;

  workPosition3: string;
  workLocation3: string;
  workName3: string;
  workResponsibilities3: string;
  workTime3:string;

  host_program:  string;
  finance_program:  string;
  travel_program:  string;
  graph_program:  string;
  other_program:  string;

  driver_license: string;
  car_category: string;

  russianLevel: string;
  englishLevel: string;
  otherLang: string;
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
    birthPlaceCountry: "",
    birthPlaceCity: "",
    maritalStatus: "married",
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

    qatar_work: "no",
    uae_work: "no",
    bahrain_work: "no",
    oman_work: "no",
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
    workTime:'',

    workPosition2: "",
    workLocation2: "",
    workName2: "",
    workResponsibilities2: "",
    workTime2:'',

    workPosition3: "",
    workLocation3: "",
    workName3: "",
    workResponsibilities3: "",
    workTime3:'',

    host_program: "",
    finance_program: "",
    travel_program: "",
    graph_program: "",
    other_program: "",

    driver_license: "no",
    car_category: "",

    russianLevel: "Basic",
    englishLevel: "Basic",
    otherLang: "",
    otherLevel: "Basic",
    job_sroke: "",
    how_knaws: "Google",
    consent: false,
  });

  const handleChange = (
    key: keyof FormData,
    value: string | File | string[] | boolean | null
  ) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    // console.log(file)
    // if (file) {
    //   handleChange("photo", URL.createObjectURL(file));
    //   console.log('Photo',URL.createObjectURL(file))
    // } else {
    //   handleChange("photo", null);
    // }
    if (file) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("file", file);

        const response = await axios.post("https://lis.4dev.kz/upload", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          const imageUrl = response.data; // Проверьте, какое поле содержит URL изображения
          handleChange("photo", imageUrl);
        } else {
          console.error("Ошибка при загрузке изображения");
        }
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
      }
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


  const [addEducation, setAddEducation] = useState(false);
  const [addWork, setAddWork] = useState(1);

  const handleSubmit = async  () => {
    if (formData.consent) {
      onSubmit(formData);
      try {
        const response = await fetch("http://localhost:8000/submit_resume", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log("Данные успешно отправлены");
          // Можно добавить дополнительные действия после успешной отправки
        } else {
          console.error("Можно обработать ошибку","Ошибка при отправке данных");
          // Можно обработать ошибку, например, показать сообщение об ошибке пользователю
        }
      } catch (error) {
        console.error("Ошибка при отправке данных:", error);
      }
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
          value={formData.birthPlaceCountry}
          onChange={(e) => handleChange("birthPlaceCountry", e.target.value)}
        />
      </label>
      <br />

      <label>
        Город или поселок рождения:
        <input
          type="text"
          value={formData.birthPlaceCity}
          onChange={(e) => handleChange("birthPlaceCity", e.target.value)}
        />
      </label>
      <br />

      <label>
        Семейное положение:
        <select
        value={formData.maritalStatus}
        onChange={(e) => handleChange("maritalStatus", e.target.value)}
        >
          <option value={"married"}>Замужем</option>
          <option value={"not_married"}>Незамужем</option>
        </select>
      </label>
      <br />

      <label>
        Наличие детей:
        <input
          type="text"
          value={formData.children}
          onChange={(e) => handleChange("children", e.target.value)}
        />
      </label>
      <br />

      <label>
        Рост:
        <input
          type="number"
          // value={formData.height}
          onChange={(e) => handleChange("height", e.target.value)}
          placeholder="cm"
        />
      </label>
      <br />

      <label>
        Вес:
        <input
          type="number"
          // value={formData.weight}
          onChange={(e) => handleChange("weight", e.target.value)}
          placeholder="kg"
        />
      </label>
      <br />

      <label>
        Город проживания:
        <input
          type="text"
          value={formData.city_res}
          onChange={(e) => handleChange("city_res", e.target.value)}
        />
      </label>
      <br />

      <label>
        Текущее местоположение:
        <input
          type="text"
          value={formData.current_loc}
          onChange={(e) => handleChange("current_loc", e.target.value)}
        />
      </label>
      <br />

      <label>
        Национальность:
        <input
          type="text"
          value={formData.nationality}
          onChange={(e) => handleChange("nationality", e.target.value)}
        />
      </label>
      <br />

      <label>
        Гражданство:
        <input
          type="text"
          value={formData.citizenship}
          onChange={(e) => handleChange("citizenship", e.target.value)}
        />
      </label>
      <br />

      <label>
        У вас есть заграничный паспорт?
        
        <select
          value="no"
          onChange={(e) => handleChange("travel_p", e.target.value === 'yes'? true: false)}
        >
          <option value="no">Нет</option>
          <option value="yes">Да</option>
        </select>
      </label>
      <br />

      <label>
      Ты получил COVID-19 вакцину?
        <select
         value="no"
         onChange={(e) => handleChange("covid_p", e.target.value === 'yes'? true: false)}
        >
          <option  value="no">Нет</option>
          <option  value="yes">Да</option>
        </select>
      </label>
      <br />

      <label>
        Номер мобильного телефона:
        <input
          type="number"
          // value={formData.mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          placeholder="87776665544"
        />
      </label>
      <br />

      <label>
        Мессенджеры Whatsapp/viber/telegram:
        <input
          type="text"
          value={formData.messenger}
          onChange={(e) => handleChange("messenger", e.target.value)}
        />
      </label>
      <br />

      <label>
        E-mail адресс:
        <input
          type="text"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </label>
      <br />

      <label>
      Facebook:
        <input
          type="text"
          value={formData.facebook}
          onChange={(e) => handleChange("facebook", e.target.value)}
        />
      </label>
      <br />

      <label>
      Instagram:
        <input
          type="text"
          value={formData.instagram}
          onChange={(e) => handleChange("instagram", e.target.value)}
        />
      </label>
      <br />

      <label>
      Linkedin:
        <input
          type="text"
          value={formData.linkedin}
          onChange={(e) => handleChange("linkedin", e.target.value)}
        />
      </label>
      <br />

      <label>
      VKontakte
      :
        <input
          type="text"
          value={formData.Vkontakte}
          onChange={(e) => handleChange("Vkontakte", e.target.value)}
        />
      </label>
      <br />
      <h3>Контактные данные родственника на случай чрезвычайной ситуации:</h3>
      <label>
      Имя:
        <input
          type="text"
          value={formData.rel_name}
          onChange={(e) => handleChange("rel_name", e.target.value)}
        />
      </label>
      <br />
      
      <label>
      Кем он(а) вам приходится ?
        <input
          type="text"
          value={formData.relationship}
          onChange={(e) => handleChange("relationship", e.target.value)}
        />
      </label>
      <br />

      <label>
      Номер мобильного:
        <input
          type="number"
          placeholder="87776665544"
          // value={formData.rel_mobile}
          onChange={(e) => handleChange("rel_mobile", e.target.value)}
        />
      </label>
      <br />

      <label>
      Имя вашего отца:
        <input
          type="text"
          value={formData.dad_name}
          onChange={(e) => handleChange("dad_name", e.target.value)}
        />
      </label>
      <br />

      <label>
      Имя вашей матери:
        <input
          type="text"
          value={formData.mom_name}
          onChange={(e) => handleChange("mom_name", e.target.value)}
        />
      </label>
      <br />
    <h3>Предпочтительные страны для переезда и работы:</h3>
      <label>
      Катар
        <select
        value={formData.qatar_work}
        onChange={(e) => handleChange("qatar_work", e.target.value)}
        >
          <option value='no'>Нет</option>
          <option value='yes'>Да</option>
        </select>
      </label>
      <br />

      <label>
      ОАЭ
        <select
        value={formData.uae_work}
        onChange={(e) => handleChange("uae_work", e.target.value)}>
          <option value='no'>Нет</option>
          <option value='yes'>Да</option>
        </select>
      </label>
      <br />

      <label>
      Бахрейн
        <select
        value={formData.bahrain_work}
        onChange={(e) => handleChange("bahrain_work", e.target.value)}>
          <option value='no'>Нет</option>
          <option value='yes'>Да</option>
        </select>
      </label>
      <br />

      <label>
      Оман
        <select
        value={formData.oman_work}
        onChange={(e) => handleChange("oman_work", e.target.value)}>
          <option value='no'>Нет</option>
          <option value='yes'>Да</option>
        </select>
      </label>
      <br />

      <h3>Образование</h3>
      <label>
      Сертификат/степень оброзования:
        <input
          type="text"
          value={formData.degree}
          onChange={(e) => handleChange("degree", e.target.value)}
        />
      </label>
      <br />

      <label>
      Наименование колледжа или университета:
        <input
          type="text"
          value={formData.university}
          onChange={(e) => handleChange("university", e.target.value)}
        />
      </label>
      <br />

      <label>
      Специализация:
        <input
          type="text"
          value={formData.area_specific}
          onChange={(e) => handleChange("area_specific", e.target.value)}
        />
      </label>
      <br />

      <label>
      Начало-конец оброзованияя:
        <input
          type="text"
          value={formData.years}
          onChange={(e) => handleChange("years", e.target.value)}
        />
      </label>
      {addEducation?
      (<>
      <h3>Образование 2</h3>
       <label>
      Сертификат/степень оброзования:
        <input
          type="text"
          value={formData.degree2}
          onChange={(e) => handleChange("degree2", e.target.value)}
        />
      </label>
      <br />

      <label>
      Наименование колледжа или университета:
        <input
          type="text"
          value={formData.university2}
          onChange={(e) => handleChange("university2", e.target.value)}
        />
      </label>
      <br />

      <label>
      Специализация:
        <input
          type="text"
          value={formData.area_specific2}
          onChange={(e) => handleChange("area_specific2", e.target.value)}
        />
      </label>
      <br />

      <label>
      Начало-конец оброзованияя:
        <input
          type="text"
          value={formData.years2}
          onChange={(e) => handleChange("years2", e.target.value)}
        />
      </label>
      <button onClick={()=>{setAddEducation(false)}} className="redBG">Убрать</button>

      </>):(
      <button onClick={()=>{setAddEducation(true)}}>Добавить еще</button>
      )
      }
      <br />

      <h3>Посещенные семинары/обучение/пройденные краткосрочные курсы:</h3>
      <label>
      Начало курса(семинара и т.д.):
        <input
          type="text"
          value={formData.seminar_year}
          onChange={(e) => handleChange("seminar_year", e.target.value)}
        />
      </label>
      <br />
      <label>
      Название курса(семинара и т.д.):
        <input
          type="text"
          value={formData.seminar_name}
          onChange={(e) => handleChange("seminar_name", e.target.value)}
        />
      </label>
      <br />
      <label>
      Период посещения курса(семинара и т.д.):
        <input
          type="text"
          value={formData.seminar_period}
          onChange={(e) => handleChange("seminar_period", e.target.value)}
        />
      </label>
      <br />
      <h3>Есть ли у вас татуировки или пирсинг?</h3>
      <label>
      Опишите пожалуйста:
        <input
          type="text"
          value={formData.tattoo_piersing_discribe}
          onChange={(e) => handleChange("tattoo_piersing_discribe", e.target.value)}
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
          value={formData.workPosition}
          onChange={(e) => handleChange("workPosition", e.target.value)}
        />
      </label>
      <br />

      <label>
      Обязанности:
        <input
          type="text"
          value={formData.workResponsibilities}
          onChange={(e) => handleChange("workResponsibilities", e.target.value)}
        />
      </label>
      <br />

      <label>
      Название компании:
        <input
          type="text"
          value={formData.workName}
          onChange={(e) => handleChange("workName", e.target.value)}
        />
      </label>
      <br />

      <label>
      Местоположение компании:
        <input
          type="text"
          value={formData.workLocation}
          onChange={(e) => handleChange("workLocation", e.target.value)}
        />
      </label>
      <br />

      <label>
      Дата начало-конца работы:
        <input
          type="text"
          value={formData.workTime}
          onChange={(e) => handleChange("workTime", e.target.value)}
        />
      </label>
      {addWork>=2?(
        <>
              <h3>Опыт работы 2</h3>
      <label>
      Должность:
        <input
          type="text"
          value={formData.workPosition2}
          onChange={(e) => handleChange("workPosition2", e.target.value)}
        />
      </label>
      <br />

      <label>
      Обязанности:
        <input
          type="text"
          value={formData.workResponsibilities2}
          onChange={(e) => handleChange("workResponsibilities2", e.target.value)}
        />
      </label>
      <br />

      <label>
      Название компании:
        <input
          type="text"
          value={formData.workName2}
          onChange={(e) => handleChange("workName2", e.target.value)}
        />
      </label>
      <br />

      <label>
      Местоположение компании:
        <input
          type="text"
          value={formData.workLocation2}
          onChange={(e) => handleChange("workLocation2", e.target.value)}
        />
      </label>
      <br />

      <label>
      Дата начало-конца работы:
        <input
          type="text"
          value={formData.workTime2}
          onChange={(e) => handleChange("workTime2", e.target.value)}
        />
      </label>
      {addWork==2?(
      <button onClick={() =>{setAddWork(addWork-1)}} className="redBG">Убрать</button>

      ):null}
        </>
      ):null}
      {addWork<3?(
      <button onClick={() =>{setAddWork(addWork+1)}}>Добавить еще</button>
      ):<>
            <h3>Опыт работы 3</h3>
      <label>
      Должность:
        <input
          type="text"
          value={formData.workPosition3}
          onChange={(e) => handleChange("workPosition3", e.target.value)}
        />
      </label>
      <br />

      <label>
      Обязанности:
        <input
          type="text"
          value={formData.workResponsibilities3}
          onChange={(e) => handleChange("workResponsibilities3", e.target.value)}
        />
      </label>
      <br />

      <label>
      Название компании:
        <input
          type="text"
          value={formData.workName3}
          onChange={(e) => handleChange("workName3", e.target.value)}
        />
      </label>
      <br />

      <label>
      Местоположение компании:
        <input
          type="text"
          value={formData.workLocation3}
          onChange={(e) => handleChange("workLocation3", e.target.value)}
        />
      </label>
      <br />

      <label>
      Дата начало-конца работы:
        <input
          type="text"
          value={formData.workTime3}
          onChange={(e) => handleChange("workTime3", e.target.value)}
        />
      </label>
      <button onClick={() =>{setAddWork(addWork-1)}} className="redBG">Убрать</button>
      </>
      }
      <br />



      <h3>Компьютерные программы, с которыми вы работаете:</h3>
<label>
Программы гостеприимства:
        <input
          type="text"
          value={formData.host_program}
          onChange={(e) => handleChange("host_program", e.target.value)}
        />
      </label>
      <br />

      <label>
      Финансовые программы:
        <input
          type="text"
          value={formData.finance_program}
          onChange={(e) => handleChange("finance_program", e.target.value)}
        />
      </label>
      <br />
      <label>
      Программы путешествий и бронирования:
        <input
          type="text"
          value={formData.travel_program}
          onChange={(e) => handleChange("travel_program", e.target.value)}
        />
      </label>
      <br />

      <label>
      Программы графики и дизайна:
        <input
          type="text"
          value={formData.graph_program}
          onChange={(e) => handleChange("graph_program", e.target.value)}
        />
      </label>
      <br />

      <label>
      Другое программное обеспечение:
        <input
          type="text"
          value={formData.other_program}
          onChange={(e) => handleChange("other_program", e.target.value)}
        />
      </label>
      <br />
      <label>
      <h3>Наличие водительских прав</h3>
      <select
      value={formData.driver_license}
      onChange={(e) => handleChange("driver_license", e.target.value)}
        >
           <option value='no'>Нет</option>
          <option value='yes'>Да</option>
        </select>
      </label>
      <label>
      Категория:
        <input
          type="text"
          value={formData.car_category}
          onChange={(e) => handleChange("car_category", e.target.value)}
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
          <option value="Basic">A1</option>
          <option value="Elementary">A2</option>
          <option value="Lower Intermediate">B1</option>
          <option value="Intermediate">B2</option>
          <option value="Upper Intermediate">C1</option>
          <option value="Advanced">C2</option>
          <option value="Native">Носитель</option>
        </select>
      </label>
      <br />
      <label>
        Уровень русского языка:
        <select
        value={formData.russianLevel}
        onChange={(e) => handleChange("russianLevel", e.target.value)}
        >
          <option value="Basic">A1</option>
          <option value="Elementary">A2</option>
          <option value="Lower Intermediate">B1</option>
          <option value="Intermediate">B2</option>
          <option value="Upper Intermediate">C1</option>
          <option value="Advanced">C2</option>
          <option value="Native">Носитель</option>
        </select>
      </label>
      <br />

      <label>
      Дополнительный язык:
        <input
          type="text"
          value={formData.otherLang}
        onChange={(e) => handleChange("otherLang", e.target.value)}
        />
      </label>
      <br />
      <label>
        Уровень дополнительного языка:
        <select
        value={formData.otherLevel}
        onChange={(e) => handleChange("otherLevel", e.target.value)}
        >
          <option value="Basic">A1</option>
          <option value="Elementary">A2</option>
          <option value="Lower Intermediate">B1</option>
          <option value="Intermediate">B2</option>
          <option value="Upper Intermediate">C1</option>
          <option value="Advanced">C2</option>
          <option value="Native">Носитель</option>
        </select>
      </label>
      <br />

      <label>
      <h3>Как вы о нас узнали?</h3>
        <select
        value={formData.how_knaws}
        onChange={(e) => handleChange("how_knaws", e.target.value)}
        >
          <option value="Google">Google поисковик</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Vk">Vk.com</option>
          <option value="Friends">Рекомендация друзей</option>
          <option value="Other">Другие источники поиска работы</option>
        </select>
      </label>
      <br />

      <label>
      <h3>Предпочитаемая продолжительность работы</h3>
        <input
          type="text"
          value={formData.job_sroke}
        onChange={(e) => handleChange("job_sroke", e.target.value)}
        />
      </label>
      <br />

      <h3 className="red">Важная информация для кандидата:</h3>
      <p>
      <span style={{fontWeight:600}}>Отправляя данную анкету, я даю согласие на обработку моих персональных данных.</span>
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
        <label style={{fontWeight:600}}>Согласие на обработку данных:</label>
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
