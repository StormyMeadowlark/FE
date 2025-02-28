import { Outlet } from "react-router-dom";
import MobileNavigation from "./components/pageParts/shared/MobileNavigation.jsx";
import Footer from "./components/pageParts/shared/Footer.jsx";
import "./App.css";


const App = () => {
  return (
    <div className="bg-black scroll-smooth">
      {/* Sticky Header */}
      <header
        role="banner"
        className="sticky top-0 inset-x-0 z-50 bg-black/50 font-Play animate-fadeIn"
      >
        <MobileNavigation />
      </header>

      {/* Main content that scrolls */}
      <main role="main" className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
