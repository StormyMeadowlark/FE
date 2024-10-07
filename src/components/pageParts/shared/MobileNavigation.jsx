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

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex absolute top-0 inset-x-0 z-50 bg-black/50 font-Play text-white align-middle justify-evenly transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-[80vw] justify-items-center">
        <nav className="flex flex-1 items-center p-6" aria-label="Global">
          <div className="flex flex-1 justify-between">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Link to="/" className="focus-visible:outline-none">
                <span className="sr-only">H.E.M Automotive Home</span>
                <Logo
                  className="h-40 w-auto"
                  alt="H.E.M Automotive Logo: Half of a gear with wrenches and the text 'H.E.M Automotive'"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                className="rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main navigation menu</span>
                <Bars3Icon className="h-6 w-6 flex flex-1" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-evenly">
            <ContactInfo className="hidden lg:flex" />
            <div className="hidden lg:flex lg:gap-x-2 lg:justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold hover:text-[#00ff00] transition-colors focus-visible:outline-none p-2 text-nowrap"
                  aria-label={`Go to the ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <QuickLinks className="hidden lg:flex" />
        </nav>
      </div>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#333333] px-6 py-6 sm:max-w-sm z-[150]">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">H.E.M Automotive Home</span>
              <Logo
                className="h-40 w-auto"
                alt="H.E.M Automotive Logo: Half of a gear with wrenches and the text 'H.E.M Automotive'"
                loading="lazy"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close navigation menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-white font-semibold leading-7 text-lg hover:border-y hover:border-[#00ff00] border-y border-transparent"
                    aria-label={`Navigate to the ${item.name} page`}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <MobileQuickLinks onCloseMenu={() => setMobileMenuOpen(false)} />
              <MobileContactInfo />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
