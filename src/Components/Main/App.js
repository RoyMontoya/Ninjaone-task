import "./App.css";
import Header from "../Header/Header";
import DeviceList from "../DeviceList/DeviceList";
import CONSTANTS from "../../Common/Constants";
import { getDevices, deleteDevice } from "../../API/Actions";
import { useState, useEffect } from "react";

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices().then((devices) => setDevices(devices));
  }, []);

  const handleSortChange = (sortBy) => {
    if (sortBy.value === CONSTANTS.SYSTEM_NAME) {
      return [...devices].sort();
    } else {
      return [...devices].sort((a, b) => {
        return a.capacity - b.capacity;
      });
    }
  };

  const handleFilterChange = (filter) => {
    return [...devices].filter((device) => device.type === filter.value);
  };

  const handleDeleteClick = (id) => {
    deleteDevice(id).then((devices) => setDevices(devices));
  };

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Header />
      <DeviceList devices={devices} deleteHandler={handleDeleteClick} />
    </div>
  );
}

export default App;
