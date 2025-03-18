import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import MaintenanceWebP from "/src/assets/images/HEM-Automotive-Maintenance.jpg";
import DiagnosticsWebP from "/src/assets/images/HEM-Automotive-Diagnostics.jpg";
import TiresWebP from "/src/assets/images/Tires.webp";
import AlignmentWebP from "/src/assets/images/HEM-Automotive-Alignments.jpg";
import BrakesWebP from "/src/assets/images/Brake3.webp";
import SteeringSuspensionWebP from "/src/assets/images/SteeringSuspension.webp";
import RemoveReplaceWebP from "/src/assets/images/HEM-Automotive-Engine-Repair-and-Replacement.jpg";
import HeatACWebP from "/src/assets/images/HEM-Automotive-Heating-AC.jpg";
import ElectricalWebP from "/src/assets/images/Electrical.webp";
import EconomyDieselWebP from "/src/assets/images/EconomyLightDuty.webp";
import InspectionWebP from "/src/assets/images/HEM-Automotive-Pre-Purchase-Vehicle-Inspection.webp";

const services = [
  {
    title: "Maintenance",
    description:
      "Keep your car running like new with our reliable preventative maintenance. From oil changes to thorough check-ups, HEM has got you covered for all your regular upkeep.",
    src: MaintenanceWebP,
    link: "/services/preventative-maintenance",
  },
  {
    title: "Diagnostics",
    description:
      "Trouble with your car? Our advanced diagnostics help you uncover and solve vehicle issues quickly, keeping you on the road.",
    src: DiagnosticsWebP,
    link: "/services/diagnostics",
  },
  {
    title: "Tire Services",
    description:
      "Professional tire replacement, balancing, and rotation services to ensure a smooth ride and lasting safety.",
    src: TiresWebP,
    link: "/services/tires",
  },
  {
    title: "Alignments",
    description:
      "Precision alignments for enhanced safety and performance. Keep your vehicle's handling on point with our expert alignments.",
    src: AlignmentWebP,
    link: "/services/alignments",
  },
  {
    title: "Brakes",
    description:
      "Our premium brake services ensure you stay safe on the road—brake checks, replacements, and repairs to keep you driving confidently.",
    src: BrakesWebP,
    link: "/services/brakes",
  },
  {
    title: "Steering & Suspension",
    description:
      "Get the smooth ride you deserve. Our expert steering and suspension services make driving feel effortless.",
    src: SteeringSuspensionWebP,
    link: "/services/steering-suspension",
  },
  {
    title: "Engine Repair & Replacement",
    description:
      "Expertly replace or upgrade your engine and transmission for optimal performance and reliability. HEM delivers quality when it matters most.",
    src: RemoveReplaceWebP,
    link: "/services/remove-replace",
  },
  {
    title: "A/C & Heating Repairs",
    description:
      "Whether it’s the summer heat or winter chill, we’ll keep your vehicle's A/C & heating systems running efficiently, all year long.",
    src: HeatACWebP,
    link: "/services/ac-heating",
  },
  {
    title: "Electrical Repairs",
    description:
      "We solve electrical issues and keep everything from headlights to your car's control systems working smoothly.",
    src: ElectricalWebP,
    link: "/services/electrical",
  },
  {
    title: "Light Duty Diesel Services",
    description:
      "Maintain and service your light-duty diesel with our specialized care. We make sure you get optimal performance from your vehicle.",
    src: EconomyDieselWebP,
    link: "/services/diesel",
  },
  {
    title: "Pre-Purchase Vehicle Inspection",
    description:
      "Make a confident purchase with our thorough pre-owned car inspections. We take the stress out of buying used vehicles.",
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
      scale: 1.08,
      boxShadow: "0 30px 60px rgba(0, 255, 0, 0.15)", // Green shadow to align with HEM’s brand
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="bg-[#000000] text-white min-h-screen py-16">
        {/* Main Title */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Quality Auto Care You Can Rely On
          </h2>
          <p className="text-xl font-light mb-12 text-gray-400">
            At HEM Automotive, we offer premium car care with a personal touch,
            right here in Topeka. Our experienced technicians provide everything
            from routine maintenance to advanced diagnostics—all with the
            reliability and attention to detail you'd expect, but without the
            high dealership cost. Trust us to keep your car running smoothly, so
            you can enjoy the road ahead.
          </p>
        </div>

        {/* Service Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 lg:px-0">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-[#1c1c1c] hover:shadow-xl transition-all duration-500"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover="whileHover"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Service Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#00ff00] mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-white text-lg font-semibold hover:underline"
                >
                  Learn More about {service.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
