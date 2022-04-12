import "./Header.css";
import Selector from "../Select/Selector";
import CONSTANTS from "../../Common/Constants";

function Header() {
  const handleDeviceTypeChange = (type) => {
    console.log("DEVICE TYPE", type);
  };

  const handleSortByChange = (sort) => {
    console.log("SORT BY", sort);
  };

  return (
    <div className="app-header">
      <div className="selector-label">Device Type:</div>
      <Selector
        onChange={handleDeviceTypeChange}
        options={CONSTANTS.DEVICE_TYPE}
      />
      <div className="selector-label">Sort By:</div>
      <Selector onChange={handleSortByChange} options={CONSTANTS.SORT_BY} />
    </div>
  );
}

export default Header;
