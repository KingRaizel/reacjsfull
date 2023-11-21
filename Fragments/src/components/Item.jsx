import "../App.css";

let Item = ({ fooditem, bought, handlebuybutton }) => {
  return (
    <>
      <li className={`list-group-item my-css ${bought && "active"}`}>
        {fooditem}
        <button className="buy-btn btn btn-info" onClick={handlebuybutton}>
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
