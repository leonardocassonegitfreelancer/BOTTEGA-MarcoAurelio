import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Prodotti from "./pages/Prodotti";
import Collezioni from "./pages/Collezioni";
import Sitemap from "./pages/Sitemap";
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
            {/* Italian routes (default, no prefix) */}
            <Route element={<Layout lang="it" />}>
              <Route index element={<Index />} />
              <Route path="gioielli" element={<Prodotti />} />
              <Route path="gioielli/:categoria" element={<Prodotti />} />
              <Route path="gioielli/:categoria/:subcollezione" element={<Prodotti />} />
              <Route path="collezioni" element={<Collezioni />} />
            </Route>

            {/* English routes (/en prefix) */}
            <Route path="/en" element={<Layout lang="en" />}>
              <Route index element={<Index />} />
              <Route path="jewellery" element={<Prodotti />} />
              <Route path="jewellery/:categoria" element={<Prodotti />} />
              <Route path="jewellery/:categoria/:subcollezione" element={<Prodotti />} />
              <Route path="collections" element={<Collezioni />} />
            </Route>

            {/* Sitemap (no layout, standalone) */}
            <Route path="/sitemap" element={<Sitemap />} />

            {/* Legacy redirects */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/home/en" element={<Navigate to="/en" replace />} />
            <Route path="/prodotti" element={<Navigate to="/gioielli" replace />} />
            <Route path="/prodotti/*" element={<Navigate to="/gioielli" replace />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
