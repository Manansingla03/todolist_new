import { useState } from "react";
import Modal from "./Modal.js";
import Backdrop from "./Backdrop.js";

function Todo(props) {
  const [isModalOpen, changeModalState] = useState(false);

  function deleteHandler() {
    changeModalState(true);
  }
  function closeModal() {
    changeModalState(false);
  }
  function cAlert() {
    alert("please choose correctly");
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <h3>{props.num}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen ? (
        <Modal
          onCancel={closeModal}
          onConfirm={closeModal}
          onPara={cAlert}
          onSelect={props.onDel}
          idx={props.id}
        />
      ) : null}
      {isModalOpen ? <Backdrop onClickScreen={closeModal} /> : null}
    </div>
  );
}

export default Todo;
