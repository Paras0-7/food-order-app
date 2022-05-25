import styles from "./Modal.module.css";
import ReactDom from "react-dom";
const BackDrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}> {props.children}</div>
    </div>
  );
};
export const Modal = function (props) {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};
