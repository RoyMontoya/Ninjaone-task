import Selector from "../Select/Selector";
import CONSTANTS from "../../Common/Constants";
import { useState } from "react";
import Modal from "react-modal";
import "./DeviceModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    width: "500px",
    height: "250px",
  },
};

function DeviceModal(props) {
  const [isEditing] = useState(props.device !== null);

  const headerText = () => {
    return isEditing ? "Edit Device" : "Add Device";
  };

  return (
    <Modal isOpen={true} style={customStyles}>
      <div className="modal-header">{headerText()}</div>
      <div className="modal-body"></div>
    </Modal>
  );
}

export default DeviceModal;
