import "./DeviceList.css";
import CONSTANTS from "../../Common/Constants";

function DeviceList(props) {
  const parseDeviceType = (type) => {
    return (
      CONSTANTS.DEVICE_TYPE.find((deviceType) => deviceType.value === type)
        .label || "N/A"
    );
  };

  return (
    <div className="device-list">
      <ul>
        {props.devices.map((device) => {
          return (
            <li>
              <div>
                <p className="label-bold">{device.system_name}</p>
                <p className="label-blue">{parseDeviceType(device.type)}</p>
                <p className="label-bold">{device.capacity} GB</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DeviceList;
