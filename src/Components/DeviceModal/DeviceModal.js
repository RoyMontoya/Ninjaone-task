import { useEffect, useState, useMemo } from "react";
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
    height: "300px",
    overflow: "hidden",
  },
};

Modal.setAppElement("#root");

function DeviceModal(props) {
  const [isEditing, setEditing] = useState(Object.keys(props.device).length);
  const [formData, setFormData] = useState({
    system_name: "",
    type: "",
    hdd_capacity: "",
  });
  const [selectValue, setSelectValue] = useState({
    value: "",
    label: "",
  });

  const handleInputChange = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.id]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const handleTypeChange = (selection) => {
    setFormData({
      ...formData,
      type: selection.value,
    });
    setSelectValue(selection);
  };

  const cleanModal = () => {
    props.onClose();
    setFormData({});
    setSelectValue({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDeviceValid(formData)) return alert("All fields are required");
    cleanModal();
    props.handleSubmit(formData, isEditing);
  };

  const isDeviceValid = (device) => {
    return device.system_name && device.hdd_capacity && device.type;
  };

  useEffect(() => {
    if (Object.keys(props.device).length) {
      setFormData({ ...props.device });
      const deviceType = CONSTANTS.DEVICE_TYPE.find(
        (type) => type.value === props.device.type
      );
      setSelectValue(deviceType);
      setEditing(true);
    } else {
      setSelectValue({});
      setEditing(false);
    }
  }, [props.device]);

  const modalTitle = useMemo(() => {
    return isEditing ? "Edit Device" : "Add Device";
  }, [isEditing]);

  return (
    <Modal isOpen={props.show} style={customStyles} onRequestClose={cleanModal}>
      <div className="modal-header">
        <span>{modalTitle}</span>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>System Name *</label>
            <input
              className="modal-input"
              type="text"
              id="system_name"
              value={formData.system_name || ""}
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
            <label>HDD Capacity *</label>
            <input
              className="modal-input"
              type="number"
              id="hdd_capacity"
              onChange={handleInputChange}
              value={formData.hdd_capacity || ""}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={cleanModal}>
              Cancel
            </button>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default DeviceModal;
