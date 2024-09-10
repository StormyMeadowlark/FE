import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import DieselTop from "../assets/images/LightDutyDieselTop.webp";
import DieselMaintenance from "../assets/images/DieselOilChange.webp";
import DieselFuelLines from "../assets/images/DieselFuelLines.webp";
import DieselEmissions from "../assets/images/DieselEmissions.webp";
import BGService from "../assets/images/BGService.webp";
import DieselCoolant from "../assets/images/DieselCoolant.webp";
import DieselDrivetrain from "../assets/images/DieselDrivetrain.webp";

const LightDutyDiesel = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>
          HEM Automotive | Light-Duty Diesel Service & Repair in Topeka, KS
        </title>
        <meta
          name="description"
          content="HEM Automotive offers expert servicing and repair for light-duty diesel vehicles in Topeka, KS. From routine maintenance to complex repairs, we keep your diesel engine running smoothly."
        />
        <meta
          name="keywords"
          content="light-duty diesel service, diesel repair, diesel maintenance, auto repair, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Light-Duty Diesel Service & Repair in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Keep your light-duty diesel vehicle in top condition with expert service and repair from HEM Automotive in Topeka, KS. Schedule your service today!"
        />
        <meta
          property="og:url"
          content="https://www.hemautomotive.com/light-duty-diesel"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <picture>
          <source srcSet={DieselTop} type="image/webp" />
          <img
            src={DieselTop}
            alt="Light-Duty Diesel Service and Repair at HEM Automotive"
            className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
            loading="lazy"
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Light-Duty Diesel Service & Repair
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            HEM Automotive specializes in the service and repair of light-duty
            diesel vehicles. Whether you need routine maintenance or complex
            repairs, our experienced technicians are here to keep your diesel
            engine running efficiently.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Diesel Service"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Diesel Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Light-Duty Diesel Service Matters
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Light-duty diesel engines are known for their durability and
            efficiency, but they require specialized care to maintain peak
            performance. Regular servicing is crucial to prevent costly repairs
            and ensure that your diesel vehicle remains reliable on the road.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, we understand the unique needs of diesel engines.
            Our team is equipped with the knowledge and tools to provide
            comprehensive maintenance and repair services, from oil changes and
            fuel filter replacements to diagnosing and fixing complex engine
            issues.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Light-Duty Diesel Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={DieselMaintenance} type="image/webp" />
                <img
                  src={DieselMaintenance}
                  alt="Diesel Engine Maintenance"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Diesel Engine Maintenance
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Regular maintenance is key to keeping your diesel engine in top
                condition. Our services include oil changes, filter
                replacements, and comprehensive engine inspections to catch
                potential issues early.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={DieselFuelLines} type="image/webp" />
                <img
                  src={DieselFuelLines}
                  alt="Fuel System Services"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Fuel System Services
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                A clean and efficient fuel system is crucial for diesel engines.
                We offer fuel filter replacements, injector cleaning, and system
                diagnostics to ensure your engine runs smoothly and efficiently.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={DieselEmissions} type="image/webp" />
                <img
                  src={DieselEmissions}
                  alt="Exhaust and Emissions Services"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Exhaust and Emissions Services
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Diesel engines require regular exhaust and emissions checks to
                comply with regulations and ensure optimal performance. We
                provide exhaust system repairs and emissions testing to keep
                your vehicle running clean.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={BGService} type="image/webp" />
                <img
                  src={BGService}
                  alt="Turbocharger Maintenance and Repair"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Turbocharger Maintenance and Repair
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Turbochargers boost engine performance but require regular
                maintenance to function properly. We service and repair
                turbochargers to prevent performance issues and extend the life
                of your engine.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={DieselCoolant} type="image/webp" />
                <img
                  src={DieselCoolant}
                  alt="Cooling System Services"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Cooling System Services
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                A well-functioning cooling system is essential for preventing
                overheating and maintaining engine efficiency. Our services
                include coolant flushes, radiator repairs, and thermostat
                replacements.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={DieselDrivetrain} type="image/webp" />
                <img
                  src={DieselDrivetrain}
                  alt="Transmission and Drivetrain Services"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Transmission and Drivetrain Services
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Diesel vehicles often have heavy-duty transmissions and
                drivetrains that require specialized care. We offer transmission
                repairs, fluid changes, and drivetrain maintenance to keep your
                vehicle performing at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Light-Duty Diesel Service Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don’t wait until it’s too late! Regular maintenance and prompt
            repairs are essential to keeping your diesel vehicle in peak
            condition. Contact HEM Automotive today to schedule your light-duty
            diesel service and keep your vehicle running smoothly.
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

export default LightDutyDiesel;