import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

/* -------------------- Middlewares -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- Static React Build -------------------- */
app.use(express.static(path.join(__dirname, 'dist')));

/* -------------------- Data -------------------- */
const skills = [
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
  { name: "Postman", iconClass: "devicon-postman-plain", color: "#FF6C37" }
];

const content = {
  personalInfo: {
    name: "Mohammad Mahdi Shahbazi",
    title: "QA Automation Engineer",
    phone: "+989109527383",
    email: "mmshahbazi85@gmail.com",
    birthYear: "2003",
    aboutTitle: "About Me",
    about:
      "I am a software testing and programming specialist with practical experience in modern testing frameworks and backend technologies. My technical skills include Python, JavaScript, Playwright, Cypress, Selenium, and K6 for automated and performance testing. I am also proficient in working with SQL and Oracle databases for data validation.",
    sloganPart1: "Think like user,",
    sloganPart2: "Act like",
    sloganHighlight: "Tester",
    roles: [
      "QA Automation Engineer",
      "Software Test Engineer",
      "3D Modeler"
    ],
    contactTitle: "Contact Me",
    contactSubtitle:
      "I am always open to discussing new projects, creative ideas or opportunities.",
    rights: "All Rights Reserved."
  },
  skills,
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
        "Performed end-to-end testing using Python and Selenium.",
        "Conducted API and load testing with K6.",
        "Designed test flow diagrams and state models.",
        "Authored BDD scenarios using Cucumber."
      ]
    },
    {
      id: 2,
      role: "QA Automation Engineer",
      company: "Rayvarz Co",
      period: "2024 - 2025",
      tasks: [
        "Developed end-to-end tests using Playwright.",
        "Improved test case structure in Xray.",
        "Worked with SQL Server for data validation."
      ]
    },
    {
      id: 3,
      role: "QA Automation Engineer",
      company: "NadinSoft",
      period: "2024",
      tasks: [
        "BDD scenario design in Gherkin.",
        "Manual and automated testing using Cypress.",
        "API testing with Postman.",
        "Contribution to Codal system redevelopment."
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

/* -------------------- API Routes -------------------- */
app.get('/api/portfolio', (req, res) => {
  setTimeout(() => {
    res.json(content);
  }, 800);
});

/* -------------------- SPA Fallback -------------------- */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/* -------------------- Start Server -------------------- */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
