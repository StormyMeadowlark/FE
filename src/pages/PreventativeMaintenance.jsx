import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import PreventativeMaintenance from "../assets/images/PreventativeMaintenanceTop.jpg";
import OilChange from "../assets/images/OilChange.jpg"
import TireRotation from "../assets/images/TireRotation.jpg"
import BrakeInspection from "../assets/images/BrakeInspection.jpeg"


const PreventiveMaintenance = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>HEM Automotive | Preventive Maintenance in Topeka, KS</title>
        <meta
          name="description"
          content="Keep your vehicle running smoothly with preventive maintenance services at HEM Automotive. Schedule your next oil change, tire rotation, or brake inspection in Topeka, KS today!"
        />
        <meta
          name="keywords"
          content="preventive maintenance, auto repair, oil change, tire rotation, brake inspection, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Preventive Maintenance in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Ensure the longevity and reliability of your vehicle with preventive maintenance services from HEM Automotive in Topeka, KS. Book your service today!"
        />

        <meta
          property="og:url"
          content="https://www.hemautomotive.com/preventive-maintenance"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <img
          src={PreventativeMaintenance}
          alt="Preventive Maintenance at HEM Automotive"
          className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
          loading="lazy"
        />

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Preventive Maintenance
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Keep your vehicle in top shape with regular preventive maintenance
            services from HEM Automotive. Our expert mechanics ensure your car
            runs smoothly and efficiently, preventing costly repairs down the
            road.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Maintenance"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Preventive Maintenance"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Preventive Maintenance Matters
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Regular preventive maintenance is key to extending the life of your
            vehicle, improving safety, and saving money on potential repairs. At
            HEM Automotive, we provide comprehensive maintenance services
            tailored to your vehicle&apos;s needs.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            Our services include oil changes, tire rotations, brake inspections,
            and more. Our expert mechanics use the latest technology to ensure
            your vehicle stays in peak condition, providing you with peace of
            mind on the road.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Preventive Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={OilChange}
                alt="Oil Change Service"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Oil Change
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Regular oil changes are essential to keep your engine running
                smoothly. Our oil change service includes a comprehensive check
                of your vehicle’s vital components.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={TireRotation}
                alt="Tire Rotation Service"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Tire Rotation
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Ensure even tire wear and extend the life of your tires with
                regular tire rotations. We’ll also check your tire pressure and
                tread depth.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={BrakeInspection}
                alt="Brake Inspection Service"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Brake Inspection
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Safety comes first with our thorough brake inspection service.
                We&apos;ll ensure your brakes are in optimal condition to keep you
                safe on the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Preventive Maintenance Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don’t wait until it’s too late! Regular preventive maintenance can
            save you time and money in the long run. Contact HEM Automotive
            today to schedule your next service.
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

export default PreventiveMaintenance;
