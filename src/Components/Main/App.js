import "./App.css";
import Header from "../Header/Header";
import DeviceList from "../DeviceList/DeviceList";
import CONSTANTS from "../../Common/Constants";

function App() {
  return (
    <div className="App">
      <Header />
      <DeviceList devices={CONSTANTS.DUMMY_API} />
    </div>
  );
}

export default App;
