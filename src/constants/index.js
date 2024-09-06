import {
  linkedin,
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
    github,
    azure,
    sql,
    coolgreenpower,
    ucr
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Computer Engineering at Boston University",
      icon: mobile,
    },
    {
      title: "Deep Learning Researcher",
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
    },
    {
      name: "azure",
      icon: azure
    },
    {
      name: "sql",
      icon: sql
    },
    {
      name: "+ many more"
    },

  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "CoolGreenPower LLC",
      icon: coolgreenpower,
      iconBg: "#383E56",
      date: "May 2023 - August 2024",
      points: [
        "Initiated the deployment of a mobile application, engineered using the MERN stack, enabling property managers to monitor their assets effectively through a network of numerous IoT sensors.",
        "Developed and maintained a secure ExpressJS REST API and established a continuous integration pipeline to deploy updates to an Azure environment, facilitating an agile development workflow.",
        "Captured and managed data from hundreds of IoT devices from over 50 establishments through the use of Azure functions, pipelining the data into deep learning models to generate alerts for the end user."
      ],
    },
    {
      title: "Deep Learning Researcher",
      company_name: "University of California, Riverside",
      icon: ucr,
      iconBg: "#383E56",
      date: "September 2021 - September 2023",
      points: [
        "Conducted an extensive review of research papers and modified more than 5000 lines of Python code to develop novel techniques for enhancing the efficiency of convolutional neural networks.",
        "Designed and implemented a method to enhance the efficiency of singular value decomposition with machine learning models by 35% through innovative processing of image and tabular data."
      ],
    },
    {
      title: "Digital Media Lead",
      company_name: "PMReady",
      icon: github,
      iconBg: "#383E56",
      date: "January 2023 - Present",
      points: [
        "Utilized a combination of product design and project management expertise to provide strategic advice to three product teams on conducting user interviews, market research, and creating successful prototypes.",
        "Engineered a responsive and user-friendly web application using ReactJS, featuring real-time updates on events through the Google Calendar API, and general information for 100 monthly users."
      ],
    },
    {
      title: "Impact Team Member",
      company_name: "Hack4Impact",
      icon: github,
      iconBg: "#383E56",
      date: "January 2023 - Present",
      points: [
        "Worked closely with peers to design and develop 4 small web-applications such as Yelp clones using NodeJS, ExpressJS, MongoDB, and React, showcasing strong collaboration and technical skills.",
        "Conceptualized and developed a user-friendly trash-management application enabling clients to connect with over 1,000 freelance transporters, providing an eco-friendly solution for disposing of unwanted items."
      ],
    },

    
    
  ];
  
  const testimonials = [
  ];
  
  const projects = [
    {
      name: "SV-Learn",
      description:
        "Using neural networks to enhance the efficiency of the singular value decomposition",
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
        "A simple Youtube clone",
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
      source_code_link: "https://github.com/d0w/ourtube",
    },
    {
      name: "PMReady Landing Site",
      description:
        "Landing page for PMReady",
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

  const socials = [
    {
      id: "github",
      name: "Github",
      link: "https://github.com/d0w",
      icon: github,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/xuderek04/",
      icon: linkedin,
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects, socials };