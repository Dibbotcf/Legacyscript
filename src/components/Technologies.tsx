import { motion } from "motion/react";

export function Technologies() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "GraphQL", category: "API" },
    { name: "TensorFlow", category: "AI/ML" },
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4"
          >
            <span className="text-sm text-orange-400">Tech Stack</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            {["Technologies", "We", "Master"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.2,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#f97316",
                  textShadow: "0 0 30px rgba(249, 115, 22, 0.8)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(139, 92, 246, 0)",
                      "0 0 20px rgba(139, 92, 246, 0.5)",
                      "0 0 10px rgba(139, 92, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
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
            transition={{ delay: 1.0 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {["Leveraging", "cutting-edge", "technologies", "to", "build", "robust,", "scalable", "solutions"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 1.1 + index * 0.08,
                }}
                whileHover={{
                  color: "#a78bfa",
                  y: -3,
                  transition: { duration: 0.2 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ 
                scale: 1.15, 
                y: -8,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-xl blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
              <motion.div 
                className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all"
                whileHover={{
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                }}
              >
                {/* Glowing effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.1) 0%, transparent 70%)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="text-sm text-white mb-1 relative z-10"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255, 255, 255, 0)",
                      "0 0 10px rgba(255, 255, 255, 0.5)",
                      "0 0 0px rgba(255, 255, 255, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {tech.name}
                </motion.div>
                <div className="text-xs text-gray-500 relative z-10">{tech.category}</div>
                
                {/* Animated corner indicators */}
                <motion.div
                  className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.p 
            className="text-gray-500 mb-8"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Trusted by leading organizations
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["AWS Partner", "Microsoft Partner", "Google Cloud Partner", "Meta Partner"].map((partner, index) => (
              <motion.div 
                key={index} 
                className="px-6 py-3 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <span className="text-gray-400 relative z-10">{partner}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}