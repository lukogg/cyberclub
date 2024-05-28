
import Header from "../components/Header";
import CardSpecs from "../assets/svg/CardSpecs";
import Footer from "../components/Footer";


export default function Specs() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <div className=" text-center text-3xl text-color-9"> 
        Specs page
      </div>
      <div className="pb-[2.75rem] flex lg:gap-10 lg:justify-evenly mb:flex-col md:mt-10 mb:justify" >
        <CardSpecs id="1" size={25} />
        <CardSpecs id="2" size={25} />
        <CardSpecs id="0" size={25} />
      </div>
      <div>
      <Footer />
      </div>
    </>
  );
};
