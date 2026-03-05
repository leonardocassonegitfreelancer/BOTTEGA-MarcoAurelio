import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  lang: "it" | "en";
}

const Layout = ({ lang }: LayoutProps) => {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
