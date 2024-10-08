import { useState, useEffect } from "react";
import "../../../App.css";
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react";
import ContactInfo from "./ContactInfo";
import Navigation from "./Navigation";
import QuickLinks from "./QuickLinks";
import { Link } from "react-router-dom";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true); // Manage header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader); // Attach scroll listener
    return () => {
      window.removeEventListener("scroll", controlHeader); // Clean up listener on unmount
    };
  }, [lastScrollY]); // Re-run the effect if lastScrollY changes

  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 bg-black/50 font-Play transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="px-3">
        <nav
          className="flex flex-1 items-center justify-evenly"
          aria-label="Global"
        >
          <div>
            <Link to="/" className="flex flex-1">
              <span className="sr-only">H.E.M. Automotive</span>
              <Logo className="scale-75" />
            </Link>
            <ContactInfo />
            <Navigation />
            <QuickLinks />
          </div>
        </nav>
      </header>
    </div>
  );
}
