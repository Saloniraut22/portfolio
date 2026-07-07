import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CustomCursor from "../components/CustomCursor";
import HeroSection from "../components/HeroSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import WorksGrid from "../components/WorksGrid";

const FIGMA_EMBED_URL =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FE1KVcFVrWMLIHWsXKtRMH7%2FAI-SUNGLASSES--Community---Copy-%3Fnode-id%3D3019-128%26t%3DBj9IihCAnfFUDMTu-0%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D1%253A2";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Saloni Raut | Product & UX Designer";

    // Preload Figma after a short idle delay so it doesn't compete with page paint
    const timer = setTimeout(() => {
      if (document.getElementById("figma-preload")) return;
      const iframe = document.createElement("iframe");
      iframe.id = "figma-preload";
      iframe.src = FIGMA_EMBED_URL;
      iframe.style.cssText =
        "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;border:none;top:-1px;left:-1px;";
      document.body.appendChild(iframe);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.hash !== "#works") return;

    const scrollToWorks = () => {
      document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
    };

    const timer = setTimeout(scrollToWorks, 0);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <WorksGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
