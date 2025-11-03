"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ShieldCheck, TrendingUp, Briefcase, Crown, Brain, ChevronDown, ExternalLink, Download, CheckCircle2 } from "lucide-react";

export default function Page() {
  return <RoadmapVisual />;
}

function RoadmapVisual() {
  const roadmap = useMemo(() => ([
    {
      year: "2025 (Q4)",
      focus: "Starting Point – Azure Administrator Associate (AZ-104)",
      certs: ["Azure Administrator Associate (AZ-104)"],
      milestone: "Pass AZ-104 by mid-December 2025",
      salaryRange: "$110K–$130K (Boston est.)",
      color: "from-blue-500 to-cyan-500",
      icon: GraduationCap,
      status: "active",
      links: [
        { label: "Microsoft Learn – AZ-104", href: "https://learn.microsoft.com/certifications/exams/az-104/" },
        { label: "MeasureUp – AZ-104 Practice", href: "https://www.measureup.com/" },
        { label: "John Savill – Azure Masterclass", href: "https://www.youtube.com/@NTFAQGuy" },
      ],
      scheduleLink: { label: "Schedule AZ-104 (Pearson VUE)", href: "https://home.pearsonvue.com/microsoft" },
      tracker: [
        { label: "Week 1", focus: "Identity & Governance", tasks: ["Entra ID tenants, users, groups", "RBAC roles & custom roles", "Azure Policy & management groups"], outcome: "Solid IAM + governance" },
        { label: "Week 2", focus: "Compute & Networking", tasks: ["VM sizing, images, availability sets/zones", "VNets, subnets, NSGs, UDRs, DNS", "LB/AGW/Bastion basics"], outcome: "Ops-ready infra fundamentals" },
        { label: "Week 3", focus: "Storage, Backup, Monitor", tasks: ["Blob tiers, lifecycle mgmt, immutability", "Backup/ASR, Updates, Extensions", "Azure Monitor, Log Analytics, alerts"], outcome: "Ops + visibility end-to-end" },
        { label: "Week 4", focus: "Exam Review & Practice", tasks: ["2–3 timed practice tests", "Close gaps via Learn modules", "Schedule & sit for AZ-104"], outcome: "AZ-104 passed by mid-December 2025" },
      ],
    },
    {
      year: "2026 (Q1)",
      focus: "Endpoint Management – Intune Administrator (MD-102)",
      certs: ["Intune Administrator (MD-102)"],
      milestone: "Target: complete MD-102 by end of January 2026",
      salaryRange: "$120K–$140K (Boston est.)",
      color: "from-sky-500 to-indigo-500",
      icon: TrendingUp,
      links: [
        { label: "Microsoft Learn – MD-102", href: "https://learn.microsoft.com/certifications/exams/md-102/" },
        { label: "MeasureUp – MD-102 Practice", href: "https://www.measureup.com/" },
        { label: "John Savill – Intune/Endpoint", href: "https://www.youtube.com/@NTFAQGuy" },
      ],
      scheduleLink: { label: "Schedule MD-102 (Pearson VUE)", href: "https://home.pearsonvue.com/microsoft" },
      tracker: [
        { label: "Week 1", focus: "Overview & Setup", tasks: ["Review Microsoft Learn MD-102 path", "Create/confirm lab tenant or sandbox access", "Enroll 1–2 test devices (Autopilot if available)"], outcome: "Environment ready for practice" },
        { label: "Week 2", focus: "Device Management & Policies", tasks: ["Compliance policies & configuration profiles", "ESP & Autopilot profile; device naming conventions", "Pilot deployment to test devices"], outcome: "Confident with deployment & policy mgmt" },
        { label: "Week 3", focus: "Endpoint Security & Monitoring", tasks: ["Security baselines & ASR rules (as appropriate)", "RBAC roles, scopes, and reporting", "Draft operational runbook for Cordia-style environments"], outcome: "Security + troubleshooting fundamentals" },
        { label: "Week 4", focus: "Exam Review & Practice", tasks: ["2–3 timed practice tests (MeasureUp or equivalent)", "Target weak areas; schedule & sit for MD-102"], outcome: "MD-102 passed by late January 2026" },
      ],
    },
    {
      year: "2026 (Q2)",
      focus: "Azure Solutions Architect Expert (AZ-305) – Strategic Pay Growth",
      certs: ["Azure Solutions Architect Expert (AZ-305)"],
      milestone: "April–June 2026 study window",
      salaryRange: "$135K–$155K (Architect tier)",
      color: "from-indigo-500 to-purple-500",
      icon: ShieldCheck,
      links: [
        { label: "Microsoft Learn – AZ-305", href: "https://learn.microsoft.com/certifications/exams/az-305/" },
        { label: "MeasureUp – AZ-305 Practice", href: "https://www.measureup.com/" },
        { label: "John Savill – Azure Masterclass", href: "https://www.youtube.com/@NTFAQGuy" },
      ],
      tracker: [
        { label: "Week 1", focus: "Architecture Overview", tasks: ["MG/Subscriptions, Policy, Blueprints", "Identity & Access: Entra ID, PIM, RBAC", "Cost mgmt + tagging, resource org"], outcome: "Core principles solid" },
        { label: "Week 2", focus: "Compute & Networking", tasks: ["VNets, peering, routing, DNS, LB/AGW/Front Door", "Hybrid: VPN/ExpressRoute patterns"], outcome: "Network design fundamentals" },
        { label: "Week 3", focus: "Data & Storage", tasks: ["Blob/File tiers, immutability, backup", "DB options (SQL MI, Cosmos, PaaS)"] , outcome: "Data architecture clarified" },
        { label: "Week 4", focus: "Security & Monitoring", tasks: ["Key Vault, Managed Identities, Defender for Cloud", "Monitor/Log Analytics, alerting"], outcome: "Security strategy end-to-end" },
        { label: "Week 5", focus: "Integration & Resiliency", tasks: ["BCDR/HA designs, zones vs regions", "DR drills, messaging, decoupling"], outcome: "Resilient architectures documented" },
        { label: "Week 6", focus: "Practice & Review", tasks: ["Full-length practice exams", "Hands-on labs for weak areas; schedule AZ-305"], outcome: "Ready to pass by late June 2026" },
      ],
    },
    { year: "2026 (Q3–Q4)", focus: "Cybersecurity Architecture & Leadership Foundation", certs: ["Cybersecurity Architect Expert", "CISSP (ISC²)"], milestone: "Mid/late 2026 completion of CISSP", salaryRange: "$145K–$170K", color: "from-indigo-500 to-purple-500", icon: ShieldCheck },
    { year: "2027", focus: "Governance & Risk Mastery", certs: ["CISM (ISACA)"], milestone: "Target completion: late 2027", salaryRange: "$155K–$185K", color: "from-purple-500 to-pink-500", icon: Briefcase },
    { year: "2028", focus: "Operational Excellence & IT Governance", certs: ["ITIL 4 Managing Professional", "CISA (ISACA)"], milestone: "Continuous improvement focus", salaryRange: "$160K–$190K", color: "from-pink-500 to-rose-500", icon: Crown },
    { year: "2029–2030", focus: "Executive & AI Strategy Integration", certs: ["CCISO (EC-Council)", "MIT / Harvard AI for Business Strategy"], milestone: "Executive readiness & strategy immersion", salaryRange: "$180K–$230K+ (Executive)", color: "from-rose-500 to-amber-500", icon: Brain },
  ]), []);

  // ---- Helpers ----
  const taskKey = (stageYear: string, weekLabel: string, idx: number) => `roadmap-progress-${stageYear}-${weekLabel}-${idx}`;
  const hoursKey = (stageYear: string, weekLabel: string) => `hours-${stageYear}-${weekLabel}`;

  const computeProgress = () => {
    let total = 0;
    let completed = 0;
    try {
      roadmap.forEach((stage) => {
        if (!stage.tracker) return;
        stage.tracker.forEach((wk) => {
          wk.tasks.forEach((_, idx) => {
            total += 1;
            const saved = typeof window !== 'undefined' ? localStorage.getItem(taskKey(stage.year, wk.label, idx)) : null;
            if (saved === '1') completed += 1;
          });
        });
      });
    } catch {}
    return { total, completed, pct: total ? Math.round((completed / total) * 100) : 0 };
  };

  const computeTotalHours = () => {
    let sum = 0;
    try {
      roadmap.forEach((stage) => {
        stage.tracker?.forEach((wk) => {
          const val = typeof window !== 'undefined' ? localStorage.getItem(hoursKey(stage.year, wk.label)) : null;
          sum += parseFloat(val || '0') || 0;
        });
      });
    } catch {}
    return Math.round(sum * 10) / 10; // one decimal
  };

  const [{ total, completed, pct }, setProg] = useState(() => computeProgress());
  const [totalHours, setTotalHours] = useState<number>(0);

  const prevPct = useRef(pct);
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const onUpdate = () => {
      const next = computeProgress();
      setProg(next);
      setTotalHours(computeTotalHours());
      if (next.pct !== prevPct.current) {
        setPulse(true);
        prevPct.current = next.pct;
        const t = setTimeout(() => setPulse(false), 900);
        return () => clearTimeout(t);
      }
    };
    onUpdate();
    window.addEventListener('roadmap-progress-updated', onUpdate);
    window.addEventListener('storage', onUpdate);
    return () => {
      window.removeEventListener('roadmap-progress-updated', onUpdate);
      window.removeEventListener('storage', onUpdate);
    };
  }, []);

  const resetProgress = () => {
    try {
      roadmap.forEach((stage) => {
        if (!stage.tracker) return;
        stage.tracker.forEach((wk) => {
          wk.tasks.forEach((_, idx) => localStorage.removeItem(taskKey(stage.year, wk.label, idx)));
          localStorage.removeItem(hoursKey(stage.year, wk.label));
        });
      });
    } catch {}
    try { window.dispatchEvent(new Event('roadmap-progress-updated')); } catch {}
  };

  const exportCSV = () => {
    const rows = [["Stage","Week","Task","Completed","Week Hours"]];
    try {
      roadmap.forEach((stage) => {
        if (!stage.tracker) return;
        stage.tracker.forEach((wk) => {
          const wkHours = typeof window !== 'undefined' ? (parseFloat(localStorage.getItem(hoursKey(stage.year, wk.label)) || '0') || 0) : 0;
          wk.tasks.forEach((task, idx) => {
            const done = typeof window !== 'undefined' ? localStorage.getItem(taskKey(stage.year, wk.label, idx)) === '1' : false;
            rows.push([stage.year, wk.label, task, done ? '1' : '0', String(wkHours)]);
          });
        });
      });
    } catch {}
    const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DavidPerezJr_Roadmap_Progress_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ---- stage helpers bound to current roadmap ----
  const computeStagePct = (stage: any) => {
    let t = 0, d = 0;
    stage.tracker?.forEach((wk: any) => {
      wk.tasks.forEach((_: any, idx: number) => {
        t += 1;
        const saved = typeof window !== 'undefined' ? localStorage.getItem(taskKey(stage.year, wk.label, idx)) : null;
        if (saved === '1') d += 1;
      });
    });
    return t ? Math.round((d / t) * 100) : 0;
  };

  const onStageToggle = (stage: any) => {
    const pct = computeStagePct(stage);
    const markDone = pct < 100;
    stage.tracker?.forEach((wk: any) => {
      wk.tasks.forEach((_: any, idx: number) => {
        try { localStorage.setItem(taskKey(stage.year, wk.label, idx), markDone ? '1' : '0'); } catch {}
      });
    });
    try { window.dispatchEvent(new Event('roadmap-progress-updated')); } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">David E. Perez Jr. – CIO / CISO Career Roadmap (2025–2030)</h1>
      <div className="text-center text-green-700 font-medium text-sm mb-6">
        Roadmap starts with <strong>Azure Administrator (AZ-104)</strong>, then continues with <strong>Intune (MD-102)</strong> and <strong>Azure Solutions Architect (AZ-305)</strong>.
      </div>

      {/* Top progress bar with animation + export */}
      <Card className={`mx-auto mb-4 max-w-4xl border-0 shadow-sm ${pulse ? 'ring-2 ring-emerald-300' : ''}`}>
        <CardContent className="p-5">
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="text-sm text-gray-600">Overall progress</div>
              <div className="text-2xl font-semibold text-gray-800">{pct}%</div>
              <div className="text-xs text-gray-500">{completed} of {total} tasks completed</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={exportCSV} className="inline-flex items-center gap-1 text-xs rounded-md border px-2 py-1 hover:bg-gray-50">
                <Download className="h-3.5 w-3.5"/> Export CSV
              </button>
              <button onClick={resetProgress} className="text-xs rounded-md border px-2 py-1 hover:bg-gray-50">Reset</button>
            </div>
          </div>
          <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 ${pulse ? 'shadow-lg' : ''}`}
              initial={false}
              animate={{ width: `${pct}%` }}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
            />
          </div>
          <div className="mt-3 text-xs text-gray-600">Total study hours logged: <span className="font-semibold text-gray-800">{totalHours.toFixed(1)} hrs</span></div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl">
        <motion.div aria-hidden initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.9, ease: "easeOut" }} className="absolute left-6 top-0 bottom-0 origin-top w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full" />
        <ol className="space-y-8">
          {roadmap.map((stage, i) => (<TimelineItem key={i} stage={stage} index={i} total={roadmap.length} computeStagePct={computeStagePct} onStageToggle={onStageToggle} />))}
        </ol>
      </div>

      <div className="text-center mt-12 text-gray-700">
        <p className="font-semibold">End Goal by 2030:</p>
        <p>Chief Information Security Officer (CISO) / Chief Information Officer (CIO) – leading AI-driven, secure enterprise transformation.</p>
      </div>
    </div>
  );
}

function TimelineItem({ stage, index, total, computeStagePct, onStageToggle }: any) {
  const Icon = stage.icon;
  const isLast = index === total - 1;
  const isActive = stage.status === "active";
  const pct = computeStagePct(stage);

  return (
    <li className="relative flex items-stretch">
      {/* Node column with gradient ring */}
      <div className="relative z-10 flex flex-col items-center mr-6">
        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.15, type: "spring", stiffness: 120 }} className="absolute -left-1.5 -top-1.5 h-9 w-9 rounded-full bg-white" />

        {/* Gradient border container + conic progress */}
        <div className={`relative h-10 w-10 rounded-full p-[3px] bg-gradient-to-r ${stage.color} shadow`}>
          <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#10b981 ${pct}%, #e5e7eb 0)` }} />
          <div className="absolute inset-[4px] rounded-full bg-white grid place-items-center text-[10px] font-semibold text-gray-700">{pct}%</div>
        </div>

        {!isLast && (
          <motion.span aria-hidden initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true, margin: "-40% 0px -20% 0px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="mt-1 mb-1 w-1 grow rounded-full bg-gradient-to-b from-gray-300 to-gray-200" />
        )}
      </div>

      {/* Card */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20% 0px -10% 0px" }} transition={{ delay: index * 0.1 }} className="w-full">
        <Card className={`shadow-lg border-0 rounded-2xl overflow-hidden ${isActive ? 'ring-2 ring-green-300' : ''}`}>
          <div className={`h-2 w-full bg-gradient-to-r ${stage.color}`} />
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-gray-100">
                <Icon className={`h-5 w-5 ${isActive ? 'text-green-600' : 'text-gray-700'}`} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{stage.year}</h2>
              <span className="ml-auto text-xs text-gray-500">Step {index + 1} of {total}</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{stage.focus}</p>
            <ul className="list-disc pl-6 text-gray-700">{stage.certs.map((cert: string, j: number) => (<li key={j}>{cert}</li>))}</ul>
            {stage.milestone && (<p className="mt-2 text-xs text-gray-500 italic">{stage.milestone}</p>)}
            <p className="mt-3 text-sm text-gray-600"><span className="font-medium">Typical salary after stage:</span> {stage.salaryRange}</p>

            {(stage.links || stage.scheduleLink) && (
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                {stage.links?.map((l: any, i: number) => (
                  <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 hover:bg-gray-50">
                    <ExternalLink className="h-3.5 w-3.5" /> {l.label}
                  </a>
                ))}
                {stage.scheduleLink && (
                  <a href={stage.scheduleLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 bg-emerald-50 hover:bg-emerald-100">
                    <ExternalLink className="h-3.5 w-3.5" /> {stage.scheduleLink.label}
                  </a>
                )}
              </div>
            )}

            {stage.tracker && (<TrackerPanel stage={stage} defaultOpen={index === 0} />)}

            {stage.tracker && (
              <div className="mt-4 flex items-center gap-2">
                <button onClick={() => onStageToggle(stage)} className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">
                  <CheckCircle2 className="h-4 w-4"/>
                  {pct === 100 ? 'Unmark stage' : 'Mark stage complete'}
                </button>
                <span className="text-xs text-gray-500">Quickly toggle all tasks in this stage.</span>
              </div>
            )}

            {isActive && (<p className="mt-3 text-green-600 font-medium text-sm">Roadmap starts here – Azure Administrator (AZ-104), then Intune (MD-102), then AZ-305.</p>)}
          </CardContent>
        </Card>
      </motion.div>
    </li>
  );
}

function TrackerPanel({ stage, defaultOpen }: any) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div className="mt-4">
      <button onClick={() => setOpen((prev: boolean) => !prev)} className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-900 focus:outline-none">
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        {open ? 'Hide' : 'Show'} week-by-week tracker
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="tracker" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="mt-3">
            <div className="rounded-xl border bg-white">
              <div className="grid grid-cols-1 divide-y">
                {stage.tracker.map((wk: any, idx: number) => (
                  <div key={idx} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-800">{wk.label} — {wk.focus}</div>
                      <HoursCounter stageKey={`${stage.year}-${wk.label}`} />
                    </div>
                    <ul className="mt-2 space-y-2">{wk.tasks.map((t: string, k: number) => (<TaskCheckbox key={k} stageKey={`${stage.year}-${wk.label}`} index={k} text={t} />))}</ul>
                    <p className="mt-2 text-xs text-gray-500"><span className="font-medium">Outcome:</span> {wk.outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TaskCheckbox({ stageKey, index, text }: any) {
  const storageKey = `roadmap-progress-${stageKey}-${index}`;
  const [checked, setChecked] = useState<boolean>(false);
  useEffect(() => {
    try { const saved = localStorage.getItem(storageKey); if (saved) setChecked(saved === '1'); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(storageKey, checked ? '1' : '0'); } catch {}
    try { window.dispatchEvent(new Event('roadmap-progress-updated')); } catch {}
  }, [checked, storageKey]);
  return (
    <label className="flex items-start gap-2">
      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <span className={`text-sm ${checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>{text}</span>
    </label>
  );
}

function HoursCounter({ stageKey }: any) {
  const key = `hours-${stageKey}`;
  const [hours, setHours] = useState<number>(0);
  useEffect(() => {
    try { const saved = localStorage.getItem(key); if (saved) setHours(parseFloat(saved) || 0); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(key, String(hours)); } catch {}
    try { window.dispatchEvent(new Event('roadmap-progress-updated')); } catch {}
  }, [hours]);
  return (
    <div className="inline-flex items-center gap-2 text-xs">
      <span className="text-gray-500">Hours:</span>
      <button onClick={() => setHours((h: number) => Math.max(0, h - 0.5))} className="rounded border px-2 py-0.5 hover:bg-gray-50">-</button>
      <span className="min-w-[2ch] text-gray-800 font-medium text-sm text-center">{hours}</span>
      <button onClick={() => setHours((h: number) => h + 0.5)} className="rounded border px-2 py-0.5 hover:bg-gray-50">+</button>
    </div>
  );
}
