import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import EqualLensPage from "./pages/EqualLensPage";
import SpendlyPage from "./pages/SpendlyPage";
import AirAwarePage from "./pages/AirAwarePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/equal-lens" element={<EqualLensPage />} />
      <Route path="/work/spendly" element={<SpendlyPage />} />
      <Route path="/work/airaware" element={<AirAwarePage />} />
      <Route path="/work/:projectSlug" element={<CaseStudyPage />} />
    </Routes>
  );
}
