import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./DeviceModal.css";
import Selector from "../Select/Selector";
import CONSTANTS from "../../Common/Constants";

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
  const [formData, setFormData] = useState({
    system_name: "",
    type: "",
    hdd_capacity: "",
  });
  const [selectValue, setSelectValue] = useState({
    value: "",
    label: "",
  });

  const headerText = () => {
    return isEditing ? "Edit Device" : "Add Device";
  };

  const handleInputChange = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.id]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const handleTypeChange = ({ value }) => {
    setFormData({
      ...formData,
      type: value,
    });
  };

  const cleanModal = () => {
    props.onClose();
    setFormData({});
  };

  useEffect(() => {
    if (props.device) {
      setFormData({ ...props.device });
      const def = CONSTANTS.DEVICE_TYPE.find(
        (type) => type.value === props.device.type
      );
      setSelectValue(def);
    }
  }, [props.device]);

  return (
    <Modal isOpen={props.show} style={customStyles} onRequestClose={cleanModal}>
      <div className="modal-header">
        <span>{headerText()}</span>
      </div>
      <div className="modal-body">
        <form onSubmit={() => props.handleSubmit(formData)}>
          <div className="row">
            <label>System Name *</label>
            <input
              className="modal-input"
              type="text"
              id="system_name"
              value={formData.system_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <label>Type *</label>
            <Selector
              styleNames="modal-selector"
              value={selectValue}
              onChange={handleTypeChange}
              options={CONSTANTS.DEVICE_TYPE}
            />
          </div>
          <div className="row">
            <label>System Name *</label>
            <input
              className="modal-input"
              type="text"
              id="hdd_capacity"
              onChange={handleInputChange}
              value={formData.hdd_capacity}
            />
          </div>
          <div className="modal-footer">
            <button onClick={cleanModal}>Cancel</button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default DeviceModal;
