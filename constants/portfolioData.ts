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
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  bioShort: "I build modern, scalable and high-performance web applications with beautiful user experiences.",
  profileImage: "/images/profile.png",
  resumeUrl: "#resume",
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const CODE_EDITOR_DATA = {
  name: "Anish Pokharel",
  role: "Full Stack Developer",
  location: "Nepal",
  email: "pokharelanish512@gmail.com",
  languages: ["JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js"],
  database: ["MongoDB", "PostgreSQL", "Firebase", "Prisma"],
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
  { name: "PostgreSQL", category: "Database", iconName: "SiPostgresql", level: 86, color: "#4169E1", description: "Relational Queries, Indexing & Transactions" },
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
    title: "ApexFlow - Cloud Workflow Platform",
    description: "A futuristic enterprise SaaS dashboard featuring real-time node graphs, drag-and-drop workflows, automated tasks, and live analytics.",
    category: "Full Stack",
    image: "/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Framer Motion"],
    github: "https://github.com/anishpokharel/apexflow",
    demo: "https://apexflow-demo.vercel.app",
    featured: true,
  },
  {
    id: "project-2",
    title: "CyberPulse - Real-time AI Analytics",
    description: "Ultra-fast telemetry dashboard monitoring system health, network speed, and server load with live chart rendering and alert notifications.",
    category: "Frontend",
    image: "/projects/project-2.jpg",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "React Query"],
    github: "https://github.com/anishpokharel/cyberpulse",
    demo: "https://cyberpulse-demo.vercel.app",
    featured: true,
  },
  {
    id: "project-3",
    title: "NexusVault - Decentralized Asset Manager",
    description: "A sleek crypto & Web3 asset tracker with portfolio management, transaction history, and wallet connect capability.",
    category: "Full Stack",
    image: "/projects/project-3.jpg",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/anishpokharel/nexusvault",
    demo: "https://nexusvault-demo.vercel.app",
    featured: true,
  },
  {
    id: "project-4",
    title: "NovaStore - E-Commerce Engine",
    description: "High-performance e-commerce platform with instant search filtering, Stripe checkout integration, admin order management, and dark aesthetic.",
    category: "Full Stack",
    image: "/projects/project-4.jpg",
    tags: ["Next.js", "Redux Toolkit", "Stripe API", "PostgreSQL", "Prisma"],
    github: "https://github.com/anishpokharel/novastore",
    demo: "https://novastore-demo.vercel.app",
    featured: false,
  },
  {
    id: "project-5",
    title: "Vortex API - Microservice Suite",
    description: "High-throughput REST API service handling user authorization, rate limiting, media uploading to S3, and webhooks.",
    category: "Backend",
    image: "/projects/project-5.jpg",
    tags: ["Node.js", "Express.js", "AWS S3", "MongoDB", "Redis"],
    github: "https://github.com/anishpokharel/vortex-api",
    demo: "https://vortex-api.render.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Aura Motion UI - Component Kit",
    description: "Open-source animated UI library packed with glassmorphic cards, glowing borders, custom cursors, and Framer Motion primitives.",
    category: "Frontend",
    image: "/projects/project-6.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Storybook"],
    github: "https://github.com/anishpokharel/aura-motion-ui",
    demo: "https://aura-ui.vercel.app",
    featured: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Developer",
    company: "TechVision Solutions",
    period: "2024 - Present",
    location: "Kathmandu, Nepal",
    description: [
      "Architected scalable Next.js 15 microfrontends reducing initial page load times by 42%.",
      "Mentored junior developers and led code reviews enforcing strict TypeScript standards and modern component patterns.",
      "Engineered backend REST & GraphQL APIs with Express and Prisma targeting sub-50ms latency.",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Tailwind CSS"],
    isCurrent: true,
  },
  {
    id: "exp-2",
    role: "Full Stack Engineer",
    company: "DevPulse Labs",
    period: "2022 - 2024",
    location: "Remote",
    description: [
      "Built interactive customer dashboards using React, Redux Toolkit, and Chart.js serving 50k+ monthly active users.",
      "Implemented automated CI/CD pipelines on Vercel and Cloudflare Pages with zero-downtime deployments.",
      "Integrated secure authentication with Firebase, OAuth2, and JWT tokens across multiple web clients.",
    ],
    skills: ["React", "Redux", "Express.js", "MongoDB", "Firebase", "Cloudflare"],
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    company: "InnoWeb Systems",
    period: "2021 - 2022",
    location: "Nepal",
    description: [
      "Converted high-fidelity Figma designs into responsive HTML/CSS/React components with 100% pixel accuracy.",
      "Optimized assets and web vitals to achieve 98+ Lighthouse scores across core product pages.",
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "Figma", "REST APIs"],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-ASA-849201",
    verifyUrl: "https://aws.amazon.com/verification",
    skills: ["AWS EC2", "S3", "Lambda", "CloudFront", "IAM Security"],
    badgeColor: "from-amber-500 to-orange-600",
  },
  {
    id: "cert-2",
    title: "Meta Full Stack Developer Professional",
    issuer: "Meta (Coursera)",
    date: "2023",
    credentialId: "META-FS-593821",
    verifyUrl: "https://coursera.org/verify",
    skills: ["React", "Node.js", "Databases", "Version Control", "System Architecture"],
    badgeColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "cert-3",
    title: "Next.js Advanced Enterprise Applications",
    issuer: "Vercel Academy",
    date: "2023",
    credentialId: "VERCEL-NEXT-910283",
    verifyUrl: "https://vercel.com/education",
    skills: ["App Router", "Server Components", "Edge Runtime", "Middleware"],
    badgeColor: "from-purple-500 to-pink-500",
  },
  {
    id: "cert-4",
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB Inc.",
    date: "2022",
    credentialId: "MDB-DEV-773912",
    verifyUrl: "https://mongodb.com/verify",
    skills: ["NoSQL Schemas", "Aggregations", "Indexing", "Atlas Cloud"],
    badgeColor: "from-emerald-500 to-teal-600",
  },
];

export const STATS: StatItem[] = [
  {
    label: "Projects Completed",
    value: 35,
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
    value: 1450,
    suffix: "+",
    description: "Contributions & open-source code",
  },
  {
    label: "Years Learning & Building",
    value: 4,
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
