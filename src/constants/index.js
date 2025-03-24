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
    sql,
    git,
    figma,
    docker,
    jupyter,
    tableau,
    python,
    django,
    meta,
    starbucks,
    tesla,
    shopify,
    somul,
    bzzworld,
    confidential,
    mest,
    carrent,
    jobit,
    tripguide,
    threejs,
    electricity,
    newprompt,
    ab,
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
      title: "Web",
      icon: web,
    },
    {
      title: "Data Science",
      icon: mobile,
    },
    {
      title: "Django",
      icon: backend,
    },
    {
      title: "AI Researcher",
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
      name: "django",
      icon: django,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      icon: tableau,
    },
    {
      name: "docker",
      icon: jupyter,
    },
  ];

  const experiences = [
    {
      title: "Data Manager",
      company_name: "Bzzworld",
      icon: bzzworld,
      iconBg: "#383E56",
      date: "Jan 2020 - May 2021",
      points: [
        "Updating daily work activities into the database.",
        "Control the store activities to avoid misleading information.",
        "Write daily, weekly report then montly report to the manager.",
        "Collaborating with cross-functional teams including marketing and assistant manager for sales performance.",
      ],
    },
    {
      title: "Tech Co-founder",
      company_name: "SOMUL-Tech",
      icon: confidential,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - May 2022",
      points: [
        "Developing web-base and excel Systems for small businesses and Schools.",
        "Printing high-quality documents and posts.",
        "Making and editing event media using adobe master collection...",
      ],
    },
    {
      title: "IT Support",
      company_name: "Zanner High-School",
      icon: somul,
      iconBg: "#383E56",
      date: "September 2021 - November 2021",
      points: [
        "Build and maintain shool systems",
        "Develop Transcript automation system",
        "Train teachers and secretaries on how to use the system",
      ],
    },
    {
      title: "Software Entrepreneur",
      company_name: "MEST",
      icon: mest,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Present",
      points: [
        "Developing and maintaining web and mobile applications using modern programming languages / framework",
        "Collaborating with cross-functional tallents (co-founders, colleague EITs) including designers, product managers, and other developers.",
        "Build Cutting-edge (including AI systems) software solutions that solve real-world problems.",
        "Ship products to production as business.",
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "5 Ways Of Data Acquisition In Python. 'You can be surprised'. Being able to find the data that you want for your analysis",
      name: "Kitwana",
      designation: "Blog",
      company: "Python",
      image: "https://cdn.icon-icons.com/icons2/3041/PNG/512/medium_logo_icon_189223.png",
      link: "https://medium.com/@rodriguekitweze/5-ways-of-data-acquisition-in-python-you-can-be-surprised-c5e98ae0167b",
    },
    {
      testimonial:
        "Regression Analysis (Understand it better). This method that allows us to examine the relationship between one or more explanatory variables",
      name: "Kitwana",
      designation: "Blog",
      company: "Statistics",
      image: "https://cdn.icon-icons.com/icons2/3041/PNG/512/medium_logo_icon_189223.png",
      link: "https://medium.com/@rodriguekitweze/regression-analysis-understand-it-better-7ddb1906a243",
    },
    {
      testimonial:
        "Exploratory Data Analysis Using Python. EDA can help you find patterns, outliers, correlations and other insights from your data",
      name: "Kitwana",
      designation: "Blog",
      company: "Python",
      image: "https://cdn.icon-icons.com/icons2/3041/PNG/512/medium_logo_icon_189223.png",
      link: "https://medium.com/@rodriguekitweze/practical-exploratory-data-analysis-fb93abf6b26e",
    },
  ];

  const projects = [
    {
      name: "Electicity Consumption",
      description:
        "This is a dashboard story project. I designed this interactive story to expplain how different category of people had access to electricity over the years. The last slide in this story is a dashboard giving you the right to explore it the way you feel.",
      tags: [
        {
          name: "Tebleau",
          color: "blue-text-gradient",
        },
        {
          name: "Flourish",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: electricity,
      source_code_link: "https://public.tableau.com/app/profile/kitwana.shebabetsi.ezechiel/viz/Animate_a_datastory_Midterm_Project/Energy_story",
    },
    {
      name: "AI new prompt",
      description:
        "Web application that enables users to search for latest news from top article posters like BBC, CNN, BBC, WIRED using voice recognition API from allan-ai. You can use a voice prompt after clicking the alan button and receive results from the news API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "alan-ai",
          color: "pink-text-gradient",
        },
      ],
      image: newprompt,
      source_code_link: "https://github.com/KitwanaSh/ai-news-prompt",
    },
    {
      name: "Predicitve Model",
      description:
        "This project is a predictive model that predicts when a machine in a house will break down. The model is trained using a dataset that contains the machine's placement, sound, and other features.",
      tags: [
        {
          name: "jupyter notebook",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: ab,
      source_code_link: "https://github.com/KitwanaSh/Data-Analyst-Projects/tree/main/2_Analyze_AB_test_resutls",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
