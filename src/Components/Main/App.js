import "./App.css";
import Header from "../Header/Header";
import DeviceList from "../DeviceList/DeviceList";
import DeviceModal from "../DeviceModal/DeviceModal";
import {
  getDevices,
  deleteDevice,
  editDevice,
  addDevice,
} from "../../API/Actions";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [devices, setDevices] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const [currentDevice, setCurrentDevice] = useState({});
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getDevices().then((devices) => setDevices(devices));
  }, []);

  const handleSortChange = (sortBy) => {
    setSort(sortBy.value);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter.value);
  };

  const handleDeleteClick = ({ id, system_name }) => {
    deleteDevice(id).then((devices) => {
      setDevices(devices);
      alert(`Device ${system_name} has been deleted`);
    });
  };

  const handleEditClick = (device) => {
    setCurrentDevice(device);
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
    setCurrentDevice({});
  };

  const modalSubmit = (device, isEditing) => {
    setModalShow(false);
    if (isEditing) {
      editDevice(device).then((devices) => setDevices(devices));
    } else {
      addDevice(device).then((devices) => setDevices(devices));
    }
  };

  const handleAddDevice = () => {
    setModalShow(true);
    setCurrentDevice({});
  };

  const deviceList = useMemo(() => {
    let deviceToDisplay = filter
      ? [...devices].filter((device) => device.type === filter)
      : [...devices];

    if (sort) {
      deviceToDisplay.sort((a, b) => {
        if (sort === "system_name") {
          return a.system_name.localeCompare(b.system_name);
        }
        return parseInt(a.hdd_capacity, 10) - parseInt(b.hdd_capacity, 10);
      });
    }
    return deviceToDisplay;
  }, [filter, sort, devices]);

  return (
    <div className="App">
      <Header
        onAdd={handleAddDevice}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <DeviceList
        devices={deviceList}
        deleteHandler={handleDeleteClick}
        editHandler={handleEditClick}
      />
      <DeviceModal
        show={modalShow}
        device={currentDevice}
        handleSubmit={modalSubmit}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;
