import { motion } from "motion/react";
import { Cookie, Settings, BarChart, Shield, Eye, CheckCircle } from "lucide-react";

export function CookiePolicy() {
  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <span className="text-sm text-purple-400">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-400 mb-8">Last Updated: November 19, 2025</p>
        </motion.div>

        <div className="space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-300">
                This Cookie Policy explains how Legacy Script uses cookies and similar technologies on our website (legacyscript.co).
              </p>
            </div>
          </motion.div>

          {/* Types of Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-300 ml-7">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
                  </p>
                  <p className="text-gray-400 text-sm ml-7 mt-2">Examples: Session management, security tokens, load balancing</p>
                </div>

                <div>
                  <h3 className="text-lg text-white mb-2 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-purple-400" />
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-300 ml-7">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                  </p>
                  <p className="text-gray-400 text-sm ml-7 mt-2">Examples: Google Analytics, page view tracking, visitor behavior analysis</p>
                </div>

                <div>
                  <h3 className="text-lg text-white mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-orange-400" />
                    Functional Cookies
                  </h3>
                  <p className="text-gray-300 ml-7">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
                  </p>
                  <p className="text-gray-400 text-sm ml-7 mt-2">Examples: Language preferences, region selection, user interface preferences</p>
                </div>

                <div>
                  <h3 className="text-lg text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    Performance Cookies
                  </h3>
                  <p className="text-gray-300 ml-7">
                    These cookies collect information about how you use our website, such as which pages you visit most often. This information is used to optimize website performance.
                  </p>
                  <p className="text-gray-400 text-sm ml-7 mt-2">Examples: Page load times, error messages, traffic sources</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* First-Party vs Third-Party */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">First-Party vs Third-Party Cookies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-white mb-2">First-Party Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are set directly by Legacy Script and are used to provide you with a better experience on our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-white mb-2">Third-Party Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These cookies are set by third-party services that we use on our website, such as:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300">
                    <li>Google Analytics for website analytics</li>
                    <li>Content delivery networks (CDNs) for improved performance</li>
                    <li>Social media plugins (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookie Duration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Cookie Duration</h2>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg text-white mb-2">Session Cookies</h3>
                  <p>These are temporary cookies that expire when you close your browser. They help our website remember your actions during a browsing session.</p>
                </div>

                <div>
                  <h3 className="text-lg text-white mb-2">Persistent Cookies</h3>
                  <p>These cookies remain on your device for a set period (ranging from days to years) and are activated each time you visit our website. They help us remember your preferences and improve your experience.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">How We Use Cookies</h2>
              
              <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Essential Operations:</strong> To enable basic website functionality and security</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Performance Monitoring:</strong> To analyze website performance and identify areas for improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">User Experience:</strong> To remember your preferences and provide personalized content</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Analytics:</strong> To understand visitor behavior and improve our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Security:</strong> To detect and prevent fraudulent activity</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Managing Your Cookie Preferences</h2>
              
              <div className="space-y-4 text-gray-300">
                <p>You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.</p>
                
                <div>
                  <h3 className="text-lg text-white mb-2">Browser Controls</h3>
                  <p className="mb-2">You can control cookies through your browser settings. Here are links to cookie management for popular browsers:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                    <li>Opera</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg text-white mb-2">Important Note</h3>
                  <p>If you choose to block or delete cookies, some features of our website may not function properly, and your user experience may be affected.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Third-Party Analytics Tools</h2>
              
              <p className="text-gray-300 mb-4">
                We use Google Analytics to help us understand how visitors use our website. Google Analytics uses cookies to collect information such as:
              </p>
              
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 mb-4">
                <li>How long you stay on our website</li>
                <li>Which pages you visit</li>
                <li>How you arrived at our website</li>
                <li>What you click on while visiting</li>
              </ul>

              <p className="text-gray-300">
                This information is anonymized and used solely for analytical purposes. For more information about Google Analytics' privacy practices, visit Google's Privacy Policy.
              </p>
            </div>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Updates to This Cookie Policy</h2>
              
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Questions About Cookies?</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Legacy Script</strong></p>
                <p>107 Green Road, Tejgaon, Dhaka, Bangladesh</p>
                <p>Email: legacyscriptagency@gmail.com</p>
                <p>Phone: +8801860242267 / +8801750760692</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}