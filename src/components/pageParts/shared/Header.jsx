import "../../../App.css";
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react";
import ContactInfo from "./ContactInfo";
import Navigation from "./Navigation";
import QuickLinks from "./QuickLinks";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="absolute top-0 inset-x-0 z-50 bg-black/50 font-Play">
      <header className="px-3">
        <nav
          className="flex flex-1 items-center justify-evenly"
          aria-label="Global"
        >
          <div className="">
            <Link to="/" className="flex flex-1">
              <span className="sr-only">H.E.M. Automotive</span>
              <Logo className="scale-75" />
            </Link>
          </div>
            <div>
                <ContactInfo />
                <Navigation />
            </div>
            <div>
                <QuickLinks />
            </div>
        </nav>
      </header>
    </div>
  );
}
