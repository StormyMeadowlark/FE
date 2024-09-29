import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import RemoveReplaceTop from "../assets/images/RemoveReplaceTop.jpg";
import EngineForService from "../assets/images/EngineForService.jpg";
import RemoveReplaceInspection from "../assets/images/RemoveReplaceInspection.jpg";
import Transmission from "../assets/images/Transmission.jpg";

const RemoveReplace = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>
          HEM Automotive | Engine & Transmission Replacements in Topeka, KS
        </title>
        <meta
          name="description"
          content="Ensure your vehicle performs at its best with expert engine and transmission replacement services at HEM Automotive in Topeka, KS. Contact us today!"
        />
        <meta
          name="keywords"
          content="engine replacement, transmission replacement, auto repair, engine services, transmission services, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Engine & Transmission Replacements in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Get your vehicle back on the road with professional engine and transmission replacement services from HEM Automotive in Topeka, KS. Schedule your service today!"
        />
        <meta
          property="og:url"
          content="https://www.hemautomotive.com/engine-transmission"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <picture>
          <source srcSet={RemoveReplaceTop} type="image/webp" />
          <img
            src={RemoveReplaceTop}
            alt="Engine and Transmission Services at HEM Automotive"
            className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
            loading="lazy"
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Engine & Transmission Replacements
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            When your engine or transmission starts to fail, trust HEM
            Automotive to provide expert replacement services. We get your
            vehicle back to peak performance with high-quality parts and skilled
            technicians.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Replacement Service"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Replacement Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Engine & Transmission Replacements Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Your engine and transmission are the heart and soul of your vehicle.
            When they start to fail, it can drastically affect your vehicle's
            performance, reliability, and safety. Replacing these components
            ensures your vehicle continues to run smoothly and safely.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, our expert technicians provide top-notch engine
            and transmission replacements, using only high-quality parts to
            restore your vehicle's performance to its peak condition.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Engine & Transmission Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={EngineForService} type="image/webp" />
                <img
                  src={EngineForService}
                  alt="Engine Replacement"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Engine Replacement
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Whether your engine is beyond repair or it's simply time for an
                upgrade, our engine replacement services ensure your vehicle
                gets a new lease on life. We use top-quality engines to restore
                your vehicle's performance.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={Transmission} type="image/webp" />
                <img
                  src={Transmission}
                  alt="Transmission Replacement"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Transmission Replacement
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                A failing transmission can leave you stranded. Our transmission
                replacement services ensure your vehicle continues to shift
                smoothly and efficiently, providing you with a reliable ride.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={RemoveReplaceInspection} type="image/webp" />
                <img
                  src={RemoveReplaceInspection}
                  alt="Engine & Transmission Inspection"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Engine & Transmission Inspection
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Before considering a replacement, our thorough inspection
                services diagnose the health of your engine and transmission,
                ensuring that replacement is the right option for your vehicle's
                longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Engine or Transmission Replacement Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don’t wait until it's too late. Contact HEM Automotive today to
            schedule your engine or transmission replacement service and keep
            your vehicle running smoothly and safely.
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

export default RemoveReplace;
