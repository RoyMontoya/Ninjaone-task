const CONSTANTS = {
  SORT_BY: [
    {
      label: "",
      value: null,
    },
    {
      label: "System Name",
      value: "system_name",
    },
    {
      label: "HDD Capacity",
      value: "hdd_capacity",
    },
  ],
  DEVICE_TYPE: [
    {
      label: "",
      value: null,
    },
    {
      label: "Windows Workstation",
      value: "WINDOWS_WORKSTATION",
    },
    {
      label: "Windows Server",
      value: "WINDOWS_SERVER",
    },
    {
      label: "Mac",
      value: "MAC",
    },
  ],
  DUMMY_API: [
    {
      id: 500,
      system_name: "SUSAN-DESKTOP",
      type: "windows_workstation",
      capacity: 128,
    },
    {
      id: 100,
      system_name: "MAC-LOCAL-FREDDY",
      type: "mac",
      capacity: 256,
    },
    {
      id: 200,
      system_name: "SMART-SERVER",
      type: "windows_server",
      capacity: 1024,
    },
  ],
  SYSTEM_NAME: "system_name",
  HDD_CAPACITY: "hdd_capacity",
};

export default CONSTANTS;
