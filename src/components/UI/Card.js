import styles from "./Card.module.css";

export const Card = function (props) {
  return <div className={styles.card}>{props.children}</div>;
};
