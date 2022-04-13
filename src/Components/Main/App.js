import "./App.css";
import Header from "../Header/Header";
import DeviceList from "../DeviceList/DeviceList";
import DeviceModal from "../DeviceModal/DeviceModal";
import CONSTANTS from "../../Common/Constants";
import { getDevices, deleteDevice } from "../../API/Actions";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [devices, setDevices] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    getDevices().then((devices) => setDevices(devices));
  }, []);

  const handleSortChange = (sortBy) => {
    setSort(sortBy.value);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter.value);
  };

  const handleDeleteClick = (id) => {
    deleteDevice(id).then((devices) => setDevices(devices));
  };

  const handleEditClick = (device) => {
    console.log(device);
  };

  const deviceList = useMemo(() => {
    let deviceToDisplay = filter
      ? [...devices].filter((device) => device.type === filter)
      : devices;

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
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <DeviceList
        devices={deviceList}
        deleteHandler={handleDeleteClick}
        editHandler={handleEditClick}
      />
      {/* <DeviceModal /> */}
    </div>
  );
}

export default App;
