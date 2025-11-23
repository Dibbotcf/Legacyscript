import { motion } from "motion/react";
import { Shield, Eye, Lock, Database, Users, FileText } from "lucide-react";

export function PrivacyPolicy() {
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
            Privacy Policy
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
                <Shield className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">Introduction</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Legacy Script ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website legacyscript.co and use our services.
              </p>
              <p className="text-gray-300">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg text-white mb-2">Personal Information</h3>
                  <p className="mb-2">We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Fill out contact forms</li>
                    <li>Request a consultation or quote</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p className="mt-2">This information may include: name, email address, phone number, company name, and project details.</p>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">Automatically Collected Information</h3>
                  <p className="mb-2">When you visit our website, we automatically collect certain information about your device, including:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">How We Use Your Information</h2>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services</li>
                  <li>Process and fulfill your service requests</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage trends and preferences</li>
                  <li>Prevent fraudulent transactions and monitor against theft</li>
                  <li>Comply with legal obligations</li>
                  <li>Send administrative information such as updates to our terms and policies</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Sharing and Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Data Sharing and Disclosure</h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>We may share your information in the following situations:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf (e.g., hosting, analytics, email delivery).</li>
                  <li><strong className="text-white">Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property.</li>
                  <li><strong className="text-white">With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
                </ul>
                <p className="mt-4">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">Data Security</h2>
              </div>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-300 mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Your Rights</h2>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict the processing of your personal information</li>
                  <li>Withdraw consent at any time (where processing is based on consent)</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at legacyscriptagency@gmail.com or call +8801860242267.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookies and Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
              <p className="text-gray-300">
                For more information about how we use cookies, please see our Cookie Policy.
              </p>
            </div>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>
            </div>
          </motion.div>

          {/* Changes to Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us at:
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