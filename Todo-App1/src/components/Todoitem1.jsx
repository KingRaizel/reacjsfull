import { MdDelete } from "react-icons/md";

function Todoitem1({ todoname, tododate, onDelCLick }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onDelCLick(todoname)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;
