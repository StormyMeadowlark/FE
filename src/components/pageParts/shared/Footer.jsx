import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react";
import List from "./Socials";
import FacebookIcon from "../../../assets/PNGicons/FacebookIcon.png?react";
import YouTubeIcon from "../../../assets/PNGicons/YouTubeIcon.png?react";
import TikTokIcon from "../../../assets/PNGicons/TikTokIcon.png?react";
import InstagramIcon from "../../../assets/PNGicons/InstagramIcon.png?react";
import GoogleIcon from "../../../assets/PNGicons/GoogleIcon.png?react";
import CarFaxIcon from "../../../assets/PNGicons/CarfaxIcon.png?react";
import YelpIcon from "../../../assets/PNGicons/YelpIcon.png?react";
import HemAutomotiveFooterMap from "./footermap";
import { Link } from "react-router-dom";

export default function Footer() {
  const socials = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/HEMautomotive/",
      src: FacebookIcon,
      alt: "Facebook logo",
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/@hemautomotive",
      src: YouTubeIcon,
      alt: "YouTube logo",
    },
    {
      title: "TikTok",
      href: "https://www.tiktok.com/@hemautomotive",
      src: TikTokIcon,
      alt: "TikTok logo",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/hemautomotive/",
      src: InstagramIcon,
      alt: "Instagram logo",
    },
  ];

  const reviews = [
    {
      title: "Google",
      href: "https://www.google.com/search?q=hem+automotive",
      src: GoogleIcon,
      alt: "Google logo",
    },
    {
      title: "CarFax",
      href: "https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ",
      src: CarFaxIcon,
      alt: "CarFax logo",
    },
    {
      title: "Yelp",
      href: "https://www.yelp.com/biz/hem-automotive-topeka",
      src: YelpIcon,
      alt: "Yelp logo",
    },
  ];

  return (
    <footer
      className="bg-[#222222] text-white shadow-inner shadow-[#00ff00] transition-all duration-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        {/* Mobile-first stack layout */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
          {/* Logo and Links Section */}
          <div className="flex flex-col items-center md:flex-row md:space-x-10">
            <Link to="/" className="mb-4 md:mb-0">
              <Logo
                className="w-40 h-auto transform hover:scale-105 transition duration-300"
                alt="H.E.M Automotive Logo: Lime green and black logo of half gear and wrenches"
              />
            </Link>
            <div className="flex flex-col items-center space-y-2 md:items-start md:space-y-3">
              {[
                { to: "/services", label: "SERVICES" },
                { to: "/faq", label: "FAQ" },
                { to: "/about", label: "ABOUT"},
                { to: "/careers", label: "CAREERS"},
                { to: "/contact", label: "CONTACT" },
                { to: "/sales", label: "SALES" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xl md:text-2xl font-Bungee hover:text-HEMgreen transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="flex justify-center w-full">
            <HemAutomotiveFooterMap />
          </div>

          {/* Contact Info */}
          <div className="text-center text-[#eeeeee] space-y-4">
            {[
              { Icon: ClockIcon, label: "Temporarily Closed" },
              {
                Icon: MapPinIcon,
                label: "315 SW 32nd Terrace\nTopeka, KS 66611",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-end space-x-3"
              >
                <item.Icon
                  className="w-6 h-6 text-HEMgreen"
                  aria-hidden="true"
                />
                <address className="not-italic text-lg font-Play">
                  {item.label.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>

        {/* Socials and Reviews */}
        <div className="p-4 text-[#00ff00] text-center mt-6 md:mt-8">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-center max-w-7xl mx-auto">
            <div>
              <h5 className="pb-2 font-Bungee text-xl">Follow Us</h5>
              <List socials={socials} />
            </div>
            <div>
              <h5 className="pb-2 font-Bungee text-xl">Leave Us a Review</h5>
              <List socials={reviews} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#00ff00] py-6 mt-8">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center max-w-7xl mx-auto">
            <Link
              to="https://www.stormymeadowlark.com"
              className="font-Play text-base md:text-lg tracking-wider text-[#00ff00] hover:text-white transition-colors duration-300"
              aria-label="Visit the Stormy Meadowlark Design Co. website"
            >
              Website Designed & Maintained by: Stormy Meadowlark Design Co.
            </Link>
            <div className="text-center md:text-right">
              <Link
                to="/legal"
                className="text-sm font-Play tracking-wide hover:text-HEMgreen transition-colors duration-300"
                aria-label="View legal information"
              >
                Legal
              </Link>
              <h3 className="text-sm font-Play tracking-wide mt-2">
                &copy; 2025 HEM AUTO LLC
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
