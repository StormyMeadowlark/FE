import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";

// Optimized image formats and responsive sizes
import CheckEngine from "../assets/images/CheckEngineLight.webp";
import ElectricalDiagnostics from "../assets/images/ElectricalDiagnostics.webp";
import DiagnosticsTop from "../assets/images/DiagnosticsTop.webp";
import EngineDiagnostics from "../assets/images/EngineDiagnostics.webp";

const Diagnostics = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>HEM Automotive | Advanced Diagnostics in Topeka, KS</title>
        <meta
          name="description"
          content="Get advanced diagnostics for your vehicle at HEM Automotive. Our expert mechanics use cutting-edge technology to diagnose and fix issues quickly and efficiently in Topeka, KS."
        />
        <meta
          name="keywords"
          content="advanced diagnostics, vehicle diagnostics, auto repair, check engine light, HEM Automotive, Topeka KS, car diagnostics"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Advanced Diagnostics in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Ensure your vehicle is running smoothly with professional and advanced diagnostics from HEM Automotive in Topeka, KS. Schedule your diagnostic service today!"
        />
        <meta
          property="og:url"
          content="https://www.hemautomotive.com/diagnostics"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <picture>
          <source
            srcSet={`${DiagnosticsTop.replace(
              ".jpg",
              ".avif"
            )} 1x, ${DiagnosticsTop.replace(".jpg", "@2x.avif")} 2x`}
            type="image/avif"
          />
          <source
            srcSet={`${DiagnosticsTop} 1x, ${DiagnosticsTop.replace(
              ".jpg",
              "@2x.jpg"
            )} 2x`}
            type="image/jpeg"
          />
          <img
            src={DiagnosticsTop}
            alt="Advanced Diagnostics at HEM Automotive"
            className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
            loading="lazy"
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Advanced Diagnostics
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            When your vehicle&apos;s check engine light comes on, or if
            you&apos;re experiencing performance issues, trust HEM Automotive to
            diagnose the problem. Our team uses cutting-edge tools and
            technology to identify and fix issues quickly and accurately.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Diagnostics"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Diagnostics Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Advanced Diagnostics Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Advanced diagnostics are crucial for accurately identifying complex
            issues in modern vehicles. At HEM Automotive, we provide in-depth
            diagnostic services that go beyond standard checks, ensuring your
            vehicle is performing at its best.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            Our advanced diagnostics cover everything from engine performance to
            electrical systems and beyond. With our state-of-the-art tools and
            experienced mechanics, we can quickly and precisely diagnose and
            repair any issue your vehicle may have.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Diagnostic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={CheckEngine}
                alt="Check Engine Light Diagnostic"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Check Engine Light Diagnostic
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Don&apos;t ignore that warning light! Our check engine light
                diagnostic service identifies the root cause, so you can get it
                fixed before it turns into a major problem.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={ElectricalDiagnostics}
                alt="Electrical System Diagnostic"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Electrical System Diagnostic
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Troubleshoot issues with your vehicle&apos;s electrical system.
                Our advanced diagnostic tools ensure accurate detection and
                repair of electrical problems.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={EngineDiagnostics}
                alt="Engine Diagnostics"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Engine Diagnostics
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Identify engine performance issues with our comprehensive engine
                diagnostics service. We&apos;ll pinpoint the exact problem and
                recommend the best solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Advanced Diagnostics Service Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don&apos;t let a small problem turn into a big one. Contact HEM
            Automotive today to schedule your advanced diagnostic service and
            keep your vehicle running smoothly.
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

export default Diagnostics;
