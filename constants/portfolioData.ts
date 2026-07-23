export interface TechSkill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "Tools";
  iconName: string;
  level: number; // percentage
  color: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Cloud";
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  skills: string[];
  badgeColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "ANISH POKHAREL",
  role: "Full Stack Developer",
  location: "Nepal 🇳🇵",
  email: "pokharelanish512@gmail.com",
  github: "https://github.com/anish-karkee",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  bioShort: "I build modern, scalable and high-performance web applications with beautiful user experiences.",
  profileImage: "/images/Profile.png",
  resumeUrl: "/myresume.pdf",
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const CODE_EDITOR_DATA = {
  name: "Anish Pokharel",
  role: "Full Stack Developer",
  location: "Nepal",
  email: "pokharelanish512@gmail.com",
  languages: ["JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js"],
  database: ["MongoDB", "Firebase", "Prisma"],
  cloud: ["AWS", "Cloudflare", "Vercel", "Render"],
  philosophy: "Clean code. Real solutions. Endless curiosity.",
};

export const ABOUT_BULLETS = [
  {
    title: "High Performance Architecture",
    description: "Designing fast, responsive web systems with Next.js App Router, SSR, and edge optimizations.",
    icon: "Zap",
  },
  {
    title: "Full-Stack Versatility",
    description: "Seamlessly bridging frontend elegance with robust, secure backend microservices and databases.",
    icon: "Layers",
  },
  {
    title: "User-Centric Design",
    description: "Creating pixel-perfect interfaces with fluid micro-interactions, accessibility, and modern polish.",
    icon: "Sparkles",
  },
  {
    title: "Clean & Maintainable Code",
    description: "Writing strict TypeScript, modular components, clean architecture, and tested APIs.",
    icon: "Code",
  },
];

export const TECH_SKILLS: TechSkill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", iconName: "SiHtml5", level: 95, color: "#E34F26", description: "Semantic markup, Accessibility & SEO" },
  { name: "CSS3", category: "Frontend", iconName: "SiCss3", level: 92, color: "#1572B6", description: "Flexbox, Grid, Custom Properties & Keyframes" },
  { name: "JavaScript", category: "Frontend", iconName: "SiJavascript", level: 95, color: "#F7DF1E", description: "ES6+, Async/Await, Prototypes & Closures" },
  { name: "TypeScript", category: "Frontend", iconName: "SiTypescript", level: 90, color: "#3178C6", description: "Strict Typing, Generics & Utility Types" },
  { name: "React", category: "Frontend", iconName: "SiReact", level: 95, color: "#61DAFB", description: "Hooks, Context, State & Custom Component Design" },
  { name: "Next.js", category: "Frontend", iconName: "SiNextdotjs", level: 92, color: "#FFFFFF", description: "App Router, Server Components & Edge Functions" },
  { name: "Redux", category: "Frontend", iconName: "SiRedux", level: 85, color: "#764ABC", description: "RTK Query, Slice Management & Global State" },
  { name: "React Query", category: "Frontend", iconName: "SiReactquery", level: 88, color: "#FF4154", description: "Server State Fetching, Caching & Mutations" },
  { name: "React Hook Form", category: "Frontend", iconName: "SiReacthookform", level: 90, color: "#EC5990", description: "Schema Validation, Performance Forms & Zod" },
  { name: "React Router", category: "Frontend", iconName: "SiReactrouter", level: 90, color: "#CA4245", description: "Client-side Routing & Nested Layouts" },
  { name: "Tailwind CSS", category: "Frontend", iconName: "SiTailwindcss", level: 96, color: "#06B6D4", description: "Utility-first Design, Custom Themes & JIT" },
  { name: "Bootstrap", category: "Frontend", iconName: "SiBootstrap", level: 85, color: "#7952B3", description: "Grid System & Quick Prototyping" },
  { name: "SASS", category: "Frontend", iconName: "SiSass", level: 88, color: "#CC6699", description: "Mixins, Variables & Nested Styles" },
  { name: "Vite", category: "Frontend", iconName: "SiVite", level: 90, color: "#646CFF", description: "Lightning-fast Bundling & HMR" },

  // Backend
  { name: "Node.js", category: "Backend", iconName: "SiNodedotjs", level: 90, color: "#5FA04E", description: "Event Loop, Streams, REST & Async Processing" },
  { name: "Express.js", category: "Backend", iconName: "SiExpress", level: 90, color: "#FFFFFF", description: "REST APIs, Middleware Pipelines & Auth" },
  { name: "Nodemon", category: "Backend", iconName: "SiNodemon", level: 85, color: "#76D04B", description: "Development Workflow & Auto-reloading" },

  // Database
  { name: "MongoDB", category: "Database", iconName: "SiMongodb", level: 88, color: "#47A248", description: "Document Schemas, Aggregations & Mongoose" },
  { name: "Firebase", category: "Database", iconName: "SiFirebase", level: 85, color: "#FFCA28", description: "Firestore, Realtime DB & Auth Rules" },
  { name: "Prisma", category: "Database", iconName: "SiPrisma", level: 88, color: "#2D3748", description: "Type-safe ORM & Database Migrations" },

  // Cloud
  { name: "AWS", category: "Cloud", iconName: "SiAmazonwebservices", level: 80, color: "#FF9900", description: "S3, EC2, Lambda & CloudFront" },
  { name: "Google Cloud", category: "Cloud", iconName: "SiGooglecloud", level: 78, color: "#4285F4", description: "Cloud Run, Storage & Cloud Functions" },
  { name: "Cloudflare", category: "Cloud", iconName: "SiCloudflare", level: 85, color: "#F38020", description: "DNS, Workers, Pages & CDN Cache" },
  { name: "Vercel", category: "Cloud", iconName: "SiVercel", level: 95, color: "#FFFFFF", description: "Edge Network, CI/CD & Next.js Hosting" },
  { name: "Render", category: "Cloud", iconName: "SiRender", level: 85, color: "#46E3B7", description: "Web Services & Background Worker Hosting" },

  // Tools
  { name: "Git", category: "Tools", iconName: "SiGit", level: 92, color: "#F05032", description: "Version Control, Branching & Merge Workflows" },
  { name: "GitHub", category: "Tools", iconName: "SiGithub", level: 94, color: "#FFFFFF", description: "Actions, PR Reviews, Issues & Releases" },
  { name: "Postman", category: "Tools", iconName: "SiPostman", level: 90, color: "#FF6C37", description: "API Testing, Automated Collections & Mocks" },
  { name: "Figma", category: "Tools", iconName: "SiFigma", level: 85, color: "#F24E1E", description: "UI Mockups, Prototypes & Component Systems" },
  { name: "Canva", category: "Tools", iconName: "SiCanva", level: 80, color: "#00C4CC", description: "Visual Assets & Marketing Graphics" },
  { name: "WordPress", category: "Tools", iconName: "SiWordpress", level: 75, color: "#21759B", description: "Custom Themes & Headless CMS Integration" },
  { name: "Chart.js", category: "Tools", iconName: "SiChartdotjs", level: 82, color: "#FF6384", description: "Interactive Data Visualizations & Dashboards" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building fast, SEO-rich, modern web applications from ideation to production.",
    iconName: "Globe",
    features: ["Custom Architecture", "Performance Optimized", "SEO Best Practices", "Scalable Codebase"],
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Crafting beautiful, interactive pixel-perfect UIs with fluid animations and responsive layouts.",
    iconName: "Layout",
    features: ["React & Next.js 15", "Tailwind CSS & Glassmorphism", "Framer Motion Animations", "Mobile-First UX"],
  },
  {
    id: "backend-dev",
    title: "Backend Development",
    description: "Architecting secure, reliable server side applications, APIs, and microservices.",
    iconName: "Server",
    features: ["Node.js & Express APIs", "JWT Auth & Security", "ORM & Database Schemas", "Error Handling & Logging"],
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Development",
    description: "Complete end-to-end web software development with cohesive frontend and backend integration.",
    iconName: "Layers",
    features: ["Full Application Lifecycle", "Database Management", "State Synchronization", "Production Deployment"],
  },
  {
    id: "api-dev",
    title: "API Development",
    description: "Designing RESTful and GraphQL APIs built for high throughput and seamless integration.",
    iconName: "Cpu",
    features: ["Clean Endpoint Specs", "Rate Limiting & Caching", "Postman Documentation", "Third-party Integrations"],
  },
  {
    id: "responsive-ui",
    title: "Responsive UI/UX",
    description: "Ensuring flawless user experience and accessibility across all screen resolutions and devices.",
    iconName: "Smartphone",
    features: ["Cross-browser Compatibility", "Touch-gesture Support", "Dark & Light Modes", "WCAG Accessibility"],
  },
  {
    id: "cloud-deploy",
    title: "Cloud Deployment",
    description: "Setting up CI/CD pipelines, domain routing, serverless environments, and cloud infrastructure.",
    iconName: "Cloud",
    features: ["Vercel & AWS Setup", "Automated Builds & Triggers", "SSL & Custom Domains", "Monitoring & Logs"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "e-Commerece( Crossthenics Fitness )",
    description: "A futuristic e-Commerece SaaS dashboard featuring glassmorphisim effect",
    category: "Frontend",
    image: "/projects/project-1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Framer Motion"],
    github: "https://github.com/Anish-Karkee/crossthenics-Fitness",
    demo: "https://crossthenics-fitness.vercel.app/",
    featured: true,
  },
  {
    id: "project-2",
    title: "Young Enfielders",
    description: "This is an Infromal type based website for the young enfielders community. It is a community of Royal Enfield enthusiasts who share their passion for motorcycles.",
    category: "Frontend",
    image: "/projects/project-2.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "React Hook Form"],
    github: "https://github.com/Anish-Karkee/young-enfielders",
    demo: "https://young-enfielders.vercel.app/",
    featured: true,
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "JR. Frontend Developer",
    company: "Youth IT",
    period: "2025 - Present",
    location: "Itahari, Nepal",
    description: [
      "Architected scalable Next.js 15 microfrontends reducing initial page load times by 42%.",
      "Mentored junior developers and led code reviews enforcing strict TypeScript standards and modern component patterns.",
      "Engineered backend REST & GraphQL APIs with Express and Prisma targeting sub-50ms latency.",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "AWS", "Tailwind CSS"],
    isCurrent: true,
  },
];


export const STATS: StatItem[] = [
  {
    label: "Projects Completed",
    value: 5,
    suffix: "+",
    description: "Production web applications delivered",
  },
  {
    label: "Technologies Mastered",
    value: 28,
    suffix: "+",
    description: "Frameworks, tools, and languages",
  },
  {
    label: "GitHub Commits",
    value: 150,
    suffix: "+",
    description: "Contributions & open-source code",
  },
  {
    label: "Years Learning & Building",
    value: 1,
    suffix: "+",
    description: "Continuous software engineering journey",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Anish is an extraordinary developer. He turned our complex design requirements into a lightning-fast, pixel-perfect Next.js web application. His attention to detail is world-class.",
    name: "David Chen",
    role: "CTO",
    company: "Apex Tech Inc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "test-2",
    quote: "Working with Anish was an absolute pleasure. Not only did he write clean, robust code for our backend APIs, but he also proactive suggested UX enhancements that elevated our product.",
    name: "Sarah Jenkins",
    role: "Product Lead",
    company: "CloudPulse Labs",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "test-3",
    quote: "Anish's full-stack skills are top tier. He seamlessly handled database architecture, API microservices, and modern Framer Motion frontend animations seamlessly.",
    name: "Michael Ross",
    role: "Founder",
    company: "Nova Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];
