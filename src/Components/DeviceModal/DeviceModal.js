// import Selector from "../Select/Selector";
// import CONSTANTS from "../../Common/Constants";
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
    overflow: "hidden",
  },
};

Modal.setAppElement("#root");

function DeviceModal(props) {
  const [isEditing] = useState(props.device !== null);
  const [formData, setFormData] = useState({ ...props.device } || {});

  const headerText = () => {
    //change for variable
    return isEditing ? "Edit Device" : "Add Device";
  };

  const handleInputChange = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.id]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  return (
    <Modal
      isOpen={props.show}
      style={customStyles}
      onRequestClose={props.onClose}
    >
      <div className="modal-header">
        <span>{headerText()}</span>
      </div>
      <div className="modal-body">
        <form onSubmit={() => props.handleSubmit(formData)}>
          <div className="row">
            <label>System Name *</label>
            <input
              type="text"
              id="system_name"
              value={formData.system_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <label>Type *</label>
            <input
              type="text"
              id="type"
              value={formData.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <label>System Name *</label>
            <input
              type="text"
              id="hdd_capacity"
              onChange={handleInputChange}
              value={formData.hdd_capacity}
            />
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose}>Cancel</button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default DeviceModal;
