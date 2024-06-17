import "../styles.css"

import Header from "../components/Header";
import CardSpecs from "../assets/svg/CardSpecs";
import Footer from "../components/Footer";
import DividerText from "../components/DividerText";
import { peripheralsCol1,
         peripheralsCol2Nomad,
         peripheralsCol2Streetkid,
         peripheralsCol2Corpo } from "../constants/specs";


export default function Specs() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <DividerText text={"Ігрові зони та ціни"} />
      <div className="flex justify-center mt-16">
        <div className="flex flex-col lg:items-start items-center">
          <div className="anchor-offset lg:flex flex-row lg:ml-44 lg:mr-32 mb-8" id="nomad">
            <div className="shrink-0 hidden mb-12 lg:mr-20 lg:flex justify-start" >
              <CardSpecs id="1" size={100}/>
            </div>
            <div className="lg:hidden mb-12 mt-4 flex justify-center" >
              <CardSpecs id="1" size={80}/>
            </div>
            <div className="flex flex-col text-start lg:ml-0 lg:mr-0 ml-4 mr-4 text-color-9">
              <h1 className="text-5xl font-bold text-color-1">
              Кочівник
              </h1>
              <text className="mb-2">
                Для тих, хто цінує свій клан.
              </text>
              <text className="text-3xl text-color-1">
                Спільний зал
              </text>
              <table className="text-xl lg:text-3xl" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                  {peripheralsCol1.map((item, index) => (
                    <tr key={index} style={{ border: 'none' }}>
                      <td style={{ border: 'none', paddingRight: '75px' }}>{item}</td>
                      <td style={{ border: 'none' }}>{peripheralsCol2Nomad[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
          <div className="anchor-offset lg:flex flex-row lg:ml-44 lg:mr-32 mb-8" id="street_kid">
          <div className="shrink-0 hidden mb-12 lg:mr-20 lg:flex justify-start" >
              <CardSpecs id="2" size={100}/>
            </div>
            <div className="lg:hidden  mb-12 mt-4 flex justify-center" >
              <CardSpecs id="2" size={80}/>
            </div>
            <div className="flex flex-col text-start lg:ml-0 lg:mr-0 ml-4 mr-4 text-color-9">
              <h1 className="text-5xl font-bold text-color-1">
              Дитя вулиць
              </h1>
              <text className="mb-2">
                Слабкі підкоряються сильним.
              </text>
              <text className="text-3xl text-color-1">
                Bootcamp кімната (5 гравців)
              </text>
              <table className="text-xl lg:text-3xl" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                  {peripheralsCol1.map((item, index) => (
                    <tr key={index} style={{ border: 'none' }}>
                      <td style={{ border: 'none', paddingRight: '75px' }}>{item}</td>
                      <td style={{ border: 'none' }}>{peripheralsCol2Streetkid[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="anchor-offset lg:flex flex-row lg:ml-44 lg:mr-32 mb-8" id="corpo">
            <div className="shrink-0 hidden mb-12 lg:mr-20 lg:flex justify-start" >
                <CardSpecs id="0" size={100}/>
            </div>
            <div className="lg:hidden mb-12 mt-4 flex justify-center" >
              <CardSpecs id="0" size={80}/>
            </div>
              <div className="flex flex-col text-start lg:ml-0 lg:mr-0 ml-4 mr-4 text-color-9">
                <h1 className="text-5xl font-bold text-color-1">
                Корпар
                </h1>
                <text className="mb-2">
                  Чесної гри не існує - є тільки переможці та переможені.
                </text>
                <text className="text-3xl text-color-1">
                  Окрема VIP кімната
                </text>
                <table className="text-xl lg:text-3xl" style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                    {peripheralsCol1.map((item, index) => (
                      <tr key={index} style={{ border: 'none' }}>
                        <td style={{ border: 'none', paddingRight: '75px' }}>{item}</td>
                        <td style={{ border: 'none' }}>{peripheralsCol2Corpo[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
