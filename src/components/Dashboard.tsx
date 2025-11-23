import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  LogOut,
  Mail,
  Phone,
  User,
  MessageSquare,
  Calendar,
  Trash2,
  Download,
  RefreshCw,
  ArrowLeft,
  FileText,
  Wifi,
  WifiOff,
  Globe,
  Settings,
  Share2,
} from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "./AuthContext";
import { InvoiceManagement } from "./InvoiceManagement";
import { DatabaseStatus } from "./DatabaseStatus";
import { DomainConfig } from "./DomainConfig";
import { SEOSettings } from "./SEOSettings";
import { getSubmissions, deleteSubmission } from "../utils/api.tsx";
import { useRealtime } from "../hooks/useRealtime.tsx";

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}

interface DashboardProps {
  onBackToHome?: () => void;
}

export function Dashboard({ onBackToHome }: DashboardProps) {
  const { logout } = useAuth();
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [showInvoices, setShowInvoices] = useState(false);
  const [showDomainConfig, setShowDomainConfig] = useState(false);
  const [showSEOSettings, setShowSEOSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  const loadSubmissions = async () => {
    try {
      console.log("Dashboard: Loading submissions...");
      setIsOnline(true);
      const data = await getSubmissions();
      
      const validSubmissions = Array.isArray(data) 
        ? data.filter((sub) => sub && sub.id && sub.timestamp)
        : [];
      
      setSubmissions(validSubmissions);
    } catch (error) {
      console.error("Dashboard: Error loading submissions:", error);
      setIsOnline(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  useRealtime(loadSubmissions, 3000, !showInvoices);

  if (showInvoices) {
    return <InvoiceManagement onBack={() => setShowInvoices(false)} />;
  }

  if (showDomainConfig) {
    return <DomainConfig onBack={() => setShowDomainConfig(false)} />;
  }

  if (showSEOSettings) {
    return <SEOSettings onBack={() => setShowSEOSettings(false)} />;
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      try {
        await deleteSubmission(id);
        setSubmissions(submissions.filter((sub) => sub.id !== id));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      } catch (error) {
        console.error("Error deleting submission:", error);
        alert("Failed to delete submission. Please try again.");
      }
    }
  };

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Message", "Date"];
    const rows = submissions.map((sub) => [
      sub.name,
      sub.email,
      sub.phone,
      sub.message.replace(/\n/g, " "),
      new Date(sub.timestamp).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `legacy-script-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEzOSw5MiwyNDYsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 pt-20"
        >
          {/* Back to Home Button */}
          {onBackToHome && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6"
            >
              <Button
                onClick={onBackToHome}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </motion.div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-400 flex items-center gap-2">
                Manage contact form submissions
                <span className="flex items-center gap-1 text-xs">
                  {isOnline ? (
                    <>
                      <Wifi className="w-3 h-3 text-green-400" />
                      <span className="text-green-400">Real-time sync active</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="w-3 h-3 text-red-400" />
                      <span className="text-red-400">Offline</span>
                    </>
                  )}
                </span>
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
               <Button
                onClick={() => setShowSEOSettings(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30"
              >
                <Share2 className="w-4 h-4 mr-2" />
                SEO & Social
              </Button>
              <Button
                onClick={() => setShowDomainConfig(true)}
                className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/30"
              >
                <Settings className="w-4 h-4 mr-2" />
                Domain
              </Button>
              <Button
                onClick={loadSubmissions}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/30"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button
                onClick={exportToCSV}
                disabled={submissions.length === 0}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button
                onClick={logout}
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Database Status Check */}
        <DatabaseStatus />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Submissions</p>
                  <p className="text-2xl text-white">{submissions.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Today</p>
                  <p className="text-2xl text-white">
                    {
                      submissions.filter((sub) => {
                        const today = new Date().toDateString();
                        const subDate = new Date(sub.timestamp).toDateString();
                        return today === subDate;
                      }).length
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">This Week</p>
                  <p className="text-2xl text-white">
                    {
                      submissions.filter((sub) => {
                        const weekAgo = new Date();
                        weekAgo.setDate(weekAgo.getDate() - 7);
                        return new Date(sub.timestamp) > weekAgo;
                      }).length
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Management Card */}
          <motion.div 
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInvoices(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-pink-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Manage</p>
                  <p className="text-lg text-white">Invoices →</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Submissions List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* List */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-h-[600px] overflow-y-auto">
              <h2 className="text-xl text-white mb-4">All Submissions</h2>
              
              {isLoading ? (
                <div className="text-center py-12">
                  <Mail className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">Loading submissions...</p>
                </div>
              ) : isOnline ? (
                submissions.length === 0 ? (
                  <div className="text-center py-12">
                    <Mail className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400">No submissions yet</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Form submissions will appear here
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {submissions.map((submission) => (
                      <motion.div
                        key={submission.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedSubmission(submission)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedSubmission?.id === submission.id
                            ? "bg-purple-500/20 border-purple-500/50"
                            : "bg-slate-800/30 border-white/10 hover:border-purple-500/30"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <User className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <p className="text-white truncate">{submission.name}</p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                              <p className="text-gray-400 text-sm truncate">
                                {submission.email}
                              </p>
                            </div>
                            <p className="text-gray-500 text-xs">
                              {formatDate(submission.timestamp)}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(submission.id);
                            }}
                            className="text-red-400 hover:text-red-300 transition-colors flex-shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )
              ) : (
                <div className="text-center py-12">
                  <WifiOff className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">Offline</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Please check your internet connection
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-h-[600px] overflow-y-auto">
              <h2 className="text-xl text-white mb-4">Details</h2>
              
              {selectedSubmission ? (
                <div className="space-y-6">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Name
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <User className="w-5 h-5 text-purple-400" />
                      <p className="text-white">{selectedSubmission.name}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Email
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <Mail className="w-5 h-5 text-orange-400" />
                      <a
                        href={`mailto:${selectedSubmission.email}`}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {selectedSubmission.email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Phone
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <a
                        href={`tel:${selectedSubmission.phone}`}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {selectedSubmission.phone || "Not provided"}
                      </a>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Message
                    </label>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-green-400 mb-2" />
                      <p className="text-white whitespace-pre-wrap">
                        {selectedSubmission.message}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Submitted
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <p className="text-white">
                        {formatDate(selectedSubmission.timestamp)}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() =>
                        window.open(
                          `mailto:${selectedSubmission.email}?subject=Re: Your inquiry to Legacy Script`
                        )
                      }
                      className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Reply via Email
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">Select a submission</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Click on a submission to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}