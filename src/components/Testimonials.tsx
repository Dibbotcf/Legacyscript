import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Legacy Script transformed our digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "The team's professionalism and technical knowledge are outstanding. They delivered our mobile app ahead of schedule and exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Their SEO services tripled our organic traffic in just 6 months. The ROI has been phenomenal, and their reporting is transparent and insightful.",
      rating: 5,
    },
    {
      name: "David Kumar",
      role: "Founder, StartupHub",
      content: "From concept to launch, Legacy Script was with us every step. Their agile approach and constant communication made the development process smooth and enjoyable.",
      rating: 5,
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
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <span className="text-sm text-purple-400">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
                <Quote className="w-10 h-10 text-orange-400/30 mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
