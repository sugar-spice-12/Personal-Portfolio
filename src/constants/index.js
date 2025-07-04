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
  mongodb,
  figma,
  ibm,
  virtusa,
  vectra,
  bigbucks,
  hydro,
  matlab,
  simscale,
  powerbi,
  ansys,
  expo,
  hydraulic,
  stress,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "System and Simulation Engineer",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  { name: "MATLAB", icon: matlab },
  { name: "SimScale", icon: simscale },
  { name: "Power BI", icon: powerbi },
  { name: "Ansys", icon: ansys },
  { name: "Expo", icon: expo },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "IBM SkillsBuild by Edunet Foundation",
    icon: ibm,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained a recipe web application called 'YUMMY', blending culinary passion with technical prowess, using React functional components and hooks.",
      "Organized project structure with clear folder hierarchy and clean code practices.",
      "Designed and implemented responsive UI components styled with CSS for an intuitive user experience.",
      "Fetched and managed data from external APIs using useEffect and useState hooks.",
      "Created interactive features like search functionality with controlled inputs and dynamic rendering.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Virtusa",
    icon: virtusa,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Developed and maintained a full-stack electricity billing system using Django, HTML, CSS, JavaScript, Bootstrap, Firebase, GIMP, and Figma, which secured 2nd prize in a project competition.",
      "Implemented secure user authentication with login/signup functionality, extended with email and phone verification.",
      "Built user interfaces for profile updates, complaint registration, meter reading, bill viewing, and bill calculation.",
      "Integrated payment features including electricity/water bill transactions, quick-pay methods, and e-receipt archiving.",
      "Designed clean and intuitive UI/UX using GIMP and Figma to ensure a smooth user experience across all modules.",
    ],
  },
  {
    title: "Linux System Administrator",
    company_name: "Vectra Technosoft Pvt Ltd",
    icon: vectra,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Deployed and configured an FTP server on Ubuntu to enable efficient file transfer and management.",
      "Streamlined data sharing within the organization by setting up structured user access controls.",
      "Enhanced security by implementing encrypted file transfer protocols (SFTP) and firewall rules.",
      "Automated maintenance tasks and troubleshooting to ensure seamless and secure operations.",
    ],
  },
  {
    title: "AI/ML Trainer",
    company_name: "Big Si Bucks Inovation Private Limited",
    icon: bigbucks,
    iconBg: "#E6DEDD",
    date: "July 2024 - May 2025",
    points: [
      "Delivered training sessions on AI/ML to Computer Science Engineering students, enhancing their practical knowledge.",
      "Achieved high participant satisfaction by ensuring the relevance and clarity of the content.",
      "Facilitated hands-on workshops and practical exercises to improve knowledge retention.",
      "Assigned projects to students and evaluated understanding through assessments and performance reviews.",
    ],
  },
];

const testimonials = [
  {
    heading: "Overall Winner – Virtusa's Excellathon 1.0",
    subParagraph: "Won 1st place in a 14-day hackathon organized by M.Tech CSE, Sri Sairam Engineering College in association with Virtusa.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQH-IrJ_1DNH_A/feedshare-shrink_800/B56ZfPh8OMG0Ag-/0/1751533472773?e=1754524800&v=beta&t=s39IQyUA5ia5O9Rxo1nLMbTEx7gg9sxI1PBIPj-5IXI",
  },
  {
    heading: "Finalist – Smart India Hackathon 2024",
    subParagraph: "Selected as one of the top 5 finalist teams from over 500 submissions under our problem statement. Represented our project at the national-level finale held at Don Bosco Institute of Technology, Bengaluru.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGJd1xEdBzbYw/feedshare-shrink_2048_1536/B56ZPLScD7HoAo-/0/1734282431833?e=1753920000&v=beta&t=G2iyjPTWRiedaXNm_TyXFKElEsaKVPnVWFxS3b4zaTE",
  },
  {
    heading: "Finalist – Smart India Hackathon 2023",
    subParagraph: "Selected as one of the top 5 finalist teams from over 500 submissions under our problem statement. Represented our project at the national-level finale held at Royal Global University, Guwahati, Assam.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHG1YfnbgK6bg/feedshare-shrink_1280/feedshare-shrink_1280/0/1703267540388?e=1753920000&v=beta&t=rSFg4S4tUXH7VgoecQBmwHXzoo7bfeRa1rZiYO8O0bU",
  },
  {
    heading: "NPTEL Discipline Star (July-Dec 2024)",
    subParagraph: "Awarded the NPTEL Discipline Star title for consistently performing well across multiple NPTEL courses under the Computer Science discipline, demonstrating academic excellence and dedication to continuous learning.",
    image: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/NPTEL_Stars/NPTEL_DISCIPLINE_STARS/NPTELSS2240106243.jpg",
  },
  {
    heading: "First Prize – Project Presentation Event",
    subParagraph: "Awarded First Prize in the Project Presentation Event conducted by the Department of EEE at Hindustan Institute of Technology and Science, competing among 100 teams.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHhEopSQBYX9A/feedshare-shrink_800/feedshare-shrink_800/0/1712847558231?e=1753920000&v=beta&t=rzW2VXosckSQKSkf835Ru8R0Niaoq3l9Qp2chAVKxxQ",
  },
  {
    heading: "First Prize – Project Presentation Event",
    subParagraph: "Clinched the First Prize in the Project Presentation Event hosted by the Department of IT at Easwari Engineering College (SRM Group) among 150 teams.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGjJUUkO3mH6w/feedshare-shrink_800/feedshare-shrink_800/0/1708754633352?e=1753920000&v=beta&t=ruWcmvJKiaA0RYighcR01GQJYw4xASKMg4hXX5hPunc",
  },
  {
    heading: "Participant – IEEEXtreme Programming Competition",
    subParagraph: "Successfully participated in the global 24-hour IEEEXtreme coding competition, showcasing strong problem-solving skills and the ability to code under pressure in a team environment.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHUqwY24YVZrA/feedshare-shrink_800/feedshare-shrink_800/0/1703414680132?e=1753920000&v=beta&t=LdttSEEjTZGzvMLSd6IocCjBeKzEql5mVbsgo-EqLfk",
  },
];

const projects = [
  {
    name: "AI Based Generative Design of Hydropower Plants",
    points: [
      "The hydropower sector struggles with inefficient designs, high costs, and poor data integration.",
      "Developed an AI-based generative design system using GANs to automate and optimize hydro-mechanical, civil, and electro-mechanical components.",
      "Used Python with TensorFlow and PyTorch for AI models, SimScale for 3D simulations, and GIS for geospatial data management.",
      "Delivers faster, cost-effective, and sustainable hydropower plant designs through AI-driven innovation."
    ],
    tags: [
      {
        name: "gan",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: hydro,
    source_code_link: "https://github.com/",
  },
  {
    name: "Developing a Robust Hydraulic Transient Analysis Model for Hydropower and Pumped Storage Schemes ",
    points: [
      "Developed a hydraulic transient analysis model to address pressure surge risks in hydropower systems.",
      "Built AI models for real-time monitoring using Python, TensorFlow, and PyTorch.",
      "Performed 3D simulations with ANSYS and SimScale; designed water hammer avoidance in MATLAB.",
      "Created a mobile app with React and JavaScript for monitoring and ran this app using expo.",
      "Managed and cleaned a large dataset (~5GB) in MySQL, focusing on inflow/outflow rates, pressure capacity, and guide vane behavior.",
      "Visualized insights using Power BI; solution enhances safety, reduces downtime, and provides accurate transient analysis."
    ],
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "powerbi",
        color: "green-text-gradient",
      },
      {
        name: "react-expo",
        color: "pink-text-gradient",
      },
    ],
    image: hydraulic,
    source_code_link: "https://github.com/",
  },
  {
    name: "Traffix – Copfriendly E Seva",
    points: [
      "Developed a digital e-Seva platform titled 'Cop Friendly App – E Seva' to support traffic police, RTO, and emergency responders with real-time operations and violation tracking.",
      "Integrated Generative AI (CopGPT) for assisting on-ground law enforcement with automated responses and insights.",
      "Built both web and mobile applications; deployed the web version via Vercel for seamless access.",
      "Led the front-end development using React, React Router, Tailwind CSS, Axios, and React Hook Form, ensuring responsive and intuitive UI.",
      "Collaborated with backend and AI teams to integrate secure APIs, JWT-based authentication, file uploads (Multer), and OpenAI services.",
      "Used Node.js and Express.js for building scalable backend APIs with bcrypt for password security and CORS for secure cross-origin requests.",
      "Ensured smooth data flow and app performance through close integration between UI and backend logic."
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: traffix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stress Relief and Anxiety Therapy using AI",
    points: [
      "Developed an AI-powered therapeutic system to address the lack of accessible and effective therapy for anxiety and stress.",
      "Built a personalized chatbot model using Hugging Face Transformers, Langchain, and Huggingface CLI, referencing LLaMA GitHub documentation and prototyped in Jupyter Notebook.",
      "Created a mobile app using React Native, developed through the React-Expo client, with the backend deployed on Render.",
      "Integrated wellness modules including audio therapy, yoga, reading, music, laughter exercises, guided therapy sessions, and doctor consultation.",
      "Delivered a comprehensive AI therapy mobile app running on Expo, offering personalized support and multi-modal mental health tools."
    ],
    tags: [
      {
        name: "huggingface",
        color: "blue-text-gradient",
      },
      {
        name: "llama",
        color: "green-text-gradient",
      },
      {
        name: "react-expo",
        color: "pink-text-gradient",
      },
    ],
    image: stress,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
