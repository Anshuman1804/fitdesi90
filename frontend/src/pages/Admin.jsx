import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Lock, Download, RefreshCw, LogOut, Users, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tok = localStorage.getItem("admin_token");
    if (tok) {
      setAuthed(true);
      fetchLeads(tok);
    }
  }, []);

  const fetchLeads = async (tok) => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/admin/leads`, { headers: { "x-admin-password": tok } });
      setLeads(res.data || []);
    } catch (err) {
      toast.error("Failed to fetch leads");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API}/admin/login`, { password });
      localStorage.setItem("admin_token", res.data.token);
      setAuthed(true);
      fetchLeads(res.data.token);
      toast.success("Welcome back, Coach");
    } catch {
      toast.error("Wrong password");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    setAuthed(false);
    setPassword("");
    setLeads([]);
  };

  const exportCsv = () => {
    if (!leads.length) return toast.info("No leads to export");
    const header = ["Name", "Age", "Goal", "Weight (kg)", "WhatsApp", "Date"];
    const rows = leads.map((l) => [
      l.name,
      l.age,
      l.goal,
      l.weight,
      l.whatsapp,
      new Date(l.created_at).toLocaleString("en-IN"),
    ]);
    const csv = [header, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV downloaded");
  };

  if (!authed) {
    return (
      <main data-testid="admin-login-page" className="min-h-[80vh] flex items-center justify-center px-6 py-12">
        <motion.form
          onSubmit={login}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          data-testid="admin-login-form"
          className="bg-white rounded-3xl p-8 md:p-10 border border-[#0F3818]/10 shadow-sm w-full max-w-md"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#0F3818] text-[#FBF9F6] flex items-center justify-center">
            <Lock size={22} strokeWidth={2.5} />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-[#0F3818] mt-5">Admin Access</h1>
          <p className="text-[#4A5D4E] mt-2">Enter the coach password to view leads.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            data-testid="admin-password-input"
            className="mt-6 w-full bg-[#FBF9F6] border-2 border-[#0F3818]/10 rounded-xl px-4 py-3.5 text-base focus:border-[#FF7235] focus:ring-2 focus:ring-[#FF7235]/20 transition outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            data-testid="admin-login-btn"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#0F3818] hover:bg-[#143F1F] text-white font-bold rounded-full px-6 py-3.5 transition disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Lock size={18} />} Sign In
          </button>
          <p className="mt-4 text-xs text-[#4A5D4E] text-center">Default password: <code className="bg-[#F3EFE9] px-2 py-0.5 rounded">admin123</code></p>
        </motion.form>
      </main>
    );
  }

  return (
    <main data-testid="admin-dashboard" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-2">Coach Dashboard</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-[#0F3818] leading-tight">Leads Inbox</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            data-testid="admin-refresh-btn"
            onClick={() => fetchLeads(localStorage.getItem("admin_token"))}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#0F3818]/10 text-[#0F3818] font-semibold rounded-full px-5 py-2.5 hover:border-[#FF7235] transition"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} /> Refresh
          </button>
          <button
            data-testid="admin-export-btn"
            onClick={exportCsv}
            className="inline-flex items-center gap-2 bg-[#FF7235] hover:bg-[#FF8A55] text-white font-bold rounded-full px-5 py-2.5 transition shadow-md shadow-[#FF7235]/30"
          >
            <Download size={16} /> Export CSV
          </button>
          <button
            data-testid="admin-logout-btn"
            onClick={logout}
            className="inline-flex items-center gap-2 text-[#0F3818] font-semibold rounded-full px-3 py-2.5 hover:text-[#FF7235] transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Stat label="Total Leads" value={leads.length} icon={<Users size={18} />} />
        <Stat label="Fat Loss" value={leads.filter(l => l.goal === "Fat Loss").length} />
        <Stat label="Muscle Gain" value={leads.filter(l => l.goal === "Muscle Gain").length} />
        <Stat label="Today" value={leads.filter(l => new Date(l.created_at).toDateString() === new Date().toDateString()).length} />
      </div>

      <div className="bg-white rounded-3xl border border-[#0F3818]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" data-testid="leads-table">
            <thead className="bg-[#F3EFE9] text-[#0F3818]">
              <tr>
                {["Name", "Age", "Goal", "Weight", "WhatsApp", "Date"].map((h) => (
                  <th key={h} className="text-left font-display font-bold uppercase tracking-wider text-xs px-5 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-12 text-[#4A5D4E]">No leads yet. Share your funnel link!</td></tr>
              ) : leads.map((l) => (
                <tr key={l.id} data-testid={`lead-row-${l.id}`} className="border-t border-[#0F3818]/5 hover:bg-[#F3EFE9]/40">
                  <td className="px-5 py-4 font-semibold text-[#0F3818]">{l.name}</td>
                  <td className="px-5 py-4 text-[#4A5D4E]">{l.age}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${l.goal === "Fat Loss" ? "bg-[#FF7235]/15 text-[#FF7235]" : "bg-[#0F3818]/10 text-[#0F3818]"}`}>
                      {l.goal}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[#4A5D4E]">{l.weight} kg</td>
                  <td className="px-5 py-4 text-[#4A5D4E] font-mono">+91 {l.whatsapp}</td>
                  <td className="px-5 py-4 text-[#4A5D4E]">{new Date(l.created_at).toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value, icon }) {
  return (
    <div className="bg-white border border-[#0F3818]/10 rounded-2xl p-5">
      <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#4A5D4E]">
        <span>{label}</span>
        {icon && <span className="text-[#FF7235]">{icon}</span>}
      </div>
      <div className="font-display font-black text-3xl text-[#0F3818] mt-1">{value}</div>
    </div>
  );
}
