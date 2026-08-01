export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  focusAreas: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export const PORTFOLIO_DATA = {
  hero: {
    greeting: "Hi, I'm Aditya.",
    title: "Software Engineer | AI & Full-Stack Developer",
    subtitles: ["Software Engineer", "AI & Full-Stack Developer", "Automation Specialist"],
    description:
      "Full-Stack & AI Engineer based in Berlin specializing in Python, TypeScript, React, Next.js, and PostgreSQL. Experienced in engineering production web applications, automated Selenium workflows, and LLM API integrations.",
    location: "Berlin, Germany",
  },
  about: {
    institution: "University of Europe for Applied Sciences",
    degree: "B.Sc. Software Engineering",
    period: "2026 — Present",
    location: "Berlin, Germany",
    bio: "I'm a Software Engineering student at the University of Europe for Applied Sciences in Berlin. I specialize in building production-grade web applications, AI systems, and automation software using TypeScript, Python, Next.js, React, and PostgreSQL.\n\nAs Co-Founder & Full-Stack Engineer at SimpleGerman, I architected and deployed our AI-driven language learning platform end-to-end, managing frontend UX, serverless API routes, PostgreSQL schema design, and cloud infrastructure.",
    tagline: "Building scalable web software, intelligent AI systems, and robust automation.",
  },
  experience: [
    {
      period: "Apr 2026 — Present",
      role: "Co-Founder & Full-Stack Engineer",
      company: "SimpleGerman",
      location: "Berlin, Germany (Remote)",
      summary: "Architected and deployed an AI-driven language learning web platform.",
      highlights: [
        "Architected and deployed an AI-driven language learning web platform using Next.js, TypeScript, Supabase, and PostgreSQL.",
        "Designed a flexible content engine enabling structured grammar modules, story modes, and dynamic quiz generation.",
        "Built real-time learning flows with client-side state management to track progress and deliver instant user feedback.",
        "Engineered PostgreSQL database schemas and serverless API routes for user session management and data persistence.",
      ],
    },
  ] as Experience[],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "Zustand", "Context API", "HTML/CSS"],
    },
    {
      category: "Backend & Databases",
      items: ["PostgreSQL", "Supabase", "Flask", "Django", "RESTful APIs", "Relational Schema Design"],
    },
    {
      category: "AI & Developer Tools",
      items: ["Google Gemini API", "Scikit-learn", "Pandas", "Selenium WebDriver", "Git", "GitHub", "Docker", "Vercel"],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "ai-whatsapp-chatbot",
      title: "AI WhatsApp Chatbot Automation",
      category: "Automation & AI",
      subtitle: "Selenium Workflows & Gemini API Integration",
      description:
        "Python automation framework using Selenium WebDriver to programmatically inspect DOM state, extract WhatsApp Web messages, and dispatch context-aware AI responses using Google Gemini API.",
      technologies: ["Python", "Selenium WebDriver", "Google Gemini API", "REST APIs", "Automation"],
      githubUrl: "https://github.com/Aadi-code186/AI-whatsapp-chatbot",
      liveUrl: "https://github.com/Aadi-code186/AI-whatsapp-chatbot",
      year: "2025",
    },
    {
      id: "ai-habit-tracker",
      title: "AI-Powered Micro Habit Tracker",
      category: "Machine Learning & Web App",
      subtitle: "Predictive Analytics & Behavioral Insights",
      description:
        "Web application calculating streak analytics and habit adherence metrics with predictive data pipelines built in Python, Pandas, Scikit-learn, and Gemini AI.",
      technologies: ["Python", "React", "Scikit-learn", "Pandas", "Gemini API", "Altair"],
      githubUrl: "https://github.com/Aadi-code186/AI-Powered-Micro-Habit-Tracker",
      liveUrl: "https://github.com/Aadi-code186/AI-Powered-Micro-Habit-Tracker",
      year: "2025",
    },
    {
      id: "website-time-tracker",
      title: "Website Dwell Time Extension",
      category: "Browser Extension",
      subtitle: "Real-Time Focus & Usage Analytics",
      description:
        "Cross-browser extension monitoring domain-level dwell time in real time using JavaScript background listeners and rendering real-time activity dashboards with Chart.js.",
      technologies: ["JavaScript", "TypeScript", "Chrome Extension API", "Chart.js", "HTML/CSS"],
      githubUrl: "https://github.com/Aadi-code186/Website-Time-Tracker",
      liveUrl: "https://github.com/Aadi-code186/Website-Time-Tracker",
      year: "2025",
    },
    {
      id: "vani-ai-assistant",
      title: "Vani — Voice-Activated AI Assistant",
      category: "Voice & NLP Automation",
      subtitle: "Desktop Virtual Assistant",
      description:
        "Python voice assistant converting spoken audio commands into execution workflows using SpeechRecognition, NLP primitives, Gemini API, and weather/news REST APIs.",
      technologies: ["Python", "Google Gemini API", "SpeechRecognition", "REST APIs", "NLP"],
      githubUrl: "https://github.com/Aadi-code186/Vani-your-own-personal-assistant",
      liveUrl: "https://github.com/Aadi-code186/Vani-your-own-personal-assistant",
      year: "2025",
    },
  ] as Project[],
  education: [
    {
      institution: "University of Europe for Applied Sciences",
      degree: "B.Sc. Software Engineering",
      period: "Mar 2026 — Present",
      location: "Potsdam / Berlin, Germany",
      focusAreas: [
        "Software Architecture",
        "Algorithms & Data Structures",
        "Database Systems",
        "Web Engineering",
      ],
    },
    {
      institution: "IU International University of Applied Sciences",
      degree: "Pathway Programme in Computer Science (Studienkolleg)",
      period: "Apr 2025 — Jan 2026",
      location: "Berlin, Germany",
      focusAreas: [
        "Computer Science Fundamentals",
        "Discrete Mathematics",
        "Linear Algebra",
        "Software Logic",
      ],
    },
  ] as Education[],
  certifications: [
    { name: "CS50x: Introduction to Computer Science", issuer: "Harvard University", year: "2025" },
    { name: "CS50p: Programming with Python", issuer: "Harvard University", year: "2025" },
    { name: "Technology Job Simulation (Software Engineering)", issuer: "Deloitte Australia (Forage)", year: "2025" },
    { name: "TestAS (STEM Module)", issuer: "g.a.s.t. Germany", year: "2025" },
    { name: "Blockchain Basics", issuer: "Cyfrin Updraft", year: "2025" },
  ] as Certification[],
  contact: {
    heading: "Let's build something together.",
    description:
      "I'm currently looking for a Working Student Software Engineer position in Berlin.\n\nWhether you have a part-time role, internship, or technical collaboration, I'd love to hear from you.",
    email: "adityagermany186@gmail.com",
    github: "https://github.com/Aadi-code186",
    githubHandle: "github.com/Aadi-code186",
    linkedin: "https://www.linkedin.com/in/aditya-parasher/",
    linkedinHandle: "linkedin.com/in/aditya-parasher",
    location: "Berlin, Germany",
  },
  footerTagline: "Building scalable web software, intelligent AI systems, and robust automation.",
};
