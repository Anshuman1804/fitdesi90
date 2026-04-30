import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MessageCircle, Loader2, ShieldCheck, Lock } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function LeadForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", age: "", goal: "Fat Loss", weight: "", whatsapp: "" });

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.weight || !form.whatsapp) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        age: parseInt(form.age, 10),
        goal: form.goal,
        weight: parseFloat(form.weight),
        whatsapp: form.whatsapp.trim(),
      };
      const res = await axios.post(`${API}/leads`, payload);
      const lead = res.data;

      // Local backup for admin/localStorage view
      const existing = JSON.parse(localStorage.getItem("leads") || "[]");
      existing.push(lead);
      localStorage.setItem("leads", JSON.stringify(existing));

      toast.success("Plan request received! Sending to your WhatsApp...");
      navigate("/thank-you", { state: { name: form.name, whatsapp: form.whatsapp } });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main data-testid="lead-form-page" className="min-h-[80vh] py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3">Step 1 of 1 • 60 seconds</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#0F3818] leading-[0.95]">
              Get your free fat loss plan.
            </h1>
            <p className="mt-4 text-lg text-[#4A5D4E]">Personalized for your body, goal &amp; schedule. Sent directly to your WhatsApp.</p>
          </div>

          <form
            onSubmit={submit}
            data-testid="lead-form"
            className="bg-white rounded-3xl p-7 md:p-10 border border-[#0F3818]/10 shadow-sm space-y-5"
          >
            <Field label="Full Name" testid="field-name">
              <input
                data-testid="lead-input-name"
                value={form.name}
                onChange={handle("name")}
                placeholder="e.g. Priya Sharma"
                className="w-full bg-[#FBF9F6] border-2 border-[#0F3818]/10 rounded-xl px-4 py-3.5 text-base focus:border-[#FF7235] focus:ring-2 focus:ring-[#FF7235]/20 transition outline-none"
                required
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Age" testid="field-age">
                <input
                  data-testid="lead-input-age"
                  type="number"
                  min="14"
                  max="80"
                  value={form.age}
                  onChange={handle("age")}
                  placeholder="28"
                  className="w-full bg-[#FBF9F6] border-2 border-[#0F3818]/10 rounded-xl px-4 py-3.5 text-base focus:border-[#FF7235] focus:ring-2 focus:ring-[#FF7235]/20 transition outline-none"
                  required
                />
              </Field>
              <Field label="Current Weight (kg)" testid="field-weight">
                <input
                  data-testid="lead-input-weight"
                  type="number"
                  step="0.1"
                  min="30"
                  max="200"
                  value={form.weight}
                  onChange={handle("weight")}
                  placeholder="72.5"
                  className="w-full bg-[#FBF9F6] border-2 border-[#0F3818]/10 rounded-xl px-4 py-3.5 text-base focus:border-[#FF7235] focus:ring-2 focus:ring-[#FF7235]/20 transition outline-none"
                  required
                />
              </Field>
            </div>

            <Field label="Your Goal" testid="field-goal">
              <select
                data-testid="lead-input-goal"
                value={form.goal}
                onChange={handle("goal")}
                className="w-full bg-[#FBF9F6] border-2 border-[#0F3818]/10 rounded-xl px-4 py-3.5 text-base focus:border-[#FF7235] focus:ring-2 focus:ring-[#FF7235]/20 transition outline-none"
              >
                <option value="Fat Loss">Fat Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
              </select>
            </Field>

            <Field label="WhatsApp Number" testid="field-whatsapp">
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl bg-[#0F3818] text-[#FBF9F6] font-semibold border-2 border-r-0 border-[#0F3818]/10">+91</span>
                <input
                  data-testid="lead-input-whatsapp"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={form.whatsapp}
                  onChange={handle("whatsapp")}
                  placeholder="98765 43210"
                  className="flex-1 bg-[#FBF9F6] border-2 border-[#0F3818]/10 rounded-r-xl px-4 py-3.5 text-base focus:border-[#FF7235] focus:ring-2 focus:ring-[#FF7235]/20 transition outline-none"
                  required
                />
              </div>
            </Field>

            <button
              type="submit"
              disabled={loading}
              data-testid="lead-submit-btn"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#21B858] disabled:opacity-60 text-white font-bold rounded-full px-7 py-4 text-lg transition shadow-lg shadow-[#25D366]/30 hover:scale-[1.01]"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <MessageCircle size={20} />}
              {loading ? "Sending..." : "Get My Free Plan"}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-3 text-xs text-[#4A5D4E]">
              <span className="inline-flex items-center gap-1.5"><Lock size={14} /> Your details are 100% private</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} /> No spam, ever</span>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

function Field({ label, children, testid }) {
  return (
    <label className="block" data-testid={testid}>
      <span className="block text-sm font-semibold text-[#0F3818] mb-2">{label}</span>
      {children}
    </label>
  );
}
