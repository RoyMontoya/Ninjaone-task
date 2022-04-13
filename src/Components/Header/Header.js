import "./Header.css";
import Selector from "../Select/Selector";
import CONSTANTS from "../../Common/Constants";

function Header(props) {
  return (
    <div className="app-header">
      <div className="selector-label">Device Type:</div>
      <Selector
        onChange={props.onFilterChange}
        options={CONSTANTS.DEVICE_TYPE}
      />
      <div className="selector-label">Sort By:</div>
      <Selector onChange={props.onSortChange} options={CONSTANTS.SORT_BY} />
    </div>
  );
}

export default Header;
