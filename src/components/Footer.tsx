import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "figma:asset/6b6f7b17e13c104d2af9f5f9cfbe9b243a36b58f.png";

interface FooterProps {
  onNavigate: (page: "home" | "services" | "about" | "portfolio" | "contact" | "privacy" | "terms" | "cookies" | "login") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: "home" | "services" | "about" | "portfolio" | "contact" | "privacy" | "terms" | "cookies" | "login") => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="h-12 mb-4 flex items-center">
              <img 
                src={logoImage} 
                alt="Legacy Script" 
                className="h-full w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transforming businesses through innovative IT solutions and digital excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", page: "home" as const },
                { label: "Services", page: "services" as const },
                { label: "About Us", page: "about" as const },
                { label: "Portfolio", page: "portfolio" as const },
                { label: "Contact", page: "contact" as const },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "SEO & Marketing",
                "Cybersecurity",
                "IT Consulting"
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-left w-full"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>107 Green Road, Tejgaon, Dhaka</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <div>
                  <div>+8801860242267</div>
                  <div>+8801750760692</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>legacyscriptagency@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Legacy Script. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button onClick={() => handleNavClick("privacy")} className="hover:text-orange-400 transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavClick("terms")} className="hover:text-orange-400 transition-colors">Terms of Service</button>
            <button onClick={() => handleNavClick("cookies")} className="hover:text-orange-400 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}