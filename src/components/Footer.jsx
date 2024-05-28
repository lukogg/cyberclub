import cyber from "../assets/cyber.svg";
import { facebook, telegram, instagram } from "../assets";

const Footer = () => {
  return (
    <footer className="hidden lg:flex justify-center bottom-0 left-0 w-full z-20 border-t border-n-6 bg-n-8/90">
      <div className="container ml-40 mr-40 mt-15 mb-15 mx-auto flex justify-around">
        <div>
            <a href="#" >
                <img src={cyber}
                className="w-24 h-auto sm:w-16 sm:h-auto md:w-24 md:h-auto lg:w-28 lg:h-auto xl:w-32 xl:h-auto
                transition-transform duration-300 ease-in-out transform hover:scale-125"
                alt="Cyber"
                />
            </a>
          <p className="mt-5 text-sm text-center">Ми в соцмережах:</p>
          <div className="mt-2 mb-2 flex gap-3 justify-center">
            <a href="#instagram"><img src={instagram}
                alt="Instagram"
                className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                />
            </a>
            <a href="#facebook"><img src={facebook}
                alt="Facebook"
                className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                />
            </a>
            <a href="#telegram"><img src={telegram}
                alt="Telegram"
                className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                />
            </a>
          </div>
          {/* <p className="mt-10 text-sm text-center">© 2024 Cyber</p> */}
        </div>
        
            <div className="flex flex-col items-start">
            <a className="text-lg text-color-2">ПРО КЛУБ</a>
            <a href="#" className="text-sm hover:text-color-1">Про нас</a>
            <a href="#" className="text-sm hover:text-color-1">Ціни</a>
            <a href="#" className="text-sm hover:text-color-1">Список ігор</a>
            <a href="#" className="text-sm hover:text-color-1">Галерея</a>
            <a href="#" className="text-sm hover:text-color-1">Контакти</a>
            </div>
            <div className="flex flex-col items-start">
            <a className="text-lg text-color-2">ЗОНИ</a>
            <a href="#" className="text-sm hover:text-color-1">Кочівник</a>
            <a href="#" className="text-sm hover:text-color-1">Дитя вулиць</a>
            <a href="#" className="text-sm hover:text-color-1">Корпар</a>
            </div>
            <div className="flex flex-col items-start">
            <a className="text-lg text-color-2">ДОДАТКОВО</a>
            <a href="#" className="text-sm hover:text-color-1">Новини</a>
            <a href="#" className="text-sm hover:text-color-1">Правила клубу</a>
            <a href="#" className="text-sm hover:text-color-1">Політика конфіденційності</a>
            </div>
        </div>
      
    </footer>
  );
};

export default Footer;
