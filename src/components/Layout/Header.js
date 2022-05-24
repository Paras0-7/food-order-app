import mealsImg from "./../../assets/meals.jpg";
import { CartButton } from "./CartButton";
import styles from "./Header.module.css";
export const Header = function (props) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table " />
      </div>
    </>
  );
};
