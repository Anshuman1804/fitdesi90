import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Sparkles, Calendar, Send } from "lucide-react";
import { waLink } from "@/lib/coach";

const STEPS = [
  { icon: Send, title: "Coach sends your plan", body: "Within 60 seconds, you'll get a WhatsApp message with your 7-day plan PDF.", time: "Now" },
  { icon: MessageCircle, title: "Quick onboarding chat", body: "Coach Arjun will ask about your eating habits & schedule (3 minutes).", time: "Today" },
  { icon: Calendar, title: "Day 1 starts tomorrow", body: "We kick off your transformation with a clear morning routine + breakfast plan.", time: "Tomorrow" },
];

export default function ThankYou() {
  const { state } = useLocation();
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const name = state?.name?.split(" ")[0] || "Champion";

  return (
    <main data-testid="thank-you-page" className="min-h-[80vh] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mx-auto w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/30">
          <CheckCircle2 className="text-white" size={42} strokeWidth={2.5} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-center mt-6">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3 inline-flex items-center gap-2">
            <Sparkles size={14} /> Welcome to the family
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#0F3818] leading-[0.95]">
            Shabaash, {name}!
          </h1>
          <p className="mt-4 text-lg text-[#4A5D4E] max-w-xl mx-auto">
            Your free 7-Day Fat Loss Plan is being personalized and sent to your WhatsApp now.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          data-testid="countdown-card"
          className="mt-10 bg-[#0F3818] text-[#FBF9F6] rounded-3xl p-8 md:p-10 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235]">Plan arriving in</p>
          <div className="font-display text-7xl md:text-8xl font-black mt-2" data-testid="countdown-value">
            00:{String(Math.max(seconds, 0)).padStart(2, "0")}
          </div>
          <p className="mt-2 text-[#FBF9F6]/70">Check your WhatsApp messages</p>
          <a
            href={waLink("Hi Coach, I just submitted my details — please send my free plan")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="open-whatsapp-cta"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-7 py-4 transition shadow-lg shadow-[#25D366]/30 hover:scale-[1.02]"
          >
            <MessageCircle size={20} /> Open WhatsApp Now
          </a>
        </motion.div>

        <div className="mt-14">
          <h2 className="font-display font-black text-2xl md:text-3xl text-[#0F3818] mb-6">What happens next</h2>
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-testid={`step-${i}`}
                className="bg-white border border-[#0F3818]/10 rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:-translate-y-0.5 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF7235]/15 flex items-center justify-center shrink-0">
                  <s.icon className="text-[#FF7235]" size={22} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display font-bold text-lg text-[#0F3818]">{s.title}</h3>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#FF7235]">{s.time}</span>
                  </div>
                  <p className="mt-1 text-[#4A5D4E]">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A5D4E] mb-3">Curious about the full 90-day program?</p>
          <Link to="/program" data-testid="thank-you-program-link"
            className="inline-flex items-center gap-2 border-2 border-[#0F3818] text-[#0F3818] font-bold rounded-full px-6 py-3 hover:bg-[#0F3818] hover:text-[#FBF9F6] transition">
            Explore the Transformation Program
          </Link>
        </div>
      </div>
    </main>
  );
}
