import { useRouteError } from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      {/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div> */}
      <div className="flex justify-center">
      <div className=" flex flex-col justify-center items-center max-w-md h-screen">
        <div className="text-5xl text-color-1">
            <h1>Отакої!</h1>
        </div>
          <a className="pt-4 text-2xl text-color-1">Сталася невідома помилка.</a>
          <p className="pt-4 text-3xl text-color-1">
            <i>{error.statusText || error.message}</i>
          </p>
        <div className="pt-10 lg:flex">
          <Button href="/" size="130" className="hover:scale-95 transition-transform duration-500">
            На головну
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}