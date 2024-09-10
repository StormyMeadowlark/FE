import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./utils/ScrollTop"; // Import ScrollToTop

// Dynamically import components for code splitting
const About = lazy(() => import("./pages/About.jsx"));
const FAQ = lazy(() => import("./pages/FAQ.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const ErrorPage = lazy(() => import("./pages/Error.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Legal = lazy(() => import("./pages/Legal.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const PreventativeMaintenance = lazy(() =>
  import("./pages/PreventativeMaintenance.jsx")
);
const Diagnostics = lazy(() => import("./pages/Diagnostics.jsx"));
const Tires = lazy(() => import("./pages/Tires.jsx"));
const Alignments = lazy(() => import("./pages/Alignments.jsx"));
const Brakes = lazy(() => import("./pages/Brakes.jsx"));
const SteeringSuspension = lazy(() => import("./pages/SteeringSuspension.jsx"));
const RemoveReplace = lazy(() => import("./pages/RemoveReplace.jsx"));
const ACHeating = lazy(() => import("./pages/ACHeating.jsx"));
const Electrical = lazy(() => import("./pages/Electrical.jsx"));
const LightDutyDiesel = lazy(() => import("./pages/LightDutyDiesel.jsx"));
const Inspections = lazy(() => import("./pages/Inspections.jsx"));
const AutoSchool = lazy(() => import("./pages/AutoSchool.jsx"));
const SingleBlog = lazy(() => import("./pages/SingleBlogPost.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ScrollToTop />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experience" element={<Experience />} />
          <Route path="legal" element={<Legal />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Careers />} />
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
          <Route path="autoSchool" element={<AutoSchool />} />
          <Route path="autoSchool/:id" element={<SingleBlog />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);
