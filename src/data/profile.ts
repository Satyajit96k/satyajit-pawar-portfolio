import type { NavItem, SkillCategory, Project, Experience } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  greeting: 'Hi, I\'m',
  name: 'Satyajit Pawar',
  title: 'AI Software Developer · Vibe Coder · Full Stack Engineer',
  subtitle:
    'I vibe-code full-stack apps and AI systems using Claude Code, Cursor, and cutting-edge AI tools. From multi-agent architectures to production-grade React — I ship software at the speed of thought.',
  resumeUrl: '#',
};

export const ABOUT = {
  paragraphs: [
    'I\'m a vibe coder and AI Software Developer who builds at the intersection of software engineering and artificial intelligence. I leverage AI-powered tools like Claude Code, Cursor, ChatGPT, and GitHub Copilot to rapidly prototype, iterate, and ship production-ready solutions.',
    'At OM Intelligence, I build full-stack web applications and contribute to the AI Leela platform, implementing Generative AI modules and machine learning-based features. I\'ve designed multi-agent architectures — Super Agents orchestrating Domain Agents and Output Agents — for complex decision-making pipelines and automated business workflows.',
    'My approach is all about speed and quality — using AI tools to 10x my development velocity while maintaining clean architecture. From prompt engineering and workflow automation with n8n to cloud deployment, I treat AI as my pair-programming partner on every project.',
  ],
  highlights: [
    { label: 'M.Sc.', value: 'Industrial Mathematics & Computer Applications — Nowrosjee Wadia College, Pune' },
    { label: 'B.Sc.', value: 'Mathematics — Rajarshi Shahu College, Kolhapur (82%)' },
    { label: 'Location', value: 'Pune, India' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    skills: [
      'Large Language Models',
      'Multi-Agent Systems',
      'Prompt Engineering',
      'AI Automation',
      'Deep Learning',
      'Natural Language Processing',
      'Machine Learning',
      'Scikit-Learn',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Material UI',
      'REST APIs',
      'HTML5 / CSS3',
      'Responsive Design',
      'Vite',
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      'Python',
      'Django',
      'Flask',
      'REST APIs',
      'Core Java',
      'C',
      'SQL',
      'MySQL',
      'SQLite',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    title: 'AI-Powered Dev Tools',
    skills: [
      'Claude Code',
      'Cursor IDE',
      'ChatGPT',
      'GitHub Copilot',
      'Windsurf',
      'V0 by Vercel',
      'Bolt.new',
      'Vibe Coding',
    ],
  },
  {
    title: 'Automation & Tools',
    skills: [
      'n8n Workflow Automation',
      'Google Docs API',
      'Google Drive API',
      'Telegram Bot API',
      'Git & GitHub',
      'Cloud Deployment',
      'Agile / SDLC',
      'API Integration',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Agent System',
    description:
      'Developed a modular multi-agent AI framework for YouTube video summarization, automated business plan generation, and product comparison automation. Integrates Google APIs for document workflows and Telegram Bot for real-time user interaction.',
    tags: ['Python', 'LLMs', 'n8n', 'Google APIs', 'Telegram Bot', 'Multi-Agent'],
    highlights: [
      'Built modular AI agent framework for YouTube summarization and automated business plan generation',
      'Implemented product comparison automation with structured outputs for data-driven decisions',
      'Integrated Google Docs and Drive APIs for automated document creation, storage, and sharing',
      'Enabled real-time task execution through Telegram bot-based user interaction interface',
    ],
    github: 'https://github.com/Satyajit96k',
  },
  {
    title: 'MovieMojo',
    description:
      'A responsive movie discovery dashboard with city-based filtering, detailed movie pages, and profile management. Built with React, TypeScript, Material UI, and a Django backend — featuring real-time API integration and a custom-themed UI.',
    tags: ['React', 'TypeScript', 'Material UI', 'Django', 'REST APIs'],
    highlights: [
      'Built responsive movie dashboard with city-based filtering and intuitive UI',
      'Developed detailed movie pages and profile management features',
      'Integrated real-time movie APIs for dynamic content updates',
      'Optimized performance and ensured cross-browser compatibility',
    ],
    github: 'https://github.com/Satyajit96k',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full Stack Programmer',
    company: 'OM Intelligence',
    period: 'May 2025 – Present',
    description:
      'Building scalable full-stack web applications and AI-powered platforms using Python and React. Contributing to the AI Leela platform with Generative AI modules, automation workflows, and production-grade API integrations.',
    responsibilities: [
      'Developed and deployed scalable full-stack web applications with Python and React',
      'Contributed to AI Leela platform by implementing Generative AI modules and ML-based features',
      'Designed and deployed automation workflows using n8n, reducing manual effort by 40%',
      'Integrated Google Docs API, Google Drive API, and Telegram Bot API for document and messaging automation',
      'Collaborated with cross-functional teams to deliver cloud-ready, production-grade solutions',
    ],
  },
  {
    role: 'Research Intern',
    company: 'OM Intelligence',
    period: 'Feb 2025 – Apr 2025',
    description:
      'Built Python-based multi-agent systems for intelligent task automation. Designed modular agent architectures and conducted research on agentic AI workflows for autonomous decision-making.',
    responsibilities: [
      'Built Python-based multi-agent systems for intelligent task automation',
      'Designed modular Super Agent, Domain Agent, and Output Agent architectures for complex decision-making',
      'Enhanced prompt engineering strategies, improving LLM response accuracy by 25%',
      'Conducted research on agentic AI workflows for autonomous decision-making systems',
    ],
  },
  {
    role: 'Software Intern',
    company: 'Canspirit AI',
    period: 'May 2024 – Jul 2024',
    description:
      'Developed Python automation scripts and contributed to debugging and performance improvements across production codebases.',
    responsibilities: [
      'Developed Python automation scripts to optimize internal systems, reducing processing time by 30%',
      'Assisted in debugging, testing, and improving system performance across production codebases',
      'Collaborated with senior developers on code reviews and implementation best practices',
    ],
  },
];

export const STATS = [
  { value: 1, suffix: '+', label: 'Year Experience' },
  { value: 10, suffix: '+', label: 'Projects Built' },
  { value: 5, suffix: '+', label: 'AI Systems' },
  { value: 40, suffix: '+', label: 'Technologies' },
];

export const CONTACT = {
  heading: 'Let\'s Build Something Intelligent',
  description:
    'I\'m open to opportunities in AI development, Python development, and full-stack engineering. Whether it\'s an LLM-powered agent system or a production web app — let\'s talk.',
  phone: '7620528355',
  email: 'satya969696k@gmail.com',
  github: 'https://github.com/Satyajit96k',
  linkedin: 'https://www.linkedin.com/in/satyajit-pawar-533145237/',
};
