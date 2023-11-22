import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/Buttoncont";
import Display from "./components/Display";

function App() {
  const [calVal, setcalVal] = useState("");
  const onBtnClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const res = eval(calVal);
      setcalVal(res);
    } else {
      const newdisplay = calVal + buttonText;
      setcalVal(newdisplay);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onBtnClick={onBtnClick}></ButtonContainer>
    </div>
  );
}

export default App;
