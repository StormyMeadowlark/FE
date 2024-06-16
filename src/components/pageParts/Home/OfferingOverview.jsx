import { Link } from "react-router-dom";
import FMP from "/src/assets/images/FactoryMotorPartsPartnersNetwork.png?react";
import Snap from "/src/assets/images/SnapLogo.png?react";
import CarFax from "/src/assets/images/CarFax.png?react";


export default function OfferingOverview() {
  return (
    <div className="overflow-hidden bg-[#333333] pb-10 text-white px-10 pt-4">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="relative max-w-7xl">
          <h2 className="lg:pt-8 lg:pb-4 lg:text-5xl lg:max-w-5xl text-stroke text-stroke-fill-[#00ff00] text-stroke-black text-3xl md:text-4xl font-Bungee">
            we&apos;ve got you covered,
            <br />
            backed by the names you trust
          </h2>
          <p className="font-Urbanist tracking-wider font-medium text-xl text-white lg:max-w-3xl">
            As proud members of FMP Partners Network Warranty Program, SNAP
            Financing, & CarFax Car Care Service Shop Loyalty Program we have so
            much to offer!
          </p>
          <div className="lg:flex lg:flex-1 justify-between lg:pt-4 lg:pb-8 py-4">
            <div className="lg:basis-1/3 self-center -translate-y-1/4 lg:translate-y-0 px-4">
              <Link
                to="https://fmppartnersnetwork.com/register-warranty/"
                className="lg:basis-1/4 lg:px-3 basis-1/3 "
              >
                <img src={FMP} alt="Factory Motor Parts Logo" className="" />
              </Link>
              <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-5xl text-center md:-mt-32 lg:my-0 -pt-20 pb-20 lg:text-3xl">
                12 Month / 12,000 Mile Warranty
              </h3>
            </div>
            <div className="lg:basis-1/3 self-center -translate-y-1/4 lg:translate-y-0 px-4">
              <Link
                to="https://snapf.in/fcWxYYK"
                className="flex basis-1/3 lg:basis-1/4 lg:px-3 px-1.5 py-1"
              >
                <img
                  src={Snap}
                  alt="Snap Financing Logo"
                  className="bg-[#777777] hexagon aspect-[6/5]"
                />
              </Link>
              <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-5xl text-center align-text-bottom lg:mt-20 mt-8 mb-20 lg:text-3xl">
                Up to $5000<br />in Financing
              </h3>
            </div>
            <div className="lg:basis-1/3 self-center -translate-y-1/4 lg:translate-y-0 px-4">
              <Link
                to="https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ"
                className="flex basis-1/3 lg:basis-1/4 lg:px-3 px-1.5 py-1"
              >
                <img
                  src={CarFax}
                  alt="CarFax Car Care Service Center Logo"
                  className=""
                />
              </Link>
              <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-5xl text-center lg:mt-20 mt-8 lg:text-3xl">
                Maintenance Remainders
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
