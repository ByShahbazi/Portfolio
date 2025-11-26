import { Content, Skill } from './types';

export const skills: Skill[] = [
  { name: "Python", iconClass: "devicon-python-plain", color: "#3776AB" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain", color: "#F7DF1E" },
  { name: "Playwright", iconClass: "devicon-playwright-plain", color: "#2EAD33" }, 
  { name: "Cypress", iconClass: "devicon-cypressio-plain", color: "#17202C" },
  { name: "Selenium", iconClass: "devicon-selenium-original", color: "#43B02A" },
  { name: "Cucumber", iconClass: "devicon-cucumber-plain", color: "#23D96C" },
  { name: "K6", iconClass: "devicon-k6-original", color: "#7D64FF" }, 
  { name: "SQL", iconClass: "devicon-mysql-plain", color: "#4479A1" },
  { name: "Oracle", iconClass: "devicon-oracle-original", color: "#F80000" },
  { name: "Git", iconClass: "devicon-git-plain", color: "#F05032" },
  { name: "JIRA", iconClass: "devicon-jira-plain", color: "#0052CC" },
  { name: "Postman", iconClass: "devicon-postman-plain", color: "#FF6C37" },
];

export const content: Content = {
  personalInfo: {
    name: "Mohammad Mahdi Shahbazi",
    title: "QA Automation Engineer",
    phone: "+989109527383",
    email: "mmshahbazi85@gmail.com",
    birthYear: "2003",
    aboutTitle: "About Me",
    about: "I am a software testing and programming specialist with practical experience in modern testing frameworks and backend technologies. My technical skills include Python, JavaScript, Playwright, Cypress, Selenium, and K6 for automated and performance testing. I am also proficient in working with SQL and Oracle databases for data validation. In addition to technical expertise, I bring strong communication, problem-solving, and teamwork skills.",
    sloganPart1: "Think like user,",
    sloganPart2: "Act like",
    sloganHighlight: "Tester",
    roles: [
      "QA Automation Engineer",
      "Software Test Engineer",
      "3D Modeler"
    ],
    contactTitle: "Contact Me",
    contactSubtitle: "I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    rights: "All Rights Reserved."
  },
  skillsTitle: "Tech Stack",
  experienceTitle: "Experience & Education",
  workTitle: "Work Experience",
  educationTitle: "Education",
  experiences: [
    {
      id: 1,
      role: "QA Automation Engineer",
      company: "Mohaymen ICT Group",
      period: "2025 - Present",
      tasks: [
        "Performed end-to-end testing using Python and the Selenium framework.",
        "Conducted API and load testing with K6 in JavaScript.",
        "Designed test flow diagrams and state models to visualize testing logic.",
        "Authored test cases based on the Cucumber standard for BDD."
      ]
    },
    {
      id: 2,
      role: "QA Automation Engineer",
      company: "Rayvarz Co",
      period: "2024 - 2025",
      tasks: [
        "Developed and maintained end-to-end tests using Playwright.",
        "Improved test case structure in Xray.",
        "Experienced in writing clear, well-documented test cases and working with SQL Server."
      ]
    },
    {
      id: 3,
      role: "QA Automation Engineer",
      company: "NadinSoft",
      period: "2024 - 2024",
      tasks: [
        "Web application testing with a focus on BDD scenario design in Gherkin.",
        "Manual and automated testing using Cypress.",
        "API testing with Postman.",
        "Contributed to the redevelopment of the Codal system."
      ]
    }
  ],
  education: {
    degree: "Computer Engineering (Bachelor)",
    university: "Islamic Azad University",
    year: "2022 - 2026",
    description: "Currently studying - 4th Semester"
  },
  highSchool: {
      degree: "Diploma in Experimental Sciences",
      university: "Ohadi Public Exemplary High School",
      year: "2019 - 2022",
      description: ""
  }
};
