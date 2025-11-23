import { motion } from "motion/react";

export function ChatWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 pointer-events-none">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg pointer-events-auto"
      >
        <span className="text-white text-sm font-medium whitespace-nowrap">Chat with us 👋</span>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://api.whatsapp.com/send/?phone=8801860242267&text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Legacy%20Script%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group cursor-pointer pointer-events-auto block"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {/* Brand Base Container */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2c1a59] to-[#4c1d95] border border-white/20 shadow-[0_8px_32px_rgba(124,58,237,0.3)] flex items-center justify-center relative z-10 overflow-hidden">
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
          
          {/* WhatsApp Icon - Simplified and clean path */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white relative z-10"
          >
             <path d="M12.04 2C6.5 2 2 6.44 2 11.88c0 1.74.46 3.42 1.33 4.9L2.02 22l5.35-1.29c1.43.76 3.02 1.16 4.67 1.16 5.54 0 10.04-4.44 10.04-9.88C22.08 6.44 17.58 2 12.04 2zm5.69 13.42c-.24.66-1.37 1.25-1.9 1.34-.51.09-1.13.13-1.81-.09-.41-.13-.95-.31-1.64-.61-2.87-1.25-4.74-4.14-4.89-4.33-.14-.19-1.17-1.53-1.17-2.93 0-1.4.73-2.09.99-2.38.26-.29.56-.36.75-.36.19 0 .38 0 .54.01.17.01.41-.06.63.48.23.56.8 1.96.87 2.11.07.14.12.31.02.49-.09.19-.14.3-.28.47-.15.16-.31.36-.44.49-.15.14 0 .29.12.5 1.11 1.99 2.94 2.89 3.22 3.04.28.15.46.13.63-.06.17-.19.73-.84.92-1.13.19-.29.39-.24.65-.15.26.1.13 0 1.64.75.46.22 1.84.88 1.92 1.03.08.14.13.71-.11 1.34z" />
          </svg>
        </div>

        {/* Status Indicator - Adjusted position to be on the rim */}
        <div className="absolute bottom-0.5 right-0.5 z-20">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-[#2c1a59]"></span>
          </span>
        </div>
      </motion.a>
    </div>
  );
}