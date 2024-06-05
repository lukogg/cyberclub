import "../styles.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { facebook, instagram, telegram } from "../assets";
import DividerText from "../components/DividerText";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <div className="text-color-9">
  
        <div className="flex mt-16 mb-16 ml-8 ">
          <div className="relative flex flex-col gap-5 mr-8">
  
            <a href="https://instagram.com">
              <img
                src={instagram}
                width="50"
                alt="Instagram"
                className="relative transition-transform duration-300 ease-in-out transform hover:scale-150"
              />
            </a>
            <a href="https://facebook.com">
              <img
                src={facebook}
                width="50"
                alt="Facebook"
                className="relative transition-transform duration-300 ease-in-out transform hover:scale-150"
              />
            </a>
            <a href="https://telegram.org">
              <img
                src={telegram}
                width="50"
                alt="Telegram"
                className="relative transition-transform duration-300 ease-in-out transform hover:scale-150"
              />
            </a>
          </div>
          <div className="ml-6 mr-6 flex flex-col justify-start">
            <h1 className="pb-6 text-6xl">
              Комп'ютерний клуб Cyber на Печерській
            </h1>
            <div className="text-lg">
              Приходь і грай на потужних комп'ютерах за найкращими цінами у Києві!
            </div>
          </div>
        </div>
  
  
        <DividerText text="Чому до нас?" />
        <div className="mt-8 mb-8 ml-16 flex flex-col justify-start">
          <ul className="list-disc ml-5 text-xl">
            <li className="mb-4">Сучасні потужні комп'ютери</li>
            <li className="mb-4">Комфортні місця для гри</li>
            <li className="mb-4">Безкоштовний Wi-Fi</li>
            <li className="mb-4">Професійна підтримка</li>
            <li className="mb-4">Затишна атмосфера</li>
          </ul>
        </div>
  
        <DividerText text="Cпеціальні пропозиції" />
        <div className="mt-8 mb-8 ml-16 flex flex-col justify-start text-xl">
          <p className="mb-4">Щовівторка знижка 50% для всіх відвідувачів</p>
          <p className="mb-4">Безкоштовна перша година гри для нових клієнтів</p>
          <p className="mb-4">Щомісячні турніри з цінними призами</p>
          <p className="mb-4">Спеціальні умови для командних івентів</p>
        </div>
  
        <div className="anchor-offset" id="about_us">
          <DividerText text="Про нас"/>
          <div className="mt-8 mb-8 ml-16 flex flex-col justify-start text-xl" >
            <p className="mb-4">
              Cyber Club - це місце, де кожен геймер може знайти щось для себе. Наш клуб обладнаний найновішими комп'ютерами та ігровими приставками, що дозволяє зануритись у світ гри з головою.
            </p>
            <p className="mb-4">
              Ми прагнемо забезпечити максимально комфортні умови для гри та спілкування. У нас ви знайдете зручні ігрові місця, безкоштовний Wi-Fi та професійну підтримку.
            </p>
          </div>
        </div>
  
        <DividerText text="Зв'язок з нами" />
        <div className="mt-8 mb-8 ml-16 flex flex-col justify-start">
          <p className="text-lg mb-4">Телефон: +38 (044) 123-45-67</p>
          <p className="text-lg mb-4">Електронна пошта: info@cyberclub.ua</p>
          <p className="text-lg mb-4">Адреса: м. Київ, вул. Немировича-Данченка, 2</p>
        </div>
  
      </div>

      <Footer />
    </>
  );
};

export default App;
