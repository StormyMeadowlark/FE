import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import CornerHexagons from "../../../components/CornerHexagons.svg?react";
import CheckOil from "/src/assets/images/Maintenance.jpg?react";
import Diagnostics from "/src/assets/images/Diagnostics.jpg?react";
import Alignment from "/src/assets/images/Alignment2.jpg?react";
import RemoveReplace from "/src/assets/images/EngineReplace.jpeg?react";
import Inspection from "/src/assets/images/Inspection.jpg?react";
import SilverButton from "../../../utils/silverbutton";
import HeatAC from "/src/assets/images/HeatingAC.jpg?react";

const services = [
  {
    title: "Wheel Alignment",
    description: "Precision alignment services for smooth driving",
    image: Alignment,
    link: "services",
  },
  {
    title: "Routine Maintenance",
    description: "Keep your vehicle running like a well-oiled machine",
    image: CheckOil,
    link: "services",
  },
  {
    title: "Diagnostic Services",
    description: "Advanced diagnostics for all vehicle problems",
    image: Diagnostics,
    link: "services",
  },
  {
    title: "Refresh & Upgrade",
    description: "Essential updates & improvements for a more enjoyable drive",
    image: RemoveReplace,
    link: "services",
  },
  {
    title: "Used Vehicle Inspection",
    description: "Peace of mind when buying a used vehicle",
    image: Inspection,
    link: "services",
  },
  {
    title: "A/C & Heating",
    description: "Repair & recharge all heating & cooling systems",
    image: HeatAC,
    link: "services",
  },
];

const FeaturedServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 2 },
    },
  };

  return (
    <div className="relative min-h-[100vh] bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-500">
      <Helmet>
        <title>HEM Automotive | Featured Services</title>
        <meta
          name="description"
          content="Explore HEM Automotive's featured services, including wheel alignment, routine maintenance, diagnostic services, and more. Experience unparalleled full-service repair and maintenance."
        />
        <meta
          name="keywords"
          content="HEM Automotive, car services, wheel alignment, routine maintenance, diagnostic services, vehicle inspection, A/C repair"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Featured Services"
        />
        <meta
          property="og:description"
          content="Explore HEM Automotive's featured services, including wheel alignment, routine maintenance, diagnostic services, and more. Experience unparalleled full-service repair and maintenance."
        />
        <meta property="og:image" content={Alignment} />
        <meta property="og:url" content="https://www.hemautomotive.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="absolute bottom-0 w-[50%]">
        <CornerHexagons aria-hidden="true" />
      </div>
      <section className="py-16 px-4 mx-auto max-w-7xl">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-Bungee text-[#00ff00] mb-10 uppercase">
          Our Featured Services
        </h2>
        <p className="text-center text-xl text-white font-bold mb-12 font-Urbanist tracking-wider max-w-2xl mx-auto">
          Experience unparalleled full-service repair and maintenance for most
          models manufactured after 2000. For vintage automobiles or any unique
          vehicles, we invite you to contact us directly. Our expertise extends
          beyond a single manufacturer, ensuring every vehicle receives the
          exceptional care it deserves.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-cover bg-center h-80"
              style={{ backgroundImage: `url(${service.image})` }}
              variants={cardVariants}
              role="article"
              aria-labelledby={`${service.title.replace(/\s+/g, "-")}-title`}
              aria-describedby={`${service.title.replace(
                /\s+/g,
                "-"
              )}-description`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <h3
                  id={`${service.title.replace(/\s+/g, "-")}-title`}
                  className="text-2xl font-Urbanist font-medium tracking-wider text-white mb-2"
                >
                  {service.title}
                </h3>
                <p
                  id={`${service.title.replace(/\s+/g, "-")}-description`}
                  className="text-lg text-[#cccccc] font-Urbanist tracking-wide"
                >
                  {service.description}
                </p>
                <SilverButton
                  className="mt-4 bg-HEMgreen text-white py-2 px-4 rounded-full shadow-md hover:bg-[#00aa00] transition-transform transform hover:scale-105"
                  text="Learn More"
                  href="services"
                  aria-label={`Learn more about ${service.title}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <button
            className="bg-[#444444] text-white py-3 px-8 rounded-md shadow-lg border-b border-[#00ff00] text-lg font-Play font-semibold tracking-wide transition-transform transform hover:scale-105"
            aria-label="View all services"
          >
            View All Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturedServices;
