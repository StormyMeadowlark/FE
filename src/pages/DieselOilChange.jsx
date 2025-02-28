import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import { Link } from "react-router-dom";

// Optimized image formats and responsive sizes
import OilChangeHero from "../assets/images/OilPour.png?react";
import ConventionalOil from "../assets/images/DieselOilPour.png?react";
import SyntheticOil from "../assets/images/DOCEPR.png?react";
import OilFilterChange from "../assets/images/DieselFuelCleaner.png?react";

const DieselOilChange = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>
          Professional Light Duty Diesel Oil Change Services in Topeka, KS | HEM
          Automotive
        </title>
        <meta
          name="description"
          content="Extend the life of your vehicle with professional light duty diesel oil change services from HEM Automotive in Topeka, KS. Schedule your appointment today!"
        />
        <meta
          name="keywords"
          content="diesel oil change, car maintenance, synthetic oil, conventional oil, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Light Duty Diesel Oil Change Services at HEM Automotive in Topeka, KS"
        />
        <meta
          property="og:description"
          content="HEM Automotive provides high-quality light duty diesel oil change services to keep your engine running smoothly. Visit us in Topeka, KS!"
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
            Quality Light Duty Diesel Oil Change Services
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            At HEM Automotive, we know how important it is to keep your diesel
            running at its best. That’s why we offer light-duty diesel oil
            changes with top-tier service you can count on. Need a little extra?
            Our upgraded BG oil change options add advanced protection and
            performance benefits, so your engine stays cleaner and lasts longer.
            Located right here in Topeka, we’re here to take care of your
            vehicle like it’s our own.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Your Oil Change"
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
          <div className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8 text-left">
            <p>
              Oil changes are one of the most important things you can do to
              keep your diesel engine healthy and running strong. Let me break
              it down for you. Your engine has a lot of moving parts—pistons,
              cylinders, valves—all working under extreme heat and pressure. Oil
              keeps those parts lubricated so they don’t wear out prematurely or
              overheat.
            </p>
            <br></br>
            <p>
              But here’s the thing: over time, oil gets dirty. It collects soot,
              metal particles, and other contaminants, especially in diesel
              engines, which naturally produce more carbon and soot. If you
              leave that dirty oil in there too long, it can turn into sludge
              and cause parts to wear down faster. That’s when you start seeing
              costly repairs or even engine failure.
            </p>
            <br></br>
            <p>
              Fresh oil not only cleans and protects those moving parts but also
              helps maintain good fuel efficiency and overall performance. Plus,
              with diesel engines, using the right oil is crucial because
              they’re built to handle higher compression ratios and heavier
              workloads. Skipping oil changes or using the wrong oil can lead to
              clogs in your filters, buildup in your turbo, and even damage to
              your injectors.
            </p>
            <br></br>
            <p className=" text-[#aaaaaa] font-Urbanist mb-8">
              By staying on top of your oil changes, especially with quality oil
              and additives like what we use with BG, you’re not just keeping
              your engine clean—you’re protecting your investment. Diesel
              engines are built to last, and regular oil changes make sure you
              get the long life and performance they’re designed for.
            </p>
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
          <p className="text-xl md:text-2xl text-[#aaaaaa] font-Urbanist mt-8 text-center">
            <Link
              to="/services/preventative-maintenance/oil-change"
              className="hover:text-HEMgreen"
            >
              Gas Oil Change Services can be found here.
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

export default DieselOilChange;
