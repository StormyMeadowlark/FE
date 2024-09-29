import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react"; // Use WebP format
import List from "./Socials";
import FacebookIcon from "../../../assets/PNGicons/FacebookIcon.png?react"; // Convert to WebP
import YouTubeIcon from "../../../assets/PNGicons/YouTubeIcon.png?react";
import TikTokIcon from "../../../assets/PNGicons/TikTokIcon.png?react";
import XIcon from "../../../assets/PNGicons/XIcon.png?react";
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
      alt: "Facebook logo", // Add descriptive alt text
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
      title: "X (Twitter)",
      href: "https://www.x.com/@hemautomotive",
      src: XIcon,
      alt: "X (formerly Twitter) logo",
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
      className="bg-[#222222] text-white shadow-inner shadow-[#00ff00]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6">
            <Link to="/">
              <Logo
                className="w-52 h-auto"
                alt="H.E.M Automotive Logo: Lime green and black logo of half gear and wrenches"
              />
            </Link>
            <div className="flex flex-col space-y-2 text-center">
              <Link
                to="/services"
                className="text-xl font-bold hover:text-HEMgreen"
                aria-label="View our automotive services"
              >
                SERVICES
              </Link>
              <Link
                to="/faq"
                className="text-xl font-bold hover:text-HEMgreen"
                aria-label="Frequently asked questions"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-xl font-bold hover:text-HEMgreen"
                aria-label="Contact us"
              >
                CONTACT
              </Link>
              <Link
                to="/autoSchool"
                className="text-xl font-bold hover:text-HEMgreen"
                aria-label="Learn more about Auto School"
              >
                AUTO SCHOOL
              </Link>
            </div>
          </div>

          <>
            <HemAutomotiveFooterMap />
          </>

          <div className="text-right text-[#eeeeee] space-y-4">
            <div className="flex items-center space-x-2">
              <PhoneIcon
                className="w-6 h-6"
                aria-hidden="true"
                stroke="#00FF00"
              />
              <address className="not-italic text-xl">785.730.2900</address>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon
                className="w-6 h-6"
                aria-hidden="true"
                stroke="#00FF00"
              />
              <address className="not-italic text-xl">
                Monday - Friday
                <br />
                8:00 am - 4:00 pm
              </address>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon
                className="w-6 h-6"
                aria-hidden="true"
                stroke="#00FF00"
              />
              <address className="not-italic text-xl">
                315 SW 32nd Terrace
                <br />
                Topeka, KS 66611
              </address>
            </div>
          </div>
        </div>

        <div className="p-2.5 text-[#00ff00] text-center mt-2">
          <div className="flex flex-wrap justify-evenly items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
            <div>
              <h5 className="pb-2">Follow Us</h5>
              <List socials={socials} />
            </div>
            <div>
              <h5 className="pb-2">Leave Us a Review</h5>
              <List socials={reviews} />
            </div>
          </div>
        </div>

        <div className="border-t border-[#00ff00] py-4 mt-8">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
            <Link
              to="https://www.stormymeadowlark.com"
              className="font-Play text-[#00ff00] tracking-wide"
              aria-label="Visit the Stormy Meadowlark Design Co. website"
            >
              Website Designed & Maintained by: Stormy Meadowlark Design Co.
            </Link>
            <div className="text-right">
              <Link
                to="/legal"
                className="text-sm font-Play tracking-wide hover:text-HEMgreen"
                aria-label="View legal information"
              >
                Legal
              </Link>
              <h3 className="text-sm font-Play tracking-wide mt-2">
                &copy; 2024 HEM AUTO LLC
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
