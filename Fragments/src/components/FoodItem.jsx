import { useState } from "react";
import Item from "./Item";

const Fooditem = ({ items }) => {
  // let items = ["dal", "roti", "sabzi"];

  let [active, setactive] = useState([]);
  const onBuy = (item, e) => {
    let newitems = [...active, item];
    setactive(newitems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought={active.includes(item)}
          handlebuybutton={(e) => onBuy(item, e)}
        ></Item>
      ))}
    </ul>
  );
};

export default Fooditem;
