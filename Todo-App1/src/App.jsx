import Appname from "./components/Appname.jsx";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Todoitem1.jsx";
import "./App.css";
import Todoitems from "./components/TodoItems.jsx";

function App() {
  let items = [
    {
      name: "Buy something",
      date: "29/11/2023",
    },
    {
      name: "Buy milk",
      date: "29/11/2023",
    },
    {
      name: "DO coding",
      date: "29/11/2023",
    },
  ];

  return (
    <center className="todo-container">
      <Appname />

      <div className="item-container">
        <Addtodo />
        <Todoitems items={items} />
      </div>
    </center>
  );
}

export default App;
