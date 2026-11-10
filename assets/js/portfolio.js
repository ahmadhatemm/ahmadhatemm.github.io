const projectData = {
  'delta-robot': {
    title: 'Delta Robot',
    category: 'Robotics & AI',
    date: 'MAR 2026 – MAY 2026',
    summary: 'Designed, manufactured and controlled a 3-DOF Delta Robot. The challenge was building a robot with that level of complexity, then controlling its three connected legs and a custom soft gripper for object handling.',
    built: 'I designed the full robot model, assembled the motion system, built the soft gripper, and used inverse kinematics to move the robot through a 3D work envelope.',
    stack: ['SolidWorks', 'Inverse Kinematics', 'Stepper Motors', 'DC Motors', 'Soft Gripper', 'Robot Design'],
    media: {
      type: 'video',
      src: 'Videos/Delta Robot Project Video.mp4',
      alt: 'Delta Robot project video'
    },
    reports: [
      { label: 'Delta Robot Project Report', href: 'assets/reports/Delta Robot Project_Report.pdf' }
    ]
  },
  'ecobee': {
    title: 'Ecobee (Garbage Thrower)',
    category: 'Robotics & AI',
    date: 'FEB 2026 – JUN 2026',
    summary: 'EcoBee is an autonomous mobile robot engineered for surface cleaning and waste retrieval. It combines mechatronics, real-time AI object detection, and a desktop control interface.',
    built: 'I built an autonomous robot powered by Raspberry Pi with object detection, navigation control, and a collection mechanism for targeted debris retrieval.',
    stack: ['Raspberry Pi', 'Computer Vision', 'Python', 'AI Object Detection', 'Navigation Control', 'Desktop GUI'],
    media: {
      type: 'video',
      src: 'Videos/Ecobee Video.mp4',
      alt: 'Ecobee robot demonstration video'
    },
    reports: [
      { label: 'Design 2 Report', href: 'assets/reports/Design 2 Report.pdf' }
    ]
  },
  'robotic-arm': {
    title: '6-DOF Robotic Manipulator',
    category: 'Robotics & AI',
    date: 'OCT 2025 – JAN 2026',
    summary: 'Designed, simulated, and physically integrated a 6-DOF robotic manipulator with a 4-DOF arm and a 2-DOF gripper. The work linked digital twin simulation with real hardware actuation.',
    built: 'I modeled the manipulator in URDF/Xacro, configured the simulation environment in Gazebo and RViz2, and connected the motion pipeline to ESP32 and micro-ROS hardware.',
    stack: ['ROS 2', 'MoveIt 2', 'Gazebo', 'RViz2', 'ESP32', 'micro-ROS', 'SolidWorks'],
    media: {
      type: 'image',
      src: 'images/robotic_arm.png',
      alt: '6-DOF robotic manipulator image'
    },
    reports: [
      { label: 'Industrial Robotics — Milestone 1', href: 'assets/reports/Industrial Robotics - Milestone1 Submission.pdf' },
      { label: 'Industrial Robotics — Milestone 2', href: 'assets/reports/Industrial Robotics - Milestone 2.pdf' },
      { label: 'Delta Robot Project Report', href: 'assets/reports/Delta Robot Project_Report.pdf' }
    ]
  },
  'aluminum-car': {
    title: 'Aluminum Air-Powered Car',
    category: 'Mechanical',
    date: 'MAY 2026 – JUL 2026',
    summary: 'Designed, manufactured, and tested an aluminum vehicle propelled by compressed air from a 3-litre, 10-bar tank, integrating fluid, mechanical, and electrical subsystems with braking and control.',
    built: 'I worked on the design, manufacture, and testing of the aluminum air-powered vehicle and its integrated subsystems.',
    stack: ['Mechanical Design', 'Manufacturing', 'Compressed Air', 'Vehicle Control', 'Braking'],
    media: {
      type: 'video',
      src: 'Videos/20260624_183305.mp4',
      alt: 'Aluminum air-powered car project video'
    },
    reports: [
      { label: 'Machine Element Project Report', href: 'assets/reports/Machine Element Project Report.pdf' }
    ]
  },
  'formation-control': {
    title: 'Multi-Robot Formation Control',
    category: 'Robotics & AI',
    date: 'OCT 2026 – Present',
    summary: 'Graduation project to simulate a fleet of rover robots moving together in formation, using a ROS 2 Humble and Ignition Gazebo workspace.',
    built: 'I lead the Simulation Sub-Team and own the multi-robot infrastructure: I integrated the team’s rover model (URDF) and built a launch file that spawns four rovers, each named and controlled through its own command topic (rover1 to rover4).',
    stack: ['ROS 2 Humble', 'Ignition Gazebo', 'URDF'],
    media: {
      type: 'video',
      src: 'Videos/rasprover.mp4',
      alt: 'Graduation project rover formation control video'
    },
    reports: []
  },
  'factory-cartesian': {
    title: 'Factory Cartesian Robot',
    category: 'Robotics & AI',
    date: 'SEP 2025 – JAN 2026',
    summary: 'Automated a classification and handling system designed to sort lids and bases using non-contact optical height detection and a Cartesian robotic manipulator.',
    built: 'I worked on an automated component classification and handling system using optical detection and Cartesian motion.',
    stack: ['Cartesian Robot', 'Optical Height Detection', 'Automation'],
    media: {
      type: 'image',
      src: 'images/design1.png',
      alt: 'Factory Cartesian robot sorting components'
    },
    reports: []
  },
  'pid-water-tank': {
    title: 'PID Water Tank Level',
    category: 'Automation',
    date: 'MAY 2026 – JUN 2026',
    summary: 'Designed and implemented a closed-loop industrial liquid-level control system utilizing a Siemens S7-1200 PLC within TIA Portal.',
    built: 'I programmed and simulated a liquid-level controller for an S7-1200 PLC.',
    stack: ['Siemens TIA Portal', 'S7-1200 PLC', 'PID Control', 'PLCSim'],
    media: {
      type: 'image',
      src: 'images/automation.png',
      alt: 'PID-controlled water tank level system'
    },
    reports: [
      { label: 'Automation Phase 1 Report', href: 'assets/reports/Automation Phase 1 - Design and Implementation of a PID.pdf' }
    ]
  },
  'smart-production': {
    title: 'Smart Production System',
    category: 'Automation',
    date: 'MAY 2026 – JUN 2026',
    summary: 'This project includes the design, programming, and simulation of a fully automated manufacturing line using Siemens TIA Portal, PLCSim, and Factory I/O.',
    built: 'I created a modular smart production system capable of autonomous manufacturing, sorting, and multi-part assembly through simulation and PLC logic.',
    stack: ['Siemens TIA Portal', 'PLCSim', 'Factory I/O', 'PLC Logic', 'Automation Design'],
    media: {
      type: 'image',
      src: 'images/auto2.png',
      alt: 'Smart production system image'
    },
    reports: []
  },
  'wild-wheels': {
    title: 'Wild Wheels',
    category: 'Robotics & AI',
    date: 'FEB 2025 – MAY 2025',
    summary: 'Designed a toy car and track system with app control and lifting, sorting, and shooting mechanisms.',
    built: 'I helped design a car and interactive track circuit controlled through an app.',
    stack: ['Toy Design', 'App Control', 'Mechanical Systems'],
    media: {
      type: 'image',
      src: 'images/wildwheels.jpg',
      alt: 'Wild Wheels interactive track toy'
    },
    reports: []
  },
  'motor-cart': {
    title: 'Motor-Driven Cart PID Control',
    category: 'Automation',
    date: 'OCT 2025 – DEC 2025',
    summary: 'Designed and implemented real-time control for a motor-driven cart using a DC motor, encoder, and MATLAB/Simulink.',
    built: 'I developed a control-oriented model, validated it against measured motion, and implemented PID position control on the physical cart.',
    stack: ['MATLAB', 'Simulink', 'DC Motor', 'Encoder', 'PID Control'],
    media: {
      type: 'image',
      src: 'images/control.png',
      alt: 'Motor-driven cart PID control system'
    },
    reports: []
  },
  'door-locker': {
    title: 'Door Locker Security System',
    category: 'Embedded',
    date: 'NOV 2025 – JAN 2026',
    summary: 'Built a dual-ECU security system that handled password authentication, door actuation, and persistent saved credentials.',
    built: 'I designed a microcontroller-based locker control system with UART communication, EEPROM storage, and motor-driven door logic with an auto-lock trigger.',
    stack: ['TM4C123', 'UART', 'EEPROM', 'C/C++', 'Embedded Control', 'Motor Actuation'],
    media: {
      type: 'image',
      src: 'images/doorlock.jpg',
      alt: 'Door locker system image'
    },
    reports: []
  },
  'agile-tool': {
    title: 'Agile Project Management Java Tool',
    category: 'Software',
    date: 'OCT 2025 – JAN 2026',
    summary: 'The Agile Project Management System is a Java-based application that simulates a real-world enterprise Agile environment with role-based collaboration.',
    built: 'I built a software tool to support Agile workflows across stakeholders, ScrumMasters, developers, and QA engineers.',
    stack: ['Java', 'Agile Workflow', 'Role-Based Design', 'Software Architecture', 'Project Planning'],
    media: {
      type: 'image',
      src: 'images/agiletool.png',
      alt: 'Agile project management Java tool interface'
    },
    reports: []
  },
  'turning-machine': {
    title: 'Turning Machine Mockup',
    category: 'Mechanical',
    date: 'MAY 2024 – JUN 2024',
    summary: 'Led a small team to build a mockup of a turning machine using simple wooden parts and a repurposed drill motor to demonstrate manufacturing fundamentals.',
    built: 'I coordinated the group build, translated machine function into a working mockup, and focused on milling, drilling, and turning concepts in a visible physical model.',
    stack: ['Mechanical Mockup', 'Manufacturing', 'Team Leadership', 'Design Build', 'Machining Concepts'],
    media: {
      type: 'image',
      src: 'images/manufacturing.jpg',
      alt: 'Turning machine mockup image'
    },
    reports: []
  },
  'monorail-trolley': {
    title: 'Monorail Trolley Stress Analysis',
    category: 'Mechanical',
    date: 'OCT 2025 – DEC 2025',
    summary: 'Designed a geared overhead monorail trolley, including its wheels, axles, shaft, side plates, and chain drive.',
    built: 'I selected and designed the main trolley components and prepared engineering drawings, material selection, and strength calculations.',
    stack: ['Mechanical Design', 'Engineering Drawings', 'Material Selection', 'Strength Calculations'],
    media: {
      type: 'image',
      src: 'images/construction1.png',
      alt: 'Geared overhead monorail trolley project',
      fit: 'contain'
    },
    reports: []
  },
  'toy-car': {
    title: 'Toy Car Reverse Engineering',
    category: 'Mechanical',
    date: 'OCT 2025 – DEC 2025',
    summary: 'Reverse-engineered a toy car by disassembling and analyzing its components, function, manufacturing techniques, and materials.',
    built: 'I examined the car’s components and reconstructed its design to understand how it was made and how it works.',
    stack: ['Reverse Engineering', 'Mechanical Design', 'Manufacturing'],
    media: {
      type: 'image',
      src: 'images/construction2.jpeg',
      alt: 'Reverse-engineered toy car components'
    },
    reports: []
  },
  'laser-alarm': {
    title: 'Laser Alarm Detector',
    category: 'Embedded',
    date: 'APR 2025 – JUN 2025',
    summary: 'Designed a laser alarm detector that uses a focused beam and light sensor as a tripwire, triggering an alert when the beam is interrupted.',
    built: 'I designed the circuit around a laser source and light sensor to detect a broken beam.',
    stack: ['Laser', 'Light Sensor', 'Electronics', 'Alarm Circuit'],
    media: {
      type: 'image',
      src: 'images/electronics.png',
      alt: 'Laser alarm detector circuit'
    },
    reports: []
  },
  'power-supply': {
    title: '5V Power Supply',
    category: 'Embedded',
    date: 'APR 2025 – JUN 2025',
    summary: 'Designed and built a regulated 5V DC power supply from a 220V AC mains input.',
    built: 'I designed and built a regulated supply for electronics and digital circuits.',
    stack: ['Power Electronics', '220V AC', '5V DC'],
    media: {
      type: 'image',
      src: 'images/powersupply.png',
      alt: 'Regulated 5V power supply'
    },
    reports: []
  },
  'buck-converter': {
    title: 'Buck Converter',
    category: 'Embedded',
    date: 'APR 2025 – JUN 2025',
    summary: 'Designed and built a PWM buck converter to supply variable voltage to a DC motor from a 12V source.',
    built: 'I used an Arduino Uno to generate the PWM control signal for the converter.',
    stack: ['Arduino Uno', 'PWM', 'Buck Converter', 'DC Motor'],
    media: {
      type: 'image',
      src: 'images/buckconverter.png',
      alt: 'PWM buck converter'
    },
    reports: []
  },
  'home-library': {
    title: 'Home Library Website',
    category: 'Software',
    date: 'JUN 2026 – PRESENT',
    summary: 'A website for organizing a home book collection with photos and generated indexes to help arrange a physical library.',
    built: 'I built a tool to turn book photos into indexes for organizing a home library.',
    stack: [],
    media: {
      type: 'image',
      src: 'images/homelibrary.png',
      alt: 'Home Library website'
    },
    reports: []
  },
  'smart-balance': {
    title: 'Smart Sensitive Balance',
    category: 'Embedded',
    date: 'MAY 2025 – JUN 2025',
    summary: 'The project developed a calibrated weight measurement system capable of measuring loads from 5g up to 10kg with a scalable design.',
    built: 'I worked on the sensing, calibration, and measurement flow to build a reliable and precise digital weighing system.',
    stack: ['Sensors', 'Calibration', 'Measurement', 'Embedded Systems', 'Electronics'],
    media: {
      type: 'image',
      src: 'images/smartbalance.jpeg',
      alt: 'Smart sensitive balance image'
    },
    reports: []
  }
};

const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.querySelector('.modal-backdrop');
const modalMedia = document.querySelector('.modal-media');
const modalTitle = document.querySelector('#project-modal-title');
const modalSummary = document.querySelector('#project-summary');
const modalBuilt = document.querySelector('#project-built');
const modalStack = document.querySelector('#project-stack');
const modalDate = document.querySelector('#project-date');
const modalVideoLink = document.querySelector('#project-video');
const modalReports = document.querySelector('#project-reports');
const modalClose = document.querySelector('.modal-close');
const themeToggle = document.querySelector('.theme-toggle');

function applyFilter(filter) {
  projectCards.forEach((card) => {
    const matches = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('hidden', !matches);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    applyFilter(filter);
  });
});

function updateModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  modalTitle.textContent = project.title;
  modalDate.textContent = project.date;
  modalSummary.textContent = project.summary;
  modalBuilt.textContent = project.built;
  modalStack.innerHTML = '';
  project.stack.forEach((item) => {
    const chip = document.createElement('span');
    chip.textContent = item;
    modalStack.appendChild(chip);
  });

  const mediaContainer = modalMedia;
  mediaContainer.innerHTML = '';
  mediaContainer.classList.toggle('modal-media--contain', project.media?.fit === 'contain');
  mediaContainer.classList.toggle('modal-media--video', project.media?.type === 'video');

  if (project.media?.type === 'video') {
    const video = document.createElement('video');
    video.src = project.media.src;
    video.controls = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', project.media.alt);
    mediaContainer.appendChild(video);
  } else if (project.media?.type === 'image') {
    const image = document.createElement('img');
    image.src = project.media.src;
    image.alt = project.media.alt;
    mediaContainer.appendChild(image);
  } else {
    const placeholder = document.createElement('p');
    placeholder.className = 'modal-placeholder';
    placeholder.textContent = 'Simulation project';
    mediaContainer.appendChild(placeholder);
  }

  modalVideoLink.hidden = project.media?.type !== 'video';
  if (project.media?.type === 'video') {
    modalVideoLink.href = project.media.src;
  }

  modalReports.innerHTML = '';
  project.reports.forEach((report) => {
    const link = document.createElement('a');
    link.href = report.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = report.label;
    modalReports.appendChild(link);
  });

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalMedia.querySelectorAll('video').forEach((video) => video.pause());
  modal.setAttribute('hidden', 'hidden');
  document.body.style.overflow = '';
}

projectCards.forEach((card) => {
  const button = card.querySelector('.project-link');
  button.addEventListener('click', () => updateModal(card.dataset.project));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
    closeModal();
  }
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 40px 0px' });

  revealItems.forEach((item) => {
    item.classList.add('reveal-pending');
    revealObserver.observe(item);
  });
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}

const storedTheme = localStorage.getItem('portfolio-theme');
if (storedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.setAttribute('aria-pressed', 'true');
  themeToggle.querySelector('.toggle-indicator').textContent = 'Dark';
}

function setTheme(mode) {
  const isDark = mode === 'dark';
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.querySelector('.toggle-indicator').textContent = isDark ? 'Dark' : 'Light';
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  setTheme(isDark ? 'light' : 'dark');
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    }
  });
}, { threshold: 0.4, rootMargin: '0px 0px -20% 0px' });

sections.forEach((section) => sectionObserver.observe(section));
