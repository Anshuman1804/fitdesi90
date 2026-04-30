// Coach branding constants used across the funnel
export const COACH = {
  name: "Coach Arjun",
  brand: "FitDesi 90",
  whatsapp: "919876543210", // E.164 without + for wa.me
  whatsappDisplay: "+91 98765 43210",
};

export const waLink = (text) =>
  `https://wa.me/${COACH.whatsapp}?text=${encodeURIComponent(text || "Hi Coach, I want my free fat loss plan")}`;
