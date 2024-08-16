import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import AlignmentTop from "../assets/images/AlignmentTop.png"
import ExtendedTireLife from "../assets/images/TiresJustKeepGoing.jpg"
import ImprovedHandling from "../assets/images/HandsOnWheel.jpg"
import IncreasedFuelEfficiency from "../assets/images/CarByGasStation.jpg"
const Alignment = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>HEM Automotive | Wheel Alignment Services in Topeka, KS</title>
        <meta
          name="description"
          content="Ensure your vehicle drives straight and safely with professional wheel alignment services at HEM Automotive in Topeka, KS. Schedule your alignment service today!"
        />
        <meta
          name="keywords"
          content="wheel alignment, car alignment, tire alignment, auto repair, HEM Automotive, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Wheel Alignment Services in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Keep your vehicle in top shape with professional wheel alignment services from HEM Automotive in Topeka, KS. Book your alignment service today!"
        />

        <meta
          property="og:url"
          content="https://www.hemautomotive.com/alignment"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <img
        src={AlignmentTop}
          alt="Wheel Alignment at HEM Automotive"
          className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
          loading="lazy"
        />

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Wheel Alignment
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Proper wheel alignment is essential for safe driving and maximizing
            tire life. At HEM Automotive, our expert technicians ensure your
            wheels are perfectly aligned, providing a smooth and safe driving
            experience.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Alignment Service"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Alignment Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Wheel Alignment Matters
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            A misaligned vehicle can lead to uneven tire wear, poor handling,
            and decreased fuel efficiency. Regular wheel alignments are key to
            ensuring your vehicle drives straight, handles properly, and that
            your tires last as long as possible.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            At HEM Automotive, we use advanced alignment technology to
            accurately adjust your vehicle&apos;s wheels, ensuring optimal
            performance and safety on the road.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Benefits of Regular Wheel Alignment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={ExtendedTireLife}
                alt="Extended Tire Life"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Extended Tire Life
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Regular alignments help ensure even tire wear, which can
                significantly extend the lifespan of your tires, saving you
                money in the long run.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={ImprovedHandling}
                alt="Improved Handling"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Improved Handling
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Proper alignment ensures your vehicle handles correctly,
                improving safety and providing a more comfortable driving
                experience.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <img
                src={IncreasedFuelEfficiency}
                alt="Increased Fuel Efficiency"
                className="h-48 w-full object-cover rounded-md mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Increased Fuel Efficiency
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Misaligned wheels can cause your vehicle to work harder,
                reducing fuel efficiency. Regular alignments can help you save
                on fuel costs over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Wheel Alignment Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don&apos;t wait until your tires wear unevenly or your vehicle starts
            pulling to one side. Contact HEM Automotive today to schedule your
            wheel alignment service and keep your vehicle driving safely and
            efficiently.
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

export default Alignment;
