export const projectsData = [
  {
    id: "aura-storefront",
    category: "Embedded Software",
    title: "Testing Automation",
    description: "Different sensors on two separate communication busses (I2C and Onewire) gather temperature data of the connected battery cell. The fused readings are packed to a CAN frame and sent to a management system for further processing, control and visualization. To decode the message on the other side and distinguish between the different sensors a CAN frame is designed with a specific structure to contain of the readingsand a unique identifier for the entire board. For this a programming interface is created to allow ID assignment for each sensor by the user.",
    features: [
      "Sensor data fusion and CAN bus communication for real-time monitoring",
      "User-friendly programming interface for sensor ID assignment"
    ],
    imageText: "01 / Project Preview",
    image: "js/data/images/isea_board.png",
    imageAlt: "Sensor board connected to a CAN bus"
  },
  {
    id: "focus-flow",
    category: "Embedded Software",
    title: "Status Signaling and CI/CD",
    description: "This is the continuation of the 'Sensor Data Acquisition' project, focusing on status signaling and continuous integration/continuous deployment (CI/CD) pipelines. A wireless communication interface is implemented to allow for reception of the status information of the circuits from the management system. The sensor boards use that information to set appropriate LED states. This wireless connection enables over-the-air (OTA) software updates. The CI/CD pipeline automates the testing and deployment of firmware updates, ensuring that the sensor boards are always running the latest software with minimal downtime.",
    features: [
      "Wireless communication interface for real-time status updates",
      "OTA software updates for sensor boards",
      "CI/CD pipeline for automated testing and deployment of firmware updates"
    ],
    imageText: "02 / Project Preview",
    images: [
    { src: "js/data/images/isea_setup.png", alt: "Sensor boards connected wirelessly to Digatron" },
    { src: "js/data/images/isea_many_boards.png", alt: "Real setup with multiple sensor boards" }
  ]
  },
  {
    id: "dev-palette",
    category: "Embedded Software",
    title: "Ultrawide Band Communication",
    description: "Application software for a wireless communication interface between an autonomous robot and several mobile units. The central node (robot) act as a sink. The incoming data streams are packed to CAN frames and shared wwith the rest of the system. This is an ongoing project, and the software is still under development. The main focus is on the implementation of a robust communication protocol that can handle multiple data streams simultaneously while ensuring low latency and high reliability.",
    features: [
      "Ultrawide Band (UWB) communication protocol",
      "Robust handling of multiple data streams with low latency and high reliability"
    ],
    imageText: "03 / Project Preview",
    image: "js/data/images/rca.png",
    imageAlt: "Wireless communication interface for an autonomous robot"
  },
  {
    id: "ma",
    category: "Mathematical Optimization",
    title: "Routing Optimization",
    description: "This project focuses on making wireless networks, that relay signals across multiple hops, more reliable when messages are short and must be sent quickly. First, for a single data stream, it finds the best way to divide transmission time across relay hops while picking the most reliable path—using smart shortcuts to drop weak routes early or local tweaks to handle large networks. Next, it expands this approach to multiple data streams sharing the same relays without talking over one another, balancing resources across all streams at once. Overall, coordinating path choices and transmission lengths together beats standard methods in simulations.",
    features: [
      "Optimized routing solution for a complex network of nodes",
      "Efficient handling of multiple data streams",
      "Simulation-based performance evaluation and comparison with standard methods"
    ],
    imageText: "04 / Project Preview",
    image: "js/data/images/ma.png",
    imageAlt: "Optimized routing solution for a complex network of nodes"
  },
  {
    id: "ba",
    category: "Batterie Management Unit",
    title: "Battery Management Unit",
    description: "A Nucleo board with a CAN shield acts as an intermediate note between the battery rack and the energy management system (EMS). The cell data is gathered by the Nucleo board via the Modbus TCP protocol, processed, and sent to the EMS via CAN bus. The processing entails the accurate Extended Kalman firter based 'State of Charge' estimation.",
    features: [
      "State of Charge estimation using Extended Kalman Filter",
      "Data acquisition via Modbus TCP protocol",
      "Simulink generated code integration to an embedded system"
    ],
    imageText: "05 / Project Preview",
    images: [
    { src: "js/data/images/ba_can.png", alt: "Nucleo board with a CAN shield" },
    { src: "js/data/images/ba.png", alt: "Nucleo board" }
  ]
  }
];