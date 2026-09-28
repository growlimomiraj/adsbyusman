import React, { useState, useRef, useEffect } from "react";
import { ExactHeader } from "./components/ExactHeader";
import { ExactHero } from "./components/ExactHero";
import { ExactBrandSection } from "./components/ExactBrandSection";
import { ExactGrowthSolutions } from "./components/ExactGrowthSolutions";
import { ExactFooter } from "./components/ExactFooter";
import { AuditResults } from "./components/AuditResults";
import { ConsultationModal } from "./components/ConsultationModal";
import { PortfolioCustomizerModal } from "./components/PortfolioCustomizerModal";
import { InteractiveToolsModal, ToolType } from "./components/InteractiveToolsModal";
import { LegalModal, LegalTab } from "./components/LegalModal";
import { AuditOrderModal, AuditOrderData } from "./components/AuditOrderModal";
import { AuditResult, ProfileConfig } from "./types";
import { defaultProfile } from "./data/marketingData";
import { AdminPortal } from "./components/admin/AdminPortal";

// Growlimo Pages
import { GrowlimoAgencyPage } from "./components/pages/GrowlimoAgencyPage";
import { UbersuggestPage } from "./components/pages/UbersuggestPage";
import { AnswerThePublicPage } from "./components/pages/AnswerThePublicPage";
import { GoogleAdsGraderPage } from "./components/pages/GoogleAdsGraderPage";
import { BlogPage } from "./components/pages/BlogPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  const [profile, setProfile] = useState<ProfileConfig>(() => {
    const saved = localStorage.getItem("growlimo_profile_config");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name) {
          return parsed;
        }
      } catch (e) {
        return defaultProfile;
      }
    }
    return defaultProfile;
  });

  const [currentPage, setCurrentPage] = useState<string>("home");
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<ToolType | null>(null);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>("privacy");
  const [targetAuditUrl, setTargetAuditUrl] = useState("");
  const [isAuditOrderOpen, setIsAuditOrderOpen] = useState(false);
  const [auditOrderUrl, setAuditOrderUrl] = useState("");
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(() => {
    return window.location.hash === "#admin";
  });

  const auditInputRef = useRef<HTMLInputElement | null>(null);

  // Hidden admin keyboard shortcut: Ctrl+Shift+A or Command+Shift+A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#admin") {
        setIsAdminOpen(true);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigate between pages and scroll to top
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open audit order modal
  const handleOpenAuditOrder = (url: string) => {
    const clean = url.trim() || "shopify.com";
    setAuditOrderUrl(clean);
    setIsAuditOrderOpen(true);
  };

  // Save profile updates to localStorage
  const handleSaveProfile = (newProfile: ProfileConfig) => {
    setProfile(newProfile);
    localStorage.setItem("np_profile_config", JSON.stringify(newProfile));
  };

  // Scroll to hero input when "Free Audit" is clicked
  const handleFocusAudit = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        if (auditInputRef.current) {
          auditInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          auditInputRef.current.focus();
        }
      }, 100);
    } else {
      if (auditInputRef.current) {
        auditInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        auditInputRef.current.focus();
      }
    }
  };

  // Perform live website analysis
  const handleAnalyzeWebsite = async (url: string) => {
    setIsAuditing(true);
    setTargetAuditUrl(url);
    try {
      const response = await fetch("/api/analyze-site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      if (data && data.domain) {
        setAuditResult(data);
        setTimeout(() => {
          const el = document.getElementById("audit-results");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    } catch (err) {
      console.error("Audit fetch error:", err);
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#f25f22] selection:text-white font-sans antialiased">
      {/* Header with navigation and language selector */}
      <ExactHeader
        profile={profile}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <main className="flex-1">
        {currentPage === "home" && (
          <>
            {/* Hero with Let's Grow Your Business, input, and Growlimo agency showcase */}
            <ExactHero
              profile={profile}
              onAnalyze={handleAnalyzeWebsite}
              onOrderAudit={handleOpenAuditOrder}
              isLoading={isAuditing}
              auditInputRef={auditInputRef}
            />

            {/* Live Interactive Audit Results Report (appears below hero when run) */}
            {auditResult && (
              <AuditResults
                audit={auditResult}
                onOpenConsultation={() => setIsConsultationOpen(true)}
                onClose={() => setAuditResult(null)}
              />
            )}

            {/* Exact Globally Recognized Renowned Brands Dark Grid */}
            <ExactBrandSection />

            {/* Strategic Performance Growth Solutions & Enterprise Capabilities */}
            <ExactGrowthSolutions
              profile={profile}
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentPage === "growlimo" && (
          <GrowlimoAgencyPage
            profile={profile}
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "ubersuggest" && (
          <UbersuggestPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "answerthepublic" && (
          <AnswerThePublicPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "google-ads-grader" && (
          <GoogleAdsGraderPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "blog" && (
          <BlogPage
            profile={profile}
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "about" && (
          <AboutPage
            profile={profile}
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "contact" && (
          <ContactPage
            profile={profile}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer with working legal and navigation links (hidden on ubersuggest page which has its own footer) */}
      {currentPage !== "ubersuggest" && (
        <ExactFooter
          profile={profile}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenLegal={(tab) => {
            setLegalTab(tab);
            setIsLegalOpen(true);
          }}
          onOpenTool={(tool) => setActiveTool(tool)}
          onFocusAudit={handleFocusAudit}
        />
      )}

      {/* Hidden Executive Admin Portal */}
      {isAdminOpen && (
        <AdminPortal
          onClose={() => {
            setIsAdminOpen(false);
            if (window.location.hash === "#admin") {
              window.history.pushState(null, "", window.location.pathname);
            }
          }}
        />
      )}

      {/* Bespoke Manual Website Audit Order Modal */}
      <AuditOrderModal
        isOpen={isAuditOrderOpen}
        onClose={() => setIsAuditOrderOpen(false)}
        initialUrl={auditOrderUrl}
        profile={profile}
      />

      {/* Consultation / Proposal Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        profile={profile}
        initialUrl={targetAuditUrl || auditResult?.url || ""}
      />

      {/* Profile Personalization Modal */}
      <PortfolioCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />

      {/* Interactive Free Growth Tools Modal (Giving Back) */}
      <InteractiveToolsModal
        toolType={activeTool}
        onClose={() => setActiveTool(null)}
        onOpenConsultation={() => {
          setActiveTool(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Legal & Compliance Privacy/Terms Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={legalTab}
      />
    </div>
  );
}
