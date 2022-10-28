import '../../Styles/Modal.css'

const Modal = props => {
  return (
    <div className="modal">
      <h1>{props.titleTxt}</h1>
      <button className="modal-btn" onClick={props.hideModal}>
        {props.btnText}
      </button>
    </div>
  );
};

export default Modal;
