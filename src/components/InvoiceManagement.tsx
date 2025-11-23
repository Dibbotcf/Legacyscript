import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Search,
  Share2,
  Check,
  Wifi,
  WifiOff,
} from "lucide-react";
import { Button } from "./ui/button";
import { InvoiceForm } from "./InvoiceForm";
import { InvoicePreview } from "./InvoicePreview";
import { toast } from "sonner@2.0.3";
import { getInvoices, saveInvoice as saveInvoiceAPI, updateInvoice as updateInvoiceAPI, deleteInvoice as deleteInvoiceAPI } from "../utils/api.tsx";
import { useRealtime } from "../hooks/useRealtime.tsx";

export interface InvoiceItem {
  id: string;
  title: string;
  details: string[];
  price: string;
  priceSecondary?: string;
}

export interface Invoice {
  id: string;
  quoteNo: string;
  date: string;
  jobId: string;
  clientName: string;
  clientTitle: string;
  clientContact: string;
  clientAddress: string;
  projectTitle: string;
  items: InvoiceItem[];
  amountInWords: string;
  vatNote: string;
  termsAndConditions: string[];
  signatureName: string;
  signatureTitle: string;
  status: "draft" | "sent" | "paid";
  createdAt: string;
  shareId?: string;
}

interface InvoiceManagementProps {
  onBack: () => void;
}

export function InvoiceManagement({ onBack }: InvoiceManagementProps) {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentView, setCurrentView] = useState<"list" | "form" | "preview">("list");
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    loadInvoices();
    const currentRef = setInterval(() => {
      if (isOnline) {
        loadInvoices();
      }
    }, 60000);
    return () => clearInterval(currentRef);
  }, [isOnline]);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const loadInvoices = async () => {
    try {
      const data = await getInvoices();
      // Ensure data is an array and filter out any null/invalid entries
      const validInvoices = Array.isArray(data)
        ? data.filter((inv) => inv && inv.id && inv.createdAt)
        : [];
      validInvoices.sort((a: Invoice, b: Invoice) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setInvoices(validInvoices);
    } catch (error) {
      console.error("Error loading invoices:", error);
      toast.error("Failed to load invoices");
    }
  };

  const saveInvoice = (invoice: Invoice) => {
    let updated: Invoice[];
    if (editingInvoice) {
      updated = invoices.map((inv) => (inv.id === invoice.id ? invoice : inv));
    } else {
      updated = [invoice, ...invoices];
    }
    saveInvoiceAPI(invoice).then(() => {
      setInvoices(updated);
      setCurrentView("list");
      setEditingInvoice(null);
    });
  };

  const updateInvoice = (invoice: Invoice) => {
    let updated: Invoice[];
    if (editingInvoice) {
      updated = invoices.map((inv) => (inv.id === invoice.id ? invoice : inv));
    } else {
      updated = [invoice, ...invoices];
    }
    updateInvoiceAPI(invoice).then(() => {
      setInvoices(updated);
      setCurrentView("list");
      setEditingInvoice(null);
    });
  };

  const deleteInvoice = (id: string) => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      const updated = invoices.filter((inv) => inv.id !== id);
      deleteInvoiceAPI(id).then(() => {
        setInvoices(updated);
      });
    }
  };

  const handleCreateNew = () => {
    setEditingInvoice(null);
    setCurrentView("form");
  };

  const handleEdit = (invoice: Invoice) => {
    setEditingInvoice(invoice);
    setCurrentView("form");
  };

  const handleView = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setCurrentView("preview");
  };

  const handleShare = async (invoice: Invoice) => {
    try {
      // Generate unique share ID if not exists
      let shareId = invoice.shareId;
      let updatedInvoice = invoice;
      
      if (!shareId) {
        shareId = `INV-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Update invoice with share ID
        updatedInvoice = { ...invoice, shareId };
        
        // Save to database
        await updateInvoiceAPI(updatedInvoice);
        
        // Update local state
        const updated = invoices.map((inv) => 
          inv.id === invoice.id ? updatedInvoice : inv
        );
        setInvoices(updated);
      }

      // Generate shareable link
      const shareUrl = `${window.location.origin}?shared-invoice=${shareId}`;
      
      // Use legacy copy method (more reliable across contexts)
      const copyToClipboard = (text: string) => {
        // Create a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '-9999px';
        document.body.appendChild(textarea);
        
        try {
          // Select and copy
          textarea.select();
          textarea.setSelectionRange(0, 99999); // For mobile devices
          
          const successful = document.execCommand('copy');
          document.body.removeChild(textarea);
          
          if (successful) {
            setCopiedId(invoice.id);
            toast.success("Share link copied to clipboard!", {
              description: "Anyone with this link can view the invoice"
            });
            setTimeout(() => setCopiedId(null), 3000);
            return true;
          }
          return false;
        } catch (err) {
          document.body.removeChild(textarea);
          console.error('execCommand copy error:', err);
          return false;
        }
      };
      
      // Try legacy copy first (most reliable)
      const copied = copyToClipboard(shareUrl);
      
      if (!copied) {
        // Final fallback: show link in prompt
        prompt("Copy this share link:", shareUrl);
        toast.success("Share link generated!");
      }
    } catch (error) {
      console.error('Share error:', error);
      toast.error("Failed to generate share link");
    }
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.quoteNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.jobId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.projectTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (currentView === "form") {
    return (
      <InvoiceForm
        invoice={editingInvoice}
        onSave={saveInvoice}
        onCancel={() => {
          setCurrentView("list");
          setEditingInvoice(null);
        }}
      />
    );
  }

  if (currentView === "preview" && selectedInvoice) {
    return (
      <InvoicePreview
        invoice={selectedInvoice}
        onBack={() => setCurrentView("list")}
        onEdit={() => handleEdit(selectedInvoice)}
      />
    );
  }

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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Invoice Management
              </h1>
              <p className="text-gray-400">
                Create, manage, and track your quotations and invoices
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleCreateNew}
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg shadow-orange-500/30"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Invoice
              </Button>
              <Button
                onClick={onBack}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white"
              >
                Back to Dashboard
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by client, quote no, job ID, or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
            />
          </div>
        </motion.div>

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
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Invoices</p>
                  <p className="text-2xl text-white">{invoices.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Draft</p>
                  <p className="text-2xl text-white">
                    {invoices.filter((inv) => inv.status === "draft").length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-lg" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Sent</p>
                  <p className="text-2xl text-white">
                    {invoices.filter((inv) => inv.status === "sent").length}
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
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Paid</p>
                  <p className="text-2xl text-white">
                    {invoices.filter((inv) => inv.status === "paid").length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Invoice List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl text-white mb-4">All Invoices</h2>

            {filteredInvoices.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">
                  {searchQuery ? "No invoices found matching your search" : "No invoices yet"}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {!searchQuery && "Create your first invoice to get started"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400 text-sm">Quote No</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm">Client</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm">Project</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm">Date</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm">Status</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((invoice) => (
                      <motion.tr
                        key={invoice.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4 text-white">{invoice.quoteNo}</td>
                        <td className="py-4 px-4">
                          <div>
                            <p className="text-white">{invoice.clientName}</p>
                            <p className="text-gray-400 text-sm">{invoice.clientTitle}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-white">{invoice.projectTitle}</td>
                        <td className="py-4 px-4 text-gray-400 text-sm">
                          {new Date(invoice.date).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              invoice.status === "paid"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : invoice.status === "sent"
                                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            }`}
                          >
                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleView(invoice)}
                              className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                              title="View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleEdit(invoice)}
                              className="p-2 text-orange-400 hover:bg-orange-500/20 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteInvoice(invoice.id)}
                              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleShare(invoice)}
                              className="p-2 text-purple-400 hover:bg-purple-500/20 rounded-lg transition-colors"
                              title="Share"
                            >
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}