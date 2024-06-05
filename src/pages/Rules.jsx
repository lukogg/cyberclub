import "../styles.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DividerText from "../components/DividerText";

const App = () => {
  return (
    <>
      <div id="rules" className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <DividerText text="Правила клубу"/>
      <div className="-mt-4 mb-12 ml-12 mr-12 flex flex-col justify-start">
        <div>
        <h1 className="mb-10 text-xl text-center text-pretty">
          Хей, чумба. Напевно, ти розумієш наскільки важлива взаємна повага.
          Це той мінімум, без якого важко прожити у цивілізованому світі.
          Ми повністю поважаємо наших гостей і просимо про взаємність.
          Перед відвідуванням нашого комп'ютерного клубу, тобі слід ознайомитися з нашими правилами.
        </h1>
          <div className="mb-8">
            <div className="mb-2 mr-28 text-xl font-bold">
              Гість має право:
            </div>
            <ul className="list-disc ml-5 text-pretty">
              <li className="text-lg">Розраховувати на отримання повної консультації щодо всіх тарифів, акцій та спецпропозицій клубу;</li>
              <li className="text-lg">Отримати екскурсію по закладу, та інформацію про характеристики ПК і аксесуари;</li>
              <li className="text-lg">Отримати допомогу у створенні облікового запису клубу;
              <li className="text-lg">Чекати від працівників на якісне обслуговування, яке дозволить користуватися всіма послугами клубу з насолодою;</li>
              <li className="text-lg">Попросити про допомогу в підключенні власних аксесуарів;</li>
              <li className="text-lg">Звернутися за підтримкою до адміністрації, якщо хтось із присутніх заважає приємному проведенню часу.</li></li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="mb-2 mr-28 text-xl text-balance font-bold">
              Щоб не псувати відпочинок собі чи іншим, на території клубу заборонено робити ЦЕ:
            </div>
            <ul className="list-disc ml-5 text-pretty">
              <li className="text-lg">Приносити та вживати алкоголь;</li>
              <li className="text-lg">Згідно закону України, куріння тютюнових виробів, а також електронних сигарет і кальянів;</li>
              <li className="text-lg">Приносити та вживати свої продукти харчування;</li>
              <li className="text-lg">Перебувати у нетверезому стані;</li>
              <li className="text-lg">Гучно кричати, висловлюватися не цензурною лексикою у клубі та бiля входу в клуб;</li>
              <li className="text-lg">Вживати продукти харчування та напої над девайсами;</li>
              <li className="text-lg">Брати брудними руками аксесуари;</li>
              <li className="text-lg">Створювати поганий запах, що створює дискомфорт для оточуючих;</li>
              <li className="text-lg">Переглядати сайти з порнографічним контентом;</li>
              <li className="text-lg">Псувати майно клубу (у разі псування майна гість несе матеріальну відповідальність);</li>
              <li className="text-lg">Передавати особистий клубний обліковий запис іншим особам;</li>
              <li className="text-lg">Приводити із собою гостей, які не грають.</li>
              <li className="text-lg">Забороняється сидіти на сайтах віртуального казино.</li>
            </ul>
          </div>
        </div>
        <h1 className="mt-8 text-xl text-center text-pretty">
        У разі порушення цих правил адміністрація клубу залишає за собою право завершити сесію гостя в цей день або заблокувати акаунт на певний період.
        При не реагуванні на зауваження працівників чи систематичних порушень правил, адміністрація залишає за собою право заборонити відвідування клубу назавжди.
        </h1>
        <h1 className="mt-8 text-xl text-center text-pretty">
        Взаємна повага ― це класна річ, згоден, чумба? <br/>
        Тоді до зустрічі на просторах клубу <a href="/" className="text-color-1 hover:text-color-2 transition-colors duration-300">Cyber!</a> 
      </h1>
      </div>

      <Footer />
    </>
  );
};

export default App;
