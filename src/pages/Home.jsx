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
  
        <div className="flex flex-col-reverse lg:flex-row items-center mt-8 lg:mt-16 mb-12 lg:mb-16 lg:ml-8 lg:mr-8 ml-6 mr-6">
          <div className="shrink-0 relative flex flex-row lg:flex-col gap-8 lg:gap-6 lg:mt-0 mt-8 mr-8">
  
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
            <h1 className="pb-6 lg:text-7xl text-5xl">
              Комп'ютерний клуб Cyber на Печерській
            </h1>
            <div className="lg:text-3xl text-2xl text-pretty">
              Приходь і грай на потужних комп'ютерах за найкращими цінами у Києві!
            </div>
          </div>
        </div>
  
  
        <DividerText text="Чому до нас?" />
        <div className="mt-8 mb-8 lg:ml-16 lg:mr-16 ml-6 mr-6  flex flex-col justify-start">
          <ul className="list-disc ml-5 lg:text-2xl text-xl">
            <li className="mb-4">Сучасні потужні комп'ютери</li>
            <li className="mb-4">Комфортні місця для гри</li>
            <li className="mb-4">Безкоштовний Wi-Fi</li>
            <li className="mb-4">Професійна підтримка</li>
            <li className="mb-4">Затишна атмосфера</li>
          </ul>
        </div>
  
        <DividerText text="Cпеціальні пропозиції" />
        <div className="mt-8 mb-8 lg:ml-16 lg:mr-16 ml-6 mr-6 flex flex-col justify-start lg:text-2xl text-xl text-pretty">
          <p className="mb-4">Щовівторка знижка 50% для всіх відвідувачів</p>
          <p className="mb-4">Безкоштовна перша година гри для нових клієнтів</p>
          <p className="mb-4">Щомісячні турніри з цінними призами</p>
          <p className="mb-4">Спеціальні умови для командних івентів</p>
        </div>
  
        <div className="anchor-offset" id="about_us">
          <DividerText text="Про нас"/>
          <div className="mt-8 mb-8 lg:ml-16 lg:mr-16 ml-6 mr-6 flex flex-col justify-start lg:text-2xl text-xl text-pretty" >
            <p className="mb-4">
              Cyber Club - це місце, де кожен геймер може знайти щось для себе. Наш клуб обладнаний найновішими комп'ютерами та ігровими приставками, що дозволяє зануритись у світ гри з головою.
            </p>
            <p className="mb-4">
              Ми прагнемо забезпечити максимально комфортні умови для гри та спілкування. У нас ви знайдете зручні ігрові місця, безкоштовний Wi-Fi та професійну підтримку.
            </p>
          </div>
        </div>
  
        <DividerText text="Зв'язок з нами" />
        <div className="mt-8 mb-8 lg:ml-16 lg:mr-16 ml-6 mr-6 flex flex-col justify-start">
          <p className="lg:text-2xl text-xl mb-4">Телефон: +38 (044) 123-45-67</p>
          <p className="lg:text-2xl text-xl mb-4">Електронна пошта: info@cyberclub.ua</p>
          <p className="lg:text-2xl text-xl mb-4">Адреса: м. Київ, вул. Немировича-Данченка, 2</p>
        </div>
  
      </div>

      <Footer />
    </>
  );
};

export default App;
