import Appname from "./components/Appname.jsx";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Todoitem1.jsx";
import "./App.css";
import Todoitems from "./components/TodoItems.jsx";
import { useState } from "react";
import WelcomeMssg from "./components/welcomemessage.jsx";

function App() {
  const [todoitems, setItems] = useState([]);

  const onNewItem = (itemname, itemdate) => {
    let all = [...todoitems, { name: itemname, date: itemdate }];
    setItems(all);
  };

  const handleDeleteClick = (todoitemname) => {
    const delitem = todoitems.filter((item) => item.name !== todoitemname);
    setItems(delitem);
  };

  return (
    <center className="todo-container">
      <Appname />

      <div className="item-container">
        <Addtodo handlenewitem={onNewItem} />
        {todoitems.length === 0 && (
          <WelcomeMssg items={todoitems}></WelcomeMssg>
        )}
        <Todoitems items={todoitems} ondelete={handleDeleteClick} />
      </div>
    </center>
  );
}

export default App;
