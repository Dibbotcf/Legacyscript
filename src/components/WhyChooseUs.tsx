import { motion } from "motion/react";
import { Award, Users, Zap, Target, Clock, Shield } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years delivering enterprise-grade solutions across industries",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Expert developers, designers, and consultants committed to your success",
    },
    {
      icon: Zap,
      title: "Agile Approach",
      description: "Fast delivery with iterative development and continuous improvement",
    },
    {
      icon: Target,
      title: "Result-Driven",
      description: "Focused on measurable outcomes and ROI for your business",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your systems run smoothly",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and security standards in every project",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4"
          >
            <span className="text-sm text-purple-400">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            {["The", "Legacy", "Script", "Advantage"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  textShadow: "0 0 25px rgba(139, 92, 246, 0.8)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.span
                  animate={{
                    backgroundImage: [
                      "linear-gradient(to right, #ffffff, #e9d5ff, #cbd5e1)",
                      "linear-gradient(to right, #fed7aa, #ffffff, #e9d5ff)",
                      "linear-gradient(to right, #ffffff, #e9d5ff, #cbd5e1)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {["Partnering", "with", "us", "means", "choosing", "innovation,", "reliability,", "and", "excellence"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 1.0 + index * 0.08,
                }}
                whileHover={{
                  color: "#c084fc",
                  y: -3,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-purple-600/5 rounded-2xl" />
              <div className="relative bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}