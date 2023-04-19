import "./App.css";
import Button from "./Component/Button/Button";
import Reactbenifits from "./Component/ReactBenifits/ReactBenifits";
import ReactLogo from "./Component/ReactLogo/ReactLogo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo />
        <Reactbenifits />
        <Button />
      </header>
    </div>
  );
}

export default App;
