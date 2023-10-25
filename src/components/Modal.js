function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  function para() {
    props.onPara();
  }
  function dele() {
    props.onSelect(props.idx);
  }
  //   function idxn(params) {}
  return (
    <div className="modal">
      <p onClick={para}>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={dele}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
