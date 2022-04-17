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
            <li key={device.id}>
              <div className="card-body">
                <div>
                  <p className="label-bold">{device.system_name}</p>
                  <p className="label-blue">{parseDeviceType(device.type)}</p>
                  <p className="label-bold">{device.hdd_capacity} GB</p>
                </div>
                <div className="action-icons">
                  <span
                    onClick={() => props.editHandler(device)}
                    className="material-icons edit-icon icon"
                  >
                    edit
                  </span>
                  <span
                    onClick={() => props.deleteHandler(device)}
                    className="material-icons delete-icon icon"
                  >
                    delete
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DeviceList;
