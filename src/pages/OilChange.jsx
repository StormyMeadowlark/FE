import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";

// Optimized image formats and responsive sizes
import OilChangeHero from "../assets/images/DieselOilPour.png?react";
import ConventionalOil from "../assets/images/OilPour.png?react";
import SyntheticOil from "../assets/images/EPRMOA.png?react";
import OilFilterChange from "../assets/images/44K.png?react";
import DieselOilPour from "../assets/images/DieselOilPour.png?react";
import DOCEPR from "../assets/images/DOCEPR.png?react";
import DieselFuelCleaner from "../assets/images/DieselFuelCleaner.png?react";
import { Link } from "react-router-dom";

const OilChange = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>
          Professional Oil Change Services in Topeka, KS | HEM Automotive
        </title>
        <meta
          name="description"
          content="Extend the life of your vehicle with professional oil change services from HEM Automotive in Topeka, KS. Schedule your appointment today!"
        />
        <meta
          name="keywords"
          content="oil change, car maintenance, synthetic oil, conventional oil, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Professional Oil Change Services in Topeka, KS | HEM Automotive"
        />
        <meta
          property="og:description"
          content="HEM Automotive provides high-quality oil change services to keep your engine running smoothly. Visit us in Topeka, KS!"
        />
        <meta
          property="og:url"
          content="https://hemautomotive.com/services/preventative-maintenance/oil-change"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <picture>
          <source
            srcSet={`${OilChangeHero.replace(
              ".jpg",
              ".avif"
            )} 1x, ${OilChangeHero.replace(".jpg", "@2x.avif")} 2x`}
            type="image/avif"
          />
          <source
            srcSet={`${OilChangeHero} 1x, ${OilChangeHero.replace(
              ".jpg",
              "@2x.jpg"
            )} 2x`}
            type="image/jpeg"
          />
          <img
            src={OilChangeHero}
            alt="Professional Oil Change Services at HEM Automotive"
            className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
            loading="lazy"
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Quality Oil Change Services
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            We provide top-quality oil change services tailored to your vehicle,
            whether you drive a gas engine or a light-duty diesel, and whether
            you prefer conventional or synthetic oil. To take your maintenance
            even further, our BG treatment packages offer enhanced engine
            performance and fuel system protection for lasting reliability..
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Your BG Oil Change"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Oil Change Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Oil Changes Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Regular oil changes are one of the simplest yet most important
            things you can do to keep your vehicle running smoothly. Think of
            oil as your engine’s lifeblood—it lubricates moving parts, reduces
            friction, and helps regulate temperature to prevent overheating.
            Over time, oil breaks down and collects dirt and debris, which can
            cause buildup and strain on your engine. By staying on top of oil
            changes, you’re not just maintaining performance; you’re protecting
            your investment and ensuring your car runs reliably for years to
            come. Beyond keeping your engine clean and efficient, routine oil
            changes also contribute to your safety on the road. A
            well-maintained engine is less likely to experience unexpected
            failures, giving you peace of mind every time you drive.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, we go the extra mile by offering high-quality oil
            change services tailored to your needs, including options for gas
            engines, light-duty diesels, and premium BG treatments for added
            protection. Trust us to help you keep your vehicle in top shape,
            mile after mile.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Oil Change Packages for Gas Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={ConventionalOil}
                alt="Conventional Oil Change"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Best Price
              </h3>
              <div className="text-lg text-[#cccccc] font-Urbanist">
                <ul className="list-disc pl-5 pb-8">
                  <li>Oil Change</li>
                  <li>Replace Engine Oil Filter</li>
                  <li>Multi-point Inspection</li>
                </ul>
                <div className="flex flex-1 items-center justify-evenly">
                  <div>
                    <p>Synthetic Blend</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $78.00
                    </p>
                  </div>
                  <div className="">
                    <p>Full Synthetic</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $91.00
                    </p>
                  </div>
                </div>
                <p className="text-xs pt-8">
                  Fuel additive recommended at every oil change interval based
                  on OEM recommendations.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-[#444444] p-6 rounded-lg">
              <img
                src={SyntheticOil}
                alt="Synthetic Oil Change"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-HEMgreen mb-4">
                Best Value
              </h3>
              <div className="text-lg text-[#cccccc] font-Urbanist">
                <ul className="list-disc pl-5 pb-8">
                  <li>
                    Everything in <b>Best Price</b>
                  </li>
                  <li>BG MOA® Engine Oil Supplement</li>
                  <li>BG EPR® Engine Performance Restoration</li>
                </ul>
                <div className="flex flex-1 items-center justify-evenly">
                  <div>
                    <p>Synthetic Blend</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $121.48
                    </p>
                  </div>
                  <div>
                    <p>Full Synthetic</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $134.48
                    </p>
                  </div>
                </div>
                <p className="pt-8 font-extrabold text-HEMgreen">
                  Upgrade to this oil change and get a FREE T-shirt.
                </p>
                <p className="text-xs pt-8">While supplies last.</p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={OilFilterChange}
                alt="Oil Filter Replacement"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Best Performance
              </h3>
              <div className="text-lg text-[#cccccc] font-Urbanist">
                <ul className="list-disc pl-5 pb-8">
                  <li>
                    Everything in <b>Best Value</b>
                  </li>
                  <li> BG 44K® Fuel System Cleaner</li>
                </ul>
                <div className="flex flex-1 items-center justify-evenly">
                  <div>
                    <p>Synthetic Blend</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $154.61
                    </p>
                  </div>
                  <div>
                    <p>Full Synthetic</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      167.61
                    </p>
                  </div>
                </div>
                <p className="pt-8 font-extrabold text-HEMgreen">
                  Upgrade to this oil change and get a FREE T-shirt.
                </p>
                <p className="text-xs pt-8">While supplies last.</p>
              </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-[#aaaaaa] font-Urbanist mt-8 text-center">
            <Link
              to="/services/diesel/diesel-oil-change"
              className="hover:text-HEMgreen"
            >
              Light Duty Diesel Oil Change Services can be found here.
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Lifetime BG Protection Plan®
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            <Link to="/lifetime-protection" className="hover:text-HEMgreen">
              Click here to learn more about the Lifetime BG Protection Plan®.{" "}
            </Link>
            It provides peace of mind for you and for your vehicle. When you
            invest in high-quality BG Maintenance, your vehicle's systems will
            be covered by BG for the life of your vehicle.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            Or you can{" "}
            <Link to="/contact" className="hover:text-HEMgreen">
              Contact us{" "}
            </Link>
            for details on how BG Products provides peace of mind for your and
            your vehicle
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Oil Change Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Keep your engine running like new. Contact HEM Automotive today to
            schedule your oil change service in Topeka, KS.
          </p>
          <GreenButton
            href="/contact"
            textarea="Book an Appointment"
            className="transition-transform transform hover:scale-105"
            aria-label="Book an Appointment"
          />
        </div>
      </section>
    </div>
  );
};

export default OilChange;
