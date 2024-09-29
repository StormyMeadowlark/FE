import { Helmet } from "react-helmet";
import GreenButton from "../utils/greenButton";
import TiresTopWEBP from "../assets/images/TiresTop.webp";
import TireSalesWEBP from "../assets/images/TireSales.webp";
import TireRepairWEBP from "../assets/images/FlatTire.webp";
import TireRotationWEBP from "../assets/images/TireRotationTires.webp";
import TireAlignmentWEBP from "../assets/images/TireAlignmentTires.webp";
import TireBalancingWEBP from "../assets/images/TireBalancing.webp";

const Tires = () => {
  return (
    <div className="bg-zinc-900 text-white pt-40">
      <Helmet>
        <title>HEM Automotive | Tire Sales & Services in Topeka, KS</title>
        <meta
          name="description"
          content="Get the best tire sales, repair, and maintenance services at HEM Automotive in Topeka, KS. We offer tire rotations, alignments, balancing, and more to keep you safe on the road."
        />
        <meta
          name="keywords"
          content="tire sales, tire repair, tire rotation, tire alignment, tire balancing, HEM Automotive, Topeka KS, car tires"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Tire Sales & Services in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Keep your vehicle safe and performing well with tire sales, repair, and services from HEM Automotive in Topeka, KS. Schedule your tire service today!"
        />
        <meta property="og:url" content="https://www.hemautomotive.com/tires" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative isolate overflow-hidden bg-black text-white">
        <picture>
          <source srcSet={TiresTopWEBP} type="image/webp" />
          <img
            src={TiresTopWEBP}
            alt="Tire Sales & Services at HEM Automotive"
            className="absolute inset-0 -z-10 brightness-[30%] object-cover h-full w-full"
            loading="lazy"
            width="1920" // Replace with actual width
            height="1080" // Replace with actual height
          />
        </picture>

        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[50vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-Bungee uppercase leading-tight">
            Tire Sales & Services
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] max-w-3xl mx-auto">
            Whether you need new tires, tire repair, or maintenance services,
            HEM Automotive has you covered. Our expert technicians ensure your
            tires are in top condition, keeping you safe and your vehicle
            running smoothly.
          </p>
          <div className="mt-10">
            <GreenButton
              href="/contact"
              textarea="Schedule Tire Service"
              className="transition-transform transform hover:scale-105"
              aria-label="Schedule Tire Service"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Why Tire Services Matter
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Proper tire maintenance and timely repairs are essential for safety,
            performance, and fuel efficiency. At HEM Automotive, we provide a
            full range of tire services, including sales, to keep your vehicle
            in top condition.
          </p>
          <p className="text-lg md:text-xl text-[#aaaaaa] font-Urbanist mb-8">
            From tire sales to rotations, alignments, balancing, and repairs,
            our skilled technicians ensure your tires wear evenly, your vehicle
            handles properly, and you get the most out of your tires.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
            Our Tire Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={TireSalesWEBP} type="image/webp" />
                <img
                  src={TireSalesWEBP}
                  alt="Tire Sales"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                  width="400" // Replace with actual width
                  height="300" // Replace with actual height
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Tire Sales
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Need new tires? We offer a wide selection of top-quality tires
                to fit any vehicle and budget. Visit HEM Automotive for expert
                advice and installation.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={TireRepairWEBP} type="image/webp" />
                <img
                  src={TireRepairWEBP}
                  alt="Tire Repair"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                  width="400" // Replace with actual width
                  height="300" // Replace with actual height
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Tire Repair
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                If you have a flat or damaged tire, our repair services will get
                you back on the road quickly. We fix punctures, leaks, and other
                tire issues to ensure your safety.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={TireRotationWEBP} type="image/webp" />
                <img
                  src={TireRotationWEBP}
                  alt="Tire Rotation"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                  width="400" // Replace with actual width
                  height="300" // Replace with actual height
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Tire Rotation
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Regular tire rotations help extend the life of your tires by
                ensuring even wear across all four tires. Schedule your tire
                rotation today to keep your vehicle performing at its best.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={TireAlignmentWEBP} type="image/webp" />
                <img
                  src={TireAlignmentWEBP}
                  alt="Tire Alignment"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                  width="400" // Replace with actual width
                  height="300" // Replace with actual height
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Tire Alignment
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Proper alignment ensures your vehicle drives straight and
                handles correctly, reducing tire wear and improving fuel
                efficiency. Our expert alignment services keep your tires in top
                shape.
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#222222] p-6 rounded-lg">
              <picture>
                <source srcSet={TireBalancingWEBP} type="image/webp" />
                <img
                  src={TireBalancingWEBP}
                  alt="Tire Balancing"
                  className="h-48 w-full object-cover rounded-md mb-6"
                  loading="lazy"
                  width="400" // Replace with actual width
                  height="300" // Replace with actual height
                />
              </picture>
              <h3 className="text-2xl font-Urbanist text-white mb-4">
                Tire Balancing
              </h3>
              <p className="text-lg text-[#cccccc] font-Urbanist">
                Unbalanced tires can lead to uneven wear, vibration, and
                potentially unsafe driving conditions. Our tire balancing
                service ensures smooth driving and maximizes tire life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 lg:px-16 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
            Schedule Your Tire Service Today
          </h2>
          <p className="text-xl md:text-2xl text-[#cccccc] font-Urbanist mb-8">
            Don’t compromise on safety. Contact HEM Automotive today to schedule
            your tire service and ensure your vehicle is ready for the road.
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

export default Tires;
