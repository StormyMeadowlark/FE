import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Legal from "./pages/Legal.jsx";
import Services from "./pages/Services.jsx";
import Careers from "./pages/Careers.jsx";
import PreventativeMaintenance from "./pages/PreventativeMaintenance.jsx";
import Diagnostics from "./pages/Diagnostics.jsx";
import Tires from "./pages/Tires.jsx";
import Alignments from "./pages/Alignments.jsx";
import Brakes from "./pages/Brakes.jsx";
import SteeringSuspension from "./pages/SteeringSuspension.jsx";
import RemoveReplace from "./pages/RemoveReplace.jsx";
import ACHeating from "./pages/ACHeating.jsx";
import Electrical from "./pages/Electrical.jsx";
import LightDutyDiesel from "./pages/LightDutyDiesel.jsx";
import Inspections from "./pages/Inspections.jsx";
import ScrollToTop from "./utils/ScrollTop"; // Import ScrollToTop

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route
          path="services/preventative-maintenance"
          element={<PreventativeMaintenance />}
        />
        <Route path="services/diagnostics" element={<Diagnostics />} />
        <Route path="services/tires" element={<Tires />} />
        <Route path="services/alignments" element={<Alignments />} />
        <Route path="services/brakes" element={<Brakes />} />
        <Route
          path="services/steering-suspension"
          element={<SteeringSuspension />}
        />
        <Route path="services/remove-replace" element={<RemoveReplace />} />
        <Route path="services/ac-heating" element={<ACHeating />} />
        <Route path="services/electrical" element={<Electrical />} />
        <Route path="services/diesel" element={<LightDutyDiesel />} />
        <Route path="services/inspection" element={<Inspections />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="experience" element={<Experience />} />
        <Route path="legal" element={<Legal />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);