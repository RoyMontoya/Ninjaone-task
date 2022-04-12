import "./App.css";
import Header from "../Header/Header";
import DeviceList from "../DeviceList/DeviceList";
import CONSTANTS from "../../Common/Constants";
import { getDevices } from "../../API/Actions";
import { useState, useEffect } from "react";

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices().then((devices) => setDevices(devices));
  }, []);

  const handleSortChange = (sortBy) => {
    if (sortBy.value === CONSTANTS.SYSTEM_NAME) {
      return [...CONSTANTS.DUMMY_API].sort();
    } else {
      return [...CONSTANTS.DUMMY_API].sort((a, b) => {
        return a.capacity - b.capacity;
      });
    }
  };

  const handleFilterChange = (filter) => {
    return [...CONSTANTS.DUMMY_API].filter(
      (device) => device.type === filter.value
    );
  };

  return (
    <div className="App">
      <Header />
      <DeviceList devices={devices} />
    </div>
  );
}

export default App;
