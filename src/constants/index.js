import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  gaiostudios,
  ricova,
  cocacola,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kotlin,
  flutter,
  jetpack,
  sequalize,
  postgre,
  gabriel,
  carolina,
  jorge,
  surfstore,
  pidrivers,
  weather,
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
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Mobile Developer",
    icon: web,
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
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Jetpack Compose",
    icon: jetpack,
  },
];

const experiences = [
  {
    title: "Android developer Jr",
    company_name: "Gaio Studios",
    icon: gaiostudios,
    iconBg: "#064928",
    date: "July 2022 - Jan 2023",
    points: [
      "Migrate code from Java to Kotlin in order to update the application and make it easier to develop.",
      "Fix bugs related to data consistency during code migration to develop a smooth, up-to-date, and functionalapplication.",
      "I updated the interface from Material 2 to Material 3, implementing the latest technologies developed tooff er the most up-to-date user interface possible.",
      "Update database to Jetpack Room.",
    ],
  },
  {
    title: "Operations Representative",
    company_name: "Ricova SAS",
    icon: ricova,
    iconBg: "#ffffff",
    date: "April 2021 - June 2022",
    points: [
      "Manage and control port operations carried out in the port of New York, providing assistance to shippingcompanies, ports and clients.",
      "Reduced the number of rejections submitted for delays in container reports by 100%.",
      "I implemented Follow ups in order to keep the data of the variables related to exports updated.",
      "Updated the information in the databases constantly anticipating risks in billing and export.",
    ],
  },
  {
    title: "Verifier",
    company_name: "Coca Cola FEMSA",
    icon: cocacola,
    iconBg: "#ff0018",
    date: "Jan 2020 - April 2021",
    points: [
      "Manage inventory data to control the fl ow of goods entering and exiting the company's CEDI, projectingproduct shortages and coordinating logistics.",
      "Lead inventory for GVF of Riohacha, increasing order fulfi llment from 83.48% to 97.21%.",
      "Make data-driven decisions to address shortages in CEDI Santa Marta.",
      "Maintaining inventory reliability of 99%.",
      "Create supply, delivery, and rejection indicators for retail products.",
    ],
  },
  {
    title: "Warehouse engineering internship",
    company_name: "Coca Cola FEMSA",
    icon: cocacola,
    iconBg: "#ff0018",
    date: "July 2019 - Jan 2020",
    points: [
      "Managed logistics performance indicators of western territory warehouses, analyzing data to optimizeadministrative resources for warehouse engineering.",
      "Develop a modern channel rejections log.",
      "Lead the weekly shrinkage committee.",
      "Analyze data for administrative reports.",
      "Generate a shrinkage indicator through data collection.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I want to highlight his fluency in UI/UX design. From the start, his insights on what an app should look and feel like have contributed massively to the mobile apps we're building. This skill will set him apart from the front-end developers that depend on pre-made designs to build interfaces.",
    name: "Gabriel Gonzalez",
    designation: "React Native Developer",
    company: "Mahinsoft Inc",
    image: gabriel,
  },
  {
    testimonial:
      "Always willing to help, learn new things, proactive and always results oriented.",
    name: "Carolina Tarrá",
    designation: "Inbound Succeed Coach",
    company: "HubSpot",
    image: carolina,
  },
  {
    testimonial:
      "I have known Kevin since we were kids. He has always proven to be a person of integrity, responsible, committed, friendly and always willing to collaborate. He is a person who can be personally trusted and who has a very grounded level of thinking and reasoning.",
    name: "Jorge Barros",
    designation: "Legal Support Paralegal",
    company: "Alexandra Lozano Immigration Law",
    image: jorge,
  },
];

const projects = [
  {
    name: "Surf Store",
    description:
      "Web application that allows users to search, filter and purchase surfing items. The application includes the ability to add reviews to products and an admin dashboard to manage sales and products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: surfstore,
    source_code_link: "https://github.com/Melanialassia/ClientSurf",
  },
  {
    name: "PI Drivers",
    description:
      "Web application that allows users to search and filter between different F1 drivers. It also allows to sort drivers, add new drivers and view the detail of each driver.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: pidrivers,
    source_code_link: "https://github.com/kevsalcedo/PI_Drivers",
  },
  {
    name: "Weather App",
    description:
      "Mobile application that allows users to get the weather report depending on where they are. It makes use of the OpenWeather API.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Retrofit",
        color: "green-text-gradient",
      },
      {
        name: "Material",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/kevsalcedo/WeatherApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
