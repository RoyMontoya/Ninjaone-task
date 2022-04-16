import Select from "react-select";
import "./Selector.css";

const Selector = (props) => (
  <Select
    value={props.value}
    className={`selector ${props.styleNames}`}
    onChange={props.onChange}
    options={props.options}
  />
);

export default Selector;
