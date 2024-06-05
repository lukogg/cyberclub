import cyber from "../assets/cyber.svg";
import { facebook, telegram, instagram } from "../assets";

const Footer = () => {
  return (
    <footer className="hidden lg:flex justify-center bottom-0 left-0 w-full z-20 border-t border-n-6 bg-n-8">
      <div className="container ml-40 mr-40 mt-15 mb-15 mx-auto flex justify-around">
        <div className="">
            <a href="#" >
                <img src={cyber}
                className="noselect w-24 h-auto sm:w-16 sm:h-auto md:w-24 md:h-auto lg:w-28 lg:h-auto xl:w-32 xl:h-auto
                transition-transform duration-300 ease-in-out transform hover:scale-125"
                alt="Cyber"
                />
            </a>
          <p className="mt-2 text-sm text-center">Ми в соцмережах:</p>
          <div className="noselect mt-2 flex gap-3 justify-center">
            <a href="https://instagram.com/"><img src={instagram}
                alt="Instagram"
                className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                />
            </a>
            <a href="https://facebook.com/"><img src={facebook}
                alt="Facebook"
                className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                />
            </a>
            <a href="https://telegram.org/"><img src={telegram}
                alt="Telegram"
                className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                />
            </a>
          </div>
          {/* <p className="mt-10 text-sm text-center">© 2024 Cyber</p> */}
        </div>
        
            <div className="flex flex-col items-start">
            <a className="pb-0.5 text-lg text-color-2">ПРО КЛУБ</a>
            <a href="/#about_us" className="text-sm transition-colors hover:text-color-1">Про нас</a>
            <a href="specs" className="text-sm transition-colors hover:text-color-1">Ціни</a>
            <a href="games" className="text-sm transition-colors hover:text-color-1">Список ігор</a>
            <a href="gallery" className="text-sm transition-colors hover:text-color-1">Галерея</a>
            </div>
            <div className="flex flex-col items-start">
            <a className="pb-0.5 text-lg text-color-2">ЗОНИ</a>
            <a href="/specs#nomad" className="text-sm transition-colors hover:text-color-1">Кочівник</a>
            <a href="/specs#street_kid" className="text-sm transition-colors hover:text-color-1">Дитя вулиць</a>
            <a href="specs#corpo" className="text-sm transition-colors hover:text-color-1">Корпар</a>
            </div>
            <div className="flex flex-col items-start">
            <a className=" pb-0.5 text-lg text-color-2">ДОДАТКОВО</a>
            {/* <a href="#" className="text-sm transition-colors hover:text-color-1">Новини</a> */}
            <a href="/rules#rules" className="text-sm transition-colors hover:text-color-1">Правила клубу</a>
            {/* <a href="rules#privacypolicy" className="text-sm transition-colors hover:text-color-1">Політика конфіденційності</a> */}
            </div>
        </div>
      
    </footer>
  );
};

export default Footer;
