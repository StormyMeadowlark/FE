import { Outlet } from "react-router-dom";
import MobileNavigation from "./components/pageParts/shared/MobileNavigation.jsx";
import Footer from "./components/pageParts/shared/Footer.jsx";

const App = () => {
  return (
    <div className="bg-black scroll-smooth">
      <div className="sticky inset-y-0 inset-x-0 z-50 bg-black/50 font-Play animate-fadeIn">
        <MobileNavigation />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
