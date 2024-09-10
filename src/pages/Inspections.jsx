import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import InspectionTop from "../assets/images/InspectionTop.webp"; // Use WebP format
import InspectionEngine from "../assets/images/InspectionEngine.webp"; // Use WebP format
import BrakeInspection from "../assets/images/BrakeInspection.webp"; // Use WebP format
import SteeringSuspensionInspection from "../assets/images/SteeringSuspensionInspection.webp"; // Use WebP format
import ElectricalInspection from "../assets/images/ElectricalInspection.webp"; // Use WebP format
import TireInspection from "../assets/images/TireInspection.webp"; // Use WebP format
import DamageInspection from "../assets/images/ProblemsInspection.webp"; // Use WebP format

const Inspections = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>HEM Automotive | Used Car Inspections in Topeka, KS</title>
        <meta
          name="description"
          content="Ensure you're making a smart purchase with HEM Automotive's comprehensive used car inspections in Topeka, KS. Our expert technicians thoroughly check every aspect of the vehicle."
        />
        <meta
          name="keywords"
          content="used car inspection, pre-purchase inspection, vehicle inspection, auto repair, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Used Car Inspections in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Get peace of mind with a comprehensive used car inspection from HEM Automotive in Topeka, KS. Make sure your next vehicle is in top condition before you buy."
        />
        <meta
          property="og:url"
          content="https://www.hemautomotive.com/used-car-inspections"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <img
          src={InspectionTop}
          alt="Used Car Inspection at HEM Automotive"
          className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
          loading="lazy"
        />

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Used Car Inspections
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Make a confident and informed decision with a comprehensive used car
            inspection from HEM Automotive. Our expert technicians meticulously
            inspect every aspect of the vehicle, ensuring you get the best value
            for your money.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Inspection"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Used Car Inspection"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why a Used Car Inspection is Essential
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Buying a used car can be a great way to save money, but it&apos;s
            crucial to know exactly what you&apos;re getting. A thorough
            inspection by our experienced technicians can uncover hidden issues
            that could lead to costly repairs down the road. We help you make an
            informed decision and avoid any unpleasant surprises.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, our used car inspection covers every aspect of
            the vehicle, from the engine and transmission to the brakes,
            suspension, and electrical systems. We provide a detailed report so
            you can make a confident purchase.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            What Our Inspection Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={InspectionEngine}
                alt="Engine and Transmission Check"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Engine and Transmission Check
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Our inspection includes a thorough check of the engine and
                transmission to identify any leaks, wear, or other potential
                issues that could affect the vehicle&apos;s performance and
                longevity.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={BrakeInspection}
                alt="Brake System Evaluation"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Brake System Evaluation
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                We inspect the entire brake system, including pads, rotors, and
                fluid levels, to ensure that the vehicle can stop safely and
                effectively.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={SteeringSuspensionInspection}
                alt="Suspension and Steering Check"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Suspension and Steering Check
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                We assess the suspension and steering components to ensure that
                the vehicle handles properly and provides a smooth, safe ride.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={ElectricalInspection}
                alt="Electrical System Test"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Electrical System Test
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Our technicians check the vehicle&apos;s electrical systems,
                including the battery, alternator, and all lighting and
                accessory circuits, to ensure everything is in working order.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={TireInspection}
                alt="Tire and Wheel Inspection"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Tire and Wheel Inspection
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                We inspect the condition of the tires and wheels, checking for
                proper tread depth, wear patterns, and alignment issues that
                could affect safety and performance.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={DamageInspection}
                alt="Interior and Exterior Condition"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Interior and Exterior Condition
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                We evaluate the condition of the vehicle&apos;s interior and
                exterior, looking for signs of wear, damage, or previous repairs
                that could affect the vehicle&apos;s value or safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Used Car Inspection Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don&apos;t take chances with your next vehicle purchase. Schedule a
            comprehensive used car inspection with HEM Automotive today and buy
            with confidence.
          </p>
          <GreenButton
            href="/contact"
            textarea="Book an Inspection"
            className="transition-transform transform hover:scale-105"
            aria-label="Book an Inspection"
          />
        </div>
      </section>
    </div>
  );
};

export default Inspections;
