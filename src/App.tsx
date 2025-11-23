import { useState, useEffect, Suspense, lazy } from "react";
import { AuthProvider, useAuth } from "./components/AuthContext";
import { Toaster } from "./components/ui/sonner";
import { SharedInvoice } from "./components/SharedInvoice"; // Keep this one static or lazy? Let's lazy load it too but strictly it is conditional.
import { getSharedInvoice } from "./utils/api.tsx";
import { ChatWidget } from "./components/ChatWidget";
import { MetaManager } from "./components/MetaManager";
import { AnimatedBackground } from "./components/AnimatedBackground"; // Keep background static for immediate visual feedback
import { Loading } from "./components/Loading";

// Lazy load components to split chunks
const Navigation = lazy(() => import("./components/Navigation").then(module => ({ default: module.Navigation })));
const Hero = lazy(() => import("./components/Hero").then(module => ({ default: module.Hero })));
const Services = lazy(() => import("./components/Services").then(module => ({ default: module.Services })));
const About = lazy(() => import("./components/About").then(module => ({ default: module.About })));
const Portfolio = lazy(() => import("./components/Portfolio").then(module => ({ default: module.Portfolio })));
const Contact = lazy(() => import("./components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));
const CaseStudy = lazy(() => import("./components/CaseStudy").then(module => ({ default: module.CaseStudy })));
const Login = lazy(() => import("./components/Login").then(module => ({ default: module.Login })));
const Dashboard = lazy(() => import("./components/Dashboard").then(module => ({ default: module.Dashboard })));
const LazySharedInvoice = lazy(() => import("./components/SharedInvoice").then(module => ({ default: module.SharedInvoice })));

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
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        );
      case "services":
        return (
          <Suspense fallback={<Loading />}>
            <Services detailed />
          </Suspense>
        );
      case "about":
        return (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        );
      case "portfolio":
        return (
          <Suspense fallback={<Loading />}>
            <Portfolio onViewCaseStudy={handleViewCaseStudy} />
          </Suspense>
        );
      case "contact":
        return (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        );
      case "case-study":
        return (
          <Suspense fallback={<Loading />}>
            <CaseStudy projectIndex={selectedProject || 0} onBack={() => setCurrentPage("portfolio")} />
          </Suspense>
        );
      case "login":
        return (
          <Suspense fallback={<Loading />}>
            <Login onLogin={() => setCurrentPage("dashboard")} />
          </Suspense>
        );
      case "dashboard":
        return (
          <Suspense fallback={<Loading />}>
            <Dashboard onBackToHome={() => setCurrentPage("home")} />
          </Suspense>
        );
      case "shared-invoice":
        return sharedInvoice ? (
          <Suspense fallback={<Loading />}>
            <LazySharedInvoice invoice={sharedInvoice} />
          </Suspense>
        ) : null;
      default:
        // Fallback to home page if unknown route
        return (
          <Suspense fallback={<Loading />}>
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
          </Suspense>
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
          <Suspense fallback={<div className="h-20" />}>
            <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
          </Suspense>
        )}
        <main key={currentPage}>
          {renderPage()}
        </main>
        {currentPage !== "dashboard" && currentPage !== "login" && currentPage !== "shared-invoice" && (
          <Suspense fallback={<div className="h-20" />}>
            <Footer onNavigate={setCurrentPage} />
          </Suspense>
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
