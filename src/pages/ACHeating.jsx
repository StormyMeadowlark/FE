import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import Heating from "../assets/images/Heating.jpg"
import ACServiceServicePage from "../assets/images/ACServiceServicePage.jpg"
import FilterReplacement from "../assets/images/FilterReplacement.jpg"
import SystemReplacement from "../assets/images/SystemReplacement.jpg"
import ACSystemTopImage from "../assets/images/ACSystemTopImage.jpg"

const ACHeating = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>HEM Automotive | A/C & Heating Services in Topeka, KS</title>
        <meta
          name="description"
          content="Stay comfortable in any season with expert A/C and heating services at HEM Automotive in Topeka, KS. Schedule your climate control service today!"
        />
        <meta
          name="keywords"
          content="A/C repair, heating repair, climate control services, auto repair, HVAC services, HEM Automotive, Topeka KS, Freon R134A, Freon R1234YF"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | A/C & Heating Services in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Keep your vehicle's climate control systems in top shape with professional A/C and heating services from HEM Automotive in Topeka, KS. Schedule your service today!"
        />
        <meta
          property="og:url"
          content="https://www.hemautomotive.com/ac-heating"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <img
          src={ACSystemTopImage}
          alt="A/C and Heating Services at HEM Automotive"
          className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
          loading="lazy"
        />

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            A/C & Heating Services
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Ensure your comfort in any weather with expert A/C and heating
            system services at HEM Automotive. From repairs to full system
            replacements, we keep your climate control running efficiently.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule A/C & Heating Service"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule A/C & Heating Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why A/C & Heating Services Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            A properly functioning A/C and heating system is essential for your
            comfort and safety while driving. Whether you&apos;re battling the
            summer heat or winter chill, your vehicle&apos;s climate control
            system ensures you stay comfortable year-round.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, our experienced technicians provide comprehensive
            A/C and heating services, from routine maintenance to complex
            repairs, ensuring your system operates at peak performance.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our A/C & Heating Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={FilterReplacement}
                alt="A/C System Inspection"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                A/C System Inspection
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Our A/C system inspection service includes a thorough check of
                all components, including the compressor, refrigerant levels,
                and hoses, ensuring your system is ready to beat the heat.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={SystemReplacement}
                alt="Heating System Repair"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Heating System Repair
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Whether your heater isn&apos;t working at all or it&apos;s only
                blowing cold air, our heating system repair service will get you
                warm and cozy again, ensuring your comfort during the colder
                months.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={ACServiceServicePage}
                alt="Climate Control System Replacement"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Climate Control System Replacement
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                If your A/C or heating system is beyond repair, we offer
                complete system replacements using high-quality components,
                ensuring long-lasting comfort and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Servicing Your A/C System
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            At HEM Automotive, we specialize in servicing both R134A and R1234YF
            refrigerants. Whether your vehicle uses the traditional R134A
            refrigerant or the newer, more environmentally friendly R1234YF, our
            team is equipped to recharge your system efficiently and safely.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            Regular servicing of your A/C system ensures that your vehicle
            remains cool and comfortable, even in the hottest weather. Our
            technicians will check for leaks, recharge the refrigerant, and
            ensure your system is performing optimally.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your A/C or Heating Service Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don&apos;t let a faulty A/C or heating system leave you
            uncomfortable. Contact HEM Automotive today to schedule your A/C or
            heating service and ensure your vehicle&apos;s climate control is in
            top condition.
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

export default ACHeating;
