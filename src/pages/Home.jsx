import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSwipeable } from "react-swipeable";

// Importing images
import CheckOil from "../assets/images/Maintenance.webp";
import Diagnostics from "../assets/images/Diagnostics.webp";
import Alignment from "../assets/images/Alignment2.webp";
import RemoveReplace from "../assets/images/EngineReplace.webp";
import Inspection from "../assets/images/Inspection.webp";
import HeatAC from "../assets/images/HeatingAC.webp";
import BestofBest from "../assets/images/BestOfBest.webp";
import EngineImage from "../assets/images/Engine.webp"; // For parallax background

const testimonials = [
  {
    name: "Catfish S.",
    quote:
      "HEM Automotive never disappoints. They repair in a timely manner to keep with a fair price. Anytime I've taken my vehicle there, Jason and crew have been upfront about the cost and kept me up to date with progress. Took my vehicle there to fix what I thought was a suspension type issue; HEM figured out it was the transmission before any work was done. We were able to get warranty work taken care of because of their attention to detail.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Gordan Haight",
    quote:
      "Jason worked on my 1993 Lexus ES300, gave me a great deal and the car has been running flawlessly ever since he put his hands on it. 10/10 thank you.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Chad Nelson",
    quote:
      "Took my son's Jeep to HEM Automotive to find out what was going wrong with it. They didn't overcharge me like another shop was trying to do. They found the problem and repaired it. It came out cheaper than the estimate. Would recommend and will be back.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Joe Hawkinson",
    quote:
      "We've had many things done on our vehicles with HEM, from routine oil changes and tires to diagnosing and fixing a broken car horn, even rebuilding the top of one of our truck's 5.7 HEMI engine. The people here have always been very kind, courteous, patient, and professional.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Shelby Shaw",
    quote:
      "Jason did great work on my car when it was having multiple issues! He is affordable and honest, along with getting it fixed in a timely manner!!",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Christina Alley",
    quote:
      "Jason has done a wonderful job on both of my vehicles. He has been straightforward and honest about the price and whether it is worth fixing or not. I absolutely love this place and I would recommend it to everyone if you want an honest mechanic.",
    image: "https://via.placeholder.com/150",
  },
];

const reasons = [
  {
    title: "Superior Customer Service",
    description:
      "Our team is dedicated to providing exceptional experiences with personalized attention and care, ensuring your vehicle gets the premium treatment it deserves.",
  },
  {
    title: "Advanced Diagnostic Technology",
    description:
      "We use state-of-the-art diagnostic tools to accurately assess and repair your vehicle, ensuring optimal performance and reliability every time.",
  },
  {
    title: "Trust and Transparency",
    description:
      "At HEM Automotive, we believe in honest communication, so you're always informed about what's happening with your vehicle. No surprises, just trustworthy service.",
  },
  {
    title: "TechNet Nationwide Warranty",
    description:
      "Enjoy a 24,000-mile / 24-month nationwide warranty with the TechNet Professional Automotive Service Program, offering peace of mind no matter where you travel.",
  },
  {
    title: "SNAP Financing Available",
    description:
      "Take advantage of up to $5,000 in financing through SNAP, making it easier to manage the costs of major repairs and upgrades.",
  },
  {
    title: "Carfax Car Care Program",
    description:
      "Benefit from email maintenance reminders and a free Carfax report to stay on top of your vehicle’s care and history.",
  },
];

const offers = [
  {
    title: "Wheel Alignment",
    price: "$115",
    description: "Ensure your ride is smooth and your tires wear evenly.",
  },
  {
    title: "Flash Sale",
    price: "10% off",
    description:
      "Get 10% off on induction cleaning and oil changes! Book by 10/8/24 to lock in your price. Diesel oil changes available too.",
  },
  {
    title: "3M Headlight Refresh",
    price: "$170",
    description:
      "Restore your headlights to their factory shine for safer, clearer driving.",
  },
];

// Moved outside Home component
const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordsPerMinute = 140;

  const calculateDisplayTime = (quote) => {
    const words = quote.split(" ").length;
    const timeToRead = (words / wordsPerMinute) * 60000; // milliseconds
    return timeToRead;
  };

  useEffect(() => {
    const currentQuote = testimonials[currentIndex].quote;
    const displayTime = calculateDisplayTime(currentQuote);

    // Set a timer for the next testimonial
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, displayTime);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [currentIndex]);

  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-Bungee text-HEMgreen mb-10">
        What Our Clients Say
      </h2>
      <motion.div
        key={currentIndex}
        className="bg-HEMgray p-6 rounded-lg shadow-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="mt-4 text-lg font-semibold text-HEMgreen">
          {testimonials[currentIndex].name}
        </h3>
        <p className="mt-2 text-sm italic">
          "{testimonials[currentIndex].quote}"
        </p>
      </motion.div>
    </div>
  );
};

const SwipeableSection = ({ children }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Logic to swipe left and show the next item (not implemented in this example)
    },
    onSwipedRight: () => {
      // Logic to swipe right and show the previous item (not implemented in this example)
    },
    delta: 10, // Minimum distance (in px) for swipe detection
    preventDefaultTouchmoveEvent: true, // Prevents touch events like scrolling during swipe
    trackTouch: true, // Track touch events
    trackMouse: false, // Disable mouse tracking
  });

  return (
    <div
      {...handlers}
      className="flex overflow-x-auto snap-x snap-mandatory space-x-4 md:overflow-visible md:flex-wrap"
    >
      {children}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-black text-white font-Urbanist">
      <Helmet>
        <title> High-End Car Repair in Topeka, KS | HEM Automotive </title>
        <meta
          name="description"
          content="Premium auto repair services in Topeka, KS. Specializing in high-end car diagnostics, maintenance, and repairs for vehicles from 2000 and newer."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-HEMgray min-h-screen flex items-center justify-center bg-engine bg-cover bg-center pt-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-Bungee text-HEMgreen uppercase tracking-wider animate-fadeIn">
            Breakdowns Won't Break You Down
          </h1>
          <p className="text-2xl font-light mt-4 mb-8 animate-slideUp">
            High-Quality Automotive Repair in Topeka, KS
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="bg-HEMgreen text-black py-3 px-8 rounded-lg text-xl hover:bg-white hover:text-black transition-transform transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border border-HEMgreen text-HEMgreen py-3 px-8 rounded-lg text-xl hover:bg-HEMgreen hover:text-black transition-transform transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark">
        <h2 className="text-center text-4xl font-semibold text-HEMgreen animate-slideUp">
          Our Featured Services
        </h2>
        <SwipeableSection>
          {[
            {
              title: "Wheel Alignment",
              description: "Precision alignment services for smooth driving.",
              image: Alignment,
              link: "services/alignments",
            },
            {
              title: "Routine Maintenance",
              description:
                "Keep your vehicle running like a well-oiled machine.",
              image: CheckOil,
              link: "services/preventative-maintenance",
            },
            {
              title: "Diagnostic Services",
              description: "Advanced diagnostics for all vehicle problems.",
              image: Diagnostics,
              link: "services/diagnostics",
            },
            {
              title: "Engine Refresh & Upgrade",
              description:
                "Essential updates & improvements for a more enjoyable drive.",
              image: RemoveReplace,
              link: "services/remove-replace",
            },
            {
              title: "Used Vehicle Inspection",
              description: "Peace of mind when buying a used vehicle.",
              image: Inspection,
              link: "services/inspection",
            },
            {
              title: "A/C & Heating",
              description: "Repair & recharge all heating & cooling systems.",
              image: HeatAC,
              link: "services/ac-heating",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-HEMgray p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-HEMgreen hover:text-black min-w-[80vw] md:min-w-[30vw]"
              data-aos="fade-up"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover rounded-lg"
              />
              <h3 className="text-xl mt-4 font-semibold text-HEMgreen hover:text-black">
                {service.title}
              </h3>
              <p className="text-sm mt-2 hover:text-black">
                {service.description}
              </p>
              <Link
                to={`/${service.link}`}
                className="block mt-4 text-HEMgreen hover:text-black hover:underline"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </SwipeableSection>
      </section>

      {/* Why Choose Us Section with Parallax */}
      <section
        className="py-20 bg-fixed bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url(${EngineImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-Bungee text-HEMgreen">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Exclusive Offers Section */}
      <section className="py-20 bg-HEMgray">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-Bungee text-HEMgreen">
            Exclusive Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                className="bg-dark p-6 rounded-lg shadow-lg hover:bg-HEMgreen hover:text-black transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-semibold text-white hover:text-black">
                  {offer.title}
                </h3>
                <p className="text-lg mt-2 hover:text-black">{offer.price}</p>
                <p className="mt-4 hover:text-black">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
