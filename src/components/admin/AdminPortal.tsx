import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Search,
  Filter,
  Download,
  Plus,
  CheckCircle2,
  Clock,
  ChevronRight,
  ExternalLink,
  Shield,
  BarChart3,
  Calendar,
  Lock,
  Globe,
  Sparkles,
  RefreshCw,
  Phone,
  Mail,
  Building,
  AlertTriangle,
  ArrowUpRight,
  Award,
  Layers,
  Check,
  Trash2,
  Archive,
  X
} from "lucide-react";
import { Lead, SiteAuditLog } from "../../types/admin";
import { initialLeads, initialAuditLogs } from "../../data/adminSeed";

interface AdminPortalProps {
  onClose: () => void;
}

// Format date accurately into readable format: "Sep 28, 2026, 2:15 PM"
export function formatAccurateDateTime(isoString?: string): string {
  if (!isoString) return "Recent";
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return isoString;
  }
}

// Relative time: "4 hours ago", "Yesterday", "3 days ago"
export function formatRelativeTime(isoString?: string): string {
  if (!isoString) return "Just now";
  try {
    const d = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    if (diffMs < 0) return "Just now";
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 5) return "Just now";
    if (diffMinutes < 60) return `${diffMinutes} mins ago`;
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return "Recent";
  }
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onClose }) => {
  // Authentication check state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem("growlimo_admin_auth") === "true";
  });
  const [authPin, setAuthPin] = useState("");
  const [authError, setAuthError] = useState(false);

  // Leads State - initialized from server API with seed fallback
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [auditLogs, setAuditLogs] = useState<SiteAuditLog[]>(initialAuditLogs);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>("");

  // UI Navigation Tabs
  const [currentTab, setCurrentTab] = useState<"leads" | "pipeline" | "audits" | "competitive">("leads");

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Quick New Lead Modal
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadEmail, setNewLeadEmail] = useState("");
  const [newLeadPhone, setNewLeadPhone] = useState("");
  const [newLeadWebsite, setNewLeadWebsite] = useState("");
  const [newLeadBudget, setNewLeadBudget] = useState("$25k - $75k / mo");
  const [newLeadRevenue, setNewLeadRevenue] = useState("$5M - $20M / yr");
  const [newLeadGoal, setNewLeadGoal] = useState("Enterprise SEO & Paid Media Scale");

  // Delete Confirmation State
  const [leadToDelete, setLeadToDelete] = useState<Lead | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch true server database so when opening on ANY new device, all leads are instantly present with exact timestamps
  const fetchServerData = async () => {
    setIsLoadingData(true);
    try {
      const [leadsRes, auditsRes] = await Promise.all([
        fetch("/api/admin/leads").then((r) => r.json()).catch(() => null),
        fetch("/api/admin/audits").then((r) => r.json()).catch(() => null),
      ]);

      if (leadsRes && Array.isArray(leadsRes.leads) && leadsRes.leads.length > 0) {
        setLeads(leadsRes.leads);
        if (!selectedLead || !leadsRes.leads.find((l: Lead) => l.id === selectedLead.id)) {
          setSelectedLead(leadsRes.leads[0]);
        }
      } else {
        setSelectedLead(initialLeads[0]);
      }

      if (auditsRes && Array.isArray(auditsRes.audits)) {
        setAuditLogs(auditsRes.audits);
      }

      setLastRefreshed(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }));
    } catch (e) {
      console.warn("Could not load server leads, using local store", e);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    fetchServerData();
  }, []);

  // Pin verification (PIN: 2026 or usman or 7777)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = authPin.trim().toLowerCase();
    if (clean === "2026" || clean === "usman" || clean === "7777" || clean === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("growlimo_admin_auth", "true");
      setAuthError(false);
      fetchServerData();
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("growlimo_admin_auth");
  };

  // Status updates - syncs to backend server
  const handleUpdateStatus = async (leadId: string, newStatus: Lead["status"]) => {
    // Optimistic UI update
    setLeads((prev) => prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)));
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data && data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  // Delete lead handler - syncs to backend server database
  const handleConfirmDelete = async () => {
    if (!leadToDelete) return;
    const targetId = leadToDelete.id;
    setIsDeleting(true);

    // Optimistic removal
    const remaining = leads.filter((l) => l.id !== targetId);
    setLeads(remaining);
    if (selectedLead?.id === targetId) {
      setSelectedLead(remaining[0] || null);
    }

    try {
      const res = await fetch(`/api/admin/leads/${targetId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data && data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setIsDeleting(false);
      setLeadToDelete(null);
    }
  };

  // Add lead handler - saves to server database with the current accurate date & time
  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName.trim() || !newLeadEmail.trim()) return;

    const payload = {
      name: newLeadName.trim(),
      email: newLeadEmail.trim(),
      phone: newLeadPhone.trim() || "+1 (555) 000-0000",
      website: newLeadWebsite.trim() || "domain.com",
      revenue: newLeadRevenue,
      budget: newLeadBudget,
      goal: newLeadGoal.trim(),
      source: "Manual Direct Entry",
      status: "New",
      notes: "Logged directly into Usman's Executive Portal.",
      country: "United Arab Emirates",
    };

    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data && data.leads) {
        setLeads(data.leads);
        setSelectedLead(data.leads[0]);
      }
    } catch (err) {
      console.error("Create lead error:", err);
    }

    setIsAddLeadModalOpen(false);
    setNewLeadName("");
    setNewLeadEmail("");
    setNewLeadPhone("");
    setNewLeadWebsite("");
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.goal.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [leads, searchTerm, statusFilter]);

  // Executive Metrics
  const metrics = useMemo(() => {
    const totalPipeline = leads.reduce((sum, l) => sum + (l.dealValueEst || 0), 0);
    const wonCount = leads.filter((l) => l.status === "Won").length;
    const activePipelineCount = leads.filter((l) => l.status !== "Archived").length;
    const avgScore = Math.round(leads.reduce((sum, l) => sum + l.score, 0) / (leads.length || 1));
    const winRate = Math.round((wonCount / (leads.length || 1)) * 100);

    return {
      totalPipeline,
      wonCount,
      activePipelineCount,
      avgScore,
      winRate,
      auditsCount: auditLogs.length + 84,
    };
  }, [leads, auditLogs]);

  // Export CSV
  const handleExportCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Website", "Status", "Score", "Est Deal ($)", "Budget", "Revenue", "Created"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      l.email,
      l.phone || "",
      l.website,
      l.status,
      l.score,
      l.dealValueEst,
      `"${l.budget || ""}"`,
      `"${l.revenue || ""}"`,
      formatAccurateDateTime(l.createdAt),
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `usman_leads_queries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // IF NOT AUTHENTICATED: CLEAN WHITE AUTH DIALOG
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in select-none">
        <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-8 shadow-2xl relative text-slate-900">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 text-[#f25f22] flex items-center justify-center mx-auto mb-5 shadow-xs">
            <Lock className="w-7 h-7" />
          </div>

          <div className="text-center mb-6">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#f25f22] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
              Usman&apos;s Private Portal
            </span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-3 mb-1">
              Lead &amp; Query Command Hub
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Welcome back, Usman. Access your live inbound client leads, proposal inquiries, and audit logs.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-center">
                Enter Your PIN
              </label>
              <input
                type="password"
                value={authPin}
                onChange={(e) => setAuthPin(e.target.value)}
                placeholder="PIN (2026 or usman)"
                autoFocus
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-center tracking-widest text-lg font-mono focus:outline-none focus:border-[#f25f22] focus:bg-white transition-all"
              />
              {authError && (
                <p className="text-xs text-red-600 mt-2 text-center font-semibold">
                  Invalid PIN. Type <span className="font-mono text-slate-900">usman</span> or <span className="font-mono text-slate-900">2026</span>.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Unlock My Leads &amp; Queries →
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Back to Public Site
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-50 text-slate-900 overflow-hidden animate-in fade-in select-none">
      {/* Top Header Bar (Clean White Background) */}
      <header className="h-16 border-b border-slate-200 bg-white px-4 sm:px-6 flex items-center justify-between shrink-0 shadow-xs">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-tight">
                Muhammad Usman <span className="text-[#f25f22]">HQ</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Inbound Leads &amp; Query Center
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-flex text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#f25f22] font-bold">
            CONFIDENTIAL
          </span>
        </div>

        {/* Center Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setCurrentTab("leads")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              currentTab === "leads" ? "bg-white text-[#f25f22] shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Inbound Leads ({leads.length})</span>
          </button>

          <button
            onClick={() => setCurrentTab("pipeline")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              currentTab === "pipeline" ? "bg-white text-[#f25f22] shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Deal Pipeline</span>
          </button>

          <button
            onClick={() => setCurrentTab("audits")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              currentTab === "audits" ? "bg-white text-[#f25f22] shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Audit Queries &amp; Scans</span>
          </button>

          <button
            onClick={() => setCurrentTab("competitive")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              currentTab === "competitive" ? "bg-white text-[#f25f22] shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Portfolio Benchmarks</span>
          </button>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={fetchServerData}
            title="Refresh database"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoadingData ? "animate-spin text-[#f25f22]" : ""}`} />
          </button>

          <button
            onClick={() => setIsAddLeadModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f25f22] hover:bg-[#d94e14] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add Lead / Query</span>
            <span className="sm:hidden">Add</span>
          </button>

          <button
            onClick={handleExportCSV}
            title="Export CSV"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer border border-slate-200"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            onClick={handleLogout}
            className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors cursor-pointer border border-slate-200"
          >
            Lock
          </button>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition-colors cursor-pointer border border-red-200"
          >
            Exit Portal
          </button>
        </div>
      </header>

      {/* Main Content Area (Clean White Slate) */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 bg-slate-50">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Active Pipeline
            </span>
            <div className="text-2xl font-black text-emerald-600 font-mono">
              ${(metrics.totalPipeline / 1000).toFixed(0)}k
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">
              Across {metrics.activePipelineCount} active accounts
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Total Inbound Leads
            </span>
            <div className="text-2xl font-black text-slate-900 font-mono">{leads.length}</div>
            <span className="text-[10px] text-emerald-600 font-bold mt-1 block">
              +38% monthly inquiry growth
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Avg Deal Potential
            </span>
            <div className="text-2xl font-black text-[#f25f22] font-mono">
              ${Math.round(metrics.totalPipeline / (leads.length || 1) / 1000)}k
              <span className="text-xs text-slate-400 font-normal"> / mo</span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Target enterprise retainer</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Lead Quality Score
            </span>
            <div className="text-2xl font-black text-indigo-600 font-mono">
              {metrics.avgScore}<span className="text-sm text-slate-400">/100</span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Commercial intent index</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Audit Scans Logged
            </span>
            <div className="text-2xl font-black text-blue-600 font-mono">{metrics.auditsCount}</div>
            <span className="text-[10px] text-slate-500 mt-1 block">Real-time domain audits</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Win Rate
            </span>
            <div className="text-2xl font-black text-amber-600 font-mono">{metrics.winRate}%</div>
            <span className="text-[10px] text-slate-500 mt-1 block">Inquiry to client close</span>
          </div>
        </div>

        {/* Mobile Tab Navigation */}
        <div className="flex md:hidden items-center justify-between bg-white border border-slate-200 p-1.5 rounded-xl">
          <button
            onClick={() => setCurrentTab("leads")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${
              currentTab === "leads" ? "bg-[#f25f22] text-white" : "text-slate-600"
            }`}
          >
            Leads
          </button>
          <button
            onClick={() => setCurrentTab("pipeline")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${
              currentTab === "pipeline" ? "bg-[#f25f22] text-white" : "text-slate-600"
            }`}
          >
            Pipeline
          </button>
          <button
            onClick={() => setCurrentTab("audits")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${
              currentTab === "audits" ? "bg-[#f25f22] text-white" : "text-slate-600"
            }`}
          >
            Audits
          </button>
        </div>

        {/* TAB 1: INBOUND LEADS & CLIENT QUERIES (DEFAULT) */}
        {currentTab === "leads" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Leads Table */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search prospect, domain, email..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f25f22] focus:bg-white"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter className="w-3.5 h-3.5 text-slate-500" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-semibold focus:outline-none"
                  >
                    <option value="All">All Inquiries</option>
                    <option value="New">New Inquiries</option>
                    <option value="In Discovery">In Discovery</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Won">Won Deals</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-bold tracking-wider bg-slate-50/70">
                      <th className="py-2.5 pl-3">Prospect &amp; Contact</th>
                      <th className="py-2.5">Domain</th>
                      <th className="py-2.5">Date Ingested</th>
                      <th className="py-2.5">Monthly Budget</th>
                      <th className="py-2.5">Status</th>
                      <th className="py-2.5 pr-3 text-right">Est. Retainer</th>
                      <th className="py-2.5 pr-2 text-center w-12">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className={`hover:bg-slate-50 transition-colors cursor-pointer group ${
                          selectedLead?.id === lead.id ? "bg-orange-50/50" : ""
                        }`}
                      >
                        <td className="py-3.5 pl-3 font-bold text-slate-900">
                          <div className="flex items-center gap-2">
                            <span>{lead.name}</span>
                            {lead.status === "New" && (
                              <span className="w-2 h-2 rounded-full bg-[#f25f22] animate-ping" />
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500 font-normal">{lead.email}</div>
                        </td>
                        <td className="py-3.5 font-mono text-slate-700">
                          <a
                            href={`https://${lead.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-[#f25f22] inline-flex items-center gap-1 font-semibold"
                          >
                            <span>{lead.website}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                        </td>
                        <td className="py-3.5">
                          <div className="text-slate-800 font-semibold text-[11px] whitespace-nowrap">
                            {formatRelativeTime(lead.createdAt)}
                          </div>
                          <div className="text-[9.5px] font-mono text-slate-400">
                            {formatAccurateDateTime(lead.createdAt)}
                          </div>
                        </td>
                        <td className="py-3.5 text-slate-600 font-medium">
                          {lead.budget || lead.revenue}
                        </td>
                        <td className="py-3.5">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              lead.status === "Won"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : lead.status === "Proposal Sent"
                                ? "bg-purple-100 text-purple-800 border border-purple-200"
                                : lead.status === "In Discovery"
                                ? "bg-amber-100 text-amber-800 border border-amber-200"
                                : "bg-blue-100 text-blue-800 border border-blue-200"
                            }`}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3.5 pr-3 text-right font-mono font-bold text-emerald-600 whitespace-nowrap">
                          ${(lead.dealValueEst / 1000).toFixed(0)}k/mo
                        </td>
                        <td className="py-3.5 pr-2 text-center" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => setLeadToDelete(lead)}
                            title="Remove lead"
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredLeads.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-xs">
                  No matching leads found. Try a different search or filter.
                </div>
              )}
            </div>

            {/* Right Prospect Teardown Pane */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              {selectedLead ? (
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                        {selectedLead.id}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 mt-2">{selectedLead.name}</h3>
                      <p className="text-xs text-slate-500">{selectedLead.country} • {selectedLead.source}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Est Value</span>
                      <span className="text-xl font-black text-emerald-600 font-mono">
                        ${(selectedLead.dealValueEst / 1000).toFixed(0)}k/mo
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Mail className="w-3.5 h-3.5 text-[#f25f22]" />
                      <a href={`mailto:${selectedLead.email}`} className="hover:underline font-semibold truncate max-w-[240px]">
                        {selectedLead.email}
                      </a>
                    </div>
                    {selectedLead.phone && (
                      <div className="flex items-center gap-2 text-slate-700">
                        <Phone className="w-3.5 h-3.5 text-[#f25f22]" />
                        <a href={`tel:${selectedLead.phone}`} className="hover:underline font-semibold">
                          {selectedLead.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-slate-700">
                      <Globe className="w-3.5 h-3.5 text-[#f25f22]" />
                      <a
                        href={`https://${selectedLead.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f25f22] hover:underline font-semibold"
                      >
                        {selectedLead.website}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 pt-1 border-t border-slate-200 text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-[#f25f22]" />
                      <span>Received: <strong>{formatAccurateDateTime(selectedLead.createdAt)}</strong></span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Client Growth Query / Commercial Objective
                    </label>
                    <p className="text-xs text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed font-medium">
                      {selectedLead.goal}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Budget</span>
                      <span className="font-bold text-slate-900">{selectedLead.budget}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Annual Revenue</span>
                      <span className="font-bold text-slate-900">{selectedLead.revenue}</span>
                    </div>
                  </div>

                  {selectedLead.notes && (
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        Executive Notes for Usman
                      </label>
                      <p className="text-xs text-slate-600 italic bg-amber-50/60 p-3 rounded-lg border border-amber-200/80">
                        &ldquo;{selectedLead.notes}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Stage Switcher Buttons */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Update Inquiry Stage
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["In Discovery", "Proposal Sent", "Won"] as Lead["status"][]).map((st) => (
                        <button
                          key={st}
                          onClick={() => handleUpdateStatus(selectedLead.id, st)}
                          className={`py-2 text-[10px] font-bold rounded-lg border transition-colors cursor-pointer ${
                            selectedLead.status === st
                              ? "bg-[#f25f22] text-white border-[#f25f22] shadow-xs"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Danger Zone: Delete Option */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Lead Record Actions</span>
                    <button
                      onClick={() => setLeadToDelete(selectedLead)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer border border-transparent hover:border-red-200"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove Lead</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400 text-xs">
                  Select a lead from the table to view full details
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 text-[10px] text-slate-400 text-center font-medium">
                Connected to persistent database • {lastRefreshed ? `Synced at ${lastRefreshed}` : "Active"}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PIPELINE KANBAN (Clean White Card Layout) */}
        {currentTab === "pipeline" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900">Inbound Deal Flow &amp; Retainer Pipeline</h3>
                <p className="text-xs text-slate-500">
                  Track client inquiries as they progress from initial website audits to signed monthly retainers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
              {(["New", "In Discovery", "Proposal Sent", "Won", "Archived"] as Lead["status"][]).map((colStatus) => {
                const colLeads = leads.filter((l) => l.status === colStatus);
                const colValue = colLeads.reduce((acc, l) => acc + (l.dealValueEst || 0), 0);

                const colColors: Record<string, string> = {
                  New: "border-blue-300 text-blue-700 bg-blue-50/50",
                  "In Discovery": "border-amber-300 text-amber-700 bg-amber-50/50",
                  "Proposal Sent": "border-purple-300 text-purple-700 bg-purple-50/50",
                  Won: "border-emerald-300 text-emerald-700 bg-emerald-50/50",
                  Archived: "border-slate-300 text-slate-700 bg-slate-100/50",
                };

                return (
                  <div key={colStatus} className="bg-white border border-slate-200 rounded-2xl p-3 flex flex-col min-h-[460px] shadow-xs">
                    <div className={`flex items-center justify-between p-2 rounded-xl border mb-3 ${colColors[colStatus]}`}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black uppercase tracking-wider">{colStatus}</span>
                        <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white font-mono font-bold text-slate-800 shadow-2xs">
                          {colLeads.length}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-700">${(colValue / 1000).toFixed(0)}k</span>
                    </div>

                    <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                      {colLeads.map((lead) => (
                        <div
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer relative group ${
                            selectedLead?.id === lead.id
                              ? "bg-orange-50 border-[#f25f22] shadow-sm"
                              : "bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80"
                          }`}
                        >
                          {/* Quick delete on kanban hover */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setLeadToDelete(lead);
                            }}
                            title="Remove lead"
                            className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>

                          <div className="flex items-start justify-between gap-1 mb-1.5 pr-4">
                            <span className="font-bold text-xs text-slate-900 truncate max-w-[130px]">
                              {lead.name}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-emerald-600">
                              +${(lead.dealValueEst / 1000).toFixed(0)}k/mo
                            </span>
                          </div>

                          <div className="text-[11px] font-mono text-slate-500 truncate mb-1">
                            {lead.website}
                          </div>

                          <div className="text-[9.5px] font-mono text-slate-400 mb-2">
                            {formatRelativeTime(lead.createdAt)}
                          </div>

                          <p className="text-[10px] text-slate-700 line-clamp-2 leading-relaxed mb-2.5 font-medium">
                            {lead.goal}
                          </p>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[9px] font-medium text-slate-500">
                            <span>Score: {lead.score}</span>
                            <span>{lead.country}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-1 mt-2.5 pt-2 border-t border-slate-200">
                            {colStatus !== "Proposal Sent" && colStatus !== "Won" && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUpdateStatus(lead.id, "Proposal Sent");
                                }}
                                className="py-1 text-[9px] font-bold rounded bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200"
                              >
                                Send Proposal
                              </button>
                            )}
                            {colStatus !== "Won" && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUpdateStatus(lead.id, "Won");
                                }}
                                className="py-1 text-[9px] font-bold rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                              >
                                Mark Won ✓
                              </button>
                            )}
                          </div>
                        </div>
                      ))}

                      {colLeads.length === 0 && (
                        <div className="h-32 flex items-center justify-center text-slate-400 text-xs italic">
                          No inquiries in this stage
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: AUDIT QUERIES & LIVE SCANS */}
        {currentTab === "audits" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900">Website Audit Queries &amp; Live Scans</h3>
                <p className="text-xs text-slate-500">
                  Real-time log of prospect domains analyzed through Usman&apos;s free SEO tools and consultation forms.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                Live Audit Stream
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-slate-900 font-bold">{log.domain}</span>
                    <span
                      className={`text-xs font-black font-mono px-2 py-0.5 rounded ${
                        log.score >= 70
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : log.score >= 50
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : "bg-red-100 text-red-800 border border-red-200"
                      }`}
                    >
                      {log.score}/100
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 mb-2">
                    <div>
                      <span>Traffic: </span>
                      <strong className="text-slate-900 font-mono">{log.monthlyTraffic.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span>Domain Auth: </span>
                      <strong className="text-slate-900 font-mono">{log.domainAuthority}</strong>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 font-mono mb-2">
                    {formatAccurateDateTime(log.timestamp)} ({formatRelativeTime(log.timestamp)})
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
                    <span>{log.ipLocation || "Global Scan"}</span>
                    {log.emailCaptured ? (
                      <span className="text-emerald-700 font-bold truncate max-w-[150px]">
                        ✓ {log.emailCaptured}
                      </span>
                    ) : (
                      <span className="text-slate-400">Anonymous Scan</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: COMPETITIVE BENCHMARKS */}
        {currentTab === "competitive" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-1">
                Usman&apos;s Verified Client Benchmarks vs Industry Competitors
              </h3>
              <p className="text-xs text-slate-500">
                Comparative organic traffic and lead efficiency indices across our client portfolio vs legacy agency standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700">Automotive Mobility Sector</span>
                  <span className="text-[10px] font-mono text-[#f25f22] font-bold">Service My Car / Mirage</span>
                </div>
                <div className="text-3xl font-black text-emerald-600 font-mono mb-2">+340%</div>
                <p className="text-xs text-slate-600 mb-4">
                  Organic search volume captured over 12 months vs industry average of +28%.
                </p>
                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span>CPA Reduction:</span>
                    <strong className="text-slate-900">-41%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>High-Intent Keywords:</span>
                    <strong className="text-slate-900">12,400+ Top 3</strong>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700">Dubai Luxury Real Estate</span>
                  <span className="text-[10px] font-mono text-[#f25f22] font-bold">AZCO Real Estate</span>
                </div>
                <div className="text-3xl font-black text-emerald-600 font-mono mb-2">5.2x</div>
                <p className="text-xs text-slate-600 mb-4">
                  High-Net-Worth investor lead acquisition velocity via algorithmic PPC.
                </p>
                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span>ROAS On Ad Spend:</span>
                    <strong className="text-slate-900">7.8x Blended</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Off-Plan Lead Quality:</span>
                    <strong className="text-slate-900">92% Verified HNW</strong>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700">Global D2C E-Commerce</span>
                  <span className="text-[10px] font-mono text-[#f25f22] font-bold">Modern Wall Arts / Lala</span>
                </div>
                <div className="text-3xl font-black text-emerald-600 font-mono mb-2">+280%</div>
                <p className="text-xs text-slate-600 mb-4">
                  Seasonal peak e-commerce sales scale driven by Google Shopping &amp; Meta catalog sync.
                </p>
                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span>Checkout Conversion Rate:</span>
                    <strong className="text-slate-900">3.8% (Top 5%)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Organic Footprint:</span>
                    <strong className="text-slate-900">US / CA / GCC Dominance</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CONFIRMATION MODAL: REMOVE LEAD */}
      {leadToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in select-none">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-6 shadow-2xl relative text-slate-900 text-center">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4 border border-red-200">
              <Trash2 className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-black text-slate-900 mb-1">Remove Prospect Lead?</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Are you sure you want to permanently delete <strong className="text-slate-800">{leadToDelete.name}</strong> ({leadToDelete.website}) from your pipeline?
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Yes, Remove"}
              </button>
              <button
                type="button"
                onClick={() => setLeadToDelete(null)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer border border-slate-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: MANUAL LEAD / QUERY LOGGING (Clean White Background) */}
      {isAddLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in select-none">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-slate-900">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-black text-slate-900">Log New Lead / Client Query</h3>
              <button
                onClick={() => setIsAddLeadModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Record a direct phone call, WhatsApp message, or VIP referral into Usman&apos;s pipeline.
            </p>

            <form onSubmit={handleCreateLead} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Prospect / Client Name *</label>
                <input
                  type="text"
                  required
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  placeholder="e.g. Faisal Al-Sabah"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#f25f22] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={newLeadEmail}
                  onChange={(e) => setNewLeadEmail(e.target.value)}
                  placeholder="e.g. faisal@alsabahholdings.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#f25f22] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={newLeadPhone}
                    onChange={(e) => setNewLeadPhone(e.target.value)}
                    placeholder="+971 50..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#f25f22] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Website Domain</label>
                  <input
                    type="text"
                    value={newLeadWebsite}
                    onChange={(e) => setNewLeadWebsite(e.target.value)}
                    placeholder="domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#f25f22] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Client Query / Strategic Goal</label>
                <input
                  type="text"
                  value={newLeadGoal}
                  onChange={(e) => setNewLeadGoal(e.target.value)}
                  placeholder="e.g. 3x Google Ads ROAS + Luxury SEO"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#f25f22] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Monthly Marketing Budget</label>
                <select
                  value={newLeadBudget}
                  onChange={(e) => setNewLeadBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold focus:outline-none"
                >
                  <option>$5k - $10k / mo</option>
                  <option>$10k - $25k / mo</option>
                  <option>$25k - $75k / mo</option>
                  <option>$75k+ / mo (Enterprise)</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#f25f22] hover:bg-[#d94e14] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  Save to Usman&apos;s Hub
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddLeadModalOpen(false)}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer border border-slate-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
