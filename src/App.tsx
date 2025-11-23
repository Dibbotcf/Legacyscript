import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CaseStudy } from "./components/CaseStudy";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { AuthProvider, useAuth } from "./components/AuthContext";
import { Toaster } from "./components/ui/sonner";
import { SharedInvoice } from "./components/SharedInvoice";
import { getSharedInvoice } from "./utils/api.tsx";
import { ChatWidget } from "./components/ChatWidget";
import { MetaManager } from "./components/MetaManager";

type Page = "home" | "services" | "about" | "portfolio" | "contact" | "case-study" | "login" | "dashboard" | "shared-invoice";

interface Invoice {
  id: string;
  quoteNo: string;
  date: string;
  jobId: string;
  clientName: string;
  clientTitle: string;
  clientContact: string;
  clientAddress: string;
  projectTitle: string;
  items: any[];
  amountInWords: string;
  vatNote: string;
  termsAndConditions: string[];
  signatureName: string;
  signatureTitle: string;
  status: string;
  createdAt: string;
  shareId?: string;
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [sharedInvoice, setSharedInvoice] = useState<Invoice | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const shareId = urlParams.get('shared-invoice');
    
    if (shareId) {
      // Load invoice from Supabase
      getSharedInvoice(shareId).then((invoice) => {
        if (invoice) {
          setSharedInvoice(invoice);
          setCurrentPage("shared-invoice");
        }
      }).catch((error) => {
        console.error("Error loading shared invoice:", error);
      });
    }
  }, []);

  // Keyboard shortcut for Admin Login (Ctrl + Shift + C)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && (event.key === 'c' || event.key === 'C')) {
        event.preventDefault();
        setCurrentPage("login");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle authentication redirects
  useEffect(() => {
    if (currentPage === "login" && isAuthenticated) {
      setCurrentPage("dashboard");
    }
    if (currentPage === "dashboard" && !isAuthenticated) {
      setCurrentPage("login");
    }
  }, [currentPage, isAuthenticated]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewCaseStudy = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentPage("case-study");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero 
              onExploreServices={() => scrollToSection("services")} 
              onGetConsultation={() => {
                setCurrentPage("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <Services />
            <About />
            <Portfolio onViewCaseStudy={handleViewCaseStudy} />
            <Contact />
          </>
        );
      case "services":
        return <Services detailed />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio onViewCaseStudy={handleViewCaseStudy} />;
      case "contact":
        return <Contact />;
      case "case-study":
        return <CaseStudy projectIndex={selectedProject || 0} onBack={() => setCurrentPage("portfolio")} />;
      case "login":
        return <Login onLogin={() => setCurrentPage("dashboard")} />;
      case "dashboard":
        return <Dashboard onBackToHome={() => setCurrentPage("home")} />; 
      case "shared-invoice":
        return sharedInvoice ? <SharedInvoice invoice={sharedInvoice} /> : null;
      default:
        // Fallback to home page if unknown route
        return (
          <>
            <Hero 
              onExploreServices={() => scrollToSection("services")} 
              onGetConsultation={() => {
                setCurrentPage("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <Services />
            <About />
            <Portfolio onViewCaseStudy={handleViewCaseStudy} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative">
      <MetaManager />
      <AnimatedBackground />
      <Toaster />
      <ChatWidget />
      <div className="relative z-10">
        {currentPage !== "dashboard" && currentPage !== "login" && currentPage !== "shared-invoice" && (
          <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        )}
        <main key={currentPage}>
          {renderPage()}
        </main>
        {currentPage !== "dashboard" && currentPage !== "login" && currentPage !== "shared-invoice" && (
          <Footer onNavigate={setCurrentPage} />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}