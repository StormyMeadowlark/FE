import NavBar from "./components/NavBar.jsx";
import Footer from "./components/pageParts/shared/Footer.jsx";
import { Outlet } from "react-router-dom";
import Header from "./components/pageParts/shared/Header.jsx";
import MobileNavigation from "./components/pageParts/shared/MobileNavigation.jsx";

const HEMPortal = () => {
  return (
    <div>
      <div className="sticky inset-y-0 inset-x-0 z-50 bg-black/50 font-Play">
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

export default HEMPortal;
