import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Copy, Check, ExternalLink, Info, Code, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { config, DOMAIN_SETUP_INSTRUCTIONS, getFrontendUrl } from "../utils/config.tsx";
import { projectId } from "../utils/supabase/info.tsx";

interface DomainConfigProps {
  onBack: () => void;
}

export function DomainConfig({ onBack }: DomainConfigProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const currentApiUrl = config.customApiDomain || `https://${projectId}.supabase.co/functions/v1/make-server-044ccb36`;
  const currentFrontendUrl = getFrontendUrl();

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEzOSw5MiwyNDYsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            onClick={onBack}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Domain Configuration
            </h2>
            <p className="text-gray-400">
              Configure custom domains for your Legacy Script website
            </p>
          </motion.div>

          {/* Current Configuration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl text-white">Current URLs</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Frontend URL</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-3 font-mono text-sm text-white overflow-x-auto">
                      {currentFrontendUrl}
                    </div>
                    <Button
                      onClick={() => copyToClipboard(currentFrontendUrl, 'frontend')}
                      className="bg-slate-700 hover:bg-slate-600"
                    >
                      {copied === 'frontend' ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">API URL</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-3 font-mono text-sm text-white overflow-x-auto">
                      {currentApiUrl}
                    </div>
                    <Button
                      onClick={() => copyToClipboard(currentApiUrl, 'api')}
                      className="bg-slate-700 hover:bg-slate-600"
                    >
                      {copied === 'api' ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Frontend Setup Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl text-white">{DOMAIN_SETUP_INSTRUCTIONS.frontend.title}</h3>
              </div>

              <div className="space-y-3 mb-6">
                {DOMAIN_SETUP_INSTRUCTIONS.frontend.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{step.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://vercel.com/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Deploy to Vercel
                </a>
                <a
                  href="https://app.netlify.com/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Deploy to Netlify
                </a>
                <a
                  href="https://pages.cloudflare.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Deploy to Cloudflare
                </a>
              </div>
            </div>
          </motion.div>

          {/* Backend Setup Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl text-white">{DOMAIN_SETUP_INSTRUCTIONS.backend.title}</h3>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-300 text-sm">
                    {DOMAIN_SETUP_INSTRUCTIONS.backend.note}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {DOMAIN_SETUP_INSTRUCTIONS.backend.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{step.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Configuration File */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-green-400" />
                <h3 className="text-xl text-white">Edit Configuration</h3>
              </div>

              <p className="text-gray-400 mb-4">
                To use custom domains, edit <code className="text-purple-400 bg-slate-800 px-2 py-1 rounded">/utils/config.tsx</code>:
              </p>

              <div className="bg-slate-950/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>{`export const config = {
  // Your custom API domain
  customApiDomain: 'https://api.legacyscript.com',
  
  // Your custom frontend domain
  customFrontendDomain: 'https://legacyscript.com',
};`}</code>
                </pre>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Button
                  onClick={() => copyToClipboard(`export const config = {\n  customApiDomain: 'https://api.legacyscript.com',\n  customFrontendDomain: 'https://legacyscript.com',\n};`, 'config')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  {copied === 'config' ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Example
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* DNS Configuration Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl text-white">DNS Configuration Example</h3>
              </div>

              <p className="text-gray-400 mb-4">
                Add these DNS records in your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-gray-400 p-3">Type</th>
                      <th className="text-left text-gray-400 p-3">Name</th>
                      <th className="text-left text-gray-400 p-3">Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="p-3 font-mono">A</td>
                      <td className="p-3 font-mono">@</td>
                      <td className="p-3 font-mono text-xs">76.76.21.21 (Your hosting IP)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-3 font-mono">CNAME</td>
                      <td className="p-3 font-mono">www</td>
                      <td className="p-3 font-mono text-xs">legacyscript.com</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">CNAME</td>
                      <td className="p-3 font-mono">api</td>
                      <td className="p-3 font-mono text-xs">gelwmweplzzlucejybxr.supabase.co</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="text-yellow-300 text-sm">
                    <p className="mb-2">DNS changes can take 24-48 hours to propagate globally.</p>
                    <p>For Vercel/Netlify, they will provide you with specific DNS records to add.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}