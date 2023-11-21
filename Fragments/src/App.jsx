import "bootstrap/dist/css/bootstrap.min.css";
import Fooditem from "./components/FoodItem";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  // let items = ["Dal", "Roti", "Sabzi"];
  // let textarr = useState("Food Name");
  // let textshow = textarr[0];
  // let settext = textarr[1];
  let [items, setitems] = useState(["Dal", "Roti", "Sabzi"]);

  const onkeydown = (e) => {
    if (e.key === "Enter") {
      let newitem = e.target.value;
      let newitems = [...items, newitem];
      setitems(newitems);
    }

    // setitems(e.target.value);
    // settext(e.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">List Items</h1>
        <FoodInput handlekeydown={onkeydown}></FoodInput>

        <Fooditem items={items} />
      </Container>
    </>
  );
}

export default App;
