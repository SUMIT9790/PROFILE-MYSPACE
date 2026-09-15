export const portfolioData = {
  // Personal & Header Information
  personal: {
    name: "SUMIT KUMAR",
    siteName: "SUMIT KUMAR || SOFTWARE ENGINEER INTERN",
    initials: "SK",
    verified: true,
    tagline: "Aspiring Software Engineer Intern — Building scalable systems, distributed task schedulers & high-performance APIs.",
    role: "Aspiring Software Engineer Intern",
    fellowship: "B.Tech CSE @ VIT Bhopal University",
    location: "Patna, Bihar, India",
    timezone: "Asia/Kolkata",
    timezoneLabel: "IST",
    email: "sumitkumar9798om@gmail.com",
    phone: "+91 9798676653",
    whatsapp: "https://wa.me/919798676653",
    avatarUrl: "/profile.jpg",
  },

  // Social & Resume Links
  socials: {
    github: "https://github.com/SUMIT9790",
    githubUsername: "SUMIT9790",
    linkedin: "https://www.linkedin.com/in/sumit-gupta-4b007a2b9",
    leetcode: "https://leetcode.com/u/SUMIT9708/",
    phone: "+91 9798676653",
    whatsapp: "https://wa.me/919798676653",
    resume: "",
  },

  // Intro / About Section
  intro: {
    bullets: [
      "Bachelor of Technology in Computer Science student at Vellore Institute of Technology (VIT), Bhopal (2024 – Expected Sept. 2028).",
      "Aspiring Software Engineer Intern focused on full-stack development, distributed task schedulers, high-throughput APIs, and clean architecture.",
      "Active problem solver with 300+ Data Structures & Algorithms problems solved on LeetCode (@SUMIT9708) and open-source contributor on GitHub (@SUMIT9790).",
      "Currently open for software engineering internships, full-time engineering roles, and tech collaborations."
    ]
  },

  // Technical Stack Categories
  stack: [
    {
      id: "01",
      category: "Languages",
      skills: ["Python", "Java", "C++", "JavaScript (ES6+)", "TypeScript", "HTML", "CSS"]
    },
    {
      id: "02",
      category: "AI & Agentic Frameworks",
      skills: ["LangChain", "LangGraph", "RAG", "Tool Calling", "Vector DBs (ChromaDB/FAISS)", "OpenAI & Gemini APIs"]
    },
    {
      id: "03",
      category: "Full-Stack (FERN Stack)",
      skills: ["React.js", "Node.js", "Express.js", "Firebase (Firestore, Auth, Cloud Functions)", "REST APIs"]
    },
    {
      id: "04",
      category: "Cloud & Databases",
      skills: ["Google Cloud Platform (GCP)", "Firebase", "Redis", "MySQL", "PostgreSQL", "Docker"]
    },
    {
      id: "05",
      category: "CS Fundamentals & Problem Solving",
      skills: ["Data Structures & Algorithms", "Object Oriented Programming", "Computer Networks", "DBMS", "300+ LeetCode Solved"]
    },
    {
      id: "06",
      category: "Tools",
      skills: ["Git", "GitHub", "Linux", "VS Code", "IntelliJ IDEA", "Postman"]
    }
  ],

  // Experience Section
  experience: [
    {
      role: "Core Member — Content & Publication Team",
      company: "Startup Club",
      location: "VIT Bhopal, Madhya Pradesh",
      period: "Present",
      description: [
        "Contribute to creating and managing engaging content for startup events, social media, and club activities.",
        "Collaborate with the team on content planning, publication, and promotion of startup-related initiatives."
      ],
      tags: ["Content Creation", "Event Planning", "Publication", "Startup Ecosystem"]
    }
  ],

  // Projects Section
  projects: [
    {
      id: "national-groundwater-analytics",
      title: "National Groundwater Grid Analytics Platform",
      subtitle: "High-performance hydrological analytics platform to monitor, forecast, and assess groundwater health.",
      year: "2025 Project Exhibition",
      bullets: [
        "Designed and built a high-performance hydrological analytics platform to monitor, forecast, and assess groundwater health across 270+ nationwide stations, ensuring sub-5ms query response times.",
        "Engineered an in-memory RAM caching engine using custom Map data structures to pre-index a 78.5 MB historical dataset, achieving an 800x latency reduction and 100% disk I/O elimination post-startup.",
        "Implemented an Ordinary Least Squares (OLS) Linear Regression model for 1-year trend forecasting and developed a multi-variable Water Potential Index (WPI) algorithm integrating live OpenWeatherMap API weather metrics."
      ],
      tags: ["JavaScript (ES6+)", "Node.js", "Express.js", "HTML5", "CSS3", "Linear Regression", "OpenWeatherMap API", "REST API"],
      repoUrl: "https://github.com/SUMIT9790/National-Groundwater-Grid",
      caseStudyUrl: "#",
      demoUrl: "https://national-groundwater-grid.vercel.app/"
    },
    {
      id: "taskpulse-distributed-scheduler",
      title: "TaskPulse: Distributed Task Scheduler",
      subtitle: "Distributed task scheduler in TypeScript, Node.js, and Redis supporting priority execution and DAG workflows.",
      year: "Sept 2025",
      bullets: [
        "Architected TaskPulse, a distributed task scheduler in TypeScript, Node.js, and Redis supporting priority execution, delayed scheduling, and DAG workflow orchestration.",
        "Built a fault-tolerant worker cluster architecture featuring heartbeat monitoring, dead-worker detection, and automatic reclamation of orphaned tasks to prevent data loss.",
        "Engineered robust failure handling incorporating exponential backoff retries, a Dead-Letter Queue (DLQ), and manual/automated re-enqueue tools.",
        "Developed a live telemetry monitoring system powered by Express, WebSockets, and React to monitor engine TPS, queue depth, and worker health in real-time."
      ],
      tags: ["TypeScript", "Node.js", "Redis", "Express", "WebSockets", "React"],
      repoUrl: "https://github.com/SUMIT9790/TaskPulse-High-Throughput-Distributed-Task-Scheduler",
      caseStudyUrl: "#",
      demoUrl: "#"
    },
    {
      id: "national-citizen-identity-registry",
      title: "National Citizen Identity & Access Registry",
      subtitle: "High-throughput, security-first identity management API designed for national infrastructure scale.",
      year: "2026",
      bullets: [
        "Designed and built a high-throughput, security-first identity management API designed for national infrastructure scale, ensuring sub-50ms query response times.",
        "Implemented graph-like relational data structures in PostgreSQL, stateless multi-tier RBAC security middleware (ADMIN, OPERATOR, VIEWER), automated JSON delta audit logging, and soft-delete state machines.",
        "Enforced strict zero-trust payload validation using Zod schemas and Prisma type safety, blocking invalid network payloads and preventing duplicate national ID registrations at the database layer."
      ],
      tags: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Zod", "JWT", "Bcrypt", "Docker"],
      repoUrl: "https://github.com/SUMIT9790/National-Citizen-Identity-Access-Registry",
      caseStudyUrl: "#",
      demoUrl: "#"
    }
  ],

  // Education Section
  education: [
    {
      institution: "Vellore Institute of Technology, Bhopal, Madhya Pradesh",
      period: "2024 – Expected Sept. 2028",
      degree: "Bachelor of Technology in Computer Science",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering"
      ]
    }
  ],

  // Certifications Section
  certifications: [
    {
      title: "Python Essentials",
      issuer: "Vityarthi, VIT Bhopal"
    },
    {
      title: "Fundamentals of AI and ML",
      issuer: "Vityarthi, VIT Bhopal"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google (Coursera)"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur"
    }
  ],

  // Contact Section
  contact: {
    title: "Have something to build? Let's talk.",
    subtext: "Feel free to reach out for opportunities, projects, or collaborations!",
    email: "sumitkumar9798om@gmail.com",
    phone: "+91 9798676653",
    whatsapp: "https://wa.me/919798676653",
    github: "SUMIT9790",
    linkedin: "sumit-gupta-4b007a2b9",
    leetcode: "SUMIT9708"
  }
};
