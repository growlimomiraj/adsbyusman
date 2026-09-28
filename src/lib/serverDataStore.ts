import fs from "fs";
import path from "path";

export interface StoredLead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  website: string;
  revenue: string;
  budget?: string;
  goal: string;
  source: string;
  status: "New" | "Contacted" | "In Discovery" | "Proposal Sent" | "Won" | "Archived";
  score: number;
  dealValueEst: number;
  notes?: string;
  createdAt: string;
  country?: string;
}

export interface StoredAuditLog {
  id: string;
  domain: string;
  score: number;
  monthlyTraffic: number;
  domainAuthority: number;
  ipLocation?: string;
  timestamp: string;
  emailCaptured?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const AUDITS_FILE = path.join(DATA_DIR, "audits.json");

// Ensure directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Format accurate relative ISO timestamp helper: returns actual ISO date matching the server's current date/time
export function getAccurateTimestamp(daysAgo: number = 0, hoursAgo: number = 0, minutesAgo: number = 0): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(d.getHours() - hoursAgo);
  d.setMinutes(d.getMinutes() - minutesAgo);
  return d.toISOString();
}

// Baseline enterprise leads with calculated accurate real dates based on current server clock
function getDefaultLeads(): StoredLead[] {
  return [
    {
      id: "LD-98214",
      name: "Tariq Al-Mansoor",
      email: "tariq@gulfexoticmotors.ae",
      phone: "+971 50 839 2104",
      website: "gulfexoticmotors.ae",
      revenue: "$5M - $20M / yr",
      budget: "$25k - $75k / mo",
      goal: "Dominating Dubai Luxury Fleet Search & Ultra-HNW Google Ads",
      source: "Consultation Modal",
      status: "In Discovery",
      score: 96,
      dealValueEst: 45000,
      notes: "Wants bespoke acquisition campaign targeting GCC tourists & private VIP clients in Downtown Dubai.",
      createdAt: getAccurateTimestamp(0, 4, 15), // 4 hours ago today
      country: "United Arab Emirates",
    },
    {
      id: "LD-98213",
      name: "Dr. Evelyn Reed",
      email: "ereed@harleydiagnostics.co.uk",
      phone: "+44 20 7946 0912",
      website: "harleydiagnostics.co.uk",
      revenue: "$1M - $5M / yr",
      budget: "$10k - $25k / mo",
      goal: "Private Clinical Diagnostic Funnel & Organic Topic Authority",
      source: "Audit Report CTA",
      status: "Proposal Sent",
      score: 91,
      dealValueEst: 18500,
      notes: "Requires high-intent transactional clinic booking optimization like Get Checked Clinic setup.",
      createdAt: getAccurateTimestamp(1, 2, 30), // Yesterday
      country: "United Kingdom",
    },
    {
      id: "LD-98212",
      name: "Hamza Malik",
      email: "hamza@luxeartisanliving.com",
      phone: "+1 (312) 555-0198",
      website: "luxeartisanliving.com",
      revenue: "$10M+ / yr",
      budget: "$75k+ / mo (Enterprise)",
      goal: "Google Shopping Catalog Scale & AI Search Domination",
      source: "Growlimo Proposal",
      status: "Won",
      score: 98,
      dealValueEst: 85000,
      notes: "Signed 6-month retainer for omnichannel performance SEO + Google Performance Max scale.",
      createdAt: getAccurateTimestamp(2, 6, 10), // 2 days ago
      country: "United States",
    },
    {
      id: "LD-98211",
      name: "Rashid bin Faisal",
      email: "rfaisal@azuradubaiproperties.com",
      phone: "+971 52 441 9873",
      website: "azuradubaiproperties.com",
      revenue: "$20M+ / yr",
      budget: "$75k+ / mo (Enterprise)",
      goal: "International Investor Lead Gen (Off-Plan Palm Jumeirah)",
      source: "Consultation Modal",
      status: "In Discovery",
      score: 97,
      dealValueEst: 65000,
      notes: "Looking to replicate AZCO Real Estate multi-channel luxury acquisition funnels.",
      createdAt: getAccurateTimestamp(3, 1, 20), // 3 days ago
      country: "United Arab Emirates",
    },
    {
      id: "LD-98210",
      name: "Sarah Jenkins",
      email: "s.jenkins@purebotanicals.ca",
      phone: "+1 (416) 555-0814",
      website: "purebotanicals.ca",
      revenue: "$500k - $1M / yr",
      budget: "$5k - $10k / mo",
      goal: "E-Commerce CRO & Organic Lifestyle Search Visibility",
      source: "Work With Us Page",
      status: "Contacted",
      score: 79,
      dealValueEst: 8500,
      notes: "High conversion potential. Requested deep CRO teardown of Shopify checkout.",
      createdAt: getAccurateTimestamp(4, 5, 0), // 4 days ago
      country: "Canada",
    },
    {
      id: "LD-98209",
      name: "Zaid Qureshi",
      email: "z.qureshi@reliefglobalcare.org",
      phone: "+1 (613) 555-0149",
      website: "reliefglobalcare.org",
      revenue: "$5M - $20M / yr",
      budget: "$25k - $75k / mo",
      goal: "Global Emergency Relief Ramadan & Qurbani Acquisition",
      source: "Growlimo Proposal",
      status: "Proposal Sent",
      score: 94,
      dealValueEst: 32000,
      notes: "Non-profit donor acquisition similar to Human Concern International scope.",
      createdAt: getAccurateTimestamp(5, 8, 15), // 5 days ago
      country: "Canada",
    },
    {
      id: "LD-98208",
      name: "Karim Mostafa",
      email: "karim@desertpulseadventures.ae",
      phone: "+971 55 902 3311",
      website: "desertpulseadventures.ae",
      revenue: "$1M - $5M / yr",
      budget: "$10k - $25k / mo",
      goal: "Tourism Search Intent & Paid Meta Excursion Bookings",
      source: "Audit Report CTA",
      status: "New",
      score: 84,
      dealValueEst: 14000,
      notes: "Benchmark against Only Tourism and leading safari operators in Dubai.",
      createdAt: getAccurateTimestamp(6, 12, 0), // 6 days ago
      country: "United Arab Emirates",
    },
  ];
}

function getDefaultAudits(): StoredAuditLog[] {
  return [
    {
      id: "AUD-10921",
      domain: "gulfexoticmotors.ae",
      score: 64,
      monthlyTraffic: 14200,
      domainAuthority: 29,
      ipLocation: "Dubai, UAE",
      timestamp: getAccurateTimestamp(0, 4, 18),
      emailCaptured: "tariq@gulfexoticmotors.ae",
    },
    {
      id: "AUD-10920",
      domain: "harleydiagnostics.co.uk",
      score: 72,
      monthlyTraffic: 28500,
      domainAuthority: 41,
      ipLocation: "London, UK",
      timestamp: getAccurateTimestamp(1, 2, 35),
      emailCaptured: "ereed@harleydiagnostics.co.uk",
    },
    {
      id: "AUD-10919",
      domain: "azuradubaiproperties.com",
      score: 58,
      monthlyTraffic: 8900,
      domainAuthority: 24,
      ipLocation: "Dubai, UAE",
      timestamp: getAccurateTimestamp(3, 1, 25),
      emailCaptured: "rfaisal@azuradubaiproperties.com",
    },
    {
      id: "AUD-10918",
      domain: "purebotanicals.ca",
      score: 68,
      monthlyTraffic: 42100,
      domainAuthority: 36,
      ipLocation: "Toronto, Canada",
      timestamp: getAccurateTimestamp(4, 5, 10),
      emailCaptured: "s.jenkins@purebotanicals.ca",
    },
    {
      id: "AUD-10917",
      domain: "desertpulseadventures.ae",
      score: 61,
      monthlyTraffic: 19800,
      domainAuthority: 28,
      ipLocation: "Abu Dhabi, UAE",
      timestamp: getAccurateTimestamp(6, 12, 5),
      emailCaptured: "karim@desertpulseadventures.ae",
    },
  ];
}

export function readLeads(): StoredLead[] {
  ensureDataDir();
  if (!fs.existsSync(LEADS_FILE)) {
    const defaults = getDefaultLeads();
    fs.writeFileSync(LEADS_FILE, JSON.stringify(defaults, null, 2), "utf-8");
    return defaults;
  }
  try {
    const raw = fs.readFileSync(LEADS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error("Error reading leads file:", err);
  }
  const defaults = getDefaultLeads();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(defaults, null, 2), "utf-8");
  return defaults;
}

export function saveLeads(leads: StoredLead[]): void {
  ensureDataDir();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export function addLead(lead: StoredLead): StoredLead[] {
  const current = readLeads();
  // Prepend new lead so it shows at the top with exact current timestamp
  const updated = [lead, ...current];
  saveLeads(updated);
  return updated;
}

export function deleteLead(leadId: string): StoredLead[] {
  const current = readLeads();
  const updated = current.filter((l) => l.id !== leadId);
  saveLeads(updated);
  return updated;
}

export function updateLeadStatus(leadId: string, status: StoredLead["status"]): StoredLead[] {
  const current = readLeads();
  const updated = current.map((l) => (l.id === leadId ? { ...l, status } : l));
  saveLeads(updated);
  return updated;
}

export function readAudits(): StoredAuditLog[] {
  ensureDataDir();
  if (!fs.existsSync(AUDITS_FILE)) {
    const defaults = getDefaultAudits();
    fs.writeFileSync(AUDITS_FILE, JSON.stringify(defaults, null, 2), "utf-8");
    return defaults;
  }
  try {
    const raw = fs.readFileSync(AUDITS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error("Error reading audits file:", err);
  }
  const defaults = getDefaultAudits();
  fs.writeFileSync(AUDITS_FILE, JSON.stringify(defaults, null, 2), "utf-8");
  return defaults;
}

export function addAudit(audit: StoredAuditLog): StoredAuditLog[] {
  const current = readAudits();
  const updated = [audit, ...current];
  ensureDataDir();
  fs.writeFileSync(AUDITS_FILE, JSON.stringify(updated, null, 2), "utf-8");
  return updated;
}
