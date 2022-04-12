const CONSTANTS = {
  SORT_BY: [
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
      label: "Windows Workstation",
      value: "windows_workstation",
    },
    {
      label: "Windows Server",
      value: "windows_server",
    },
    {
      label: "Mac",
      value: "mac",
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
};

export default CONSTANTS;
