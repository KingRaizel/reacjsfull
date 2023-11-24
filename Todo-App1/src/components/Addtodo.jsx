import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function Addtodo({ handlenewitem }) {
  const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");

  const handlenamechange = (e) => {
    settodoname(e.target.value);
  };

  const handledatechange = (e) => {
    settododate(e.target.value);
  };

  const handleclick = () => {
    handlenewitem(todoname, tododate);
    settodoname("");
    settododate("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoname}
            onChange={handlenamechange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={tododate} onChange={handledatechange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            value={tododate}
            onClick={handleclick}
          >
            <IoAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
