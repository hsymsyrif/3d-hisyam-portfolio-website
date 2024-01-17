import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  smartfren,
  digitalkotak,
  designbyhisyam,
  lvinnamon,
  pixcme,
  buildit,
  photoeditor,
  autocar,
  bookshelf,
  scissorpaper,
  portfolio,
  threejs,
  apple,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "3D Visual Art",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "IT Security Junior Analyst",
    company_name: "PT Smartfren Telekom Tbk",
    icon: smartfren,
    iconBg: "#FFFFFF",
    date: "January 2024 - July 2024",
    points: [
      "Create Documentation Tracking Action Plan or Projects",
      "Perform Analysis Security Event and Follow Up Issue",
      "Build and Hellping Perform Basic Awareness to Users",
      "Develop a plan to protect computer files against intentional or unintentional modification, destruction, or disclosure and to meet emergency data processing needs",
      "Ensure security control and confidentiality of digital files and vital electronic infrastructure of the company",
      "Design, implement, upgrade, or monitor security measures to protect computer networks and information within a company or institution",
      "Encrypt data transmission, implement a firewall to hide confidential information being sent from being detected from outside",
      "Carry out preventive steps and procedures and also proactively respond to computer security violations and viruses in the network",
    ],
  },
  {
    title: "3D Visual Art Freelancer",
    company_name: "Designbyhisyam",
    icon: designbyhisyam,
    iconBg: "#000000",
    date: "January 2020 - Present",
    points: [
      "Create high-quality 3D models based on project specifications, including characters, environments, objects, and other elements",
      "Apply textures and materials to 3D models to achieve realistic and visually appealing results. Ensure consistency with the project's artistic direction",
      "Set up lighting scenarios to enhance the visual appeal of 3D scenes",
      "Work closely with client to understand artistic requirements",
      "Develop creative and innovative design concepts based on project requirements.",
      "Develop creative and innovative design concepts based on project requirements.",
      "Create visual elements, such as logos, product illustrations, product packaging and graphics, 3D Character Modeling Design that align with the brand identity",
      "Utilize industry-standard 3D modeling and rendering software like a Blender, Autodesk Maya to create and optimize 3D Visual Assets",
    ],
  },
  {
    title: "Developer at Ios Foundation Program 2023",
    company_name: "Apple Developer Academy Bina Nusantara International",
    icon: apple,
    iconBg: "#FFFFFF",
    date: "August 2023",
    points: [
      "Develop a Running & Fitness application involves creating features that help users track their runs, monitor their fitness progress, and stay motivated",
      "Design a user interface (UI) involves creating a visually appealing and user friendly layout that aligns with the functionality of the Running & Fitness application",
      "Present the progress and final results of the project application to the client and respond to the feedback provided",
      "Collaborate with other developers, designers, and stakeholders to ensure seamless integration of features",
    ],
  },
  {
    title: "Creative Designer Team",
    company_name: "PT Digital Kotak Inovasi",
    icon: digitalkotak,
    iconBg: "#FFFFFF",
    date: "January 2020 - March 2020",
    points: [
      "Develop new concepts and ideas that are unique and innovative in design",
      "Create product visualizations in the form of images or videos to increase product promotion and sales by up to 50%",
      "Create visually appealing graphics, ilustrations, and multimedia content effectively communicating the intended message",
      "Collaborate with cross-functional teams, including marketing, product development, and sales, to understand their needs and incorporate feedback into creative projects",
      "Create visual designs using design elements such as color, typography, images, composition, and visual elements",
      "Create visualizations for businesses that need logo designs, product packaging, or marketing campaign materials",
      "Implement ideas or look for new ideas based on requests from clients, creative directors or marketing managers",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lvinnamon",
    description: "Web-based platform that allows users to search, order cinnamon rolls based the variants, providing a convenient and efficient solution for market needs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Jquery",
        color: "pink-text-gradient",
      },
    ],
    image: lvinnamon,
    source_code_link: "https://github.com/hsymsyrif/LVinnamon",
    source_code_link2: "https://lvinnamon.netlify.app/",
  },
  {
    name: "Build IT",
    description: "Web application that enables users to search for order Products Building, view Recommendation of the Products, and locate available jobs / Search Worker based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: buildit,
    source_code_link: "https://github.com/hsymsyrif/BuildIT",
    source_code_link2: "https://builditapps.netlify.app/",
  },
  {
    name: "Pixcme",
    description: "A comprehensive order custome cakes platform that allows users to order cakes, custome cakes, and offers curated recommendations for trending design cakes.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: pixcme,
    source_code_link: "https://github.com/hsymsyrif/pixcme",
    source_code_link2: "https://pixcme.netlify.app/",
  },
  {
    name: "Photo Editor",
    description: "A professional photographer or a casual enthusiast, our platform offers a range of features to enhance, retouch, and transform your photos effortlessly.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: photoeditor,
    source_code_link: "https://github.com/hsymsyrif/PhotoEditor",
    source_code_link2: "https://photoedittor.netlify.app/",
  },
  {
    name: "BookShelf Apps",
    description: "Effortlessly catalog your collection, track reading progress, and explore recommendations tailored just for you. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: bookshelf,
    source_code_link: "https://github.com/hsymsyrif/bookshelf-apps",
    source_code_link2: "https://appsbookshelf.netlify.app/",
  },
  {
    name: "Automotive Car",
    description: "Explore a diverse range of top-notch vehicles, from sleek sedans to rugged SUVs, each boasting state-of-the-art technology and unparalleled safety features.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: autocar,
    source_code_link: "https://github.com/hsymsyrif/AutoCar",
    source_code_link2: "https://autoc4r.netlify.app/",
  },
  {
    name: "Rock Paper Scissors",
    description: "Experience the classic game in a digital realm where strategy meets chance. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: scissorpaper,
    source_code_link: "https://github.com/hsymsyrif/scissorspaper",
    source_code_link2: "https://batukertasguntinggames.netlify.app/",
  },
  {
    name: "My 2nd Portfolio",
    description: "Stand out in the digital landscape and make a lasting impression with my portfolio website. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/hsymsyrif/Portfolio_Muhammad_Hisyam_Syarif",
    source_code_link2: "https://hsymsyrif.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
