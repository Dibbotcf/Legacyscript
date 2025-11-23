import { motion } from "motion/react";
import { ArrowLeft, Calendar, Users, TrendingUp, CheckCircle, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyProps {
  projectIndex: number;
  onBack: () => void;
}

export function CaseStudy({ projectIndex, onBack }: CaseStudyProps) {
  const projects = [
    {
      title: "Real Estate Portal with Property Management",
      category: "Web Development",
      client: "Prime Properties Dhaka",
      duration: "5 months",
      team: "7 members",
      description: "Full-featured real estate platform with advanced search, property listings, agent dashboard, and booking system for a leading Dhaka real estate agency.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      tech: ["Next.js", "PostgreSQL", "AWS S3", "Stripe", "Google Maps API"],
      gradient: "from-blue-500 to-cyan-500",
      challenge: "The client needed a comprehensive real estate portal that could manage hundreds of properties, provide advanced filtering, virtual tours, and seamless booking for both buyers and agents.",
      solution: "We developed a Next.js-based platform with a robust PostgreSQL database for property management, AWS S3 for media storage, integrated Google Maps API for location services, and Stripe for secure payment processing. The platform includes separate dashboards for property owners, agents, and administrators.",
      results: [
        { metric: "Properties Listed", value: "500+" },
        { metric: "Monthly Visitors", value: "10K+" },
        { metric: "Lead Generation", value: "+220%" },
        { metric: "Booking Conversion", value: "35%" },
      ],
      features: [
        "Advanced property search & filters",
        "Virtual property tours",
        "Agent dashboard with analytics",
        "Automated booking system",
        "Property comparison tools",
        "Mobile-responsive design",
      ],
      testimonial: {
        quote: "Legacy Script delivered beyond our expectations. The platform has revolutionized how we manage properties and connect with clients. Our lead generation increased by over 200%!",
        author: "Md. Kamal Hossain",
        position: "CEO, Prime Properties Dhaka",
      },
    },
    {
      title: "E-commerce Platform - Custom WooCommerce",
      category: "E-commerce",
      client: "Fashion Hub Bangladesh",
      duration: "4 months",
      team: "6 members",
      description: "High-performance e-commerce solution with custom payment gateway integration (bKash, Nagad, SSLCommerz) and inventory management for a fashion retailer.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800",
      tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "bKash API", "Nagad API"],
      gradient: "from-purple-500 to-pink-500",
      challenge: "Creating a fast, secure e-commerce platform with local Bangladeshi payment gateways (bKash, Nagad, SSLCommerz) while managing a complex inventory of 2000+ fashion products.",
      solution: "We customized WooCommerce with optimized PHP code, integrated all major Bangladesh payment gateways, implemented advanced inventory management, and optimized for performance to handle high traffic during sales events.",
      results: [
        { metric: "Products Listed", value: "2,000+" },
        { metric: "Online Sales Increase", value: "+300%" },
        { metric: "Page Load Speed", value: "1.8s" },
        { metric: "Cart Abandonment", value: "-45%" },
      ],
      features: [
        "bKash, Nagad, SSLCommerz integration",
        "Real-time inventory tracking",
        "Advanced product filtering",
        "Customer loyalty program",
        "Multi-variant product support",
        "Automated order management",
      ],
      testimonial: {
        quote: "The WooCommerce platform transformed our business. The local payment integrations work flawlessly, and our sales have tripled since launch!",
        author: "Ayesha Rahman",
        position: "Founder, Fashion Hub Bangladesh",
      },
    },
    {
      title: "Multi-Tenant SaaS - Project Management Platform",
      category: "SaaS",
      client: "TaskFlow Solutions",
      duration: "8 months",
      team: "10 members",
      description: "Cloud-based project management SaaS with team collaboration, task tracking, analytics dashboards, and subscription billing for SMBs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
      gradient: "from-orange-500 to-red-500",
      challenge: "Building a multi-tenant SaaS platform that can scale to support thousands of organizations while maintaining data isolation, performance, and subscription-based billing.",
      solution: "We architected a scalable multi-tenant system using React frontend, Node.js backend microservices, MongoDB for flexible data storage, Redis for caching, and Stripe for subscription management. The platform supports unlimited teams with role-based access control.",
      results: [
        { metric: "Active Organizations", value: "150+" },
        { metric: "Total Users", value: "5,000+" },
        { metric: "Monthly Recurring Revenue", value: "$25K" },
        { metric: "Customer Retention", value: "92%" },
      ],
      features: [
        "Multi-tenant architecture",
        "Team collaboration tools",
        "Task & project tracking",
        "Real-time analytics dashboards",
        "Subscription billing (Stripe)",
        "Role-based permissions",
      ],
      testimonial: {
        quote: "Legacy Script built an incredible SaaS platform that scales beautifully. We now serve over 150 organizations with zero performance issues.",
        author: "Michael Chen",
        position: "CTO, TaskFlow Solutions",
      },
    },
    {
      title: "Cross-Platform Food Delivery App",
      category: "Mobile App",
      client: "QuickBite Delivery",
      duration: "6 months",
      team: "8 members",
      description: "Full-stack iOS and Android food delivery app with real-time order tracking, push notifications, and integrated payment system.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      tech: ["React Native", "Firebase", "Google Maps API", "Stripe", "Node.js"],
      gradient: "from-green-500 to-emerald-500",
      challenge: "Creating a seamless food delivery experience across iOS and Android with real-time order tracking, driver assignment, and payment processing.",
      solution: "We built a React Native cross-platform app with Firebase for real-time data sync, Google Maps for tracking and navigation, Stripe for payments, and custom Node.js backend for order management and driver assignment algorithms.",
      results: [
        { metric: "App Downloads", value: "50K+" },
        { metric: "Monthly Orders", value: "10,000+" },
        { metric: "Average Delivery Time", value: "28 min" },
        { metric: "User Rating", value: "4.7/5" },
      ],
      features: [
        "Real-time order tracking",
        "Driver location on map",
        "Push notifications",
        "Multiple payment methods",
        "Restaurant & menu management",
        "Rating & review system",
      ],
      testimonial: {
        quote: "The app is fantastic! Real-time tracking and smooth performance have made us a top choice for food delivery in our city.",
        author: "Rajib Ahmed",
        position: "Founder, QuickBite Delivery",
      },
    },
    {
      title: "HRMS & Payroll Management System",
      category: "Enterprise",
      client: "Global Tech Industries",
      duration: "7 months",
      team: "9 members",
      description: "Complete HR management and payroll automation system with attendance tracking, leave management, and payslip generation for a 500+ employee company.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      tech: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "AWS"],
      gradient: "from-yellow-500 to-orange-500",
      challenge: "Automating complex HR processes including attendance, leave management, payroll calculations, and compliance reporting for 500+ employees across multiple departments.",
      solution: "We developed a comprehensive HRMS using Vue.js and Laravel with PostgreSQL for data management. The system automates attendance tracking via biometric integration, calculates complex payroll including taxes and benefits, and generates compliance reports.",
      results: [
        { metric: "Employees Managed", value: "500+" },
        { metric: "HR Workload Reduction", value: "90%" },
        { metric: "Payroll Processing Time", value: "-85%" },
        { metric: "Compliance Accuracy", value: "100%" },
      ],
      features: [
        "Biometric attendance integration",
        "Leave management system",
        "Automated payroll calculation",
        "Tax & compliance reporting",
        "Employee self-service portal",
        "Performance review module",
      ],
      testimonial: {
        quote: "This HRMS has transformed our HR department. What used to take days now happens automatically. Highly recommended!",
        author: "Nusrat Jahan",
        position: "HR Director, Global Tech Industries",
      },
    },
    {
      title: "Custom CRM with Lead Management & Analytics",
      category: "Enterprise",
      client: "SalesPro International",
      duration: "6 months",
      team: "8 members",
      description: "Tailored CRM solution with advanced lead tracking, sales pipeline, automated email campaigns, and comprehensive reporting dashboards.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "n8n", "AWS"],
      gradient: "from-indigo-500 to-purple-500",
      challenge: "Building a CRM that could handle complex sales pipelines, automate follow-ups, integrate with multiple data sources, and provide real-time analytics for sales teams.",
      solution: "We created a custom CRM using Next.js and GraphQL with PostgreSQL database, integrated n8n for workflow automation, and built comprehensive analytics dashboards with real-time data visualization.",
      results: [
        { metric: "Lead Conversion", value: "+40%" },
        { metric: "Leads Tracked", value: "1,000+" },
        { metric: "Email Automation", value: "85% automated" },
        { metric: "Sales Cycle Time", value: "-30%" },
      ],
      features: [
        "Advanced lead scoring",
        "Sales pipeline visualization",
        "Automated email campaigns",
        "Real-time analytics dashboards",
        "Multi-channel communication",
        "Workflow automation (n8n)",
      ],
      testimonial: {
        quote: "Our sales team's efficiency has skyrocketed. The automated workflows and analytics give us the edge we needed.",
        author: "David Williams",
        position: "VP of Sales, SalesPro International",
      },
    },
    {
      title: "AI Chatbot for Customer Support",
      category: "AI & Automation",
      client: "ShopEasy E-commerce",
      duration: "3 months",
      team: "5 members",
      description: "Intelligent AI chatbot with natural language processing, automated responses, and seamless handoff to human agents for e-commerce support.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
      tech: ["OpenAI GPT-4", "Python", "Dify.ai", "WebSocket", "React"],
      gradient: "from-pink-500 to-rose-500",
      challenge: "Reducing customer support workload while maintaining high customer satisfaction through intelligent automation and seamless human handoff.",
      solution: "We developed an AI-powered chatbot using OpenAI GPT-4 and Dify.ai platform with custom training on product data, order history, and FAQs. The bot handles common queries automatically and smoothly transfers complex issues to human agents.",
      results: [
        { metric: "Support Ticket Reduction", value: "70%" },
        { metric: "Response Time", value: "Instant" },
        { metric: "Customer Satisfaction", value: "4.6/5" },
        { metric: "24/7 Availability", value: "100%" },
      ],
      features: [
        "Natural language understanding",
        "Product recommendations",
        "Order tracking assistance",
        "FAQ automation",
        "Seamless human handoff",
        "Multi-language support",
      ],
      testimonial: {
        quote: "The AI chatbot handles most queries instantly, and our support team can focus on complex issues. Customer satisfaction is at an all-time high!",
        author: "Sadia Sultana",
        position: "Customer Support Manager, ShopEasy",
      },
    },
    {
      title: "Brand Identity & UI/UX Design System",
      category: "UI/UX Design",
      client: "FinanceFlow Startup",
      duration: "2 months",
      team: "4 members",
      description: "Complete brand identity package with logo design, color system, typography, and comprehensive UI/UX design in Figma for a fintech startup.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      tech: ["Figma", "Adobe Illustrator", "Design Tokens", "Storybook"],
      gradient: "from-red-500 to-orange-500",
      challenge: "Creating a modern, trustworthy brand identity and complete design system for a fintech startup entering a competitive market.",
      solution: "We developed a comprehensive brand identity including logo, color palette, typography system, and created a full UI/UX design system in Figma with 50+ reusable components, design tokens, and extensive documentation.",
      results: [
        { metric: "Design Components", value: "50+" },
        { metric: "Design Tokens", value: "100+" },
        { metric: "Brand Consistency", value: "100%" },
        { metric: "Development Speed", value: "+60%" },
      ],
      features: [
        "Complete brand identity kit",
        "Logo & brand guidelines",
        "Color system & typography",
        "50+ Figma components",
        "Design token library",
        "Storybook documentation",
      ],
      testimonial: {
        quote: "The design system is beautiful and incredibly well-documented. Our development team loves how everything is organized in Figma!",
        author: "Emily Thompson",
        position: "CEO, FinanceFlow Startup",
      },
    },
    {
      title: "E-learning Platform with Video Streaming",
      category: "Enterprise",
      client: "EduTech Academy",
      duration: "7 months",
      team: "9 members",
      description: "Full-featured online learning management system with video courses, quizzes, certificates, and student progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "Vimeo API"],
      gradient: "from-cyan-500 to-blue-500",
      challenge: "Building a scalable LMS platform with video streaming, course management, student tracking, and automated certification for thousands of students.",
      solution: "We created an LMS using React and Node.js with MongoDB for flexible data storage, integrated Vimeo for video hosting, AWS S3 for course materials, and built automated quiz systems with certificate generation.",
      results: [
        { metric: "Courses Available", value: "100+" },
        { metric: "Enrolled Students", value: "5,000+" },
        { metric: "Completion Rate", value: "78%" },
        { metric: "Student Satisfaction", value: "4.8/5" },
      ],
      features: [
        "HD video streaming",
        "Interactive quizzes",
        "Progress tracking",
        "Automated certification",
        "Discussion forums",
        "Mobile learning app",
      ],
      testimonial: {
        quote: "The platform is robust and user-friendly. Our students love the video quality and interactive features!",
        author: "Dr. Fatima Khan",
        position: "Director, EduTech Academy",
      },
    },
    {
      title: "Booking & Scheduling System for Clinics",
      category: "Web Development",
      client: "HealthCare Plus Network",
      duration: "4 months",
      team: "6 members",
      description: "Healthcare appointment booking platform with doctor availability, patient records, SMS notifications, and payment integration.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      tech: ["Next.js", "PostgreSQL", "Twilio", "bKash API", "AWS"],
      gradient: "from-emerald-500 to-green-500",
      challenge: "Streamlining appointment booking for 20+ clinics with real-time doctor availability, patient management, and local payment integration.",
      solution: "We developed a Next.js booking platform with PostgreSQL for data management, Twilio for SMS notifications, bKash payment integration, and automated scheduling algorithms to optimize doctor availability.",
      results: [
        { metric: "Clinics Connected", value: "20+" },
        { metric: "Monthly Bookings", value: "1,000+" },
        { metric: "No-Show Rate", value: "-60%" },
        { metric: "Patient Satisfaction", value: "4.7/5" },
      ],
      features: [
        "Real-time doctor availability",
        "Automated SMS reminders",
        "Patient record management",
        "bKash payment integration",
        "Multi-clinic support",
        "Prescription management",
      ],
      testimonial: {
        quote: "Appointment management has never been easier. The SMS reminders have reduced no-shows dramatically!",
        author: "Dr. Mahmud Hassan",
        position: "Medical Director, HealthCare Plus",
      },
    },
    {
      title: "Cloud Migration - AWS Infrastructure",
      category: "Cloud & DevOps",
      client: "Enterprise Solutions Ltd",
      duration: "5 months",
      team: "7 members",
      description: "Complete cloud migration from on-premise servers to AWS with CI/CD setup, auto-scaling, and monitoring for an enterprise client.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      gradient: "from-violet-500 to-purple-500",
      challenge: "Migrating critical enterprise systems from on-premise infrastructure to AWS cloud with zero downtime and significant cost reduction.",
      solution: "We implemented Infrastructure as Code using Terraform, containerized all applications with Docker, orchestrated with Kubernetes, set up CI/CD pipelines with Jenkins, and implemented comprehensive monitoring with Prometheus.",
      results: [
        { metric: "Uptime", value: "99.9%" },
        { metric: "Cost Reduction", value: "60%" },
        { metric: "Deployment Speed", value: "+400%" },
        { metric: "Scalability", value: "Auto-scaling" },
      ],
      features: [
        "Infrastructure as Code (Terraform)",
        "Container orchestration (Kubernetes)",
        "CI/CD pipeline automation",
        "Auto-scaling infrastructure",
        "Monitoring & alerting (Prometheus)",
        "Disaster recovery setup",
      ],
      testimonial: {
        quote: "The cloud migration was seamless with zero downtime. Our infrastructure costs dropped by 60% while performance improved dramatically!",
        author: "James Anderson",
        position: "CTO, Enterprise Solutions Ltd",
      },
    },
    {
      title: "Automated Workflow & Data Processing",
      category: "AI & Automation",
      client: "DataStream Solutions",
      duration: "4 months",
      team: "5 members",
      description: "AI-powered data extraction and processing system with OCR, document classification, and automated CRM integration using n8n workflows.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      tech: ["Python", "OpenAI", "n8n", "OCR.space", "MongoDB"],
      gradient: "from-blue-500 to-indigo-500",
      challenge: "Automating manual data entry processes involving document scanning, data extraction, classification, and CRM integration for thousands of documents monthly.",
      solution: "We built an AI-powered automation system using Python, OpenAI for intelligent classification, OCR.space for document scanning, n8n for workflow automation, and MongoDB for data storage with seamless CRM integration.",
      results: [
        { metric: "OCR Accuracy", value: "95%" },
        { metric: "Time Saved", value: "80%" },
        { metric: "Documents Processed", value: "5K+/month" },
        { metric: "Error Rate", value: "-92%" },
      ],
      features: [
        "Intelligent OCR processing",
        "AI document classification",
        "Automated data extraction",
        "n8n workflow automation",
        "CRM integration",
        "Error detection & correction",
      ],
      testimonial: {
        quote: "The automation has saved us countless hours. What used to take days now happens in minutes with 95% accuracy!",
        author: "Robert Chen",
        position: "Operations Manager, DataStream Solutions",
      },
    },
    {
      title: "Multi-language Corporate Website",
      category: "Web Development",
      client: "GlobalTech Enterprises",
      duration: "3 months",
      team: "5 members",
      description: "Professional multilingual corporate website with CMS integration, blog, careers section, and contact management for an international firm.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      tech: ["Next.js", "Contentful CMS", "i18n", "Vercel", "PostgreSQL"],
      gradient: "from-orange-500 to-yellow-500",
      challenge: "Creating a professional corporate website supporting multiple languages (English, Bengali, Arabic) with easy content management and fast global performance.",
      solution: "We developed a Next.js website with Contentful headless CMS for easy content management, i18n for multi-language support, deployed on Vercel edge network for global performance, with custom job application system.",
      results: [
        { metric: "Languages Supported", value: "3" },
        { metric: "Monthly Visitors", value: "50K+" },
        { metric: "Page Load Time", value: "0.8s" },
        { metric: "SEO Score", value: "98/100" },
      ],
      features: [
        "Multi-language support (3 languages)",
        "Headless CMS (Contentful)",
        "Blog & news section",
        "Careers portal",
        "Contact management",
        "Global CDN deployment",
      ],
      testimonial: {
        quote: "The website perfectly represents our global brand. The multi-language support and CMS make content updates incredibly easy!",
        author: "Ahmed Al-Rashid",
        position: "Marketing Director, GlobalTech Enterprises",
      },
    },
    {
      title: "Inventory & POS System",
      category: "Enterprise",
      client: "RetailChain Bangladesh",
      duration: "6 months",
      team: "7 members",
      description: "Comprehensive inventory management and point-of-sale system with barcode scanning, stock alerts, and sales analytics for retail chains.",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Electron", "Socket.io"],
      gradient: "from-green-500 to-teal-500",
      challenge: "Managing inventory across 10 store locations in real-time with POS integration, barcode scanning, automated stock alerts, and comprehensive sales reporting.",
      solution: "We built a desktop POS application using Electron with React frontend, Node.js backend, PostgreSQL for centralized inventory database, Socket.io for real-time sync, and barcode scanner integration.",
      results: [
        { metric: "Store Locations", value: "10" },
        { metric: "Products Tracked", value: "15,000+" },
        { metric: "Inventory Accuracy", value: "99.5%" },
        { metric: "Stock-out Reduction", value: "75%" },
      ],
      features: [
        "Barcode scanning",
        "Real-time inventory sync",
        "Multi-location support",
        "Automated stock alerts",
        "Sales analytics dashboard",
        "Supplier management",
      ],
      testimonial: {
        quote: "This POS system has transformed our retail operations. Real-time inventory tracking across all stores is a game-changer!",
        author: "Tanvir Islam",
        position: "Operations Director, RetailChain Bangladesh",
      },
    },
    {
      title: "SEO & Speed Optimization Project",
      category: "Web Development",
      client: "E-Commerce Mega Store",
      duration: "2 months",
      team: "4 members",
      description: "Complete technical SEO overhaul, Core Web Vitals optimization, and GTM tracking setup resulting in massive organic traffic growth.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800",
      tech: ["Next.js", "Google Analytics 4", "GTM", "Lighthouse", "Cloudflare"],
      gradient: "from-yellow-500 to-red-500",
      challenge: "Improving a slow-loading e-commerce site with poor SEO to rank higher in search results and increase organic traffic significantly.",
      solution: "We performed complete technical SEO audit, optimized Core Web Vitals, implemented Next.js SSR/SSG, set up comprehensive GA4 and GTM tracking, optimized images and code, and implemented Cloudflare CDN.",
      results: [
        { metric: "Page Speed Score", value: "95/100" },
        { metric: "Organic Traffic", value: "+250%" },
        { metric: "Core Web Vitals", value: "All Green" },
        { metric: "Search Rankings", value: "Top 3 positions" },
      ],
      features: [
        "Technical SEO optimization",
        "Core Web Vitals improvement",
        "GA4 & GTM setup",
        "Schema markup implementation",
        "Image & code optimization",
        "CDN integration",
      ],
      testimonial: {
        quote: "Our organic traffic has skyrocketed! The page speed improvements and SEO work have delivered incredible ROI.",
        author: "Sophia Martinez",
        position: "Digital Marketing Head, E-Commerce Mega Store",
      },
    },
    {
      title: "White-Label SaaS for Digital Agencies",
      category: "SaaS",
      client: "Agency Pro Network",
      duration: "9 months",
      team: "11 members",
      description: "Rebrandable SaaS platform for digital marketing agencies to manage client campaigns, reporting, and team collaboration.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Multi-tenancy", "AWS", "Stripe"],
      gradient: "from-purple-500 to-blue-500",
      challenge: "Creating a white-label SaaS platform that agencies can rebrand as their own while managing multiple client accounts, campaigns, and team members.",
      solution: "We developed a multi-tenant SaaS platform with white-label customization, agency and client portals, campaign management, automated reporting, team collaboration tools, and Stripe subscription billing.",
      results: [
        { metric: "Agency Clients", value: "15" },
        { metric: "End Clients Managed", value: "200+" },
        { metric: "Monthly Reports", value: "500+" },
        { metric: "Platform Uptime", value: "99.95%" },
      ],
      features: [
        "White-label branding",
        "Multi-tenant architecture",
        "Campaign management",
        "Automated reporting",
        "Team collaboration",
        "Subscription billing",
      ],
      testimonial: {
        quote: "This white-label platform has enabled us to scale our agency services dramatically. Our clients love the professional dashboards!",
        author: "Mark Stevens",
        position: "CEO, Agency Pro Network",
      },
    },
  ];

  const project = projects[projectIndex] || projects[0];

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEzOSw5MiwyNDYsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 pt-20"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
            <span className="text-sm text-orange-400">{project.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-gray-400 text-sm mb-1">Client</p>
            <p className="text-white">{project.client}</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <Calendar className="w-8 h-8 text-orange-400 mb-2" />
            <p className="text-gray-400 text-sm mb-1">Duration</p>
            <p className="text-white">{project.duration}</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <Users className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-gray-400 text-sm mb-1">Team Size</p>
            <p className="text-white">{project.team}</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12 rounded-2xl overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <Target className="w-10 h-10 text-red-400 mb-4" />
            <h2 className="text-2xl text-white mb-4">The Challenge</h2>
            <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
            <h2 className="text-2xl text-white mb-4">Our Solution</h2>
            <p className="text-gray-400 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-7 h-7 text-green-400" />
            Results & Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-opacity`} />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group-hover:border-white/20 transition-all">
                  <p className={`text-3xl mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {result.value}
                  </p>
                  <p className="text-gray-400 text-sm">{result.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl text-white mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white shadow-lg`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="relative"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 rounded-2xl blur-2xl`} />
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="text-6xl text-orange-500 mb-4 opacity-50">"</div>
            <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
              {project.testimonial.quote}
            </p>
            <div>
              <p className="text-white">{project.testimonial.author}</p>
              <p className="text-gray-400 text-sm">{project.testimonial.position}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
