export const skillsData = {
  frontend: {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ]
  },
  stateManagement: {
    title: "State Management",
    skills: [
      "Redux Toolkit",
      "Context API",
      "React Hooks",
    ]
  },
  forms: {
    title: "Forms & Validation",
    skills: [
      "Formik",
      "Yup",
      "React Hook Form",
    ]
  },
  styling: {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Material-UI (MUI)",
      "Ant Design",
      "Bootstrap",
      "Styled Components",
      "CSS Modules",
    ]
  },
  api: {
    title: "API & Real-time",
    skills: [
      "REST APIs",
      "WebSockets",
      "Socket.io",
      "Axios",
    ]
  },
  testing: {
    title: "Testing",
    skills: [
      "Jest",
      "React Testing Library",
      "Unit Testing",
    ]
  },
  tools: {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "GitLab CI/CD",
      "Jira",
      "Asana",
      "Figma",
      "Postman",
    ]
  },
  deployment: {
    title: "Deployment",
    skills: [
      "Vercel",
      "Netlify",
      "CI/CD",
    ]
  },
};

export const allSkills = Object.values(skillsData).flatMap(category => category.skills);
