import { motion } from "motion/react";
import { 
  Globe, 
  Smartphone, 
  Code, 
  Cloud, 
  TrendingUp, 
  Settings, 
  Shield, 
  Briefcase,
  Database,
  Cpu,
  Palette,
  Bot,
  Server,
  Users,
  FileCode
} from "lucide-react";

interface ServicesProps {
  detailed?: boolean;
}

export function Services({ detailed = false }: ServicesProps) {
  const services = [
    {
      icon: Globe,
      title: "Web Development Services",
      description: "Comprehensive web solutions from static sites to complex e-commerce platforms with modern technologies.",
      features: [
        "Static & dynamic websites",
        "Corporate websites",
        "Portfolio websites",
        "Real estate portals",
        "E-commerce (Shopify, WooCommerce, custom)",
        "Booking & scheduling systems",
        "Landing page development",
        "Custom CMS systems",
        "Website redesign & migration",
        "Multi-language websites",
        "API integration & payment gateway setup"
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Settings,
      title: "Website Management & BPO Services",
      description: "Complete website maintenance and business process outsourcing to keep your digital presence optimized.",
      features: [
        "Daily / Weekly content updates",
        "Property listing updates (add / edit / remove)",
        "SEO meta updates",
        "Image & video uploads + optimization",
        "Speed optimization",
        "Bug fixes & maintenance",
        "Hosting management",
        "Security monitoring",
        "Backup management",
        "Performance reporting",
        "Client support desk (BPO model)"
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "SaaS Development (Full Stack)",
      description: "Custom SaaS applications with multi-tenant architecture, admin dashboards, and AI-powered automation.",
      features: [
        "Custom SaaS applications",
        "Multi-tenant cloud apps",
        "Admin dashboards",
        "Client portals",
        "User management systems",
        "Subscription + billing integration",
        "Analytics dashboards",
        "Automated workflows (AI + n8n)",
        "AI agent-based systems (OpenAI, Dify integration)",
        "Microservices architecture",
        "Database design + optimization",
        "API design & documentation"
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform App Development",
      description: "Native iOS, Android, web, and desktop applications with modern UI/UX and real-time features.",
      features: [
        "iOS + Android apps (Flutter / React Native / Expo)",
        "Web apps (PWA)",
        "Desktop apps (Electron)",
        "UI/UX design & prototyping in Figma",
        "App store deployment & management",
        "API integration",
        "Push notifications",
        "Real-time features (chat, tracking, alerts)"
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Enterprise System Development",
      description: "Large-scale enterprise solutions including HRMS, CRM, ERP, and custom management systems.",
      features: [
        "HRMS / Payroll systems",
        "CRM & lead management systems",
        "ERP development",
        "Inventory & POS systems",
        "Project management tools",
        "Document management systems",
        "E-learning platforms",
        "Booking engines",
        "Marketplace platforms",
        "Workflow automation tools"
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Brand Tech",
      description: "Complete brand identity and user experience design with high-fidelity prototypes and design systems.",
      features: [
        "Brand identity kit (logo, color palette, typography)",
        "Wireframes and flow mapping",
        "High-fidelity UI/UX in Figma",
        "Design systems & component libraries",
        "Prototype testing",
        "Corporate slides, icons, graphic assets"
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Bot,
      title: "AI & Automation Services",
      description: "AI-powered chatbots, assistants, and intelligent automation to streamline business operations.",
      features: [
        "AI chatbots",
        "AI assistants for business operations",
        "AI data processing (OCR, classification, extraction)",
        "Automated email & CRM workflows",
        "Automated job application bots",
        "AI-integrated SaaS tools",
        "AI-powered dashboards"
      ],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Tech & SEO",
      description: "Technical SEO, analytics, and marketing automation to maximize your online visibility and conversions.",
      features: [
        "On-page SEO setup",
        "Technical SEO",
        "Speed optimization",
        "Tracking setup (GA4, GTM, Pixel)",
        "Marketing automation",
        "Landing page funnels",
        "Conversion optimization setup (CRO)"
      ],
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Cloud,
      title: "Cloud, DevOps & Hosting",
      description: "Scalable cloud infrastructure, CI/CD pipelines, and enterprise-grade hosting solutions.",
      features: [
        "Cloud deployment (AWS, GCP, Azure, Supabase, Render)",
        "CI/CD setup",
        "Scalable server setup",
        "Database optimization",
        "Security setup (SSL, WAF, firewall)",
        "Logging and observability dashboards",
        "High-availability server architecture"
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Briefcase,
      title: "White-Label Development for Agencies",
      description: "Ghost development and white-label solutions for digital agencies and their clients.",
      features: [
        "Ghost development services",
        "White-label SaaS development",
        "BPO for their clients' website updates",
        "SEO execution",
        "Graphic & content updates",
        "Dedicated developer/team model"
      ],
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Users,
      title: "Dedicated Team & Outsourcing",
      description: "Flexible dedicated teams and outsourced professionals for your long-term technology needs.",
      features: [
        "Outsourced Web Developer",
        "Outsourced App Developer",
        "Outsourced QA Tester",
        "Outsourced UI/UX Designer",
        "Outsourced Project Manager",
        "Monthly retainer model"
      ],
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4"
          >
            <span className="text-sm text-orange-400">Our Services</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            End-to-end technology services designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden group-hover:border-white/20 transition-all duration-500">
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl text-white mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  {detailed && (
                    <ul className="space-y-2 relative z-10">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className={`text-xs mt-1 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                            ▹
                          </span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {!detailed && (
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Hover effect decoration */}
                  <motion.div
                    className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
