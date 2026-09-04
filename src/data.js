// ═══════════════════════════════════════════════════
//  ✏️  EDIT ALL YOUR PORTFOLIO DETAILS HERE
// ═══════════════════════════════════════════════════

const BASE_URL = import.meta.env.BASE_URL;

export const PORTFOLIO_DATA = {

  // ── HERO SECTION ──────────────────────────────────
  hero: {
    badge: 'Senior Java Developer · 8 Years Experience',
    firstName: 'NAIMUDDIN',
    lastName: 'ALAM',
    subtitle: 'Senior Java Developer | Spring Boot | Microservices | Kafka | Flutter',
    // The cinematic background image
    bgImage: BASE_URL + 'hero-tech.jpg',
    video: BASE_URL + 'naimuddin_alam.mp4'
  },

  // ── ABOUT SECTION ─────────────────────────────────
  about: {
    title: 'About Me',
    name: 'Naimuddin Alam',
    resume: BASE_URL + 'Naimuddin_Alam_Resume.pdf',
    education: 'B.Tech @ Dr. A.P.J. Abdul Kalam Technical University',
    photo: BASE_URL + 'naimuddin-photo.jpg',
    bio: 'Senior Software Engineer with 8 years of experience in software development, including 5+ years of expertise in Java, Spring Boot, Microservices, and Apache Kafka. Experienced in designing and developing scalable RESTful APIs, event-driven architectures, and distributed systems. Proficient in system design, SOLID principles, clean architecture, and cross-platform mobile solutions.',
    tags: [
      '✦ 8 Years Experience',
      '✦ Microservices Expert',
      '✦ Cross-Platform Mobile Apps'
    ],
    stats: [
      { value: '8+', label: 'Years Exp.' },
      { value: '4+', label: 'Organizations' },
    ],
    skills: [
      { category: 'BACKEND & CORE', items: ['Java 8/11/17/21', 'Spring Boot', 'Microservices', 'REST APIs', 'Spring Security', 'JWT'] },
      { category: 'DATABASE & ORM', items: ['Hibernate', 'JPA', 'Sql Server', 'PostgreSQL', 'Oracle'] },
      { category: 'MESSAGING & DEVOPS', items: ['Apache Kafka', 'Docker', 'CI/CD Pipeline', 'Jenkins'] },
      { category: 'MOBILE', items: ['Flutter', 'Android', 'IOS'] },
      { category: 'TOOLS', items: ['IntelliJ IDEA', 'Eclipse IDE', 'VS Code', 'Postman', 'Swagger', 'Git', 'Jira'] },
      { category: 'PRACTICES', items: ['SOLID Principles', 'Unit Testing', 'Clean Architecture', 'System Design'] },
    ],
  },

  // ── SERVICES SECTION ──────────────────────────────
  services: {
    items: [
      {
        id: '01',
        name: 'BACKEND ARCHITECTURE',
        description: 'Designing and developing scalable backend services, RESTful APIs, and Microservices architectures using Java and Spring Boot for enterprise applications.',
      },
      {
        id: '02',
        name: 'EVENT-DRIVEN SYSTEMS',
        description: 'Building asynchronous, event-driven services using Apache Kafka, ensuring high performance, scalability, and reliable communication between microservices.',
      },
      {
        id: '03',
        name: 'CROSS-PLATFORM MOBILE APPS',
        description: 'Developing feature-rich mobile applications using Flutter and Android, integrating complex backend APIs and delivering seamless cross-platform experiences.',
      },
    ],
  },

  // ── PROJECTS (Mapped to Experience) ───────────────
  projects: {
    items: [
      {
        id: 'p1',
        emoji: '🏢',
        category: 'EXPERIENCE',
        thumbLabel: 'MEDAYES FUTUREGEN',
        title: 'SENIOR SOFTWARE ENGINEER @ MEDAYES FUTUREGEN',
        image: '',
        description: 'Developed scalable backend services using Java and Spring Boot. Designed and implemented Microservices Architecture and Kafka-based event-driven services.',
        problem: 'Enterprise application backend scaling and containerization. Collaborated with Flutter/Android teams for seamless API integration.',
        tech: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Docker', 'JWT', 'Sql Server'],
        demo: '#',
        github: '#',
      },
      {
        id: 'p2',
        emoji: '🏛️',
        category: 'EXPERIENCE',
        thumbLabel: 'NIC',
        title: 'SENIOR SOFTWARE ENGINEER @ NIC',
        image: '',
        description: 'Designed and developed scalable backend services. Implemented Spring Security, JWT, and role-based authorization for government applications.',
        problem: 'Improved system performance, scalability, and reliability by implementing microservices architecture and integrating diverse databases like PostgreSQL and Oracle.',
        tech: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Oracle', 'Kafka', 'Docker'],
        demo: '#',
        github: '#',
      },
      {
        id: 'p3',
        emoji: '📱',
        category: 'EXPERIENCE',
        thumbLabel: 'MOBILE DEV',
        title: 'SR. MOBILE DEVELOPER @ MEDAYES FUTUREGEN',
        image: '',
        description: 'Developed Android and Flutter applications, including E-commerce platforms, Attendance Management Systems, ERP solutions, and Survey applications.',
        problem: 'Delivered feature-rich E-commerce apps with real-time inventory updates, secure payment gateways, and order tracking across platforms.',
        tech: ['Flutter', 'Android', 'REST APIs', 'E-commerce', 'ERP'],
        demo: '#',
        github: '#',
      },
    ],
  },

  // ── ACHIEVEMENTS (Mapped to Education/Organizations)
  achievements: {
    items: [
      {
        icon: '🎓',
        organization: 'Dr. A.P.J. Abdul Kalam Technical University',
        title: 'B.Tech in Engineering',
        description: 'Graduated from Dr. A.P.J. Abdul Kalam Technical University, Lucknow.',
        year: '06/2013 - 07/2017',
      },
      {
        icon: '💼',
        organization: 'Medayes Futuregen Softwares Pvt. Ltd',
        title: 'Senior Software Engineer',
        description: 'Leading backend development and microservices architecture.',
        year: '12/2023 - Present',
      },
      {
        icon: '🏛️',
        organization: 'National Informatics Centre (NIC)',
        title: 'Senior Software Engineer',
        description: 'Developed scalable backend services and integrated APIs with Flutter mobile apps.',
        year: '01/2021 - 10/2023',
      },
      {
        icon: '📱',
        organization: 'Medayes & Innove Infotech',
        title: 'Sr. Mobile Developer / Android Developer',
        description: 'Delivered diverse Android and Flutter applications for multiple business needs.',
        year: '2017 - 2020',
      },
    ],
  },

  // ── CONTACT SECTION ───────────────────────────────
  contact: {
    email: 'naimuddinalam12@gmail.com',
    phone: '+91 8791966956',
    socials: [
      { name: 'LinkedIn', handle: 'Naimuddin Alam', link: 'https://www.linkedin.com/in/er-naimuddin-alam-24067511b' },
      { name: 'GitHub', handle: 'NAIMUDDINALAM', link: 'https://github.com/NAIMUDDINALAM' },
      { name: 'Location', handle: 'Ghaziabad, India', link: '#' },
    ],
  },
};
