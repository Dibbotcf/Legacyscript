import { motion } from "motion/react";
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Shield } from "lucide-react";

export function TermsOfService() {
  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-20"
        >
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
            <span className="text-sm text-orange-400">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Terms of Service
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">Agreement to Terms</h2>
              </div>
              <p className="text-gray-300 mb-4">
                These Terms of Service ("Terms") govern your use of the Legacy Script website (legacyscript.co) and services. By accessing or using our website and services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-300">
                If you disagree with any part of these Terms, you may not access our website or use our services.
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Services Provided</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Legacy Script provides IT services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                <li>Website and web application development</li>
                <li>Mobile application development</li>
                <li>Custom software solutions</li>
                <li>Cloud services and migration</li>
                <li>SEO and digital marketing</li>
                <li>IT support and maintenance</li>
                <li>Technology consulting</li>
                <li>Cybersecurity advisory</li>
              </ul>
              <p className="text-gray-300 mt-4">
                The specific terms, deliverables, and timelines for each service will be outlined in individual service agreements or statements of work.
              </p>
            </div>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">User Responsibilities</h2>
              </div>
              <p className="text-gray-300 mb-4">By using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to any part of our services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Not use our services to transmit harmful or malicious code</li>
              </ul>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Payment Terms</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Pricing:</strong> All prices are quoted in USD or BDT and are subject to change with prior notice.</p>
                <p><strong className="text-white">Payment Schedule:</strong> Payment terms will be specified in individual service agreements. Typically, we require:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>50% upfront payment before project commencement</li>
                  <li>Remaining balance upon project completion or as per milestone schedule</li>
                </ul>
                <p><strong className="text-white">Late Payments:</strong> Late payments may incur interest charges of 1.5% per month or the maximum rate permitted by law.</p>
                <p><strong className="text-white">Refunds:</strong> Refund policies will be specified in individual service agreements. Generally, deposits are non-refundable once work has commenced.</p>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Our Property:</strong> The Legacy Script website, logo, branding, and all content (excluding client-specific work) remain our exclusive property.</p>
                <p><strong className="text-white">Client Work:</strong> Upon full payment, clients receive ownership of custom work products created specifically for them, unless otherwise agreed in writing.</p>
                <p><strong className="text-white">Third-Party Components:</strong> Some deliverables may include third-party components subject to their respective licenses.</p>
                <p><strong className="text-white">Portfolio Rights:</strong> We reserve the right to showcase completed projects in our portfolio unless confidentiality agreements prohibit such disclosure.</p>
              </div>
            </div>
          </motion.div>

          {/* Warranties and Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">Warranties and Disclaimers</h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Service Warranty:</strong> We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards.</p>
                <p><strong className="text-white">Website Disclaimer:</strong> Our website and information provided "as is" without warranties of any kind, either express or implied.</p>
                <p><strong className="text-white">No Guarantee:</strong> We do not guarantee that our services will meet your specific requirements or that they will be uninterrupted, timely, secure, or error-free.</p>
                <p><strong className="text-white">Third-Party Services:</strong> We are not responsible for the performance, availability, or content of third-party services integrated into our solutions.</p>
              </div>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Limitation of Liability</h2>
              </div>
              <p className="text-gray-300 mb-4">
                To the fullest extent permitted by law, Legacy Script shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages arising from your use or inability to use our services</li>
                <li>Damages arising from third-party services or content</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>
          </motion.div>

          {/* Confidentiality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Confidentiality</h2>
              <p className="text-gray-300 mb-4">
                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our engagement. This obligation survives termination of the service agreement.
              </p>
              <p className="text-gray-300">
                Confidential information does not include information that is publicly available, independently developed, or required to be disclosed by law.
              </p>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Termination</h2>
              <div className="space-y-3 text-gray-300">
                <p>Either party may terminate a service agreement with written notice as specified in the individual agreement.</p>
                <p>We reserve the right to terminate or suspend access to our website immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to us, other users, or third parties.</p>
                <p>Upon termination, you must cease all use of our services and website. Provisions that by their nature should survive termination shall survive, including intellectual property rights, disclaimers, and limitations of liability.</p>
              </div>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300">
                Any disputes arising from these Terms or our services shall be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through arbitration in Dhaka, Bangladesh, in accordance with the applicable arbitration rules.
              </p>
            </div>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us at:
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