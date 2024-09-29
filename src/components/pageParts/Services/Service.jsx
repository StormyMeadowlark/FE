import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ImageLeftCard from "../../../utils/ImageLeftCard";
import ImageRightCard from "../../../utils/ImageRightCard";
import MaintenanceWebP from "../../../assets/images/Maintenance.webp";
import DiagnosticsWebP from "/src/assets/images/Diagnostics.webp";
import TiresWebP from "/src/assets/images/Tires.webp";
import AlignmentWebP from "/src/assets/images/Alignment2.webp";
import BrakesWebP from "/src/assets/images/Brake3.webp";
import SteeringSuspensionWebP from "/src/assets/images/SteeringSuspension.webp";
import RemoveReplaceWebP from "/src/assets/images/EngineReplace.webp";
import HeatACWebP from "/src/assets/images/HeatingAC.webp";
import ElectricalWebP from "/src/assets/images/Electrical.webp";
import EconomyDieselWebP from "/src/assets/images/EconomyLightDuty.webp";
import InspectionWebP from "/src/assets/images/Inspection.webp";

const services = [
  {
    title: "Preventative Maintenance",
    description:
      "Preventative car maintenance is like taking your car to the spa...",
    src: MaintenanceWebP,
    link: "/services/preventative-maintenance",
  },
  {
    title: "Diagnostics",
    description:
      "When that pesky 'check engine' light pops on, it's your car's way of sending an SOS...",
    src: DiagnosticsWebP,
    link: "/services/diagnostics",
  },
  {
    title: "Tires",
    description:
      "Imagine your car strutting down the street like it's on a fashion runway...",
    src: TiresWebP,
    link: "/services/tires",
  },
  {
    title: "Alignments",
    description:
      "Picture this: your car's wheels are its feet, and just like you, it needs to walk straight...",
    src: AlignmentWebP,
    link: "/services/alignments",
  },
  {
    title: "Brakes",
    description: "Regular brake service is crucial because, let's face it...",
    src: BrakesWebP,
    link: "/services/brakes",
  },
  {
    title: "Steering & Suspension",
    description:
      "Signs you need steering and suspension service are as obvious as a squeaky wheel...",
    src: SteeringSuspensionWebP,
    link: "/services/steering-suspension",
  },
  {
    title: "Remove & Replace",
    description: "When your engine or transmission starts acting up...",
    src: RemoveReplaceWebP,
    link: "/services/remove-replace",
  },
  {
    title: "A/C & Heating",
    description:
      "When your car's air conditioning decides to go on vacation...",
    src: HeatACWebP,
    link: "/services/ac-heating",
  },
  {
    title: "Electrical",
    description:
      "Automotive electrical services are like giving your car a brain upgrade...",
    src: ElectricalWebP,
    link: "/services/electrical",
  },
  {
    title: "Economy & Light Duty Diesel",
    description:
      "Light duty diesel services at an automotive repair shop are about giving your diesel-powered vehicle the TLC it deserves...",
    src: EconomyDieselWebP,
    link: "/services/diesel",
  },
  {
    title: "Used Vehicle Inspection",
    description:
      "Used vehicle inspections at an automotive repair shop are like sending a detective...",
    src: InspectionWebP,
    link: "/services/inspection",
  },
];

export default function Service() {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Helmet>
        <title>HEM Automotive | Services</title>
        <meta
          name="description"
          content="Explore HEM Automotive's comprehensive range of services, including preventative maintenance, diagnostics, tire services, alignments, and more. Experience high-end car care with our professional team."
        />
        <meta
          name="keywords"
          content="HEM Automotive, car services, preventative maintenance, diagnostics, tire services, alignments, brakes, steering, suspension, engine replacement, A/C repair, electrical services, diesel services, vehicle inspection"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HEM Automotive | Services" />
        <meta
          property="og:description"
          content="Explore HEM Automotive's comprehensive range of services, including preventative maintenance, diagnostics, tire services, alignments, and more. Experience high-end car care with our professional team."
        />
        <meta property="og:url" content="https://www.hemautomotive.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-[#333333]">
        <div className="space-y-10 px-4 py-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover="whileHover"
            >
              {index % 2 === 0 ? (
                <ImageLeftCard
                  title={service.title}
                  description={service.description}
                  src={service.src}
                  link={
                    <Link
                      to={service.link}
                      className="text-HEMgreen hover:underline"
                    >
                      Learn More Here
                    </Link>
                  }
                />
              ) : (
                <ImageRightCard
                  title={service.title}
                  description={service.description}
                  src={service.src}
                  link={
                    <Link
                      to={service.link}
                      className="text-HEMgreen hover:underline"
                    >
                      Learn More Here
                    </Link>
                  }
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
