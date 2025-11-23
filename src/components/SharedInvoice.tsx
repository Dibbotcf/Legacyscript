import { motion } from "motion/react";
import { Invoice } from "./InvoiceManagement";
import logoImage from "figma:asset/7fef93e37053ede52e174f65794d6da06005d1b8.png";

interface SharedInvoiceProps {
  invoice: Invoice;
}

export function SharedInvoice({ invoice }: SharedInvoiceProps) {
  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEzOSw5MiwyNDYsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Shared Invoice Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 pt-20"
        >
          <div className="inline-block px-6 py-3 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm">
            <span className="text-sm text-indigo-300">📄 Shared Invoice</span>
          </div>
        </motion.div>

        {/* Invoice Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto bg-white shadow-2xl"
          id="invoice-content"
        >
          {/* Header with Logo */}
          <div className="p-8 sm:p-12">
            <div className="flex justify-between items-start mb-12">
              {/* Quotation To */}
              <div>
                <p className="text-sm text-indigo-700 mb-1" style={{ fontFamily: 'system-ui' }}>
                  Quotation To
                </p>
                <h2 className="text-2xl text-indigo-900 mb-2" style={{ fontFamily: 'system-ui', fontWeight: 600 }}>
                  {invoice.clientName}
                </h2>
                <p className="text-indigo-700 mb-3" style={{ fontFamily: 'system-ui' }}>
                  {invoice.clientTitle}
                </p>
                {invoice.clientContact && (
                  <p className="text-sm text-gray-600 mb-1">Contact: {invoice.clientContact}</p>
                )}
                {invoice.clientAddress && (
                  <>
                    <p className="text-sm text-gray-600">{invoice.clientAddress.split(',')[0]}</p>
                    <p className="text-sm text-gray-600">{invoice.clientAddress.split(',').slice(1).join(',')}</p>
                  </>
                )}
              </div>

              {/* Logo and Quote Info */}
              <div className="text-right">
                {/* Legacy Script Logo */}
                <div className="mb-4 ml-auto">
                  <img 
                    src={logoImage} 
                    alt="Legacy Script Logo" 
                    style={{ width: '220px', height: 'auto' }}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-end gap-8">
                    <span className="text-sm text-gray-600">Quote No</span>
                    <span className="text-sm text-gray-900">{invoice.quoteNo}</span>
                  </div>
                  <div className="flex justify-end gap-8">
                    <span className="text-sm text-gray-600">Date</span>
                    <span className="text-sm text-gray-900">
                      {new Date(invoice.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      }).replace(/\//g, '/')}
                    </span>
                  </div>
                  <div className="flex justify-end gap-8">
                    <span className="text-sm text-gray-600">JOB ID</span>
                    <span className="text-sm text-gray-900">{invoice.jobId}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Title */}
            <div className="text-center mb-12">
              <h3 className="text-lg text-gray-600 mb-2" style={{ fontFamily: 'system-ui' }}>
                Quotation
              </h3>
              <h1 className="text-3xl text-gray-900" style={{ fontFamily: 'system-ui', fontWeight: 500, letterSpacing: '0.5px' }}>
                {invoice.projectTitle}
              </h1>
            </div>

            {/* Services Table */}
            <div className="mb-8" style={{ backgroundColor: '#e8e5f5', borderRadius: '16px', padding: '32px' }}>
              <div className="border-b-2 border-indigo-900 pb-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-900" style={{ fontFamily: 'system-ui', fontWeight: 500 }}>
                    Details
                  </span>
                  <span className="text-gray-900" style={{ fontFamily: 'system-ui', fontWeight: 500 }}>
                    Price (in USD)
                  </span>
                </div>
              </div>

              {invoice.items.map((item, index) => (
                <div key={item.id} className="mb-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-gray-900 flex-1" style={{ fontFamily: 'system-ui', fontWeight: 500 }}>
                      {String(index + 1).padStart(2, '0')} {item.title}
                    </h4>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <ul className="space-y-2 flex-1" style={{ paddingLeft: '2rem' }}>
                      {item.details.map((detail, idx) => (
                        detail && (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="mr-2">-</span>
                            <span>{detail}</span>
                          </li>
                        )
                      ))}
                    </ul>
                    
                    <div className="text-right ml-8">
                      <div className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'system-ui', fontWeight: 500 }}>
                        {item.price}
                      </div>
                      {item.priceSecondary && (
                        <div className="text-xl text-gray-900" style={{ fontFamily: 'system-ui', fontWeight: 500 }}>
                          {item.priceSecondary}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Amount in Words */}
              {invoice.amountInWords && (
                <div className="text-center mt-8 pt-4">
                  <p className="text-sm text-gray-700">
                    In words: <span style={{ fontWeight: 500 }}>{invoice.amountInWords}</span>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{invoice.vatNote}</p>
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="mb-8">
              <h3 className="text-lg text-gray-900 mb-3" style={{ fontFamily: 'system-ui', fontWeight: 600 }}>
                Terms & Conditions
              </h3>
              <ul className="space-y-2">
                {invoice.termsAndConditions.map((term, index) => (
                  term && (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{term}</span>
                    </li>
                  )
                ))}
              </ul>
            </div>

            {/* Signature */}
            <div className="mt-12 mb-8">
              <div className="mb-2">
                <p className="text-sm text-gray-600">Signature</p>
              </div>
              <div className="mb-4">
                <div className="text-2xl text-gray-900 italic" style={{ fontFamily: 'cursive' }}>
                  {invoice.signatureName.split(' ')[0].charAt(0)}. {invoice.signatureName.split(' ').slice(1).join(' ')}
                </div>
              </div>
              <div>
                <p className="text-gray-900" style={{ fontFamily: 'system-ui', fontWeight: 500 }}>
                  {invoice.signatureName}
                </p>
                <p className="text-sm text-gray-600">{invoice.signatureTitle}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-gray-200 mt-12" style={{ backgroundColor: '#3e3b6b', marginLeft: '-3rem', marginRight: '-3rem', marginBottom: '-3rem', padding: '1.5rem 3rem' }}>
              <div className="flex justify-between items-center text-white">
                <div className="text-sm">
                  <span style={{ fontWeight: 500 }}>legacyscript.co</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>107 Green Road, Tejgaon, Dhaka</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Powered By Legacy Script */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 mb-4"
        >
          <p className="text-gray-400 text-sm">
            Powered by <span className="text-indigo-400">Legacy Script</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
