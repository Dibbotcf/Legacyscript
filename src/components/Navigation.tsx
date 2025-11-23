import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logoImage from "figma:asset/6b6f7b17e13c104d2af9f5f9cfbe9b243a36b58f.png";

// Register GSAP plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: "home" | "services" | "about" | "portfolio" | "contact" | "dashboard" | "login" | "privacy" | "terms" | "cookies" | "case-study") => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (isMobile !== mobile) {
        setIsMobile(mobile);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // Use GSAP for scroll animation logic
  useGSAP(() => {
    if (isMobile) return;

    const navElement = navRef.current;
    const bgElement = backgroundRef.current;
    
    if (!navElement || !bgElement) return;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 20;
      
      // Animate to "Floating Pill" state
      if (isScrolled) {
        gsap.to(navElement, {
          y: 24,
          width: "85%",
          maxWidth: "1200px",
          borderRadius: 50,
          duration: 0.5,
          ease: "power3.out",
        });
        
        gsap.to(bgElement, {
          backgroundColor: "rgba(2, 6, 23, 0.7)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Animate back to "Top Bar" state
        gsap.to(navElement, {
          y: 0,
          width: "100%",
          maxWidth: "100%",
          borderRadius: 0,
          duration: 0.5,
          ease: "power3.out",
        });
        
        gsap.to(bgElement, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          backdropFilter: "blur(0px)",
          borderColor: "rgba(255, 255, 255, 0)",
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [isMobile]); // Re-run when mobile state changes

  // Separate GSAP effect for Mobile (simple background change)
  useGSAP(() => {
    if (!isMobile) return;

    const navElement = navRef.current;
    const bgElement = backgroundRef.current;
    
    if (!navElement || !bgElement) return;

    // Reset desktop specific styles first
    gsap.set(navElement, {
      y: 0,
      width: "100%",
      maxWidth: "100%",
      borderRadius: 0,
    });

    const updateScrollMobile = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 20;

      if (isScrolled || isMobileMenuOpen) {
         gsap.to(bgElement, {
          backgroundColor: "rgba(2, 6, 23, 0.9)",
          backdropFilter: "blur(16px)",
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          duration: 0.3,
        });
      } else {
         gsap.to(bgElement, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          backdropFilter: "blur(0px)",
          borderBottomColor: "rgba(255, 255, 255, 0)",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", updateScrollMobile);
    updateScrollMobile();

    return () => window.removeEventListener("scroll", updateScrollMobile);
  }, [isMobile, isMobileMenuOpen]);

  const navItems = [
    { id: "services", label: "Services" },
    { id: "about", label: "Company" },
    { id: "portfolio", label: "Portfolio" },
  ];

  const handleNavClick = (page: "home" | "services" | "about" | "portfolio" | "contact") => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Navigation Container */}
      <div ref={containerRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none p-0">
        <div
          ref={navElement => {
            // @ts-ignore
            navRef.current = navElement;
          }}
          className="pointer-events-auto relative overflow-hidden w-full"
          style={{ willChange: "transform, width, border-radius" }}
        >
          {/* Background Layer separated for performance */}
          <div 
            ref={backgroundRef}
            className="absolute inset-0 border border-transparent transition-colors"
            style={{ willChange: "background-color, backdrop-filter, border-color" }}
          />

          <div className="relative px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer relative z-20"
                onClick={() => handleNavClick("home")}
              >
                <div className="h-10 lg:h-12 rounded-lg flex items-center justify-center px-2">
                  <img 
                    src={logoImage} 
                    alt="Legacy Script" 
                    className="h-full w-auto object-contain" 
                  />
                </div>
              </motion.div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as any)}
                    className={`relative px-4 py-2 transition-colors font-medium text-sm tracking-wide ${
                      currentPage === item.id ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {currentPage === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Desktop CTA Button */}
              <div className="hidden lg:flex items-center z-20">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="relative px-6 py-2.5 bg-[#2c1a59] rounded-full overflow-hidden shadow-[0_0_15px_rgba(44,26,89,0.4)] flex items-center gap-2 border border-white/10 group"
                  onClick={() => handleNavClick("contact")}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <Rocket className="w-4 h-4 text-white relative z-10" />
                  <span className="relative z-10 text-white font-medium text-sm">Let's Talk</span>
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors z-20"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-24 px-4 pb-8 lg:hidden flex flex-col"
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
                  onClick={() => handleNavClick(item.id as any)}
                  className={`w-full text-left px-6 py-4 rounded-xl text-lg font-medium transition-all ${
                    currentPage === item.id 
                      ? "bg-purple-900/30 text-white border border-purple-500/30" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full mt-4 px-6 py-4 bg-[#2c1a59] rounded-xl flex items-center justify-center gap-3 shadow-lg border border-white/10"
                onClick={() => handleNavClick("contact")}
              >
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-lg">Let's Talk</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}