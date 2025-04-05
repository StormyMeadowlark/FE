import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollTop"; // Import ScrollToTop
import App from "./App.jsx"; // Import the Layout component
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import { Link } from "react-router-dom";
const ReserveVehiclePage = lazy(() =>import("./pages/ReserveVehicle.jsx"));

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
const DieselOilChange = lazy(() => import("./pages/DieselOilChange.jsx"));
const Inspections = lazy(() => import("./pages/Inspections.jsx"));
const AutoSchool = lazy(() => import("./pages/AutoSchool.jsx"));
const SingleBlog = lazy(() => import("./pages/SingleBlogPost.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const InventoryPage = lazy(() => import("./pages/Inventory.jsx"));
const ProductDetailPage = lazy(() => import("./pages/VehicleDetail.jsx"));
const SuperAdminDashboard = lazy(() =>
  import("./pages/SuperAdminDashboard.jsx")
);
const VehicleManagement = lazy(() => import("./pages/VehicleManagement.jsx"));
const AddVehicle = lazy(() => import("./pages/AddVehicle.jsx"));
const MediaManagement = lazy(() => import("./pages/MediaManagement.jsx"));
const UserManagement = lazy(() => import("./pages/UserManagement.jsx"));
const EditVehicle = lazy(() => import("./pages/EditVehicle.jsx"));
const OilChange = lazy(() => import("./pages/OilChange.jsx"));
const LifetimeProtection = lazy(() => import("./pages/LifetimeBGProtectionPlan.jsx"));



ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    {" "}
    {/* Wrap everything with AuthProvider */}
    <Router>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="loader">Loading...</div>
          </div>
        }
      >
        <Routes>
          {/* Wrap all main routes within the Layout component */}
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="experience" element={<Experience />} />
            <Route path="legal" element={<Legal />} />
            <Route path="services" element={<Services />} />
            <Route path="lifetime-protection" element={<LifetimeProtection />} />
            <Route path="careers" element={<Careers />} />
            <Route
              path="services/preventative-maintenance"
              element={<PreventativeMaintenance />}
            />
            <Route
              path="services/preventative-maintenance/oil-change"
              element={<OilChange />}
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
            <Route path="services/diesel/diesel-oil-change" element={<DieselOilChange />} />
            <Route path="services/inspection" element={<Inspections />} />
            <Route path="autoSchool" element={<AutoSchool />} />
            <Route path="autoSchool/:id" element={<SingleBlog />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />

            {/* New Sales/Inventory Routes */}
            <Route path="sales" element={<InventoryPage />} />
            <Route path="sales/:vehicleId" element={<ProductDetailPage />} />
            <Route path="reserve/:vehicleId" element={<ReserveVehiclePage />} />

            {/* Super Admin Routes */}
            <Route path="superadmin" element={<SuperAdminDashboard />} />
            <Route
              path="superadmin/vehicle-management"
              element={<VehicleManagement />}
            />
            <Route
              path="superadmin/media-management"
              element={<MediaManagement />}
            />
            <Route
              path="superadmin/user-management"
              element={<UserManagement />}
            />
            <Route
              path="/superadmin/vehicle-management/add"
              element={<AddVehicle />}
            />
            <Route
              path="/superadmin/vehicle-management/edit/:vehicleId"
              element={<EditVehicle />}
            />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<ErrorPage />} />
            {/* Separate route for the error page */}
            <Route path="error" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  </AuthProvider>
);
