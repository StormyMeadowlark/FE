import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";

// Optimized image formats and responsive sizes
import OilChangeHero from "../assets/images/BGproductLogo.png?react";
import ConventionalOil from "../assets/images/OilPour.png?react";
import SyntheticOil from "../assets/images/EPRMOA.png?react";
import OilFilterChange from "../assets/images/44K.png?react";
import DieselOilPour from "../assets/images/DieselOilPour.png?react"
import DOCEPR from "../assets/images/DOCEPR.png?react"
import DieselFuelCleaner from "../assets/images/DieselFuelCleaner.png?react"
import InductionCleaning from "../assets/images/InductionCleaning.png?react"


const LifetimeProtection = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>Lifetime BG Protection Plan® | HEM Automotive</title>
        <meta
          name="description"
          content="Extend the life of your vehicle with professional oil change services from HEM Automotive in Topeka, KS. Schedule your appointment today!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Lifetime BG Protection Plan®" />
        <meta
          property="og:description"
          content="HEM Automotive provides Lifetime BG Protection Plan® with select services to keep your peace of mind. Visit us in Topeka, KS!"
        />
        <meta
          property="og:url"
          content="https://hemautomotive.com/services/preventative-maintenance/oil-change"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-zinc-400 text-white">
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
            className="absolute inset-0 -z-10 brightness-[100%] object-cover h-full w-full"
            loading="lazy"
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 h-[50vh] flex flex-col justify-center items-center text-center">
          <div className="m-10 bg-black rounded-lg bg-opacity-70">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight mt-8">
              Lifetime BG Protection Plan®
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
              The Lifetime BG Protection Plan® is designed to give you peace of
              mind by protecting your vehicle’s critical systems for the long
              haul. When you choose BG services like upgraded oil changes,
              you’re automatically eligible for coverage that helps protect your
              engine, transmission, and fuel system against costly repairs, as
              long as you keep up with regular maintenance. It’s a smart way to
              add value and longevity to your vehicle.
            </p>
            <div className="mt-10 p-10">
              <GreenButton
                href="/contact"
                textarea="Schedule Your BG Service Now"
                className="transition-transform transform hover:scale-105"
                aria-label="Schedule Oil Change Service"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Lifetime Protection For Your Vehicle
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-4">
            Maximum mileage to enter the plans:
          </p>
          <p className="italic text-[#cccccc] font-Urbanist">
            Vehicle must be no more than 20 years old at the time of the initial
            service
          </p>
          <div className="flex flex-1 justify-evenly items-center text-center text-lg md:text-xl text-[#aaaaaa] font-Urbanist">
            <p>Plan 1: 0-50,000 miles</p>
            <p>Plan 2: 50,001-75,000 miles</p>
          </div>
          <p className="text-center text-lg md:text-xl text-[#aaaaaa] font-Urbanist">
            Plan 2 High Mileage (gasoline engines only): 75,001-125,000 miles
          </p>
          <p className="text-xs text-[#aaaaaa] font-Urbanist mt-8">
            This Plan is an added benefit when qualified BG services are
            purchased. All services must be performed by a professional
            technician at a licensed service center using an approved BG
            maintenance procedure with proper BG products and equipment.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Plan Details
          </h2>
          <div>
            Stay tuned! We're gearing up to bring you all the details about the
            Lifetime BG Protection Plan®. Thanks for your patience as we get
            this page rolling
          </div>
          {/*
          <div>
            <p>Engine Services</p>
            <p>
              Engine oil grade and weight must meet vehicle manufacturer's
              recommendations. Timing belt and air and oil filter must be
              replaced and emission control system maintained in accordance with
              vehicle manufacturer's recommendations.{" "}
              <b>
                To remain eligible, return to a BG shop to have service
                performed within required service interval.
              </b>{" "}
              All BG products must be applied in accordance with stated
              directions for use.
            </p>
            <div className="flex flex-1 justify-evenly">
              <div>
                <p>SERVICE INTERVAL</p>
                <ul>
                  <li>10,000 miles for gasoline</li>
                  <li> 7,500 miles for diesel</li>
                </ul>
              </div>
              <div>
                <p>MAXIMUM COVERAGE</p>
                <ul>
                  <li>Plan 1: $4,000</li>
                  <li>Plan 2: $2,000</li>
                </ul>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
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
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Oil Change Packages for Light Duty Diesel Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={DieselOilPour}
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
                      $185.86
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
                src={DOCEPR}
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
                  <li>BG DOC® Diesel Oil Conditioner</li>
                  <li>BG EPR® Engine Performance Restoration</li>
                </ul>
                <div className="flex flex-1 items-center justify-evenly">
                  <div>
                    <p>Synthetic Blend</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $269.31
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
                src={DieselFuelCleaner}
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
                  <li> BG Diesel Fuel System Performance Restoration</li>
                </ul>
                <div className="flex flex-1 items-center justify-evenly">
                  <div>
                    <p>Synthetic Blend</p>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $326.90
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
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Other BG Services
          </h2>
          <div className="grid grid-cols-1 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={InductionCleaning}
                alt="Conventional Oil Change"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                BG Platinum® Fuel System Service
              </h3>
              <div className="text-lg text-[#cccccc] font-Urbanist">
                <ul className="list-disc pl-5 pb-8">
                  <li>Restores fuel efficiency</li>
                  <li>Restores vehicle performance and power</li>
                  <li>prevents costly component repairs</li>
                </ul>
                <div className="flex flex-1 items-center justify-evenly">
                  <div>
                    <p className="text-center font-extrabold text-HEMgreen">
                      $190.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Next BG Service Now
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Keep your engine and fuel system running like new. Contact HEM
            Automotive today to schedule your BG oil change service in Topeka,
            KS.
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

export default LifetimeProtection;