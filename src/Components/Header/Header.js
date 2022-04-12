import "./Header.css";
import Selector from "../Select/Selector";
import CONSTANTS from "../../Common/Constants";

function Header() {
  let handleDeviceType = (param) => {
    console.log("DEVICE TYPE", param);
  };

  return (
    <div className="app-header">
      <div className="selector-label">Device Type:</div>
      <Selector onChange={handleDeviceType} options={CONSTANTS.DEVICE_TYPE} />
      <div className="selector-label">Sort By:</div>
      <Selector options={CONSTANTS.SORT_BY} />
    </div>
  );
}

export default Header;
