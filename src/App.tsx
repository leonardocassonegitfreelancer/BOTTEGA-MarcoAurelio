import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Prodotti from "./pages/Prodotti";
import Collezioni from "./pages/Collezioni";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Index />} />
            <Route path="/home/en" element={<Index />} />
            <Route path="/collezioni" element={<Collezioni />} />
            <Route path="/gioielli" element={<Prodotti />} />
            <Route path="/gioielli/:categoria" element={<Prodotti />} />
            <Route path="/gioielli/:categoria/:subcollezione" element={<Prodotti />} />
            {/* SEO redirects from old /prodotti URLs */}
            <Route path="/prodotti" element={<Navigate to="/gioielli" replace />} />
            <Route path="/prodotti/*" element={<Navigate to="/gioielli" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
