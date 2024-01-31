import React, { useState } from "react";
import img1 from "./Images/photo1.jpg";
import img2 from "./Images/photo2.jpg";
import img3 from "./Images/photo3.jpg";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import i18n from './i18n'
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
  birthPlaceCountry: string;
  birthPlaceCity: string;
  maritalStatus: string;
  children: string;
  height: number;
  weight: number;

  city_res: string;
  current_loc: string;
  nationality: string;
  citizenship: string;
  travel_p: string;
  covid_p: string;

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
  workTime: string;

  workPosition2: string;
  workLocation2: string;
  workName2: string;
  workResponsibilities2: string;
  workTime2: string;

  workPosition3: string;
  workLocation3: string;
  workName3: string;
  workResponsibilities3: string;
  workTime3: string;

  host_program: string;
  finance_program: string;
  travel_program: string;
  graph_program: string;
  other_program: string;

  driver_license: string;
  car_category: string;

  russianLevel: string;
  englishLevel: string;
  otherLang: string;
  otherLevel: string;
  job_sroke: string;
  how_knaws: string;
  consent: boolean;
  lang: string;
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
    travel_p: "no",
    covid_p: "no",

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
    workTime: "",

    workPosition2: "",
    workLocation2: "",
    workName2: "",
    workResponsibilities2: "",
    workTime2: "",

    workPosition3: "",
    workLocation3: "",
    workName3: "",
    workResponsibilities3: "",
    workTime3: "",

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
    lang:'ru'
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

        const response = await axios.post(
          "https://lis.4dev.kz/upload",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          const imageUrl = response.data; // Проверьте, какое поле содержит URL изображения
          handleChange("photo", imageUrl);
        } else {
          console.error("Ошибка при загрузке изображения");
              alert(t('ImgError'));
        }
      } catch (error) {
        alert(t('serverError'));
        console.error("Сервер не отвечает, Зайдите через некоторое время:", error);
      }
    } else {
      handleChange("photo", null);
    }
  };

  const handleFileChange2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    // if (file) {
    //   handleChange("photo2", URL.createObjectURL(file));
    //   console.log('Photo2',URL.createObjectURL(file))
    // } else {
    //   handleChange("photo2", null);
    // }
    if (file) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("file", file);

        const response = await axios.post(
          "https://lis.4dev.kz/upload",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          const imageUrl = response.data; // Проверьте, какое поле содержит URL изображения
          handleChange("photo2", imageUrl);
        } else {
          console.error("Ошибка при загрузке изображения");
        alert(t('ImgError'));
      }
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
        alert(t('serverError'));
      }
    } else {
      handleChange("photo2", null);
    }
  };

  const handleFileChange3 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    // if (file) {
    //   handleChange("photo3", URL.createObjectURL(file));
    //   console.log('Photo3',URL.createObjectURL(file))
    // } else {
    //   handleChange("photo3", null);
    // }
    if (file) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("file", file);

        const response = await axios.post(
          "https://lis.4dev.kz/upload",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          const imageUrl = response.data; // Проверьте, какое поле содержит URL изображения
          handleChange("photo", imageUrl);
        } else {
          console.error("Ошибка при загрузке изображения");
        alert(t('ImgError'));
      }
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
        alert(t('serverError'));
      }
    } else {
      handleChange("photo", null);
    }
  };

  const handleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // if (files) {
    //   const urls: string[] = [];
    //   for (let i = 0; i < files.length; i++) {
    //     const file = files[i];
    //     urls.push(URL.createObjectURL(file));
    //   }
    //   handleChange('tattoo_piercing_photos', urls);
    //   console.log('tattoo_piercing_photos',urls)
    // } else {
    //   handleChange('tattoo_piercing_photos', []);
    // }
    if (files) {
      const urls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file) {
          try {
            const formDataToSend = new FormData();
            formDataToSend.append("file", file);

            const response = await axios.post(
              "https://lis.4dev.kz/upload",
              formDataToSend,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            if (response.status === 200) {
              const imageUrl = response.data; // Проверьте, какое поле содержит URL изображения
              // handleChange("photo", imageUrl);
              urls.push(imageUrl);
              console.log("photo", imageUrl);
              console.log("photoes", urls);
            } else {
              console.error("Ошибка при загрузке изображения");
              alert(t('ImgError'));

            }
          } catch (error) {
            console.error(t('serverError'), error);
          }
        } else {
          handleChange("photo", null);
        }
      }
      handleChange('tattoo_piercing_photos', urls);

    }
  };

  const [addEducation, setAddEducation] = useState(false);
  const [addWork, setAddWork] = useState(1);
  const[btnDissable,setBtnDissable]=useState(false);
  const handleSubmit = async () => {
    setBtnDissable(true)

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
        alert(t('Success_send'));
        console.log("Данные успешно отправлены");
        setBtnDissable(false)
          // Можно добавить дополнительные действия после успешной отправки
        } else {
          console.error(
            "Можно обработать ошибку",
            "Ошибка при отправке данных"
          );
        alert(t('serverError'));
        setBtnDissable(false)
        // Можно обработать ошибку, например, показать сообщение об ошибке пользователю
        }
      } catch (error) {
        alert(t('serverError'));
        setBtnDissable(false)
        console.error("Ошибка при отправке данных:", error);
      }
      console.log(formData);
    } else {
        alert(t('Confirmation'));
        alert("Вы должны согласиться на обработку данных.");
    }
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if(date){
    const formattedDate = date.toLocaleDateString('en-US');
    console.log(formattedDate);
    handleChange("birthDate", formattedDate)}
  };
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
    handleChange('lang', newLanguage);
  };

  return (
    <div className="resume-form">
      <div className='lang'><h2>{t('Rezume')}</h2>
      <button className="langB" onClick={changeLanguage}>{i18n.language.toUpperCase()}</button></div>
      <label>
      {t('fullName')}:
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('desiredPosition')}
        <input
          type="text"
          value={formData.desiredPosition}
          onChange={(e) => handleChange("desiredPosition", e.target.value)}
        />
      </label>
      <br />
      <div className="img_add">
        <label>
          <p>{t('photo')}:</p>
          <img src={img1} width={130} height={200} />
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>
      <br />

      <div className="img_add">
        <label>
          <p>{t('photo')}:</p>
          <img src={img2} width={150} height={200} />
          <input type="file" accept="image/*" onChange={handleFileChange2} />
        </label>
      </div>
      <br />

      <div className="img_add">
        <label>
          <p>{t('photo')}:</p>
          <img src={img3} width={130} height={250} />
          <input type="file" accept="image/*" onChange={handleFileChange3} />
        </label>
      </div>

      <br />

      <label>
      {t('birthDate')}:<span className="red"
>{t('formatehDate')}</span>        
        <input
          type="text"
          value={formData.birthDate}
          onChange={(e) => handleChange("birthDate", e.target.value)}
        />

      </label>
      <br />

      <label>
      {t('birthPlaceCountry')}:
        <input
          type="text"
          value={formData.birthPlaceCountry}
          onChange={(e) => handleChange("birthPlaceCountry", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('birthPlaceCity')}:
        <input
          type="text"
          value={formData.birthPlaceCity}
          onChange={(e) => handleChange("birthPlaceCity", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('maritalStatus')}:
        <select
          value={formData.maritalStatus}
          onChange={(e) => handleChange("maritalStatus", e.target.value)}
        >
          <option value={"married"}>{t('married')}</option>
          <option value={"not_married"}>{t('not_maried')}</option>
        </select>
      </label>
      <br />

      <label>
      {t('children')}:
        <input
          type="text"
          value={formData.children}
          onChange={(e) => handleChange("children", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('height')}:
        <input
          type="number"
          // value={formData.height}
          onChange={(e) => handleChange("height", e.target.value)}
          placeholder="cm"
        />
      </label>
      <br />

      <label>
      {t('weight')}:
        <input
          type="number"
          // value={formData.weight}
          onChange={(e) => handleChange("weight", e.target.value)}
          placeholder="kg"
        />
      </label>
      <br />

      <label>
      {t('city_res')}:
        <input
          type="text"
          value={formData.city_res}
          onChange={(e) => handleChange("city_res", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('current_loc')}:
        <input
          type="text"
          value={formData.current_loc}
          onChange={(e) => handleChange("current_loc", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('nationality')}:
        <input
          type="text"
          value={formData.nationality}
          onChange={(e) => handleChange("nationality", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('citizenship')}:
        <input
          type="text"
          value={formData.citizenship}
          onChange={(e) => handleChange("citizenship", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('travel_p')}:
        <select
          value={formData.travel_p}
          onChange={(e) => handleChange("travel_p", e.target.value)}
        >
          <option value="no">{t('no')}</option>
          <option value="yes">{t('yes')}</option>
        </select>
      </label>
      <br />

      <label>
      {t('covid_p')}:
        <select
          value={formData.covid_p}
          onChange={(e) => handleChange("covid_p", e.target.value)}
        >
          <option value="no">{t('no')}</option>
          <option value="yes">{t('yes')}</option>
        </select>
      </label>
      <br />

      <label>
      {t('mobile')}:
        <input
          type="number"
          // value={formData.mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          placeholder="87776665544"
        />
      </label>
      <br />

      <label>
      {t('messenger')}:
        <input
          type="text"
          value={formData.messenger}
          onChange={(e) => handleChange("messenger", e.target.value)}
        />
      </label>
      <br />

      <label>
        E-mail:
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
        VKontakte :
        <input
          type="text"
          value={formData.Vkontakte}
          onChange={(e) => handleChange("Vkontakte", e.target.value)}
        />
      </label>
      <br />
      <h3>{t('rel_info')}:</h3>
      <label>
      {t('name')}:
        <input
          type="text"
          value={formData.rel_name}
          onChange={(e) => handleChange("rel_name", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('relationship')}:
        <input
          type="text"
          value={formData.relationship}
          onChange={(e) => handleChange("relationship", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('mobile')}:
        <input
          type="number"
          placeholder="87776665544"
          // value={formData.rel_mobile}
          onChange={(e) => handleChange("rel_mobile", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('dad_name')}:
        <input
          type="text"
          value={formData.dad_name}
          onChange={(e) => handleChange("dad_name", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('mom_name')}:
        <input
          type="text"
          value={formData.mom_name}
          onChange={(e) => handleChange("mom_name", e.target.value)}
        />
      </label>
      <br />
      <h3>{t('preferCountry')}:</h3>
      <label>
      {t('Katar')}
        <select
          value={formData.qatar_work}
          onChange={(e) => handleChange("qatar_work", e.target.value)}
        >
          <option value="no">{t('no')}</option>
          <option value="yes">{t('yes')}</option>
        </select>
      </label>
      <br />

      <label>
      {t('UAE')}
        <select
          value={formData.uae_work}
          onChange={(e) => handleChange("uae_work", e.target.value)}
        >
          <option value="no">{t('no')}</option>
          <option value="yes">{t('yes')}</option>
        </select>
      </label>
      <br />

      <label>
      {t('Bahrain')}
        <select
          value={formData.bahrain_work}
          onChange={(e) => handleChange("bahrain_work", e.target.value)}
        >
          <option value="no">{t('no')}</option>
          <option value="yes">{t('yes')}</option>
        </select>
      </label>
      <br />

      <label>
      {t('Oman')}
        <select
          value={formData.oman_work}
          onChange={(e) => handleChange("oman_work", e.target.value)}
        >
          <option value="no">{t('no')}</option>
          <option value="yes">{t('yes')}</option>
        </select>
      </label>
      <br />

      <h3>{t('Education')}</h3>
      <label>
      {t('degree')}:
        <input
          type="text"
          value={formData.degree}
          onChange={(e) => handleChange("degree", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('university')}:
        <input
          type="text"
          value={formData.university}
          onChange={(e) => handleChange("university", e.target.value)}
        />
      </label>
      <br />

      <label>
        {t('specialization')}:
        <input
          type="text"
          value={formData.area_specific}
          onChange={(e) => handleChange("area_specific", e.target.value)}
        />
      </label>
      <br />

      <label>
        {t('years')}:
        <input
          type="text"
          value={formData.years}
          onChange={(e) => handleChange("years", e.target.value)}
        />
      </label>
      {addEducation ? (
        <>
          <h3> {t('Education')} 2</h3>
          <label>
          {t('degree')}:
            <input
              type="text"
              value={formData.degree2}
              onChange={(e) => handleChange("degree2", e.target.value)}
            />
          </label>
          <br />

          <label>
          {t('university')}:
            <input
              type="text"
              value={formData.university2}
              onChange={(e) => handleChange("university2", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('specialization')}:
            <input
              type="text"
              value={formData.area_specific2}
              onChange={(e) => handleChange("area_specific2", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('years')}я:
            <input
              type="text"
              value={formData.years2}
              onChange={(e) => handleChange("years2", e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              setAddEducation(false);
            }}
            className="redBG"
          >
            {t('delete')}
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setAddEducation(true);
          }}
        >
          {t('add')}
        </button>
      )}
      <br />

      <h3>{t('seminars_title')}:</h3>
      <label>
      {t('seminar_year')}:
        <input
          type="text"
          value={formData.seminar_year}
          onChange={(e) => handleChange("seminar_year", e.target.value)}
        />
      </label>
      <br />
      <label>
      {t('seminar_name')}:
        <input
          type="text"
          value={formData.seminar_name}
          onChange={(e) => handleChange("seminar_name", e.target.value)}
        />
      </label>
      <br />
      <label>
      {t('seminar_period')}:
        <input
          type="text"
          value={formData.seminar_period}
          onChange={(e) => handleChange("seminar_period", e.target.value)}
        />
      </label>
      <br />
      <h3>{t('Tattoo_title')}</h3>
      <label>
      {t('tattoo_piersing_discribe')}:
        <input
          type="text"
          value={formData.tattoo_piersing_discribe}
          onChange={(e) =>
            handleChange("tattoo_piersing_discribe", e.target.value)
          }
        />
      </label>
      <br />
      <div className="img_add">
        <label>
          <p>{t('tattoo_photoes')}:</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFilesChange}
            multiple
          />
        </label>
      </div>
      <br />

      <h3>{t('work_title')}</h3>
      <label>
        {t('workPosition')}:
        <input
          type="text"
          value={formData.workPosition}
          onChange={(e) => handleChange("workPosition", e.target.value)}
        />
      </label>
      <br />

      <label>
        {t('workResponsibilities')}:
        <input
          type="text"
          value={formData.workResponsibilities}
          onChange={(e) => handleChange("workResponsibilities", e.target.value)}
        />
      </label>
      <br />

      <label>
        {t('workName')}:
        <input
          type="text"
          value={formData.workName}
          onChange={(e) => handleChange("workName", e.target.value)}
        />
      </label>
      <br />

      <label>
        {t('workLocation')}:
        <input
          type="text"
          value={formData.workLocation}
          onChange={(e) => handleChange("workLocation", e.target.value)}
        />
      </label>
      <br />

      <label>
        {t('workTime')}:
        <input
          type="text"
          value={formData.workTime}
          onChange={(e) => handleChange("workTime", e.target.value)}
        />
      </label>
      {addWork >= 2 ? (
        <>
          <h3>{t('work_title')} 2</h3>
          <label>
            {t('workPosition')}:
            <input
              type="text"
              value={formData.workPosition2}
              onChange={(e) => handleChange("workPosition2", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('workResponsibilities')}:
            <input
              type="text"
              value={formData.workResponsibilities2}
              onChange={(e) =>
                handleChange("workResponsibilities2", e.target.value)
              }
            />
          </label>
          <br />

          <label>
            {t('workName')}:
            <input
              type="text"
              value={formData.workName2}
              onChange={(e) => handleChange("workName2", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('workLocation')}:
            <input
              type="text"
              value={formData.workLocation2}
              onChange={(e) => handleChange("workLocation2", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('workTime')}:
            <input
              type="text"
              value={formData.workTime2}
              onChange={(e) => handleChange("workTime2", e.target.value)}
            />
          </label>
          {addWork == 2 ? (
            <button
              onClick={() => {
                setAddWork(addWork - 1);
              }}
              className="redBG"
            >
              {t('delete')}
            </button>
          ) : null}
        </>
      ) : null}
      {addWork < 3 ? (
        <button
          onClick={() => {
            setAddWork(addWork + 1);
          }}
        >
          {t('add')}
        </button>
      ) : (
        <>
          <h3>{t('work_title')} 3</h3>
          <label>
            {t('workPosition')}:
            <input
              type="text"
              value={formData.workPosition3}
              onChange={(e) => handleChange("workPosition3", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('workResponsibilities')}:
            <input
              type="text"
              value={formData.workResponsibilities3}
              onChange={(e) =>
                handleChange("workResponsibilities3", e.target.value)
              }
            />
          </label>
          <br />

          <label>
            {t('workName')}:
            <input
              type="text"
              value={formData.workName3}
              onChange={(e) => handleChange("workName3", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('workLocation')}:
            <input
              type="text"
              value={formData.workLocation3}
              onChange={(e) => handleChange("workLocation3", e.target.value)}
            />
          </label>
          <br />

          <label>
            {t('workTime')}:
            <input
              type="text"
              value={formData.workTime3}
              onChange={(e) => handleChange("workTime3", e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              setAddWork(addWork - 1);
            }}
            className="redBG"
          >
            {t('delete')}
          </button>
        </>
      )}
      <br />

      <h3>{t('programs_title')}</h3>
      <label>
      {t('host_program')}:
        <input
          type="text"
          value={formData.host_program}
          onChange={(e) => handleChange("host_program", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('finance_program')}:
        <input
          type="text"
          value={formData.finance_program}
          onChange={(e) => handleChange("finance_program", e.target.value)}
        />
      </label>
      <br />
      <label>
      {t('travel_program')}:
        <input
          type="text"
          value={formData.travel_program}
          onChange={(e) => handleChange("travel_program", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('graph_program')}:
        <input
          type="text"
          value={formData.graph_program}
          onChange={(e) => handleChange("graph_program", e.target.value)}
        />
      </label>
      <br />

      <label>
      {t('other_program')}:
        <input
          type="text"
          value={formData.other_program}
          onChange={(e) => handleChange("other_program", e.target.value)}
        />
      </label>
      <br />
      <label>
        <h3>{t('driver_license')}</h3>
        <select
          value={formData.driver_license}
          onChange={(e) => handleChange("driver_license", e.target.value)}
        >
          <option value="no">{t('no')}</option>
          <option value="yes">{t('yes')}</option>
        </select>
      </label>
      <label>
      {t('car_category')}:
        <input
          type="text"
          value={formData.car_category}
          onChange={(e) => handleChange("car_category", e.target.value)}
        />
      </label>
      <br />

      <h3>{t('lang_title')}</h3>
      <label>
      {t('englishLevel')}:
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
          <option value="Native">{t('fluent')}</option>
        </select>
      </label>
      <br />
      <label>
      {t('russianLevel')}:
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
          <option value="Native">{t('fluent')}</option>
        </select>
      </label>
      <br />

      <label>
      {t('otherLang')}:
        <input
          type="text"
          value={formData.otherLang}
          onChange={(e) => handleChange("otherLang", e.target.value)}
        />
      </label>
      <br />
      <label>
      {t('otherLevel')}:
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
          <option value="Native">{t('fluent')}</option>
        </select>
      </label>
      <br />

      <label>
        <h3>{t('how_knaws')}</h3>
        <select
          value={formData.how_knaws}
          onChange={(e) => handleChange("how_knaws", e.target.value)}
        >
          <option value="Google">{t('Google')}</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Vk">Vk.com</option>
          <option value="Friends">{t('Friends')}</option>
          <option value="Other">{t('Other')}</option>
        </select>
      </label>
      <br />

      <label>
        <h3>{t('job_sroke')}</h3>
        <input
          type="text"
          value={formData.job_sroke}
          onChange={(e) => handleChange("job_sroke", e.target.value)}
        />
      </label>
      <br />

      <h3 className="red">{t('info1')}:</h3>
      <p>
        <span style={{ fontWeight: 600 }}>
        {t('info2')}
        </span>
        <br />
        {t('info3')}
        <br />
        {t('info4')}
        <br />
        {t('info5')}
        <br />
        {t('info6')}
      </p>
      <div className="check">
        <label style={{ fontWeight: 600 }}>{t('confirm')}:</label>
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => handleChange("consent", e.target.checked)}
        />
      </div>
      <br />

      <button disabled={btnDissable? true: false} className={btnDissable? 'dissable': ''} onClick={handleSubmit}>{t('send')}</button>
    </div>
  );
};

export default ResumeForm;
