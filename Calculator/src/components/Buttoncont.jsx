import styles from "./Buttoncont.module.css";

const ButtonContainer = ({ onBtnClick }) => {
  const buttonnames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonnames.map((name) => (
        <button
          className={styles.button}
          onClick={() => onBtnClick(name)}
          key={name}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
