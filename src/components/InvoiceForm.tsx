import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Save, X, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Invoice, InvoiceItem } from "./InvoiceManagement";

interface InvoiceFormProps {
  invoice: Invoice | null;
  onSave: (invoice: Invoice) => void;
  onCancel: () => void;
}

export function InvoiceForm({ invoice, onSave, onCancel }: InvoiceFormProps) {
  const [formData, setFormData] = useState<Invoice>(getInitialFormData(invoice));

  // Update formData when invoice prop changes (for editing)
  useEffect(() => {
    setFormData(getInitialFormData(invoice));
  }, [invoice]);

  function getInitialFormData(invoiceData: Invoice | null): Invoice {
    return {
      id: invoiceData?.id || Date.now().toString(),
      quoteNo: invoiceData?.quoteNo || "",
      date: invoiceData?.date || new Date().toISOString().split("T")[0],
      jobId: invoiceData?.jobId || "",
      clientName: invoiceData?.clientName || "",
      clientTitle: invoiceData?.clientTitle || "",
      clientContact: invoiceData?.clientContact || "",
      clientAddress: invoiceData?.clientAddress || "",
      projectTitle: invoiceData?.projectTitle || "",
      items: invoiceData?.items || [],
      amountInWords: invoiceData?.amountInWords || "",
      vatNote: invoiceData?.vatNote || "VAT and tax are not included in the invoice",
      termsAndConditions: invoiceData?.termsAndConditions || [
        "Monthly fee covers only maintenance and updates listed in the Scope of Work.",
        "New features or development outside the scope will be quoted separately.",
        "Monthly payment must be made within the first 7 days. VAT/TAX not included.",
        "Client must provide accurate content, images, and required access.",
        "Legacy Script is not responsible for issues caused by hosting providers or third-party developers.",
        "Either party may end the agreement with 30 days' notice.",
        "Proceeding with the service implies acceptance of these terms.",
      ],
      signatureName: invoiceData?.signatureName || "Quazi Ehsan Hossain",
      signatureTitle: invoiceData?.signatureTitle || "Chief Technology Officer",
      status: invoiceData?.status || "draft",
      createdAt: invoiceData?.createdAt || new Date().toISOString(),
      shareId: invoiceData?.shareId,
    };
  }

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        {
          id: Date.now().toString(),
          title: "",
          details: [""],
          price: "",
          priceSecondary: "",
        },
      ],
    });
  };

  const removeItem = (itemId: string) => {
    setFormData({
      ...formData,
      items: formData.items.filter((item) => item.id !== itemId),
    });
  };

  const updateItem = (itemId: string, field: string, value: any) => {
    setFormData({
      ...formData,
      items: formData.items.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item
      ),
    });
  };

  const addItemDetail = (itemId: string) => {
    setFormData({
      ...formData,
      items: formData.items.map((item) =>
        item.id === itemId ? { ...item, details: [...item.details, ""] } : item
      ),
    });
  };

  const updateItemDetail = (itemId: string, detailIndex: number, value: string) => {
    setFormData({
      ...formData,
      items: formData.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              details: item.details.map((detail, index) =>
                index === detailIndex ? value : detail
              ),
            }
          : item
      ),
    });
  };

  const removeItemDetail = (itemId: string, detailIndex: number) => {
    setFormData({
      ...formData,
      items: formData.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              details: item.details.filter((_, index) => index !== detailIndex),
            }
          : item
      ),
    });
  };

  const addTermsCondition = () => {
    setFormData({
      ...formData,
      termsAndConditions: [...formData.termsAndConditions, ""],
    });
  };

  const updateTermsCondition = (index: number, value: string) => {
    setFormData({
      ...formData,
      termsAndConditions: formData.termsAndConditions.map((term, i) =>
        i === index ? value : term
      ),
    });
  };

  const removeTermsCondition = (index: number) => {
    setFormData({
      ...formData,
      termsAndConditions: formData.termsAndConditions.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEzOSw5MiwyNDYsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-20"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {invoice ? "Edit Invoice" : "Create New Invoice"}
              </h1>
              <p className="text-gray-400">Fill in the details below</p>
            </div>
            <Button
              onClick={onCancel}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl text-white mb-4">Quote Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Quote No *</label>
                    <input
                      type="text"
                      required
                      value={formData.quoteNo}
                      onChange={(e) => setFormData({ ...formData, quoteNo: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="01"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">JOB ID *</label>
                    <input
                      type="text"
                      required
                      value={formData.jobId}
                      onChange={(e) => setFormData({ ...formData, jobId: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="WP-MO-01"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-gray-400 text-sm mb-2 block">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                  >
                    <option value="draft">Draft</option>
                    <option value="sent">Sent</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl text-white mb-4">Client Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Client Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="White Property"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Client Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.clientTitle}
                      onChange={(e) => setFormData({ ...formData, clientTitle: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="Tanim Iqbal - Founder"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Contact</label>
                    <input
                      type="text"
                      value={formData.clientContact}
                      onChange={(e) => setFormData({ ...formData, clientContact: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="+880 1970-067702"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Address</label>
                    <input
                      type="text"
                      value={formData.clientAddress}
                      onChange={(e) => setFormData({ ...formData, clientAddress: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="Flat-B5, House: 11, Road: 33, Gulshan-1, Dhaka-1212"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Title */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl text-white mb-4">Project Title *</h2>
                <input
                  type="text"
                  required
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                  placeholder="Webapp Maintenance"
                />
              </div>
            </div>

            {/* Service Items */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl text-white">Service Items</h2>
                  <Button
                    type="button"
                    onClick={addItem}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </div>

                {formData.items.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">No items added yet</p>
                ) : (
                  <div className="space-y-4">
                    {formData.items.map((item, itemIndex) => (
                      <div
                        key={item.id}
                        className="bg-slate-800/30 border border-white/10 rounded-xl p-4"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-white">Item {itemIndex + 1}</h3>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="text-gray-400 text-sm mb-2 block">Title *</label>
                            <input
                              type="text"
                              required
                              value={item.title}
                              onChange={(e) => updateItem(item.id, "title", e.target.value)}
                              className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                              placeholder="Web-app Property Management & Content Updates"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <label className="text-gray-400 text-sm">Details</label>
                              <button
                                type="button"
                                onClick={() => addItemDetail(item.id)}
                                className="text-xs text-purple-400 hover:text-purple-300"
                              >
                                + Add Detail
                              </button>
                            </div>
                            {item.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex gap-2 mb-2">
                                <input
                                  type="text"
                                  value={detail}
                                  onChange={(e) =>
                                    updateItemDetail(item.id, detailIndex, e.target.value)
                                  }
                                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                  placeholder="Add new property listings including title, description, pricing..."
                                />
                                {item.details.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeItemDetail(item.id, detailIndex)}
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-gray-400 text-sm mb-2 block">
                                Price (USD) *
                              </label>
                              <input
                                type="text"
                                required
                                value={item.price}
                                onChange={(e) => updateItem(item.id, "price", e.target.value)}
                                className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                placeholder="12,000/mo"
                              />
                            </div>
                            <div>
                              <label className="text-gray-400 text-sm mb-2 block">
                                Price (BDT) - Optional
                              </label>
                              <input
                                type="text"
                                value={item.priceSecondary || ""}
                                onChange={(e) =>
                                  updateItem(item.id, "priceSecondary", e.target.value)
                                }
                                className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                placeholder="12,000 BDT /mo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Amount in Words & VAT Note */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl text-white mb-4">Additional Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Amount in Words</label>
                    <input
                      type="text"
                      value={formData.amountInWords}
                      onChange={(e) =>
                        setFormData({ ...formData, amountInWords: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="Twelve Thousand Only"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">VAT Note</label>
                    <input
                      type="text"
                      value={formData.vatNote}
                      onChange={(e) => setFormData({ ...formData, vatNote: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="VAT and tax are not included in the invoice"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl text-white">Terms & Conditions</h2>
                  <Button
                    type="button"
                    onClick={addTermsCondition}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Term
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.termsAndConditions.map((term, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={term}
                        onChange={(e) => updateTermsCondition(index, e.target.value)}
                        className="flex-1 px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                        placeholder="Enter terms and condition..."
                      />
                      {formData.termsAndConditions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeTermsCondition(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl text-white mb-4">Signature Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Signature Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.signatureName}
                      onChange={(e) =>
                        setFormData({ ...formData, signatureName: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="Quazi Ehsan Hossain"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Signature Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.signatureTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, signatureTitle: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                      placeholder="Chief Technology Officer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end">
              <Button
                type="button"
                onClick={onCancel}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg shadow-orange-500/30"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Invoice
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}