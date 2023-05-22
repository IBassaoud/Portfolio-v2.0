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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    beweb,
    inqompass,
    auditors,
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
    // {
    //   name: "PHP",
    //   icon: php,
    // },
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
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  