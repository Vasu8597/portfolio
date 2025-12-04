export const projectsData = [
  {
    id: 1,
    title: "ITYPE",
    subtitle: "School Management System",
    description: "Comprehensive school management platform for managing students, teachers, classes, attendance, and academic records. Built with modern UI components and complex form validations.",
    category: "Education",
    technologies: ["React.js", "Redux", "Formik", "Yup", "Material-UI", "CSS"],
    features: [
      "Student and teacher management",
      "Attendance tracking system",
      "Grade and report card generation",
      "Complex form validations with Formik and Yup",
      "Role-based access control",
      "Real-time notifications"
    ],
    highlights: "Managed large datasets with optimized rendering and state management"
  },
  {
    id: 2,
    title: "RGIC",
    subtitle: "Data Analytics Platform",
    description: "Real-time data analytics dashboard for business intelligence and reporting. Integrated WebSocket connections for live data updates and interactive visualizations.",
    category: "Analytics",
    technologies: ["React.js", "Redux", "Bootstrap", "Socket.io", "Charts"],
    features: [
      "Real-time data visualization",
      "WebSocket integration for live updates",
      "Interactive charts and graphs",
      "Custom dashboard builder",
      "Data export functionality",
      "Advanced filtering and search"
    ],
    highlights: "Implemented real-time data synchronization using Socket.io"
  },
  {
    id: 3,
    title: "BIOCON",
    subtitle: "Pharmaceutical UI Platform",
    description: "Modern user interface for pharmaceutical data management and workflow automation. Features complex forms, data validation, and responsive design.",
    category: "Healthcare",
    technologies: ["React.js", "Redux", "Formik", "Yup", "Material-UI"],
    features: [
      "Pharmaceutical data management",
      "Complex multi-step forms",
      "Document management system",
      "Compliance tracking",
      "Responsive design for all devices",
      "Advanced search and filtering"
    ],
    highlights: "Built reusable form components with comprehensive validation"
  },
  {
    id: 4,
    title: "Trunish Pharma",
    subtitle: "Inventory Management System",
    description: "Next.js-based inventory management system for pharmaceutical products. Features real-time stock tracking, order management, and analytics dashboard.",
    category: "Business",
    technologies: ["Next.js", "Redux", "Formik", "Yup", "Tailwind CSS"],
    features: [
      "Real-time inventory tracking",
      "Order management workflow",
      "Stock alerts and notifications",
      "Analytics and reporting",
      "Multi-location support",
      "Barcode scanning integration"
    ],
    highlights: "Leveraged Next.js App Router for optimal performance and SEO"
  },
  {
    id: 5,
    title: "BOM",
    subtitle: "Business Operations Management",
    description: "Comprehensive business operations platform for managing workflows, tasks, and team collaboration. Built with scalable architecture and modern UI patterns.",
    category: "Business",
    technologies: ["React.js", "Redux", "Formik", "Material-UI"],
    features: [
      "Workflow automation",
      "Task management system",
      "Team collaboration tools",
      "Document sharing",
      "Activity tracking",
      "Custom reporting"
    ],
    highlights: "Implemented complex state management for multi-user workflows"
  },
  {
  id: 6,
  title: "Reside",
  subtitle: "Property Buy, Sell, Rent Platform",
  description: "A comprehensive real estate platform for buying, selling, and renting properties. Users can list their properties, explore available listings, and connect with agents seamlessly.",
  category: "Real Estate",
  technologies: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Formik", "Yup"],
  features: [
    "Property listing for buy, sell, and rent",
    "Agent and user roles with role-based access",
    "Search and filter properties",
    "Property details with images and specifications",
    "Secure contact and inquiry system",
    "Responsive design for web and mobile"
  ],
  highlights: "Built a scalable real estate platform with complex forms and role-based access"
}
];


export const projectCategories = [
  "All",
  ...new Set(projectsData.map(project => project.category))
];
