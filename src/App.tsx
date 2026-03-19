import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import AdmissionPopup from "./components/AdmissionPopup";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";

import Infrastructure from "./pages/Infrastructure";
import Admissions from "./pages/Admissions";
import PCI from "./pages/PCI";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <AdmissionPopup />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
       
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/pci" element={<PCI />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
