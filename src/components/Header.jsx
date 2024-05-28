import { useLocation, Link} from "react-router-dom";


import cyber from "../assets/cyber.svg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header"
import { useState } from "react";
import ButtonText from "./ButtonText"

const Header = () => {
  const pathname =  useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if(openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
  }
  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-small'}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 " href="/">
          <img src={cyber}
          className="w-24 h-auto sm:w-20 sm:h-auto md:w-28 md:h-auto lg:w-32 lg:h-auto xl:w-36 xl:h-auto hover:scale-95 transition-transform duration-500"
          alt="Cyber"
          />
        </a>
        <nav className={`${openNavigation ? 'block' : 'hidden'} fixed inset-0 backdrop-blur lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="flex flex-col items-center justify-center h-full lg:flex-row">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={`block relative font-play text-2xl uppercase text-n-1 transition-colors hover:text-color-2 ${
                item.onlyMobile ? "lg:hidden" : ``
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
              {item.title}
            </a>
          ))}
          </div>
          <HamburgerMenu />
        </nav>
          <a className="flex flex-col gap-1">

        <Button className="hidden lg:flex hover:scale-95 transition-transform duration-500" href="login">
          Увійти
        </Button>
          </a>

        <ButtonText className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </ButtonText>
      </div>
    </div>
  );
}

export default Header;