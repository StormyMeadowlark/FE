import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";

// Optimized images in modern formats
import Fuse from "../assets/images/Fuse.webp";
import CarBattery from "../assets/images/CarBattery.webp";
import InstrumentationWiring from "../assets/images/InstrumentationWiring.webp";
import HVACElectrical from "../assets/images/HVACElectrical.webp";
import ElectricalTop from "../assets/images/ElectricalTop.webp";
import VehicleLighting from "../assets/images/VehicleLighting.webp";
import SafetyElectrical from "../assets/images/SafetyElectrical.webp";

const ElectricalDiagnostics = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>
          HEM Automotive | Electrical Diagnostics & Repair in Topeka, KS
        </title>
        <meta
          name="description"
          content="Resolve all your vehicle's electrical issues with expert diagnostics and repair at HEM Automotive in Topeka, KS. From battery drains to malfunctioning systems, we fix it all."
        />
        <meta
          name="keywords"
          content="electrical diagnostics, auto repair, battery drains, wiring issues, HVAC repair, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Electrical Diagnostics & Repair in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Keep your vehicle's electrical systems running smoothly with professional diagnostics and repair from HEM Automotive in Topeka, KS. Schedule your service today!"
        />
        <meta
          property="og:url"
          content="https://www.hemautomotive.com/electrical-diagnostics"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <picture>
          <source
            srcSet={`${ElectricalTop.replace(
              ".jpg",
              ".avif"
            )} 1x, ${ElectricalTop.replace(".jpg", "@2x.avif")} 2x`}
            type="image/avif"
          />
          <source
            srcSet={`${ElectricalTop} 1x, ${ElectricalTop.replace(
              ".jpg",
              "@2x.jpg"
            )} 2x`}
            type="image/jpeg"
          />
          <img
            src={ElectricalTop}
            alt="Electrical Diagnostics and Repair Services at HEM Automotive"
            className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
            loading="lazy"
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Electrical Diagnostics & Repair
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Electrical issues can cause a wide range of problems in your
            vehicle, from battery drains to malfunctioning systems. HEM
            Automotive provides expert diagnostics and repairs to keep your
            vehicle running smoothly.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Electrical Repair"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Electrical Repair"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Electrical Diagnostics & Repair Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Your vehicle&apos;s electrical system controls nearly every
            function, from starting the engine to operating the windows.
            Electrical issues can lead to inconvenient, and sometimes dangerous,
            problems. At HEM Automotive, our expert technicians use advanced
            diagnostic tools to quickly identify and repair any electrical
            issue.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            Whether it&apos;s a minor issue like a faulty power window or a more
            complex problem involving the engine control unit, our comprehensive
            services ensure your vehicle&apos;s electrical systems are restored
            to full functionality.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Electrical Diagnostics & Repair Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                src: CarBattery,
                alt: "Battery and Starting System",
                title: "Battery, Charging, and Starting System",
                description:
                  "Issues such as battery drains, alternator problems, and starter motor failures are diagnosed and repaired to ensure your vehicle starts and charges reliably.",
              },
              {
                src: VehicleLighting,
                alt: "Lighting and Power Accessories",
                title: "Lighting and Power Accessories",
                description:
                  "From headlights and taillights to power windows and mirrors, we repair all power accessories and lighting systems to keep your vehicle functional and safe.",
              },
              {
                src: InstrumentationWiring,
                alt: "Audio and Instrumentation",
                title: "Audio, Infotainment, and Instrumentation",
                description:
                  "We diagnose and repair issues with your vehicle's radio, infotainment system, and instrument cluster, ensuring that you stay informed and entertained on the road.",
              },
              {
                src: HVACElectrical,
                alt: "Engine Control and HVAC Systems",
                title: "Engine, HVAC, and Control Systems",
                description:
                  "From engine control units to HVAC systems, we handle complex electrical issues that affect your vehicle&apos;s performance, comfort, and emissions.",
              },
              {
                src: Fuse,
                alt: "Wiring and Grounding Issues",
                title: "Wiring, Connectors, and Grounding",
                description:
                  "We fix shorts, open circuits, and grounding issues to ensure that your vehicle&apos;s electrical systems operate without interruption.",
              },
              {
                src: SafetyElectrical,
                alt: "Security and Safety Systems",
                title: "Security, Safety, and Other Systems",
                description:
                  "We diagnose and repair issues with keyless entry, alarms, airbags, and other safety systems to keep you and your vehicle secure.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center bg-[#222222] p-6 rounded-lg"
              >
                <img
                  src={service.src}
                  alt={service.alt}
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
                <h3 className="text-2xl font-Urbanist text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-[#cccccc] font-Urbanist">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Electrical Repair Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don&apos;t let electrical issues disrupt your daily driving. Contact
            HEM Automotive today to schedule your electrical diagnostics and
            repair service and ensure your vehicle&apos;s systems are
            functioning correctly.
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

export default ElectricalDiagnostics;
