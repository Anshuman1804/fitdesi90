import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import LeadForm from "@/pages/LeadForm";
import ThankYou from "@/pages/ThankYou";
import Admin from "@/pages/Admin";
import Funnel from "@/pages/Funnel";
import Program from "@/pages/Program";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App bg-grain min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/lead-form" element={<LeadForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/funnel" element={<Funnel />} />
          <Route path="/program" element={<Program />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
