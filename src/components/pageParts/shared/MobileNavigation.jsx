import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react";
import QuickLinks, { MobileQuickLinks } from "./QuickLinks";
import ContactInfo from "./ContactInfo";
import MobileContactInfo from "./MobileContactInfo";
import { Link } from "react-router-dom";

const navigation = [
  { name: "SERVICES", href: "services" },
  { name: "FAQ", href: "faq" },
  { name: "ABOUT", href: "about" },
  { name: "CAREERS", href: "careers" },
  { name: "CONTACT", href: "contact" },
  { name: "AUTO SCHOOL", href: "autoSchool" },
  { name: "SALES", href: "sales" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur-lg text-white font-Play transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Centered Contact Info */}
      <div className="bg-black/90 py-2">
        <div className="max-w-7xl mx-auto flex justify-center items-center px-4">
          {/* ContactInfo will now be centered */}
        </div>
      </div>

      {/* Main Header with Logo and Navigation */}
      <div className="max-w-7xl mx-auto flex justify-center items-center p-4">
        <nav className="flex justify-between items-center w-full lg:max-w-screen-lg">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="sr-only">H.E.M Automotive Home</span>
              <Logo className="h-20 w-auto" alt="H.E.M Automotive Logo" />{" "}
              {/* Increased logo size */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ContactInfo />
            <div className="hidden lg:flex flex-1 justify-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold hover:text-[#00ff00] transition-colors focus-visible:outline-none p-2"
                  aria-label={`Go to the ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Quick Links */}
          <div className="hidden lg:flex">
            <QuickLinks />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main navigation menu</span>
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <DialogPanel className="fixed inset-y-0 right-0 w-full bg-[#333333] px-6 py-6 sm:max-w-sm z-[150]">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2"
            >
              <span className="sr-only">H.E.M Automotive Home</span>
              <Logo className="h-16 w-auto" alt="H.E.M Automotive Logo" />
            </Link>
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close navigation menu</span>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          <nav className="space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-lg font-semibold text-white hover:text-[#00ff00] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Quick Links */}
          <MobileQuickLinks />

          {/* Mobile Contact Info */}
          <MobileContactInfo />
        </DialogPanel>
      </Dialog>
    </header>
  );
}
