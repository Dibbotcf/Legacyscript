import { motion } from "motion/react";
import { Target, Eye, TrendingUp, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started with a vision to transform businesses digitally" },
    { year: "2015", title: "100+ Projects", description: "Reached a major milestone serving diverse industries" },
    { year: "2020", title: "Cloud Expansion", description: "Became certified partners for AWS, Azure, and GCP" },
    { year: "2025", title: "200+ Clients", description: "Serving clients globally with 24/7 support" },
  ];

  const team = [
    { name: "John Anderson", role: "CEO & Founder", specialty: "Business Strategy" },
    { name: "Sarah Chen", role: "CTO", specialty: "Cloud Architecture" },
    { name: "Michael Rodriguez", role: "Lead Developer", specialty: "Full Stack Development" },
    { name: "Emily Watson", role: "Design Director", specialty: "UX/UI Design" },
    { name: "David Kim", role: "Security Lead", specialty: "Cybersecurity" },
    { name: "Lisa Martinez", role: "Project Manager", specialty: "Agile Delivery" },
  ];

  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 pt-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <span className="text-sm text-purple-400">About Legacy Script</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Innovating the Future of Technology
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            For over 15 years, Legacy Script has been at the forefront of digital transformation, 
            helping businesses leverage technology to achieve unprecedented growth and efficiency.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-white">Our Mission</h3>
              <p className="text-gray-400">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance efficiency, and create lasting value in an ever-evolving digital landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-white">Our Vision</h3>
              <p className="text-gray-400">
                To be the most trusted technology partner globally, recognized for excellence in 
                innovation, quality, and customer satisfaction while shaping the future of digital experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4">
                Legacy Script was founded in 2010 with a simple yet powerful vision: to help businesses 
                harness the transformative power of technology. What started as a small team of passionate 
                developers has grown into a full-service IT solutions provider.
              </p>
              <p className="text-gray-400 mb-4">
                Over the years, we've evolved alongside technology, embracing cloud computing, mobile-first 
                approaches, AI, and cutting-edge development practices. Our commitment to excellence and 
                continuous learning has enabled us to serve over 150 clients across various industries.
              </p>
              <p className="text-gray-400">
                Today, we're proud to be a trusted partner for businesses seeking to innovate, scale, and 
                succeed in the digital age.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MzQwODYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Legacy Script Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Key Milestones
            </h2>
            <p className="text-gray-400">Our journey of growth and innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all">
                  <div className="text-4xl bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg text-white mb-2">{milestone.title}</h3>
                  <p className="text-sm text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
              <span className="text-sm text-orange-400">Our Team</span>
            </div>
            <h2 className="text-3xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet the Experts
            </h2>
            <p className="text-gray-400">Talented professionals driving innovation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-orange-400 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
