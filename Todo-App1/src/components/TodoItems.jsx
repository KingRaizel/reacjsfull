import Todoitem1 from "./Todoitem1";

const Todoitems = ({ items, ondelete }) => {
  return (
    <div className="items-container">
      {items.map((item) => (
        <Todoitem1
          key={item.name}
          todoname={item.name}
          tododate={item.tododate}
          onDelCLick={ondelete}
        />
      ))}
    </div>
  );
};

export default Todoitems;
