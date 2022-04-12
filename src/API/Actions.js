export const getDevices = () => {
  const url = "http://localhost:3000/devices";
  return fetch(url).then((response) => response.json());
};
