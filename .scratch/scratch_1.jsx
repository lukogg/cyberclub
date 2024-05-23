import Button from "./components/Button";
import ButtonOutlineDynamic from "./assets/svg/ButtonOutlineDynamic";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello World!</h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#test">
          <ButtonOutlineDynamic text={"Log In"}>
          </ButtonOutlineDynamic>
        </Button>
      </div>
    </>
  );
};

export default App;
