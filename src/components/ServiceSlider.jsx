import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "aos/dist/aos.css";

// Import images (these should be imported at the top)
import CheckOil from "../assets/images/Maintenance.webp";
import Diagnostics from "../assets/images/Diagnostics.webp";
import Alignment from "../assets/images/Alignment2.webp";
import RemoveReplace from "../assets/images/EngineReplace.webp";
import Inspection from "../assets/images/Inspection.webp";
import HeatAC from "../assets/images/HeatingAC.webp";

const wordsPerMinute = 140; // Average reading speed

const servicesData = [
  {
    title: "Wheel Alignment",
    description:
      "Get precision wheel alignment for smoother driving and better tire wear. Our team ensures your car stays balanced and safe on the road.",
    image: Alignment,
    link: "services/alignments",
  },
  {
    title: "Routine Vehicle Maintenance",
    description:
      "Keep your car in top shape with regular maintenance, including oil changes, tire rotations, and more. Trusted service to keep your vehicle running smoothly.",
    image: CheckOil,
    link: "services/preventative-maintenance",
  },
  {
    title: "Car Diagnostics",
    description:
      "We use advanced tools to quickly diagnose vehicle issues, from check engine lights to complex repairs. Get reliable solutions to keep your car in peak condition.",
    image: Diagnostics,
    link: "services/diagnostics",
  },
  {
    title: "Engine Repair & Replacement",
    description:
      "Whether you need a simple engine fix or a full replacement, we’ve got you covered. Trust our expertise to keep your vehicle running smoothly and reliably.",
    image: RemoveReplace,
    link: "services/engine-repair",
  },
  {
    title: "Pre-Purchase Vehicle Inspection",
    description:
      "Buying a used car? Our thorough inspections give you the confidence you need to make an informed decision. Get peace of mind before you buy.",
    image: Inspection,
    link: "services/inspection",
  },
  {
    title: "A/C & Heating Repair",
    description:
      "Stay comfortable year-round with our expert heating and cooling services. From A/C recharges to system repairs, we ensure your car stays comfortable in every season.",
    image: HeatAC,
    link: "services/ac-heating",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the display time based on the words in the description
  const calculateDisplayTime = (description) => {
    const words = description.split(" ").length;
    return (words / wordsPerMinute) * 60000; // Convert minutes to milliseconds
  };

  // Automatically change the slide after the calculated display time
  useEffect(() => {
    const currentService = servicesData[currentIndex].description;
    const displayTime = calculateDisplayTime(currentService);

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    }, displayTime);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [currentIndex]);

  // Manual navigation using arrows
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length
    );
  };

  // Swipeable logic for mobile
  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPreviousSlide,
    delta: 10, // Minimum swipe distance
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <section className="py-20 bg-dark px-4 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-semibold text-HEMgreen animate-slideUp font-Bungee">
        Essential Auto Repair Services for Your Vehicle
      </h2>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-HEMgray p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-HEMgreen hover:text-black"
            data-aos="fade-up"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl mt-4 font-semibold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
            <Link to={`/${service.link}`} className="block mt-4">
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Slider Layout for Mobile Screens */}
      <div className="md:hidden flex justify-center items-center mt-8 relative">
        <button
          className="absolute left-0 bg-HEMgreen text-black py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
          onClick={goToPreviousSlide}
        >
          &#9664; {/* Left arrow */}
        </button>

        <div {...handlers} className="flex justify-center items-center">
          <motion.div
            key={currentIndex}
            className="bg-HEMgray p-6 rounded-lg shadow-lg min-w-[80vw] transition-transform hover:scale-105 hover:bg-HEMgreen hover:text-black my-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={servicesData[currentIndex].image}
              alt={servicesData[currentIndex].title}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl mt-4 font-semibold text-HEMgree">
              {servicesData[currentIndex].title}
            </h3>
            <p className="text-sm mt-2">
              {servicesData[currentIndex].description}
            </p>
            <Link
              to={`/${servicesData[currentIndex].link}`}
              className="block mt-4"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        <button
          className="absolute right-0 bg-HEMgreen text-black py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
          onClick={goToNextSlide}
        >
          &#9654; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
};

export default Slider;
