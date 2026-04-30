import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, Crown, ChefHat, ShoppingBasket, Cookie, MessageCircle, IndianRupee, Lock } from "lucide-react";
import { waLink } from "@/lib/coach";

const TIERS = [
  {
    name: "Starter",
    tag: "Get Started",
    price: 2999,
    period: "/ 90 days",
    desc: "Perfect if you want a structured plan & light support.",
    features: [
      "Personalized 90-day Indian diet plan",
      "Home workout plan (PDF + videos)",
      "Bi-weekly WhatsApp check-ins",
      "Recipes PDF (50+ recipes)",
      "Email + WhatsApp support",
    ],
    cta: "Choose Starter",
    highlight: false,
  },
  {
    name: "Transformation Pro",
    tag: "Most Popular",
    price: 9999,
    period: "/ 90 days",
    desc: "1-on-1 coaching with full accountability — best results.",
    features: [
      "Everything in Starter, plus:",
      "Weekly 1-on-1 WhatsApp coaching calls",
      "Monthly diet refresh (3 plan revisions)",
      "Daily WhatsApp accountability",
      "Form check via video review",
      "Priority response (within 2 hrs)",
      "Lifetime access to recipes vault",
    ],
    cta: "Lock Your Slot",
    highlight: true,
  },
];

const BONUSES = [
  { icon: ChefHat, title: "100+ Indian Recipes PDF", value: "₹999", body: "Healthy versions of dal makhani, biryani, chole — all macro-counted." },
  { icon: ShoppingBasket, title: "Smart Grocery List", value: "₹499", body: "A done-for-you weekly Indian grocery list — saves 2 hours every Sunday." },
  { icon: Cookie, title: "Cheat Meal Survival Guide", value: "₹499", body: "How to enjoy gol gappe, samosa, biryani — without ruining your progress." },
];

export default function Program() {
  return (
    <main data-testid="program-page" className="py-12 md:py-20">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] bg-[#FF7235]/10 rounded-full px-4 py-2 mb-5">
            <Crown size={14} /> 90-Day Transformation Program
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#0F3818] leading-[0.95]">
            Transform completely in <span className="text-[#FF7235]">90 days.</span><br className="hidden md:block" /> Or your money back.
          </h1>
          <p className="mt-5 text-lg text-[#4A5D4E] max-w-2xl mx-auto">
            Two ways to start — choose what fits your commitment level. Both come with a 14-day money-back guarantee.
          </p>
        </motion.div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="grid md:grid-cols-2 gap-6">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              data-testid={`tier-${t.name.toLowerCase().replace(/\s/g, "-")}`}
              className={`relative rounded-[2rem] p-8 md:p-10 border-2 ${t.highlight
                ? "bg-[#0F3818] text-[#FBF9F6] border-[#FF7235] shadow-2xl shadow-[#0F3818]/30"
                : "bg-white text-[#0F3818] border-[#0F3818]/10"}`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-8 bg-[#FF7235] text-white text-xs font-black uppercase tracking-wider rounded-full px-4 py-1.5 shadow-lg">
                  ⭐ {t.tag}
                </span>
              )}
              <h3 className="font-display font-black text-2xl md:text-3xl">{t.name}</h3>
              <p className={`mt-2 ${t.highlight ? "text-[#FBF9F6]/70" : "text-[#4A5D4E]"}`}>{t.desc}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <IndianRupee className={t.highlight ? "text-[#FF7235]" : "text-[#0F3818]"} size={28} strokeWidth={3} />
                <span className="font-display font-black text-5xl md:text-6xl">{t.price.toLocaleString("en-IN")}</span>
                <span className={`text-sm ${t.highlight ? "text-[#FBF9F6]/60" : "text-[#4A5D4E]"}`}>{t.period}</span>
              </div>

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm md:text-base">
                    <CheckCircle2 size={18} strokeWidth={2.5} className={`shrink-0 mt-0.5 ${t.highlight ? "text-[#FF7235]" : "text-[#25D366]"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://razorpay.com/payment-link/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`tier-cta-${t.name.toLowerCase().replace(/\s/g, "-")}`}
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 font-bold rounded-full px-7 py-4 text-base transition hover:scale-[1.01] ${t.highlight
                  ? "bg-[#25D366] hover:bg-[#21B858] text-white shadow-lg shadow-[#25D366]/30"
                  : "bg-[#0F3818] hover:bg-[#143F1F] text-white"}`}
              >
                <Lock size={18} /> {t.cta} • Pay via Razorpay
              </a>

              <p className={`mt-3 text-xs text-center ${t.highlight ? "text-[#FBF9F6]/60" : "text-[#4A5D4E]"}`}>
                Secure payment • UPI / Card / Netbanking
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BONUS STACK */}
      <section className="max-w-6xl mx-auto px-6 mt-20 md:mt-28">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3">Free Bonuses Worth ₹1,997</p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-[#0F3818] leading-tight">Ye sab bhi free milega.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {BONUSES.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              data-testid={`bonus-${i}`}
              className="bg-[#F3EFE9] border border-[#0F3818]/10 rounded-3xl p-6 hover:-translate-y-1 transition relative"
            >
              <span className="absolute -top-3 right-5 bg-[#FF7235] text-white text-xs font-black uppercase tracking-wider rounded-full px-3 py-1">FREE • {b.value}</span>
              <div className="w-12 h-12 rounded-xl bg-[#0F3818] text-[#FBF9F6] flex items-center justify-center">
                <b.icon size={22} strokeWidth={2.5} />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F3818] mt-4">{b.title}</h3>
              <p className="mt-2 text-[#4A5D4E] text-sm leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="max-w-4xl mx-auto px-6 mt-20 md:mt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          data-testid="guarantee-card"
          className="bg-white border-2 border-dashed border-[#FF7235] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#FF7235]/10 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-[#25D366]/10 rounded-full" />
          <div className="relative">
            <div className="mx-auto w-20 h-20 rounded-full bg-[#FF7235] text-white flex items-center justify-center shadow-xl shadow-[#FF7235]/30">
              <ShieldCheck size={36} strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#0F3818] mt-5 leading-tight">14-Day Money-Back Guarantee</h2>
            <p className="mt-4 text-[#4A5D4E] max-w-xl mx-auto text-lg">
              Try the program for 14 days. If you don't feel the difference, message me, and you get a 100% refund. No questions, no awkwardness.
            </p>
          </div>
        </motion.div>
      </section>

      {/* WHATSAPP SAMPLE */}
      <section className="max-w-4xl mx-auto px-6 mt-20 md:mt-28">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3">After payment, this is what happens</p>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[#0F3818]">Coach's WhatsApp message to you</h2>
        </div>

        <div className="bg-[#075E54] rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Crect width=%2240%22 height=%2240%22 fill=%22%23ECE5DD%22/%3E%3Ccircle cx=%225%22 cy=%225%22 r=%221%22 fill=%22%23D9D2C7%22/%3E%3C/svg%3E')] rounded-2xl p-5 md:p-6 space-y-3">
            <ChatBubble side="them">
              🎉 Welcome to the family, Champion! Payment received ✅<br /><br />
              Your 90-day transformation officially starts <strong>tomorrow</strong>. Here's what's coming:
            </ChatBubble>
            <ChatBubble side="them">
              📎 Personalized-Diet-Plan.pdf<br />📎 Home-Workout-Week1.pdf<br />📎 Recipes-Vault.pdf
            </ChatBubble>
            <ChatBubble side="them">
              I'll WhatsApp you every Monday morning to track progress. Reply anytime with questions — even at 11pm 😊<br /><br />
              Save my number: <strong>+91 98765 43210</strong>. Let's go! 💪🇮🇳
            </ChatBubble>
            <ChatBubble side="me">
              Thank you Coach! Excited to start 🔥
            </ChatBubble>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={waLink("Hi Coach, I'm ready to join the 90-day program. Please share details.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="program-final-cta"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-8 py-4 text-lg transition shadow-xl shadow-[#25D366]/40 hover:scale-[1.02]"
          >
            <MessageCircle size={22} /> Talk to Coach on WhatsApp
          </a>
          <p className="mt-3 text-sm text-[#4A5D4E] inline-flex items-center gap-1.5"><Sparkles size={14} className="text-[#FF7235]" /> Only 3 slots left this month</p>
        </div>
      </section>
    </main>
  );
}

function ChatBubble({ side, children }) {
  const isThem = side === "them";
  return (
    <div className={`flex ${isThem ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm md:text-base shadow-sm ${
        isThem
          ? "bg-white text-[#0F3818] rounded-bl-none"
          : "bg-[#DCF8C6] text-[#0F3818] rounded-br-none"
      }`}>
        {children}
        <div className="text-[10px] text-[#4A5D4E] text-right mt-1">12:0{isThem ? "1" : "2"} PM {isThem ? "" : "✓✓"}</div>
      </div>
    </div>
  );
}
