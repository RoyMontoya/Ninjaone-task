export const getDevices = () => {
  const url = "http://localhost:3000/devices";
  return fetch(url).then((response) => response.json());
};

export const deleteDevice = (id) => {
  const url = `http://localhost:3000/devices/${id}`;
  const options = {
    method: "DELETE",
  };
  //ideally this response should return the uptated
  //list so we dont have to call getDevices again
  return fetch(url, options).then(getDevices);
};

export const editDevice = (device) => {
  const url = `http://localhost:3000/devices/${device.id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  };
  //ideally this response should return the uptated
  //list so we dont have to call getDevices again
  return fetch(url, options).then(getDevices);
};

export const addDevice = (device) => {
  const url = `http://localhost:3000/devices/`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  };
  //ideally this response should return the uptated
  //list so we dont have to call getDevices again
  return fetch(url, options).then(getDevices);
};
