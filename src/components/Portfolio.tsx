import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Filter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioProps {
  onViewCaseStudy: (projectIndex: number) => void;
}

export function Portfolio({ onViewCaseStudy }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All", 
    "Web Development", 
    "SaaS", 
    "Mobile App", 
    "Enterprise", 
    "UI/UX Design",
    "AI & Automation",
    "E-commerce",
    "Cloud & DevOps"
  ];

  const projects = [
    {
      title: "Real Estate Portal with Property Management",
      category: "Web Development",
      description: "Full-featured real estate platform with advanced search, property listings, agent dashboard, and booking system for a leading Dhaka real estate agency.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      tech: ["Next.js", "PostgreSQL", "AWS S3", "Stripe"],
      gradient: "from-blue-500 to-cyan-500",
      results: "500+ properties listed, 10K+ monthly visitors"
    },
    {
      title: "E-commerce Platform - Custom WooCommerce",
      category: "E-commerce",
      description: "High-performance e-commerce solution with custom payment gateway integration (bKash, Nagad, SSLCommerz) and inventory management for a fashion retailer.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800",
      tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      gradient: "from-purple-500 to-pink-500",
      results: "2,000+ products, 300% increase in online sales"
    },
    {
      title: "Multi-Tenant SaaS - Project Management Platform",
      category: "SaaS",
      description: "Cloud-based project management SaaS with team collaboration, task tracking, analytics dashboards, and subscription billing for SMBs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      gradient: "from-orange-500 to-red-500",
      results: "150+ active organizations, 5K+ users"
    },
    {
      title: "Cross-Platform Food Delivery App",
      category: "Mobile App",
      description: "Full-stack iOS and Android food delivery app with real-time order tracking, push notifications, and integrated payment system.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      tech: ["React Native", "Firebase", "Google Maps API", "Stripe"],
      gradient: "from-green-500 to-emerald-500",
      results: "50K+ downloads, 10K+ monthly orders"
    },
    {
      title: "HRMS & Payroll Management System",
      category: "Enterprise",
      description: "Complete HR management and payroll automation system with attendance tracking, leave management, and payslip generation for a 500+ employee company.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      tech: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
      gradient: "from-yellow-500 to-orange-500",
      results: "500+ employees managed, 90% reduction in HR workload"
    },
    {
      title: "Custom CRM with Lead Management & Analytics",
      category: "Enterprise",
      description: "Tailored CRM solution with advanced lead tracking, sales pipeline, automated email campaigns, and comprehensive reporting dashboards.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "n8n"],
      gradient: "from-indigo-500 to-purple-500",
      results: "40% increase in lead conversion, 1000+ leads tracked"
    },
    {
      title: "AI Chatbot for Customer Support",
      category: "AI & Automation",
      description: "Intelligent AI chatbot with natural language processing, automated responses, and seamless handoff to human agents for e-commerce support.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
      tech: ["OpenAI GPT-4", "Python", "Dify.ai", "WebSocket"],
      gradient: "from-pink-500 to-rose-500",
      results: "70% reduction in support tickets, 24/7 availability"
    },
    {
      title: "Brand Identity & UI/UX Design System",
      category: "UI/UX Design",
      description: "Complete brand identity package with logo design, color system, typography, and comprehensive UI/UX design in Figma for a fintech startup.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      tech: ["Figma", "Adobe Illustrator", "Design Tokens", "Storybook"],
      gradient: "from-red-500 to-orange-500",
      results: "Complete design system, 50+ component library"
    },
    {
      title: "E-learning Platform with Video Streaming",
      category: "Enterprise",
      description: "Full-featured online learning management system with video courses, quizzes, certificates, and student progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "Vimeo API"],
      gradient: "from-cyan-500 to-blue-500",
      results: "100+ courses, 5K+ enrolled students"
    },
    {
      title: "Booking & Scheduling System for Clinics",
      category: "Web Development",
      description: "Healthcare appointment booking platform with doctor availability, patient records, SMS notifications, and payment integration.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      tech: ["Next.js", "PostgreSQL", "Twilio", "bKash API"],
      gradient: "from-emerald-500 to-green-500",
      results: "20+ clinics, 1,000+ monthly bookings"
    },
    {
      title: "Cloud Migration - AWS Infrastructure",
      category: "Cloud & DevOps",
      description: "Complete cloud migration from on-premise servers to AWS with CI/CD setup, auto-scaling, and monitoring for an enterprise client.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      gradient: "from-violet-500 to-purple-500",
      results: "99.9% uptime, 60% cost reduction"
    },
    {
      title: "Automated Workflow & Data Processing",
      category: "AI & Automation",
      description: "AI-powered data extraction and processing system with OCR, document classification, and automated CRM integration using n8n workflows.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      tech: ["Python", "OpenAI", "n8n", "OCR.space", "MongoDB"],
      gradient: "from-blue-500 to-indigo-500",
      results: "95% accuracy, 80% time saved on data entry"
    },
    {
      title: "Multi-language Corporate Website",
      category: "Web Development",
      description: "Professional multilingual corporate website with CMS integration, blog, careers section, and contact management for an international firm.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      tech: ["Next.js", "Contentful CMS", "i18n", "Vercel"],
      gradient: "from-orange-500 to-yellow-500",
      results: "3 languages, 50K+ monthly visitors"
    },
    {
      title: "Inventory & POS System",
      category: "Enterprise",
      description: "Comprehensive inventory management and point-of-sale system with barcode scanning, stock alerts, and sales analytics for retail chains.",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Electron"],
      gradient: "from-green-500 to-teal-500",
      results: "10 store locations, real-time inventory sync"
    },
    {
      title: "SEO & Speed Optimization Project",
      category: "Web Development",
      description: "Complete technical SEO overhaul, Core Web Vitals optimization, and GTM tracking setup resulting in massive organic traffic growth.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800",
      tech: ["Next.js", "Google Analytics 4", "GTM", "Lighthouse"],
      gradient: "from-yellow-500 to-red-500",
      results: "Page speed: 95/100, 250% increase in organic traffic"
    },
    {
      title: "White-Label SaaS for Digital Agencies",
      category: "SaaS",
      description: "Rebrandable SaaS platform for digital marketing agencies to manage client campaigns, reporting, and team collaboration.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Multi-tenancy"],
      gradient: "from-purple-500 to-blue-500",
      results: "15 agency clients, white-label ready"
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 pt-20"
        >
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
            <span className="text-sm text-orange-400">Our Work</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Portfolio & Case Studies
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our successful projects across web development, mobile apps, enterprise systems, and AI automation
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Filter className="w-5 h-5 text-gray-400 my-auto" />
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-orange-500 to-purple-600 border-transparent text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
              onClick={() => onViewCaseStudy(index)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs text-white shadow-lg`}>
                      {project.category}
                    </span>
                  </div>

                  {/* View button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Results */}
                  {project.results && (
                    <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-xs text-gray-400">
                        <span className="text-green-400">✓ Results:</span> {project.results}
                      </p>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover decoration */}
                <motion.div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
