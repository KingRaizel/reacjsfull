import Todoitem1 from "./Todoitem1";

const Todoitems = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((item) => (
        <Todoitem1 todoname={item.name} tododate={item.tododate} />
      ))}
    </div>
  );
};

export default Todoitems;
