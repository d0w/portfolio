import {
  pmready,
    ourtube,
    svlearn,
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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    }

  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Computer Engineering at Boston University",
      icon: mobile,
    },
    {
      title: "AI Researcher",
      icon: backend,
    },
    {
      title: "Artist",
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
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "AI Researcher",
      company_name: "University of California, Riverside",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Did stuff",
        "did other stuff",
        "made this", 
        "made that"
      ],
    },
    {
      title: "Digital Media Lead",
      company_name: "PMReady",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Did stuff",
        "did other stuff",
        "made this", 
        "made that"
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Recto",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Did stuff",
        "did other stuff",
        "made this", 
        "made that"
      ],
    },
    
    
  ];
  
  const testimonials = [
  ];
  
  const projects = [
    {
      name: "SV-Learn",
      description:
        "Random description cause im lazy rn",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "orange-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
        {
          name: "tensorflow",
          color: "orange-text-gradient",
        }
      ],
      image: svlearn,
      source_code_link: "https://ieeexplore.ieee.org/document/10031050",
    },
    {
      name: "OurTube",
      description:
        "Youtube clone thing",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "react-redux",
          color: "blue-text-gradient"
        },
        {
          name: "node",
          color: "green-text-gradient"
        }
      ],
      image: ourtube,
      source_code_link: "https://github.com/owenm-26/Ourtube",
    },
    {
      name: "PMReady Landing Site",
      description:
        "Site for pmready",
      tags: [
        {
          name: "nextjs",
          color: "orange-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: pmready,
      source_code_link: "https://github.com/PMReady/website2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };