import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import EngineImage from "../assets/images/HEM-Automotive-Shop-Interior.webp";


// Inside the Home component, replace the Why Choose Us section with the following:
const reasons = [
  {
    title: "Personalized Auto Repair Service in Topeka",
    description:
      "At HEM Automotive, you're not just another number. We deliver personalized, high-quality car repair and maintenance services for everything from everyday sedans to high-end vehicles. Expect expert care and attention every time, whether it's a Toyota or a BMW.",
  },
  {
    title: "State-of-the-Art Diagnostics",
    description:
      "Our team uses advanced diagnostic equipment to pinpoint problems fast and accurately. Whether it's engine issues or electrical system repairs, we have the technology and expertise to get you back on the road quickly.",
  },
  {
    title: "Your Trusted Auto Repair Shop",
    description:
      "Located conveniently in Topeka, KS, we are your reliable auto repair shop for all your vehicle needs, including oil change services and tires solutions."
  },
  {
    title: "Nationwide Warranty Coverage",
    description:
      "Our TechNet Nationwide Warranty provides 24-month/24,000-mile coverage, giving you peace of mind wherever you drive. We stand by our repairs, so you can trust your car is in good hands whether you're in Topeka or across the country.",
  },
  {
    title: "Flexible Financing for Repairs",
    description:
      "Major car repairs can be tough on your budget. That's why we offer up to $5,000 in financing through SNAP. Now you can handle unexpected repair costs without stress, and keep your car running smoothly.",
  },
  {
    title: "Carfax Car Care Program",
    description:
      "Stay ahead of your car's maintenance with our Carfax Car Care Program. Receive reminders for oil changes, brake inspections, and more, plus a free Carfax report to track your vehicle’s service history.",
  },
];
const wordsPerMinute = 140; // Average reading speed

const WhyChooseUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the display time based on the words in the description
  const calculateDisplayTime = (description) => {
    const words = description.split(" ").length;
    return (words / wordsPerMinute) * 60000; // Convert minutes to milliseconds
  };

  // Automatically change the slide after the calculated display time
  useEffect(() => {
    const currentReason = reasons[currentIndex].description;
    const displayTime = calculateDisplayTime(currentReason);

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reasons.length);
    }, displayTime);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reasons.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reasons.length) % reasons.length
      ),
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <section
      className="py-20 bg-fixed bg-cover bg-center text-white relative"
      style={{ backgroundImage: `url(${EngineImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-Bungee text-HEMgreen">
          What Makes Us the Right Choice for Your Auto Repair?
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-dark text-white p-6 rounded-lg shadow-lg hover:bg-HEMgreen hover:text-black transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="mt-2">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipeable Slider */}
        <div {...handlers} className="md:hidden flex justify-center mt-12">
          <motion.div
            key={currentIndex}
            className="bg-dark text-white p-6 rounded-lg shadow-lg w-80"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-HEMgreen">
              {reasons[currentIndex].title}
            </h3>
            <p className="mt-2">{reasons[currentIndex].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default WhyChooseUsSection;
