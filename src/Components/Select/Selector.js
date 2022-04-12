import Select from "react-select";
import "./Selector.css";

const Selector = (props) => (
  <Select className="selector" options={props.options} />
);

export default Selector;
