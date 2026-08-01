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
    title: "Software Engineering Student",
    subtitles: ["Software Engineering Student", "Full-Stack Developer", "AI Builder"],
    description:
      "I design and build modern web applications, AI-powered tools, and automation software using TypeScript, Python, React, Next.js, and cloud technologies. Currently based in Berlin and actively looking for a part-time Software Engineering position.",
    location: "Berlin, Germany",
  },
  about: {
    institution: "University of Europe for Applied Sciences",
    degree: "B.Sc. Software Engineering",
    period: "2026 — Present",
    location: "Berlin, Germany",
    bio: "I'm a Software Engineering student at the University of Europe for Applied Sciences in Berlin. I enjoy building products that solve real problems—from AI-powered language learning platforms to browser extensions and automation tools. I focus on writing clean, maintainable code and creating intuitive user experiences.\n\nI'm currently co-founding SimpleGerman, where I'm responsible for the full-stack architecture, frontend development, backend services, and database design.",
    tagline: "Building thoughtful software with clean code, modern technologies, and AI.",
  },
  experience: [
    {
      period: "2026 — Present",
      role: "Co-Founder • Full-Stack Engineer",
      company: "SimpleGerman",
      location: "Berlin, Germany",
      summary: "Building an AI-powered language learning platform.",
      highlights: [
        "Architected a full-stack application using Next.js, TypeScript, Supabase and PostgreSQL.",
        "Developed interactive learning flows with real-time progress tracking.",
        "Designed a scalable content engine for lessons, quizzes and story mode.",
        "Leading frontend, backend, database design and user experience.",
      ],
    },
  ] as Experience[],
  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      category: "Backend",
      items: ["Python", "Flask", "Django", "REST APIs", "SQL", "PostgreSQL"],
    },
    {
      category: "AI & Data",
      items: ["Gemini API", "Scikit-learn", "Pandas", "Machine Learning"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "Docker", "GitLab", "Selenium", "Vercel"],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "simple-german",
      title: "SimpleGerman",
      category: "Full-Stack AI Platform",
      subtitle: "AI Language Learning Platform",
      description:
        "An AI-powered language learning platform featuring structured lessons, story mode, quizzes, and real-time learning progress.",
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Gemini API"],
      githubUrl: "https://github.com/Aadi-code186/simple-german",
      liveUrl: "https://simplegerman.de",
      year: "2026",
    },
    {
      id: "ai-whatsapp-chatbot",
      title: "AI WhatsApp Chatbot",
      category: "Automation & AI",
      subtitle: "Selenium Workflows & Analytics",
      description:
        "Python automation tool that extracts messages, detects new conversations, timestamps chats, and automates WhatsApp Web workflows using Selenium.",
      technologies: ["Python", "Selenium", "Gemini API", "Automation", "REST APIs"],
      githubUrl: "https://github.com/Aadi-code186/ai-whatsapp-chatbot",
      liveUrl: "https://github.com/Aadi-code186/ai-whatsapp-chatbot",
      year: "2025",
    },
    {
      id: "website-time-tracker",
      title: "Website Time Tracker",
      category: "Browser Extension",
      subtitle: "Productivity & Analytics",
      description:
        "A browser extension that tracks website usage, visualizes browsing habits, and helps users reduce distractions through real-time analytics.",
      technologies: ["JavaScript", "TypeScript", "HTML/CSS", "Chrome Extension API", "Chart.js"],
      githubUrl: "https://github.com/Aadi-code186/website-time-tracker",
      liveUrl: "https://github.com/Aadi-code186/website-time-tracker",
      year: "2025",
    },
    {
      id: "vani-ai-assistant",
      title: "Vani AI Assistant",
      category: "Voice & NLP Automation",
      subtitle: "Desktop Virtual Assistant",
      description:
        "A Python-based desktop assistant integrating Gemini AI, weather APIs, and news services to automate everyday tasks through natural language commands.",
      technologies: ["Python", "Gemini API", "SpeechRecognition", "REST APIs", "Automation"],
      githubUrl: "https://github.com/Aadi-code186/vani-ai-assistant",
      liveUrl: "https://github.com/Aadi-code186/vani-ai-assistant",
      year: "2025",
    },
    {
      id: "ai-habit-tracker",
      title: "AI Habit Tracker",
      category: "Machine Learning & Web App",
      subtitle: "Predictive Behavior Analytics",
      description:
        "An intelligent habit tracking application using machine learning and Gemini AI to generate personalized recommendations and predictive habit analytics.",
      technologies: ["React", "Python", "Scikit-learn", "Pandas", "Gemini API", "Tailwind CSS"],
      githubUrl: "https://github.com/Aadi-code186/ai-habit-tracker",
      liveUrl: "https://github.com/Aadi-code186/ai-habit-tracker",
      year: "2024",
    },
  ] as Project[],
  education: {
    institution: "University of Europe for Applied Sciences",
    degree: "B.Sc. Software Engineering",
    period: "2026 — Present",
    location: "Berlin, Germany",
    focusAreas: [
      "Software Engineering",
      "Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "Distributed Systems",
      "Data Analytics",
    ],
  } as Education,
  certifications: [
    { name: "Harvard CS50x", issuer: "Harvard University" },
    { name: "Harvard CS50P", issuer: "Harvard University" },
    { name: "Cyfrin Blockchain Basics", issuer: "Cyfrin Updraft" },
    { name: "TestAS", issuer: "TestAS Germany" },
  ] as Certification[],
  contact: {
    heading: "Let's build something together.",
    description:
      "I'm currently looking for a part-time Software Engineering opportunity in Berlin.\n\nWhether you have an internship, part-time role, or an exciting project, I'd love to hear from you.",
    email: "adityagermany186@gmail.com",
    github: "https://github.com/Aadi-code186",
    githubHandle: "github.com/Aadi-code186",
    linkedin: "https://www.linkedin.com/in/aditya-parasher/",
    linkedinHandle: "linkedin.com/in/aditya-parasher/",
    location: "Berlin, Germany",
  },
  footerTagline: "Building thoughtful software with clean code, modern technologies, and AI.",
};
