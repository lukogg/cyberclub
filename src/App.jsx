import ButtonOutlineDynamic from "./assets/svg/ButtonOutlineDynamic";
import Button from "./components/Button";
import Header from "./components/Header";
import ButtonSvg from "./assets/svg/ButtonSvg";

const App = () => {
  return (
    <>
      {/* <ButtonSvg /> */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonOutlineDynamic text="hello" />
      <Button>
        Button
      </Button>
    </>
  );
};

export default App;
