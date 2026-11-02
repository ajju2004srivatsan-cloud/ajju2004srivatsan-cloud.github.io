/**
 * Portfolio content. Edit this file to update the site.
 * Facts below are taken from Ajay Srivatsan R.'s resume and from public
 * GitHub repository descriptions. Do not add roles, metrics, or awards here
 * unless they are documented.
 */

export const site = {
  name: "Ajay Srivatsan R.",
  givenName: "Ajay Srivatsan R.",
  identity: "AI · Robotics & Autonomous Systems · Embedded Systems",
  role: "Software Engineer",
  organization: "OEG Defence & Aerospace Pvt. Ltd.",
  location: "Bangalore",
  email: "ajju2004srivatsan@gmail.com",
  phone: "+91 7418694168",
  phoneHref: "tel:+917418694168",
  github: "https://github.com/ajju2004srivatsan-cloud",
  githubUser: "ajju2004srivatsan-cloud",
  linkedin: "https://www.linkedin.com/in/ajay-srivatsan-3aa5131a0",
  hackerrank: "https://www.hackerrank.com/profile/ajju2004srivats1",
  url: "https://ajju2004srivatsan-cloud.github.io",
  resumePath: "/resume.pdf",
  description:
    "Portfolio of Ajay Srivatsan R., a software engineer working on embedded systems, UAV communication, autonomous navigation, and applied machine learning.",
} as const;

export const introduction = [
  "I am an electronics and communication engineer from Amrita Vishwa Vidyapeetham, Coimbatore. I build embedded software and communication systems for UAV, aerospace, and defence platforms.",
  "My work covers ArduPilot integration, MAVLink, RF communication, networking, embedded Linux, and hardware–software integration for autonomous systems. Public code also includes simulation worlds, onboard-camera mapping, medical image denoising, and ESP32 sensor projects.",
];

export const education = [
  {
    school: "Amrita Vishwa Vidyapeetham, Coimbatore",
    credential: "Bachelor of Technology in Electronics and Communication Engineering",
    detail: "CGPA 7.98",
    period: "Oct 2022 – Jul 2026",
  },
  {
    school: "Sakthi Vinayakar Hindu Vidyalaya, Tuticorin",
    credential: "12th Boards",
    detail: "86.6%",
    period: "2022",
  },
  {
    school: "Sakthi Vinayakar Hindu Vidyalaya, Tuticorin",
    credential: "High School, 10th Boards",
    detail: "85.0%",
    period: "2020",
  },
];

export type Experience = {
  organization: string;
  title: string;
  period: string;
  summary: string;
  contributions: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    organization: "OEG Defence & Aerospace Pvt. Ltd.",
    title: "Software Engineer",
    period: "June 2026 – Present",
    summary:
      "Developing embedded software and communication systems for UAV, aerospace, and defence platforms.",
    contributions: [
      "ArduPilot integration and MAVLink communication.",
      "RF communication, networking, and embedded Linux.",
      "Software validation and hardware–software integration for autonomous systems.",
    ],
    technologies: [
      "ArduPilot",
      "MAVLink",
      "RF communication",
      "Networking",
      "Embedded Linux",
    ],
  },
  {
    organization: "Apsis Solutions",
    title: "Embedded Systems & Hardware Design Intern",
    period: "March 2026 – May 2026",
    summary:
      "Developed and debugged embedded firmware for drone and defence applications, and contributed to commercial products.",
    contributions: [
      "Embedded firmware development and debugging for drone and defence applications.",
      "Schematic review, debugging, and hardware prototyping for commercial products.",
    ],
    technologies: ["Embedded firmware", "Schematic review", "Hardware prototyping"],
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    items: ["Python", "C", "C++", "Assembly", "Java", "HTML"],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    items: ["TensorFlow", "TensorFlow Lite", "PyTorch", "Edge Impulse", "Librosa", "MCP"],
  },
  {
    id: "vision",
    title: "Computer Vision",
    items: ["OpenCV"],
  },
  {
    id: "robotics",
    title: "Robotics & UAV",
    items: ["ArduPilot", "MAVLink", "ROS2", "Gazebo", "NVIDIA Isaac Sim"],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    items: [
      "Keil µVision",
      "STM32CubeProgrammer",
      "VHDL",
      "LTspice",
      "WinSpice",
      "Ansys HFSS",
      "GNU Radio",
      "SDR",
      "FHSS",
      "Spread spectrum",
      "Wireless sensor networks",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    items: ["Docker", "Linux", "Linux VPS"],
  },
  {
    id: "web",
    title: "Full Stack Development",
    items: ["React", "PostgreSQL", "HTML"],
  },
];

export const networkingTools = [
  "SDN",
  "Mininet",
  "Wireshark",
  "OpenFlow",
  "POX Controller",
];

export type ProjectCategory =
  | "AI/ML"
  | "Robotics"
  | "UAV"
  | "Embedded Systems"
  | "Web Development"
  | "Research";

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  category: ProjectCategory;
  featured: boolean;
  period?: string;
  summary: string;
  overview: string;
  problem: string;
  architecture: string[];
  technologies: string[];
  implementation: string[];
  results: string[];
  github?: string;
  media?: ProjectMedia[];
  videos?: { href: string; label: string }[];
  sourceNote?: string;
};

export const projects: Project[] = [
  {
    slug: "multi-uav-swarm-command",
    title: "Clustered Multi-UAV Swarm Command System",
    kicker: "Embedded systems and network architecture",
    category: "UAV",
    featured: true,
    summary:
      "An adaptive clustered UAV command system, hardwired to flight controllers, taken from demonstration into operational use.",
    overview:
      "Engineered an adaptive, clustered UAV command system for the Indian Army. The system was transitioned from a technical demonstration to active operational use by North Eastern Cavalry units.",
    problem:
      "The command path had to reach flight controllers without an intermediate interface between the clustered command system and the aircraft.",
    architecture: [
      "Adaptive clustered command system",
      "Direct hardwired connection to flight controllers",
      "No intermediate interface on the command path",
    ],
    technologies: ["Embedded systems", "Network architecture", "Flight controllers"],
    implementation: [
      "Built the command system as a clustered architecture for multiple UAVs.",
      "Hardwired the system directly to the flight controllers.",
      "Removed the need for an intermediate interface on that path.",
    ],
    results: [
      "Transitioned from a technical demonstration to active operational use by North Eastern Cavalry units.",
    ],
  },
  {
    slug: "gnss-denied-drone-navigation",
    title: "Vision-Based Autonomous Drone Navigation",
    kicker: "Computer vision, visual-inertial odometry, and robotics",
    category: "UAV",
    featured: true,
    summary:
      "A GNSS-denied navigation pipeline that fuses visual-inertial odometry, optical flow, and IMU data, with satellite-image localization and MAVLink control on Jetson.",
    overview:
      "Built a GNSS-denied navigation pipeline that fuses visual-inertial odometry, optical flow, and IMU data. Satellite-image localization corrects accumulated drift. The stack talks to flight controllers over MAVLink and runs autonomous control on a Jetson.",
    problem:
      "Without GNSS, position estimates drift. The pipeline had to keep a usable position using onboard vision and inertial sensing, then close the loop with the flight controller.",
    architecture: [
      "Camera and IMU sensing",
      "Visual-inertial odometry and optical flow",
      "Satellite-image localization to correct accumulated drift",
      "MAVLink link to the flight controller",
      "Onboard compute on Jetson",
    ],
    technologies: [
      "Visual-inertial odometry",
      "Optical flow",
      "IMU",
      "Satellite-image localization",
      "MAVLink",
      "Jetson",
    ],
    implementation: [
      "Fused visual-inertial odometry, optical flow, and IMU data into one navigation pipeline.",
      "Used satellite-image localization to correct accumulated drift.",
      "Integrated the stack with flight controllers through MAVLink for real-time autonomous control on Jetson.",
    ],
    results: [
      "Satellite-image localization corrects accumulated drift and improves position accuracy.",
    ],
  },
  {
    slug: "audio-visual-speech-enhancement",
    title: "Lightweight Audio-Visual Speech Enhancement",
    kicker: "Deep learning and multimodal AI",
    category: "Research",
    featured: true,
    period: "Accepted for presentation, 2026",
    summary:
      "A multimodal speech-enhancement pipeline using a CRNN for audio and a ResNet for lip features, accepted for presentation at NGNDAI, MNNIT Allahabad.",
    overview:
      "Designed a multimodal pipeline that combines CRNN-based audio processing with ResNet lip-feature extraction to enhance speech in noisy environments. The model was reduced in size for real-time use and compared against audio-only baselines.",
    problem:
      "Speech in noise is hard to recover from audio alone. The system uses the speaker’s lip motion together with the audio signal, and it has to stay small enough for real-time use.",
    architecture: [
      "Noisy speech audio in",
      "CRNN audio processing",
      "ResNet lip-feature extraction",
      "Multimodal enhancement",
      "Comparison against audio-only baselines using PESQ, STOI, and SNR",
    ],
    technologies: ["CRNN", "ResNet", "Multimodal learning"],
    implementation: [
      "Processed audio with a CRNN and extracted lip features with a ResNet.",
      "Reduced the model size so the pipeline could target real-time use.",
      "Evaluated against audio-only baselines with PESQ, STOI, and SNR.",
    ],
    results: [
      "Improved PESQ, STOI, and SNR relative to audio-only baselines.",
      "Accepted for presentation at NGNDAI, MNNIT Allahabad (2026).",
    ],
  },
  {
    slug: "autonomous-robotics-simulation",
    title: "Autonomous Robotics Simulation",
    kicker: "Simulation and robotics integration",
    category: "Robotics",
    featured: true,
    summary:
      "Software-in-the-loop testing of autonomous systems in Gazebo and NVIDIA Isaac Sim, including multi-UAV coordination and computer vision.",
    overview:
      "Developed and tested autonomous systems in Gazebo and NVIDIA Isaac Sim. The work covers multi-UAV swarm coordination, computer vision deployment, and robotic system simulations, using software-in-the-loop testing.",
    problem:
      "Autonomy software needs a place to be exercised before it is trusted on hardware. Simulation is the test bench for swarm coordination and vision pipelines.",
    architecture: [
      "Gazebo simulation environment",
      "NVIDIA Isaac Sim",
      "Multi-UAV swarm coordination scenarios",
      "Computer vision deployment inside the simulation",
      "Software-in-the-loop test loop",
    ],
    technologies: ["Gazebo", "NVIDIA Isaac Sim", "Software-in-the-loop", "Computer vision"],
    implementation: [
      "Set up autonomous-system tests in Gazebo and NVIDIA Isaac Sim.",
      "Covered multi-UAV swarm coordination and computer vision deployment.",
      "Ran the work as software-in-the-loop testing.",
    ],
    results: [
      "Swarm coordination and vision pipelines were exercised in Gazebo and NVIDIA Isaac Sim through software-in-the-loop testing.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/ardupilot-sim-worlds",
    sourceNote:
      "A related public repository, ardupilot-sim-worlds, publishes indoor and outdoor practice worlds for ArduPilot with lidar, a depth camera, and a small avoidance plugin. It is listed separately and is not a stand-in for the full simulation effort above.",
  },
  {
    slug: "real-estate-erp",
    title: "Real Estate ERP Platform",
    kicker: "React, PostgreSQL, and a Linux VPS",
    category: "Web Development",
    featured: true,
    summary:
      "A full-stack ERP used daily by more than 30 people across sales, accounts, site management, and HR.",
    overview:
      "Deployed a full-stack ERP for a real estate company. It is used daily by more than 30 people across sales, accounts, site management, and HR. The server is multi-threaded and runs on a Linux VPS.",
    problem:
      "Sales, accounts, site management, and HR needed one system they could use at the same time, with the response time kept low under that concurrent load.",
    architecture: [
      "React client",
      "Application server with a multi-threaded setup",
      "PostgreSQL",
      "Linux VPS deployment",
    ],
    technologies: ["React", "PostgreSQL", "Linux VPS"],
    implementation: [
      "Built the ERP as a React front end with PostgreSQL.",
      "Hosted it on a Linux VPS.",
      "Handled concurrent use with a multi-threaded server setup.",
    ],
    results: [
      "Used daily by 30+ people across sales, accounts, site management, and HR.",
      "Average response time kept under 10 ms.",
    ],
  },
  {
    slug: "quad-sim-worlds",
    title: "ArduPilot Practice Worlds",
    kicker: "Gazebo, Webots, and a shared avoidance plugin",
    category: "UAV",
    featured: false,
    summary:
      "Indoor maze and outdoor forest layouts for practicing obstacle avoidance, with the same floor plan in Python, Gazebo, and Webots.",
    overview:
      "Public repository for trying obstacle avoidance before a real flight. One floor plan is exported to a Python demo, a Gazebo world, and a Webots world. The quad carries a lidar and a depth camera. Walls and trees have collision geometry.",
    problem:
      "Avoidance logic is easier to inspect when the same layout can be flown in a small Python demo and then opened in Gazebo or Webots, without copying the map by hand.",
    architecture: [
      "sim/worlds.py holds the maze walls and tree positions",
      "python3 -m sim.export writes Gazebo SDF and Webots files",
      "sim/avoid.py is the avoidance plugin used by the Python demo and the Webots controller",
      "Planar lidar and a depth camera",
    ],
    technologies: ["Python", "ArduPilot", "Gazebo", "Webots", "Lidar"],
    implementation: [
      "Indoor maze is 18 m by 14 m, with two baffles. Outdoor forest is 40 m by 40 m with 26 trees.",
      "Avoider.step returns a world-frame velocity from body-frame lidar ranges. If the front cone is clear it flies toward the goal. If something is inside 1.1 m ahead it follows the wall on the left.",
      "The repository does not ship the ArduPilot tree. It is the environment: floor plan, lidar, and depth camera.",
    ],
    results: [
      "The repository’s check records an indoor run that reached the goal in 38.2 s over a 50.3 m path, and an outdoor run in 35.3 s over a 51.1 m path.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/ardupilot-sim-worlds",
    media: [
      {
        src: "https://raw.githubusercontent.com/ajju2004srivatsan-cloud/ardupilot-sim-worlds/main/media/indoor.svg",
        alt: "Top-down path through the indoor maze",
        caption: "Indoor maze path published in the repository.",
      },
      {
        src: "https://raw.githubusercontent.com/ajju2004srivatsan-cloud/ardupilot-sim-worlds/main/media/outdoor.svg",
        alt: "Top-down path through the outdoor forest",
        caption: "Outdoor forest path published in the repository.",
      },
    ],
  },
  {
    slug: "onboard-situation-awareness",
    title: "Situation Awareness from an Onboard Camera",
    kicker: "Live map, video, and telemetry",
    category: "UAV",
    featured: false,
    summary:
      "A phone or Skydroid G20 publishes video and position. A Linux host serves a Cesium map and the camera picture to the operator.",
    overview:
      "Operators see a live map and the picture from an onboard camera. A phone or a Skydroid G20 publishes video and position to a Linux host. The host runs a telemetry server and a video server. A browser or Electron window shows a Cesium map and the camera.",
    problem:
      "Video and position need to stay independent: the video server should only carry the camera, and the telemetry server should only carry position, heading, and which stream to play.",
    architecture: [
      "On the vehicle: phone camera or Skydroid G20",
      "RTMP video into MediaMTX",
      "WebSocket GPS and heading into an Express telemetry server on port 8080",
      "HLS and WebRTC playback into a Cesium dashboard",
      "A device drops off the map after 15 seconds without telemetry",
    ],
    technologies: ["Kotlin", "Cesium", "MediaMTX", "Express", "WebSocket", "RTMP", "WebRTC", "HLS"],
    implementation: [
      "RTMP ingest uses port 1935. WebRTC playback uses port 8889 on the LAN. HLS is proxied at /hls for viewers off the LAN.",
      "Express serves the dashboard, REST, and WebSocket telemetry, and proxies video so a remote operator can use one address.",
    ],
    results: [
      "The repository documents the pipeline and ports. It does not publish a field-trial report.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/situation-awareness-using-onboard-camera",
  },
  {
    slug: "medical-image-denoising",
    title: "Medical Image Denoising",
    kicker: "Classical filters on MRI, bone, and ultrasound-style scans",
    category: "AI/ML",
    featured: false,
    summary:
      "An open-source toolkit that compares spatial filters and point-processing enhancement, and writes PSNR metrics.",
    overview:
      "MedImg Denoise compares classical spatial filters on MRI, bone, and ultrasound-style scans, then applies point-processing transforms for contrast and structure. The study runs from a command-line script and writes a result gallery.",
    problem:
      "Different noise sources want different filters. The toolkit makes that comparison repeatable and records PSNR beside the images.",
    architecture: [
      "Synthetic phantoms and noise models",
      "Noise-specific filter pipelines",
      "Point-processing and intensity transforms",
      "PSNR written to gallery/metrics.json",
    ],
    technologies: ["Python", "OpenCV", "NumPy", "Matplotlib", "scikit-image"],
    implementation: [
      "Noise cases covered: Rician, salt and pepper, Gaussian, periodic, and speckle.",
      "Filters include median, Gaussian, bilateral, non-local means, Wiener, hybrid cascades, and mean-shift.",
      "Enhancement includes contrast stretch, histogram equalization, log and gamma, bit-plane slicing, and Laplacian–Sobel sharpening.",
    ],
    results: [
      "The repository publishes sample comparisons and PSNR output. This site does not restate metric tables that are not copied into the portfolio config.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/biomedical-image-denoising",
  },
  {
    slug: "esp32-oled-spectrum",
    title: "ESP32 OLED Audio Spectrum",
    kicker: "I2S microphone and a 128×64 OLED",
    category: "Embedded Systems",
    featured: false,
    summary:
      "A real-time bar-graph spectrum analyzer on an ESP32, using an I2S microphone and an SSD1306 display.",
    overview:
      "The analyzer splits audio into eight logarithmic bands from 200 Hz to 20 kHz and draws them as bars with falling peak dots on a 128×64 OLED.",
    problem:
      "A small display and a MEMS microphone still need a stable spectrum: fast attack, slow decay, and less bounce from low-frequency mic noise.",
    architecture: [
      "INMP441 or similar I2S MEMS microphone",
      "ESP32 I2S input",
      "FFT into eight logarithmic bands",
      "SSD1306 128×64 OLED over I2C",
    ],
    technologies: ["C++", "ESP32", "I2S", "arduinoFFT", "Adafruit SSD1306"],
    implementation: [
      "Removes DC offset and detects silence.",
      "Per-band sensitivity can dampen low frequencies.",
      "Documented wiring uses GPIO15, GPIO17, and GPIO18 for I2S, and GPIO21 and GPIO22 for I2C.",
    ],
    results: ["The repository documents the circuit and firmware. It does not publish measured frequency-response error."],
    github: "https://github.com/ajju2004srivatsan-cloud/ESP32-oled-spectrum",
  },
  {
    slug: "ecg-ad8232",
    title: "ECG Monitoring with AD8232 and ESP32",
    kicker: "Cardiac signal capture over Wi-Fi",
    category: "Embedded Systems",
    featured: false,
    summary:
      "A portable ECG front end that captures the AD8232 signal on an ESP32 and sends it over Wi-Fi for visualization.",
    overview:
      "Real-time ECG monitoring using an AD8232 sensor and an ESP32 to capture, process, and transmit cardiac signals over Wi-Fi. The repository describes it as a low-cost portable setup, with room left for arrhythmia detection and remote monitoring.",
    problem:
      "A bedside monitor is more than this project claims to be. The published goal is a low-cost path from the analog front end to a Wi-Fi visualization client.",
    architecture: [
      "AD8232 analog front end",
      "ESP32 capture and processing",
      "Wi-Fi transmission",
      "Visualization client",
    ],
    technologies: ["ESP32", "AD8232", "Wi-Fi"],
    implementation: [
      "The public repository description is the full written account of the signal path. Firmware-level parameters are not restated here.",
    ],
    results: [
      "Arrhythmia detection is described as future scope, not as a completed result.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/ECG-Monitoring-with-AD8232-ECG-Sensor-ESP32",
  },
  {
    slug: "sdn-congestion-control",
    title: "SDN Congestion Control Study",
    kicker: "A simplified BRF compared with CUBIC and BBR",
    category: "Research",
    featured: false,
    summary:
      "A Mininet testbed that compares CUBIC, BBR, and a simplified BRF-style controller on throughput, fairness, loss, and convergence.",
    overview:
      "The repository packages a Linux implementation aligned to a report on SDN-based congestion control. brf here is a practical approximation: BBR as the base transport, with pacing and queue tuning from bottleneck observations, rather than an out-of-tree TCP kernel module.",
    problem:
      "The report needed a runnable comparison of congestion-control behavior on a software-defined network, including a simplified BRF, without requiring a custom kernel transport.",
    architecture: [
      "Mininet testbed",
      "Open vSwitch dataplane",
      "Optional OpenDaylight hooks, with a local OVS controller path if it is absent",
      "Experiments for single-flow throughput, fairness, loss robustness, and convergence",
    ],
    technologies: ["Python", "Mininet", "Open vSwitch", "OpenFlow", "OpenDaylight", "iperf3", "Linux TCP"],
    implementation: [
      "Experiments export JSON and CSV under outputs/.",
      "Requires Ubuntu 22.04 or newer, Python 3.10+, Mininet, Open vSwitch, and iperf3.",
      "Mininet and tc need sudo. The repository says to run it on Linux.",
    ],
    results: [
      "Plots are published in the repository. This page does not copy numeric results out of those images.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/Smart-Congestion-Control-with-SDN-BRF-vs-BBR-vs-CUBIC-",
  },
  {
    slug: "c-autograder",
    title: "C Autograder",
    kicker: "Sandboxed evaluation of C submissions",
    category: "Research",
    featured: false,
    summary:
      "A rules-driven grader that compiles a C program, runs a sandboxed smoke test, and writes JSON and text reports.",
    overview:
      "c-autograder reads an instructor JSON ruleset, runs a first-pass sanity sweep, dispatches metric analyzers, and writes a machine-readable report and a student-facing text report.",
    problem:
      "Hand grading of C exercises does not scale, and a grader still has to stay inside resource limits and show the evidence for a mark.",
    architecture: [
      "Student C file plus an external rules JSON",
      "Compile check, one-second sandboxed smoke test, and static structure checks",
      "Execution, static, and style analyzers",
      "JSON report with a rules hash, plus a text report",
    ],
    technologies: ["Python", "C", "ASan", "UBSan"],
    implementation: [
      "Analyzers named in the repository include I/O tests, edge cases, a complexity estimator, sanitizer runs, compiler warnings, static analysis, function splitting, an LLM review at temperature 0, and 3-gram similarity.",
      "A sample add.c report in the README scores 77.0 / 100 under the published sample rules.",
    ],
    results: [
      "Reports are deterministic JSON and text files. The 77.0 score is the sample in the README, not a cohort average.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/c-autograder",
  },
  {
    slug: "simple-scroll-reverser",
    title: "Simple Scroll Reverser",
    kicker: "macOS menu-bar utility",
    category: "Web Development",
    featured: false,
    summary:
      "A free macOS menu-bar app that reverses scrolling separately for a mouse and a trackpad.",
    overview:
      "Simple Scroll Reverser keeps natural scrolling on one device and classic scrolling on the other. It is an original menu-bar app for macOS 13.5 or later, Intel or Apple silicon, distributed as a universal ad-hoc signed binary. It is not affiliated with Pilotmoon Scroll Reverser.",
    problem:
      "macOS applies one scrolling direction to the mouse and the trackpad. This app splits that choice.",
    architecture: [
      "Menu-bar app, no Dock icon",
      "Separate mouse and trackpad direction",
      "Accessibility permission required, Input Monitoring recommended",
      "GitHub Actions build on macos-latest",
    ],
    technologies: ["Swift", "macOS", "GitHub Actions"],
    implementation: [
      "Bundle identifier: com.ajju2004srivatsan.simplescrollreverser.",
      "Releases ship SimpleScrollReverser.zip. CI builds are not Developer ID notarized.",
    ],
    results: ["The app is published as a free MIT-licensed release. No usage totals are stated."],
    github: "https://github.com/ajju2004srivatsan-cloud/simple-scroll-reverser",
  },
  {
    slug: "buddy-party",
    title: "Buddy Party",
    kicker: "Offline local multiplayer on one Android device",
    category: "Web Development",
    featured: false,
    summary:
      "Two- and four-player mini-games on a single phone or tablet, with no network required.",
    overview:
      "Buddy Party is an original Flutter app of local party games. Cup wins are stored on the device. The project states that it does not copy another party-game app’s name, assets, code, or branding.",
    problem:
      "Pass-and-play games need to run offline, on one screen, for two or four people.",
    architecture: [
      "Flutter client",
      "CustomPainter mini-games",
      "shared_preferences for cup scores",
      "Application id com.buddyparty.buddy_party",
    ],
    technologies: ["Flutter", "Dart", "Android"],
    implementation: [
      "Two-player games listed in the repository: Bounce Duel, Puck Rush, Bumper Bash, Tap Storm, Paint Race, Rope Pull, Lane Race, Memory Flip, Tic Tac Duo, and Slither Duel.",
      "Four-player games listed: Bumper Bash, Tap Storm, Paint Race, Rope Pull as 2v2, Lane Race, Memory Flip, and Slither Duel.",
    ],
    results: ["The repository describes the game list and the Play Store packaging steps. It does not publish install counts."],
    github: "https://github.com/ajju2004srivatsan-cloud/buddy-party",
  },
  {
    slug: "encodec-relay",
    title: "EnCodec Relay",
    kicker: "Real-time audio streaming relay",
    category: "AI/ML",
    featured: false,
    summary:
      "A backend relay for real-time audio streaming with EnCodec, deployed on Railway.",
    overview:
      "The repository describes a backend relay for real-time audio streaming using EnCodec, deployed on Railway to manage low-latency connections and data transmission. It does not claim to be the audio-visual speech enhancement paper.",
    problem:
      "Encoded audio still needs a relay that can keep a real-time connection between clients.",
    architecture: ["EnCodec audio path", "Relay service", "Railway deployment"],
    technologies: ["Python", "EnCodec", "Railway"],
    implementation: [
      "The public README is a short service description. Protocol parameters are not published there, so they are not repeated here.",
    ],
    results: ["No latency or quality figures are published in the repository description."],
    github: "https://github.com/ajju2004srivatsan-cloud/encodec-relay",
  },
  {
    slug: "archound",
    title: "ArcHound",
    kicker: "Community packaging of a DIY quadruped",
    category: "Robotics",
    featured: false,
    summary:
      "Packaging and documentation around ElectroPup, a 3D-printed quadruped. The robot design is upstream work by reubenstr.",
    overview:
      "ArcHound is a community packaging name for a fork of reubenstr/ElectroPup. The upstream machine is a 3D-printed quadruped with a Raspberry Pi 5, twelve BLDC actuators, custom boards, and Python control. ArcHound’s own packaging text is MIT-licensed. The upstream design rights stay with the original author, and that repository has no published license of its own.",
    problem:
      "The packaging exists so the upstream quadruped files, schematics, and setup notes can be found under one repository name. It is not presented here as an original robot design.",
    architecture: [
      "Raspberry Pi 5",
      "Twelve LingKong MG4010E-i10 v3 actuators on CAN",
      "Optional STM32 auxiliary board",
      "BNO055 IMU",
      "6S Li-Ion pack, about 72 Wh",
      "Mass about 4.5 kg",
      "Python control, UI, and MuJoCo simulation",
    ],
    technologies: ["Python", "Raspberry Pi 5", "KiCad", "STM32", "CAN", "MuJoCo"],
    implementation: [
      "KiCad boards, STL and STEP files, and an STM32 PlatformIO auxiliary firmware live in the fork.",
      "Setup notes point at docs/setup.md, src/sim.sh, and src/main.sh.",
    ],
    results: [
      "Design and implementation credit in the repository: reubenstr. Videos linked below are the upstream demonstrations cited by that README.",
    ],
    github: "https://github.com/ajju2004srivatsan-cloud/ArcHound",
    videos: [
      { href: "https://youtu.be/AJn_wCcWlwo", label: "Upstream poses video" },
      { href: "https://youtu.be/YjTVNw8BXlM", label: "Upstream walk, turn, and strafe video" },
    ],
    sourceNote: "Fork of https://github.com/reubenstr/ElectroPup. Read NOTICE.md in the repository before reuse.",
  },
];

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  kind: "Presentation" | "Publication scheduled" | "Workshop";
  summary: string;
  href?: string;
};

export const publications: Publication[] = [
  {
    id: "ngndai-2026",
    title: "Lightweight Audio-Visual Speech Enhancement System",
    authors: ["Ajay Srivatsan R."],
    venue: "NGNDAI, MNNIT Allahabad",
    year: "2026",
    kind: "Presentation",
    summary:
      "Accepted for presentation in 2026. Multimodal pipeline combining CRNN-based audio processing with ResNet lip-feature extraction, reduced in size for real-time use, with improvement over audio-only baselines on PESQ, STOI, and SNR.",
  },
  {
    id: "socta-2025",
    title: "A Comparative Study of Trapdoor Sampling Algorithms for Lattice-Based Cryptography",
    authors: ["Ajay Srivatsan R."],
    venue: "SoCTA 2025, International Conference on Soft Computing: Theories and Applications, NIT Jalandhar",
    year: "2025",
    kind: "Publication scheduled",
    summary:
      "Presented at SoCTA 2025, NIT Jalandhar. Publication scheduled for 2026.",
  },
];

export const workshops = [
  {
    title: "Building Edge AI Application on the MAX 7800X",
    host: "Analog Devices, hosted by NIT Trichy",
    period: "March 2024",
    summary:
      "Workshop hosted by NIT Trichy on the MAX 7800X microcontroller, focused on building Edge AI applications.",
  },
  {
    title: "Digital Design Mastery with FPGA",
    host: "Amrita School of Engineering, Coimbatore",
    period: "September 2024",
    summary: "Hands-on FPGA digital design with Vivado System Design.",
  },
];

export type Achievement = {
  group: "Academic" | "Award" | "Certification" | "Sport";
  title: string;
  detail: string;
  period?: string;
};

export const achievements: Achievement[] = [
  {
    group: "Academic",
    title: "B.Tech. Electronics and Communication Engineering",
    detail: "Amrita Vishwa Vidyapeetham, Coimbatore. CGPA 7.98.",
    period: "Oct 2022 – Jul 2026",
  },
  {
    group: "Academic",
    title: "12th board examinations",
    detail: "Sakthi Vinayakar Hindu Vidyalaya, Tuticorin. 86.6%.",
    period: "2022",
  },
  {
    group: "Academic",
    title: "10th board examinations",
    detail: "Sakthi Vinayakar Hindu Vidyalaya, Tuticorin. 85.0%.",
    period: "2020",
  },
  {
    group: "Academic",
    title: "SoCTA 2025 presentation",
    detail:
      "Presented “A Comparative Study of Trapdoor Sampling Algorithms for Lattice-Based Cryptography” at NIT Jalandhar. Publication scheduled for 2026.",
    period: "2025",
  },
  {
    group: "Academic",
    title: "NGNDAI presentation accepted",
    detail: "Lightweight audio-visual speech enhancement, MNNIT Allahabad.",
    period: "2026",
  },
  {
    group: "Sport",
    title: "Table tennis, district first",
    detail: "First place in table tennis for three years at the Tuticorin district level.",
  },
  {
    group: "Sport",
    title: "Table tennis doubles, second place",
    detail: "Second place in doubles table tennis.",
  },
  {
    group: "Sport",
    title: "Amrita table tennis, runner-up",
    detail: "Runner-up for two years at Amrita Vishwa Vidyapeetham.",
  },
];

export const photography = {
  line: "I love taking photographs.",
  empty: "Photographs will be added here.",
};

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export const photos: Photo[] = [];

export const categories: ProjectCategory[] = [
  "AI/ML",
  "Robotics",
  "UAV",
  "Embedded Systems",
  "Web Development",
  "Research",
];

/** Manual category and feature flags for GitHub repositories. */
export const repositoryCatalog: Record<string, { category: ProjectCategory; featured?: boolean }> = {
  "ardupilot-sim-worlds": { category: "UAV", featured: true },
  "situation-awareness-using-onboard-camera": { category: "UAV", featured: true },
  "biomedical-image-denoising": { category: "AI/ML", featured: true },
  ArcHound: { category: "Robotics" },
  "ESP32-oled-spectrum": { category: "Embedded Systems", featured: true },
  "ECG-Monitoring-with-AD8232-ECG-Sensor-ESP32": { category: "Embedded Systems", featured: true },
  "encodec-relay": { category: "AI/ML" },
  "Smart-Congestion-Control-with-SDN-BRF-vs-BBR-vs-CUBIC-": { category: "Research" },
  "c-autograder": { category: "Research" },
  aakara: { category: "Web Development" },
  "buddy-party": { category: "Web Development" },
  "simple-scroll-reverser": { category: "Web Development" },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/github/", label: "GitHub" },
  { href: "/research/", label: "Research" },
  { href: "/experience/", label: "Experience" },
  { href: "/achievements/", label: "Achievements" },
  { href: "/skills/", label: "Skills" },
  { href: "/photos/", label: "Photos" },
  { href: "/resume/", label: "Resume" },
  { href: "/contact/", label: "Contact" },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
