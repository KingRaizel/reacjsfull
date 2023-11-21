import styles from "./FoodInput.module.css";

const FoodInput = ({ handlekeydown }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter food item here"
      onKeyDown={handlekeydown}
    />
  );
};

export default FoodInput;
