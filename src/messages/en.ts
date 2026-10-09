import type { Dictionary } from "@/i18n/types";

// English edition. Must mirror the exact shape of src/messages/ar.ts.
// Hrefs are shared across locales — do not translate paths/anchors.
const en: Dictionary = {
  companyName: "[Company Name]",

  logoSrc: "",

  description:
    "A technology partner specializing in building digital, AI, and data solutions for government entities and large enterprises.",

  nav: [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/#sectors" },
    { label: "Success Stories", href: "/#success-stories" },
    { label: "Resources", href: "/#resources" },
    { label: "Contact Us", href: "/#contact" },
  ],

  cta: {
    label: "Request a Consultation",
    href: "/#contact",
  },

  common: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    imagePlaceholder: "Image coming soon",
  },

  hero: {
    eyebrow: "Executive-Level Technology Consulting",
    title: "Your technology partner for building smarter, more resilient businesses.",
    description:
      "We design and deliver integrated digital solutions across artificial intelligence, data, and cloud infrastructure — empowering government entities and large enterprises to make faster, more accurate decisions.",
    primaryCta: { label: "Explore Our Solutions", href: "#solutions" },
    secondaryCta: { label: "Watch the Video", href: "#video" },
    mockup: {
      ariaLabel: "Executive dashboard displayed on a laptop",
      kpis: [
        { label: "Revenue", value: "+32%" },
        { label: "Operational Efficiency", value: "94%" },
        { label: "Customer Satisfaction", value: "4.9/5" },
      ],
      lineChartTitle: "Quarterly Performance Indicators",
      barChartTitle: "Project Distribution",
    },
  },

  stats: [
    { value: "150+", label: "Government Entities & Large Enterprises" },
    { value: "300+", label: "Experts & Consultants" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "40+", label: "Digital Transformation Projects" },
  ],

  services: {
    eyebrow: "Our Solutions",
    title: "Integrated Solutions for a More Advanced Stage",
    description:
      "We provide a complete ecosystem of technology and advisory solutions designed to help government entities and large enterprises achieve sustainable digital impact.",
    link: { label: "View All Solutions", href: "#solutions" },
    items: [
      {
        title: "Strategy & Transformation",
        description: "We build actionable digital strategies aligned with the future.",
        href: "#solutions",
      },
      {
        title: "Cloud Solutions",
        description:
          "Flexible, secure infrastructure that supports your business growth and continuity.",
        href: "#solutions",
      },
      {
        title: "Data & Artificial Intelligence",
        description:
          "We turn data into insights and smarter, more accurate decisions.",
        href: "#solutions",
      },
      {
        title: "Cybersecurity",
        description:
          "Comprehensive protection for data, digital assets, and critical systems.",
        href: "#solutions",
      },
    ],
  },

  about: {
    eyebrow: "About Us",
    heading: "Your Technology Partner for Scalable Business Solutions",
    paragraphs: [
      "We help organizations build and modernize their technology environments through integrated capabilities across consulting, software engineering, data, artificial intelligence, infrastructure, and cybersecurity.",
      "We work as a long-term technology partner — from understanding business requirements and designing the right solution to implementation, integration, quality assurance, and continuous improvement.",
    ],
    cta: { label: "Learn More About Us", href: "#about" },
    process: [
      {
        index: "01",
        title: "Understand the Business",
        description:
          "We begin by understanding your goals, challenges, and real business requirements.",
      },
      {
        index: "02",
        title: "Design the Solution",
        description:
          "We design a scalable technology architecture aligned with your needs.",
      },
      {
        index: "03",
        title: "Integrated Delivery",
        description:
          "We turn the design into a practical solution integrated with your technology environment.",
      },
      {
        index: "04",
        title: "Continuous Improvement",
        description:
          "We measure performance and continuously evolve the solution as your business grows.",
      },
    ],
  },

  industries: {
    eyebrow: "Industries",
    heading: "Technology Expertise Built Around Your Industry",
    description:
      "We deliver technology solutions shaped around the operational, regulatory, and strategic requirements of each industry — helping organizations build more efficient, secure, and scalable digital environments.",
    capabilitiesLabel: "Key Capabilities",
    cta: { label: "Explore Industry Solutions", href: "#solutions" },
    items: [
      {
        title: "Government & Public Sector",
        shortLabel: "",
        description:
          "We help government entities modernize digital services, integrate systems, manage enterprise data, and build secure technology environments that improve operational efficiency and citizen experiences.",
        capabilities: [
          "Digital Government & Transformation",
          "Systems & Platform Integration",
          "Data Management & Business Intelligence",
          "Cybersecurity & Compliance",
        ],
      },
      {
        title: "Banking & Financial Services",
        shortLabel: "",
        description:
          "We help financial institutions build secure and reliable digital solutions that strengthen operations, unlock greater value from data, and support governance and security requirements.",
        capabilities: [
          "Digital Financial Solutions",
          "Data & Analytics",
          "Systems Integration",
          "Security & Governance",
        ],
      },
      {
        title: "Telecommunications",
        shortLabel: "",
        description:
          "We deliver technology solutions that help telecom organizations manage complex environments, analyze operational data, automate processes, and improve service performance.",
        capabilities: [
          "Systems Integration",
          "Intelligent Automation",
          "Operational Analytics",
          "Cloud & Infrastructure",
        ],
      },
      {
        title: "Healthcare",
        shortLabel: "",
        description:
          "We build digital solutions that connect healthcare systems and data, streamline operations, and maintain high standards of information security and reliability.",
        capabilities: [
          "Healthcare Systems Integration",
          "Data Management & Governance",
          "Dashboards & Analytics",
          "Information Security",
        ],
      },
      {
        title: "Education",
        shortLabel: "",
        description:
          "We help educational institutions modernize digital platforms and operations while leveraging data and emerging technologies to create more efficient and flexible experiences.",
        capabilities: [
          "Digital Platforms",
          "Data Analytics",
          "Artificial Intelligence",
          "Cloud Infrastructure",
        ],
      },
      {
        title: "Enterprise & Large Organizations",
        shortLabel: "",
        description:
          "We help large organizations modernize technology environments and build scalable solutions that support growth and improve operational efficiency.",
        capabilities: [
          "Software Engineering",
          "Legacy Modernization",
          "Data & Business Intelligence",
          "Automation & Artificial Intelligence",
        ],
      },
    ],
  },

  successStories: {
    eyebrow: "Success Stories",
    heading: "Partnerships That Make a Difference",
    description:
      "We deliver integrated technology solutions that achieve measurable results for government entities and large enterprises.",
    link: { label: "View All Success Stories", href: "#success-stories" },
    cardCta: "Read the Story",
    items: [
      {
        title: "Unified Government Services Platform",
        description:
          "Building a unified digital platform that brings together dozens of government services in one seamless, fast experience.",
        image: "",
        results: [
          { value: "+60%", label: "Beneficiary Satisfaction" },
          { value: "-35%", label: "Processing Time" },
          { value: "2M+", label: "Users" },
        ],
        href: "#success-stories",
      },
      {
        title: "Digital Transformation for a National Group",
        description:
          "Restructuring core systems and consolidating them into a unified, scalable digital environment.",
        image: "",
        results: [
          { value: "+45%", label: "Operational Efficiency" },
          { value: "-40%", label: "Operating Cost" },
          { value: "120+", label: "Integrated Systems" },
        ],
        href: "#success-stories",
      },
      {
        title: "Data Platform for a Leading Authority",
        description:
          "Building a centralized data platform that supports real-time, AI-driven decision-making.",
        image: "",
        results: [
          { value: "+70%", label: "Decision Accuracy" },
          { value: "-50%", label: "Analysis Time" },
          { value: "500M+", label: "Data Points" },
        ],
        href: "#success-stories",
      },
    ],
  },

  whyUs: {
    eyebrowPrefix: "Why",
    heading: "Technology Expertise Translated Into Tangible Impact",
    description:
      "We combine strategy, technical engineering, and delivery management to build solutions that are scalable, secure, and measurable.",
    strengths: [
      {
        title: "Deep Sector Expertise",
        description:
          "We understand the challenges facing government, financial, healthcare, and commercial sectors.",
      },
      {
        title: "Integrated Delivery",
        description: "From strategy and design to launch and continuous improvement.",
      },
      {
        title: "Quality and Security by Design",
        description:
          "We uphold quality, security, and governance practices at every stage.",
      },
      {
        title: "Measurable Results",
        description:
          "We tie every initiative to clear performance indicators and real operational impact.",
      },
    ],
    trustStats: [
      { value: "15+", label: "Years of Experience" },
      { value: "300+", label: "Experts & Consultants" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "40+", label: "Digital Transformation Projects" },
    ],
  },

  finalCta: {
    heading: "Let's Turn Your Digital Ambition Into Reality.",
    description:
      "Talk to our team to explore the right technology solutions for your organization.",
    primaryCta: { label: "Book a Consultation", href: "#contact" },
    secondaryCta: { label: "Contact Us", href: "#contact" },
  },

  footer: {
    contactHeading: "Contact Us",
    linkedinLabel: "LinkedIn",
    linkGroups: [
      {
        title: "Solutions",
        links: [
          { label: "Enterprise Solutions", href: "/solutions" },
          { label: "Artificial Intelligence", href: "/solutions/ai" },
          { label: "Data Management", href: "/solutions/data-management" },
          { label: "Cybersecurity", href: "/solutions/cybersecurity" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/#about" },
          { label: "Industries", href: "/#sectors" },
          { label: "Success Stories", href: "/#success-stories" },
          { label: "Resources", href: "/#resources" },
        ],
      },
    ],
    contact: {
      email: "info@company.com",
      phone: "+966 11 000 0000",
      city: "Riyadh, Saudi Arabia",
      linkedin: "#",
    },
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
    copyrightSuffix: "All rights reserved.",
  },

  solutionsPage: {
    hero: {
      eyebrow: "Our Solutions",
      heading: "Integrated technology solutions for smarter, more resilient businesses.",
      description:
        "We help organizations move from digital challenges to connected, secure, and scalable technology ecosystems.",
    },
    items: [
      {
        title: "Solutions",
        description:
          "A complete ecosystem of technology solutions designed to meet your organization's operational and strategic needs.",
        href: "/solutions/overview",
      },
      {
        title: "Artificial Intelligence",
        description:
          "Practical AI models and solutions that turn your data into smarter, faster decisions.",
        href: "/solutions/ai",
      },
      {
        title: "Customization & Development",
        description:
          "Developing custom systems and applications tailored precisely to how your organization works.",
        href: "/solutions/customization",
      },
      {
        title: "Data Management",
        description:
          "Building reliable data ecosystems that support integration, analysis, and decision-making.",
        href: "/solutions/data-management",
      },
      {
        title: "Dashboards & Analytics",
        description:
          "Interactive dashboards that turn complex data into clear, actionable insights.",
        href: "/solutions/dashboards",
      },
      {
        title: "Consultation",
        description:
          "Specialized technology consulting that helps you chart a clear, secure path to digital transformation.",
        href: "/solutions/consultation",
      },
      {
        title: "Implementation",
        description:
          "Professional execution of technology projects that ensures quality and on-time delivery.",
        href: "/solutions/implementation",
      },
      {
        title: "Project Management",
        description:
          "Systematic project management that aligns teams and resources to achieve goals efficiently.",
        href: "/solutions/project-management",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous testing and quality practices that ensure system stability and reliability.",
        href: "/solutions/quality-assurance",
      },
      {
        title: "Infrastructure & Hardware",
        description:
          "Reliable infrastructure and hardware that support business continuity and high performance.",
        href: "/solutions/infrastructure",
      },
      {
        title: "Cybersecurity",
        description:
          "Comprehensive protection for systems and data against evolving cyber threats.",
        href: "/solutions/cybersecurity",
      },
    ],
    cardCta: "Discover the Solution",
    cta: {
      heading: "Need a solution designed around your organization's needs?",
      button: { label: "Talk to an Expert", href: "/#contact" },
    },
  },

  aiPage: {
    hero: {
      eyebrow: "Artificial Intelligence",
      heading: "Artificial intelligence that turns data into decisions and impact.",
      description:
        "We design and implement practical AI solutions that help organizations boost efficiency, automate processes, and make faster, more accurate decisions.",
      image: "/images/ai-hero.jpg",
    },
    capabilitiesHeading: "Our AI Capabilities",
    capabilities: [
      {
        title: "Generative AI",
        description:
          "GenAI solutions that produce content, text, and designs with high quality and consistency.",
      },
      {
        title: "AI Agents",
        description:
          "AI agents that execute complex tasks and take action independently and reliably.",
      },
      {
        title: "Intelligent Automation",
        description:
          "Automating repetitive operational processes to reduce manual effort and errors.",
      },
      {
        title: "Analytics & Forecasting",
        description:
          "Analytical and forecasting models that reveal patterns and support future decisions.",
      },
      {
        title: "AI Integration",
        description:
          "Embedding AI capabilities within your existing systems and technology environment.",
      },
    ],
    process: {
      heading: "From Idea to Measurable Impact",
      stages: [
        { index: "01", title: "Identifying Use Cases" },
        { index: "02", title: "Data Readiness" },
        { index: "03", title: "Model Building & Integration" },
        { index: "04", title: "Measurement & Continuous Improvement" },
      ],
    },
    results: {
      heading: "Results We Create With Our Clients",
      items: [
        { value: "-40%", label: "Reduced Process Time" },
        { value: "+35%", label: "Improved Decision Accuracy" },
        { value: "+50%", label: "Enhanced Beneficiary Experience" },
      ],
    },
    cta: {
      heading: "Ready to activate AI capabilities in your organization?",
      button: { label: "Talk to an AI Expert", href: "/#contact" },
    },
  },

  customizationPage: {
    hero: {
      eyebrow: "Customization & Development",
      heading: "Digital solutions built around your business needs.",
      description:
        "We build custom platforms and applications that integrate seamlessly with your environment and support your operational growth.",
      image: "/images/customization-hero.jpg",
    },
    capabilitiesHeading: "What We Build",
    capabilities: [
      {
        title: "Custom Software",
        description:
          "Systems and software purpose-built to match how your organization operates.",
      },
      {
        title: "Web & Mobile Applications",
        description:
          "Fast, user-friendly web and mobile applications for your customers and teams.",
      },
      {
        title: "Legacy Modernization",
        description:
          "Modernizing legacy systems and migrating them to more flexible, efficient environments.",
      },
      {
        title: "Systems Integration",
        description:
          "Connecting your various systems into one unified, reliable ecosystem.",
      },
    ],
    process: {
      heading: "From Requirements to a Growth-Ready Product",
      stages: [
        { index: "01", title: "Understanding Needs & User Experience" },
        { index: "02", title: "Architectural & Technical Design" },
        { index: "03", title: "Development & Integration" },
        { index: "04", title: "Launch, Support & Improvement" },
      ],
    },
    trust: {
      heading: "Built for Scale and Trust",
      points: [
        "A clear, seamless user experience",
        "A flexible, scalable architecture",
        "Secure integration with your existing systems",
      ],
    },
    cta: {
      heading: "Have an idea or challenge that needs a custom solution?",
      button: { label: "Start a Conversation With Our Team", href: "/#contact" },
    },
  },

  dataManagementPage: {
    hero: {
      eyebrow: "Data Management",
      heading: "Reliable data that drives clearer decisions.",
      description:
        "We build unified data ecosystems that help organizations collect, govern, analyze, and turn data into practical value.",
      image: "/images/data-management-hero.jpg",
    },
    capabilitiesHeading: "Our Data Management Capabilities",
    capabilities: [
      {
        title: "Data Warehouses",
        description:
          "Building organized data warehouses that support reliable reporting and analysis.",
      },
      {
        title: "Data Lakes",
        description: "Flexible storage for large volumes of data from diverse sources.",
      },
      {
        title: "Data Integration & ETL",
        description:
          "Connecting and processing data from multiple sources with high quality and consistency.",
      },
      {
        title: "Data Governance",
        description:
          "Clear policies and controls that ensure data accuracy, security, and reliability.",
      },
      {
        title: "Data Migration",
        description: "Moving data between systems safely, without loss or disruption.",
      },
      {
        title: "Business Intelligence",
        description:
          "Turning data into dashboards and insights that support timely decisions.",
      },
    ],
    process: {
      heading: "A Unified Data Journey",
      stages: ["Sources", "Integration & Processing", "Governance & Storage", "Analytics & Decision"],
    },
    trust: {
      heading: "More Accurate Data. Faster Decisions.",
      points: [
        "A single, trusted source of data",
        "Reduced manual effort and errors",
        "Actionable dashboards and insights",
      ],
    },
    cta: {
      heading: "Is your data ready to become a competitive advantage?",
      button: { label: "Talk to a Data Expert", href: "/#contact" },
    },
  },

  dashboardsPage: {
    hero: {
      eyebrow: "Dashboards & Analytics",
      heading: "Clear visibility for every important decision.",
      description:
        "We design intelligent dashboards that bring performance indicators and operational data together in one clear, actionable experience.",
      image: "/images/dashboards-hero.jpg",
    },
    capabilitiesHeading: "Visibility & Analytics Solutions",
    capabilities: [
      {
        title: "Executive Dashboards",
        description:
          "A comprehensive view of organizational performance that supports executive-level decisions.",
      },
      {
        title: "Operational Dashboards",
        description: "Day-to-day, moment-by-moment tracking of operational activity.",
      },
      {
        title: "KPI Monitoring",
        description:
          "Continuous tracking of key performance indicators against defined targets.",
      },
      {
        title: "Reporting & Analytics",
        description:
          "Accurate reports and in-depth analytics that support confident decision-making.",
      },
    ],
    dashboardPreview: {
      heading: "Here's What Your Dashboard Could Look Like",
      kpis: [
        { label: "Revenue", value: "+32%" },
        { label: "Operational Efficiency", value: "94%" },
        { label: "Customer Satisfaction", value: "4.9/5" },
        { label: "Completion Rate", value: "87%" },
      ],
      lineChartLabel: "Performance Over Time",
      donutChartLabel: "Completion Breakdown",
    },
    trust: {
      heading: "From Data to Faster Decisions",
      points: [
        "Unified metrics in one place",
        "Real-time performance tracking",
        "Clear reports for decision-makers",
      ],
    },
    cta: {
      heading: "Let's design a dashboard built for your organization.",
      button: { label: "Talk to an Analytics Expert", href: "/#contact" },
    },
  },

  consultationPage: {
    hero: {
      eyebrow: "Technology Consulting",
      heading: "Clearer technology decisions for a more confident growth path.",
      description:
        "We help leaders align technology investment with business goals and build a practical roadmap for transformation and growth.",
      image: "/images/consultation-hero.jpg",
    },
    capabilitiesHeading: "Our Consulting Services",
    capabilities: [
      {
        title: "Technology Strategy",
        description:
          "Building a clear technology strategy that serves business goals and supports growth.",
      },
      {
        title: "Solution Architecture",
        description:
          "Designing sound technology architecture that ensures performance, flexibility, and scalability.",
      },
      {
        title: "Digital Transformation",
        description:
          "Leading the digital transformation journey from planning through actual execution.",
      },
      {
        title: "Technology Assessments",
        description:
          "A precise assessment of current systems and processes to identify improvement opportunities.",
      },
    ],
    process: {
      heading: "How We Start With You",
      stages: [
        { index: "01", title: "Understanding Priorities & Challenges" },
        { index: "02", title: "Assessing the Current State" },
        { index: "03", title: "Designing the Strategy & Roadmap" },
        { index: "04", title: "Enabling Execution & Measuring Impact" },
      ],
    },
    trust: {
      heading: "Practical Consulting, Not Just Recommendations.",
      points: [
        "Recommendations tied to clear business goals",
        "An actionable roadmap",
        "Well-considered investment priorities",
      ],
    },
    cta: {
      heading: "Need more clarity before your next technology decision?",
      button: { label: "Book a Consulting Session", href: "/#contact" },
    },
  },

  implementationPage: {
    hero: {
      eyebrow: "Implementation",
      heading: "From plan to a confident, successful launch.",
      description:
        "We turn chosen strategies and solutions into integrated operational reality, with precise management of integration, transition, and launch.",
      image: "/images/implementation-hero.jpg",
    },
    capabilitiesHeading: "Our Implementation Capabilities",
    capabilities: [
      {
        title: "Deployment & Operations",
        description:
          "Deploying and operating solutions within the production environment reliably and consistently.",
      },
      {
        title: "Systems Integration",
        description:
          "Connecting different systems into one unified, effective ecosystem.",
      },
      {
        title: "Data & System Migration",
        description:
          "Migrating data and systems safely, without business disruption.",
      },
      {
        title: "Setup & Configuration",
        description: "Configuring settings to match your organization's exact needs.",
      },
      {
        title: "Go-Live",
        description:
          "Managing go-live day with a clear plan and meticulous attention to every detail.",
      },
    ],
    process: {
      heading: "Disciplined Execution at Every Stage",
      stages: [
        { index: "01", title: "Detailed Planning" },
        { index: "02", title: "Setup & Build" },
        { index: "03", title: "Integration & Testing" },
        { index: "04", title: "Migration & Training" },
        { index: "05", title: "Launch & Support" },
      ],
    },
    trust: {
      heading: "A Safe Transition From Idea to Operation",
      points: [
        "A clear implementation plan with defined responsibilities",
        "Reduced risk and operational disruption",
        "Continuous support after launch",
      ],
    },
    cta: {
      heading: "Ready to turn your plan into reality?",
      button: { label: "Talk to Our Implementation Team", href: "/#contact" },
    },
  },

  projectManagementPage: {
    hero: {
      eyebrow: "Project Management",
      heading: "We lead technology projects from vision to results.",
      description:
        "We provide clear governance, precise planning, and integrated delivery management that ensures projects are delivered efficiently and transparently.",
      image: "/images/project-management-hero.jpg",
    },
    capabilitiesHeading: "Our Project Management Services",
    capabilities: [
      {
        title: "Project Management Office (PMO)",
        description:
          "Establishing a PMO that unifies methodology and tracking across the organization.",
      },
      {
        title: "Governance",
        description:
          "Clear governance frameworks that guide decisions and responsibilities throughout the project lifecycle.",
      },
      {
        title: "Planning & Schedule Management",
        description:
          "Precise resource and schedule planning that ensures on-time delivery.",
      },
      {
        title: "Delivery Management",
        description:
          "Continuous tracking of project deliverables to ensure quality and completeness.",
      },
      {
        title: "Risk Management",
        description:
          "Identifying potential risks early and addressing them with proactive plans.",
      },
    ],
    process: {
      heading: "Management That Ensures Clarity at Every Step",
      stages: [
        { index: "01", title: "Defining Scope & Objectives" },
        { index: "02", title: "Resource & Schedule Planning" },
        { index: "03", title: "Execution Tracking & Risk Management" },
        { index: "04", title: "Progress Measurement & Delivery" },
      ],
    },
    trust: {
      heading: "More Disciplined Projects, Less Risk",
      points: [
        "A unified view for all stakeholders",
        "Precise tracking of time, cost, and scope",
        "Faster decisions based on clear indicators",
      ],
    },
    cta: {
      heading: "Need stronger management for your next project?",
      button: { label: "Talk to a Project Management Expert", href: "/#contact" },
    },
  },

  qualityAssurancePage: {
    hero: {
      eyebrow: "Quality Assurance",
      heading: "Reliable quality before your solutions reach the user.",
      description:
        "We rigorously test digital solutions to ensure performance, security, reliability, and a seamless user experience before launch.",
      image: "/images/quality-assurance-hero.jpg",
    },
    capabilitiesHeading: "Our Quality Assurance Services",
    capabilities: [
      {
        title: "Functional Testing",
        description:
          "Verifying that every function in the solution works according to defined requirements.",
      },
      {
        title: "Test Automation",
        description:
          "Building automated tests that accelerate the development cycle and reduce recurring errors.",
      },
      {
        title: "Performance Testing",
        description:
          "Measuring system speed and stability under varying levels of load and usage.",
      },
      {
        title: "Security Testing",
        description:
          "Detecting and addressing security vulnerabilities before the solution reaches users.",
      },
      {
        title: "User Acceptance Testing (UAT)",
        description: "Confirming the solution meets users' actual needs before launch.",
      },
    ],
    process: {
      heading: "From Requirements to a Reliable Launch",
      stages: [
        { index: "01", title: "Requirements & Test Case Analysis" },
        { index: "02", title: "Manual & Automated Test Execution" },
        { index: "03", title: "Defect Documentation & Resolution" },
        { index: "04", title: "Final Verification & Launch Support" },
      ],
    },
    trust: {
      heading: "Quality Isn't a Final Stage — It's Part of Every Stage.",
      points: [
        "Reduced launch risk and critical errors",
        "Improved system stability and performance",
        "A better experience for users and beneficiaries",
      ],
    },
    cta: {
      heading: "Is your digital solution ready to launch with confidence?",
      button: { label: "Talk to a Quality Assurance Expert", href: "/#contact" },
    },
  },

  infrastructurePage: {
    hero: {
      eyebrow: "Infrastructure & Hardware",
      heading: "Strong, secure technology infrastructure, ready to grow.",
      description:
        "We design and implement flexible infrastructure that supports critical systems, protects data, and keeps pace with your organization's future ambitions.",
      image: "/images/infrastructure-hero.jpg",
    },
    capabilitiesHeading: "Infrastructure Solutions",
    capabilities: [
      {
        title: "Servers",
        description:
          "Reliable server infrastructure that ensures stable performance for critical systems.",
      },
      {
        title: "Storage",
        description: "Secure, scalable storage solutions that grow with your data.",
      },
      {
        title: "Networks",
        description:
          "Carefully designed networks that ensure fast, secure connectivity across the organization.",
      },
      {
        title: "Cloud Computing",
        description:
          "Flexible cloud environments that support operational agility and cost reduction.",
      },
      {
        title: "Data Centers",
        description: "Designing and managing reliable, highly available data centers.",
      },
    ],
    process: {
      heading: "Infrastructure Built for Continuity",
      stages: [
        { index: "01", title: "Assessing the Current Technology Environment" },
        { index: "02", title: "Designing the Right Architecture" },
        { index: "03", title: "Implementation & Integration" },
        { index: "04", title: "Monitoring & Continuous Improvement" },
      ],
    },
    trust: {
      heading: "Greater Readiness for Business and Data",
      points: [
        "Higher system performance and stability",
        "Business protection and continuity",
        "Scalable flexibility as your organization grows",
      ],
    },
    cta: {
      heading: "Is your infrastructure ready for tomorrow's challenges?",
      button: { label: "Talk to an Infrastructure Expert", href: "/#contact" },
    },
  },

  cybersecurityPage: {
    hero: {
      eyebrow: "Cybersecurity",
      heading: "Proactive protection for your digital assets and business trust.",
      description:
        "We help organizations detect risk, protect systems and data, and build an integrated, evolving security posture.",
      image: "/images/cybersecurity-hero.jpg",
    },
    capabilitiesHeading: "Cybersecurity Solutions",
    capabilities: [
      {
        title: "Security Assessment",
        description:
          "A comprehensive assessment of vulnerabilities and security risks across your organization's systems.",
      },
      {
        title: "Security Operations Center (SOC/SIEM)",
        description: "Continuous threat monitoring and real-time detection.",
      },
      {
        title: "Identity & Access Management (IAM)",
        description:
          "Controlling access privileges and protecting digital identities within the organization.",
      },
      {
        title: "Network Security",
        description:
          "Protecting networks from breaches and external and internal threats.",
      },
      {
        title: "Data Security",
        description: "Securing sensitive data at rest, in transit, and in use.",
      },
    ],
    process: {
      heading: "An Integrated Security Methodology",
      stages: [
        { index: "01", title: "Assessment & Risk Discovery" },
        { index: "02", title: "Designing Controls & a Protection Roadmap" },
        { index: "03", title: "Implementation & Continuous Monitoring" },
        { index: "04", title: "Response & Improvement" },
      ],
    },
    trust: {
      heading: "Continuous Security, Not a Delayed Response.",
      points: [
        "Clearer visibility into risks and threats",
        "Protection for data and critical systems",
        "Greater readiness for response and recovery",
      ],
    },
    cta: {
      heading: "Is your organization protected for what's next?",
      button: { label: "Talk to a Cybersecurity Expert", href: "/#contact" },
    },
  },
};

export default en;
