import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import SteeringSuspensionTopJPG from "../assets/images/SteeringSuspensionTop.jpg";
import SteeringSuspensionTopWEBP from "../assets/images/SteeringSuspensionTop.webp";
import SuspensionInspectionJPG from "../assets/images/Suspension.jpg";
import SuspensionInspectionWEBP from "../assets/images/Suspension.webp";
import SteeringJPG from "../assets/images/Steering.jpg";
import SteeringWEBP from "../assets/images/Steering.webp";
import SuspensionCardJPG from "../assets/images/SuspensionCard.jpg";
import SuspensionCardWEBP from "../assets/images/SuspensionCard.webp";

const SteeringSuspension = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>
          HEM Automotive | Steering & Suspension Services in Topeka, KS
        </title>
        <meta
          name="description"
          content="Ensure a smooth and safe ride with expert steering and suspension services at HEM Automotive. We provide inspections, steering, and suspension repairs in Topeka, KS."
        />
        <meta
          name="keywords"
          content="steering services, suspension services, auto repair, steering inspection, suspension repair, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Steering & Suspension Services in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Keep your vehicle safe and comfortable with professional steering and suspension services from HEM Automotive in Topeka, KS. Schedule your service today!"
        />
        <meta
          property="og:url"
          content="https://www.hemautomotive.com/steering-suspension"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <picture>
          <source srcSet={SteeringSuspensionTopWEBP} type="image/webp" />
          <source srcSet={SteeringSuspensionTopJPG} type="image/jpeg" />
          <img
            src={SteeringSuspensionTopWEBP}
            alt="Steering and Suspension Services at HEM Automotive"
            className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
            loading="lazy"
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Steering & Suspension
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Your vehicle&apos;s steering and suspension systems are crucial for
            a smooth, safe, and comfortable ride. At HEM Automotive, we offer
            comprehensive services to ensure your vehicle handles perfectly on
            the road.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Steering & Suspension Service"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Steering & Suspension Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Steering & Suspension Services Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Properly maintained steering and suspension systems are key to the
            overall safety and performance of your vehicle. These systems work
            together to provide stability, control, and comfort while driving.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, we provide thorough inspections, expert repairs,
            and precise replacements to ensure your vehicle&apos;s steering and
            suspension systems are in optimal condition.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Steering & Suspension Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={SteeringWEBP} type="image/webp" />
                <source srcSet={SteeringJPG} type="image/jpeg" />
                <img
                  src={SteeringWEBP}
                  alt="Steering System Services"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Steering System Services
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Whether your steering feels off or you hear strange noises while
                turning, our steering system services ensure everything from
                your power steering pump to your steering rack is functioning
                smoothly.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={SuspensionCardWEBP} type="image/webp" />
                <source srcSet={SuspensionCardJPG} type="image/jpeg" />
                <img
                  src={SuspensionCardWEBP}
                  alt="Suspension System Services"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Suspension System Services
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Our suspension services cover everything from shock and strut
                replacement to repairing or replacing bushings and ball joints,
                ensuring your vehicle rides comfortably and handles safely.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={SuspensionInspectionWEBP} type="image/webp" />
                <source srcSet={SuspensionInspectionJPG} type="image/jpeg" />
                <img
                  src={SuspensionInspectionWEBP}
                  alt="Steering and Suspension Inspection"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Steering & Suspension Inspection
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Regular inspections of your steering and suspension systems can
                prevent small issues from becoming big problems. Our thorough
                inspections ensure everything is in perfect working order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Steering & Suspension Service Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don’t compromise on your safety or comfort. Contact HEM Automotive
            today to schedule your steering and suspension service and keep your
            vehicle performing at its best.
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

export default SteeringSuspension;
