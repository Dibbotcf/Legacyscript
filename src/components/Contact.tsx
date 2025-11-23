import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { createSubmission } from "../utils/api.tsx";

const PROJECT_TAGS = [
  "Custom Software",
  "AI Integration",
  "Mobile App",
  "Cloud Architecture",
  "UI/UX Design"
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      const submission = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
        tags: selectedTags,
        timestamp: new Date().toISOString(),
      };

      await createSubmission(submission);
      
      setSubmitStatus("success");
      setFormData({ name: "", company: "", email: "", message: "" });
      setSelectedTags([]);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Contact Form Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen relative bg-[#0A0A0A] text-white overflow-hidden flex items-center py-12 lg:py-20">
      {/* Background Grid & Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Ambient Glows - Purple dominated */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
          
          {/* Left Side: The Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4 relative">
              {/* Abstract Shape Behind Text */}
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-purple-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight relative z-10">
                Excited for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                  your next project?
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                Let us know about your profile. We build scalable AI and software solutions for visionary companies.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium tracking-wide text-sm">legacyscriptagency@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium tracking-wide text-sm">107 Green Road, Tejgaon, Dhaka</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium tracking-wide text-sm">+880 186 024 2267</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Glass Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Form Container */}
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
              
              {/* Subtle Gradient Stroke Effect */}
              <div className="absolute inset-0 rounded-[24px] border border-white/5 pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Project Type Tags */}
                <div className="space-y-3">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">I'm interested in...</label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TAGS.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                            isSelected 
                              ? "bg-purple-600 text-white border-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.4)]" 
                              : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:bg-white/5"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/10 py-2.5 text-white text-sm placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full bg-transparent border-b border-white/10 py-2.5 text-white text-sm placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Work Email"
                    className="w-full bg-transparent border-b border-white/10 py-2.5 text-white text-sm placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full bg-transparent border-b border-white/10 py-2.5 text-white text-sm placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Action Area */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
                  >
                    <span>{isSubmitting ? "Processing..." : "Request Discovery Call"}</span>
                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                  </button>
                  
                  {submitStatus === "success" && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-purple-400 text-center mt-3 text-sm font-medium"
                    >
                      Request received. We'll be in touch shortly.
                    </motion.p>
                  )}
                  
                  {submitStatus === "error" && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center mt-3 text-sm font-medium"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}