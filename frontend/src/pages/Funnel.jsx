import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Zap, Heart, Gift, Target, Sparkles, AlarmClock } from "lucide-react";

const MESSAGES = [
  {
    icon: Zap, color: "#FF7235", time: "Instant",
    title: "Welcome + Discovery",
    body: "Hey {Name}! Coach Arjun here 🙏 Glad you're here. Quick question — what's your biggest struggle right now?",
    options: ["Belly fat", "Low energy", "No time for gym", "Confused about diet"],
  },
  {
    icon: Heart, color: "#0F3818", time: "After reply",
    title: "Validation + Plan Tease",
    body: "Got it! That's super common — and 100% solvable. Hold tight, sending your plan shortly. (Trust me, you'll love it.)",
  },
  {
    icon: Gift, color: "#25D366", time: "Within 60 sec",
    title: "Value Drop — Free Plan",
    body: "Here's your Free 7-Day Fat Loss Plan 📎 + Indian Diet Chart + Home Workout Guide. Try it for 7 days, no strings attached.",
    attachments: ["7Day-Plan.pdf", "Diet-Chart.pdf", "Home-Workout.pdf"],
  },
  {
    icon: Target, color: "#FF7235", time: "Day 4",
    title: "Soft Pitch",
    body: "Ek important question — are you serious about a real 90-day transformation? Or just want to keep trying random things? No judgment — just trying to understand if I should go deeper with you.",
  },
  {
    icon: Sparkles, color: "#0F3818", time: "Day 5",
    title: "Offer Reveal",
    body: "If you're serious, here's what my 90-Day Transformation Program includes:\n• Custom Indian Diet (refreshed every 30 days)\n• Home Workout Plan + Form Videos\n• Weekly 1-on-1 WhatsApp Check-ins\n• Direct WhatsApp Support 7-days a week",
  },
  {
    icon: AlarmClock, color: "#FF7235", time: "Day 6",
    title: "Urgency Close",
    body: "Just so you know — I take only 12 clients a month. Currently 3 slots left for this batch. Shall I share pricing &amp; lock your seat?",
    cta: "Yes, share pricing",
  },
];

export default function Funnel() {
  return (
    <main data-testid="funnel-page" className="min-h-[80vh] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3">The 6-Message Funnel</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#0F3818] leading-[0.95]">
            How leads turn into <span className="text-[#FF7235]">paying clients.</span>
          </h1>
          <p className="mt-4 text-lg text-[#4A5D4E] max-w-2xl mx-auto">
            A complete WhatsApp nurture sequence — from "Hi" to "Take my money" — done for you.
          </p>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-7 md:left-9 top-2 bottom-2 w-px bg-gradient-to-b from-[#FF7235] via-[#0F3818] to-[#25D366]" />

          <div className="space-y-8">
            {MESSAGES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-testid={`funnel-message-${i + 1}`}
                className="relative pl-20 md:pl-24"
              >
                {/* node */}
                <div
                  className="absolute left-0 top-0 w-14 md:w-[72px] h-14 md:h-[72px] rounded-2xl flex flex-col items-center justify-center text-white font-display font-black"
                  style={{ backgroundColor: m.color }}
                >
                  <m.icon size={20} strokeWidth={2.5} />
                  <span className="text-[10px] uppercase tracking-wider mt-0.5">#{i + 1}</span>
                </div>

                <div className="bg-white border border-[#0F3818]/10 rounded-3xl p-6 md:p-7 shadow-sm hover:-translate-y-0.5 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#FF7235]">{m.time}</span>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-[#0F3818]">{m.title}</h3>
                  </div>

                  <div className="bg-[#DCF8C6] text-[#0F3818] rounded-2xl rounded-bl-none p-4 max-w-xl border border-[#25D366]/20">
                    <p className="text-sm md:text-base whitespace-pre-line leading-relaxed">{m.body}</p>
                    {m.options && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.options.map((o) => (
                          <span key={o} className="bg-white border border-[#25D366]/40 text-[#0F3818] text-xs font-bold rounded-full px-3 py-1.5">{o}</span>
                        ))}
                      </div>
                    )}
                    {m.attachments && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.attachments.map((a) => (
                          <span key={a} className="inline-flex items-center gap-1.5 bg-white border border-[#0F3818]/15 text-[#0F3818] text-xs font-semibold rounded-lg px-2.5 py-1.5">
                            📎 {a}
                          </span>
                        ))}
                      </div>
                    )}
                    {m.cta && (
                      <div className="mt-3">
                        <span className="inline-flex items-center bg-white border border-[#25D366]/40 text-[#25D366] text-xs font-bold rounded-full px-3 py-1.5">▶ {m.cta}</span>
                      </div>
                    )}
                    <div className="mt-2 text-[10px] text-[#4A5D4E] text-right">12:0{i + 1} PM ✓✓</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#0F3818] text-[#FBF9F6] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight">Want this exact funnel running for you?</h2>
          <p className="mt-3 text-[#FBF9F6]/70 max-w-xl mx-auto">Get the full 90-day program — funnel, plan, coach, all-in-one.</p>
          <Link
            to="/program"
            data-testid="funnel-program-cta"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-7 py-4 transition shadow-xl shadow-[#25D366]/40 hover:scale-[1.02]"
          >
            <MessageCircle size={20} /> See the Program
          </Link>
        </div>
      </div>
    </main>
  );
}
