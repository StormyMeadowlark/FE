import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import BrakesTop from "../assets/images/BrakeTop.JPG"
import BrakeInspection from "../assets/images/BrakeInspection.jpg"
import BrakePad from "../assets/images/BrakePad.jpg"
import BrakeRotor from "../assets/images/BrakeRotor.JPG"

const Brakes = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>HEM Automotive | Brake Services in Topeka, KS</title>
        <meta
          name="description"
          content="Ensure your safety on the road with expert brake services at HEM Automotive. We provide brake inspections, pad replacements, and rotor replacements in Topeka, KS."
        />
        <meta
          name="keywords"
          content="brake services, brake repair, brake inspection, brake pad replacement, rotor replacement, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Brake Services in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Keep your vehicle safe with professional brake services from HEM Automotive in Topeka, KS. Schedule your brake service today!"
        />

        <meta
          property="og:url"
          content="https://www.hemautomotive.com/brakes"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <img
          src={BrakesTop}
          alt="Brake Services at HEM Automotive"
          className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
          loading="lazy"
        />

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Brake Services
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Your vehicle&apos;s brakes are its most important safety feature. At HEM
            Automotive, we offer comprehensive brake services, including
            inspections, pad replacements, and rotor replacements, to keep you
            safe on the road.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Brake Service"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Brake Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Brake Services Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Properly functioning brakes are essential for your safety and the
            safety of others on the road. Regular brake inspections and timely
            repairs can prevent accidents and ensure your vehicle stops as it
            should.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, we provide comprehensive brake services to ensure
            your vehicle&apos;s braking system is in top condition, so you can drive
            with confidence.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Brake Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={BrakeInspection}
                alt="Brake Inspection"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Brake Inspection
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Regular brake inspections are key to maintaining your vehicle&apos;s
                safety. Our comprehensive inspections identify any issues with
                your brake system before they become major problems.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={BrakePad}
                alt="Brake Pad Replacement"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Brake Pad Replacement
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Worn-out brake pads can reduce your vehicle&apos;s stopping power and
                lead to damage to other parts of the braking system. We provide
                professional brake pad replacement to ensure your vehicle stops
                efficiently and safely.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={BrakeRotor}
                alt="Rotor Replacement"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Rotor Replacement
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                If your brake rotors are warped, cracked, or worn out, they can
                compromise your vehicle&apos;s braking performance. Our rotor
                replacement service ensures your brakes are in optimal
                condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Brake Service Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don&apos;t wait until your brakes fail. Contact HEM Automotive today to
            schedule your brake service and ensure your vehicle is safe and
            reliable.
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

export default Brakes;
