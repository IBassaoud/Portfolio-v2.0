import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    angular,
    firebase,
    mysql,
    php,
    symfony,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    beweb,
    inqompass,
    auditors,
    mvp_roadmap,
    inqompass_mcq,
    pizza_app,
    blog,
    tour_of_heroes,
    symfurious,
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
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web & Web mobile Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
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
      name: "PHP",
      icon: php,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Symfony",
      icon: symfony,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer - Freelance",
      company_name: "InQompass",
      icon: inqompass,
      iconBg: "#080808",
      date: "May 2023 - May 2023",
      points: [
        "Development and maintenance of a SaaS planning product.",
        "Implementation of features to streamline the sharing of real-time automatic updates.",
        "Developed an interface with interactive features like animations, drag and drop, and a newsletter for roadmap updates",
        "Implementation of Firebase Angular Fire as a data access component.",
      ],
    },
    {
      title: "Frontend Developer - Angular",
      company_name: "InQompass",
      icon: inqompass,
      iconBg: "#080808",
      date: "December 2022 - Feb 2023",
      points: [
        "Development of the frontend of a web and mobile application with separate admin and recruiter user interfaces.",
        "Creation of a responsive and intuitive user interface for the web application that adapts to different screen sizes.",
        "Design an engaging user interface with interactive features, including animated multiple-choice questions (MCQs), that enhance the user experience.",
        "Integrate Firestore components for efficient and secure data access across the application.",
      ],
    },
    {
      title: "Fullstack Developer - Apprentice",
      company_name: "BeWeb",
      icon: beweb,
      iconBg: "#E6DEDD",
      date: "May 2022 - March 2023",
      points: [
        "Algorithms and software development fundamentals.",
        "Designing a website and developing a user interface, taking into consideration server-side management and security recommendations.",
        "Making sure that the design of the website is responsive and compatible across different web browsers.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Accountant",
      company_name: "Auditors Consulting",
      icon: auditors,
      iconBg: "#FFF",
      date: "September 2020- January 2021",
      points: [
        "Maintained accurate accounts and financial records by preparing and submitting monthly/quarterly VAT returns for clients.",
        "Managed bookkeeping tasks such as posting receipts, payments, and reconciling bank accounts to ensure accurate financial records.",
        "Demonstrated expertise in accounting principles by accurately preparing and posting various month-end journal entries and reconciling bank accounts.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MVP Roadmap",
      description:
        "The application serves as a project planning and management tool. It enables teams to collaborate effectively by centralizing tasks, deadlines, and key milestones.",
      tags: [
        {
          name: "Angular",
          color: "red-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "GithubPages",
          color: "pink-text-gradient",
        },
      ],
      image: mvp_roadmap,
      source_code_link: "https://github.com/IBassaoud/mvp-roadmap",
    },
    {
      name: "InQompass MCQ",
      description:
        "InQompass MCQ is a digital tool for effectively evaluating candidate skills in recruitment. It enhances hiring quality and efficiency by focusing on actual abilities, not just resumes, through a structured questionnaire.",
      tags: [
        {
          name: "Angular",
          color: "red-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
      ],
      image: inqompass_mcq,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pizza mobile app",
      description:
        "A customizable and interactive pizza ordering application. Users can customize their pizza by choosing the size and selecting their desired toppings. Each selection dynamically updates the total cost.",
      tags: [
        {
          name: "Ionic",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
      ],
      image: pizza_app,
      source_code_link: "https://github.com/IBassaoud/pizza-mobile-app-Ionic",
    },
    {
      name: "Blog application",
      description:
        "This Blog app is a streamlined blogging platform. It provides real-time access to the latest posts on the homepage, a comprehensive listing of all articles in the 'posts' section, and a user-friendly interface for registered users to craft new blog posts.",
      tags: [
        {
          name: "PHP",
          color: "purple-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "yellow-text-gradient",
        },
        {
          name: "PhpMyAdmin",
          color: "yellow-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/IBassaoud/Blog-POO-PHP",
    },
    {
      name: "Tour of Heroes",
      description:
        `The "Tour of Heroes" is a step-by-step guide designed to introduce developers to Angular by building a "Heroes" application. The application displays a list of heroes, allowing users to select a hero, view the hero's details, and edit the hero's name.`,
      tags: [
        {
          name: "Angular",
          color: "red-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
      ],
      image: tour_of_heroes,
      source_code_link: "https://github.com/IBassaoud/Heroes-app-Angular",
    },
    {
      name: "Project Symfurious",
      description:
        "Symfurious is an interactive platform designed for orchestrating car racing events. It streamlines the process of driver registration, race scheduling, and real-time results tracking.",
      tags: [
        {
          name: "PHP",
          color: "purple-text-gradient",
        },
        {
          name: "Symfony",
          color: "gray-text-gradient",
        },
        {
          name: "MySql",
          color: "yellow-text-gradient",
        },
        {
          name: "PhpMyAdmin",
          color: "yellow-text-gradient",
        },
      ],
      image: symfurious,
      source_code_link: "https://github.com/IBassaoud/Symfony-project_symfurious",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  