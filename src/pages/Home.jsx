import  { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import profileImage from "../assets/images/HEM-Automotive-Profile-Image.png"
import "aos/dist/aos.css";
import SEO from "../components/SEO";

import WhyChooseUs from "../components/WhyChooseUs";

// Importing images

import Slider from "../components/ServiceSlider";

const testimonials = [
  {
    name: "Catfish S.",
    quote:
      "HEM Automotive never disappoints. They repair in a timely manner to keep with a fair price. Anytime I've taken my vehicle there, Jason and crew have been upfront about the cost and kept me up to date with progress. Took my vehicle there to fix what I thought was a suspension type issue; HEM figured out it was the transmission before any work was done. We were able to get warranty work taken care of because of their attention to detail.",
    image: profileImage,
  },
  {
    name: "Gordan Haight",
    quote:
      "Jason worked on my 1993 Lexus ES300, gave me a great deal and the car has been running flawlessly ever since he put his hands on it. 10/10 thank you.",
    image: profileImage,
  },
  {
    name: "Chad Nelson",
    quote:
      "Took my son's Jeep to HEM Automotive to find out what was going wrong with it. They didn't overcharge me like another shop was trying to do. They found the problem and repaired it. It came out cheaper than the estimate. Would recommend and will be back.",
    image: profileImage,
  },
  {
    name: "Joe Hawkinson",
    quote:
      "We've had many things done on our vehicles with HEM, from routine oil changes and tires to diagnosing and fixing a broken car horn, even rebuilding the top of one of our truck's 5.7 HEMI engine. The people here have always been very kind, courteous, patient, and professional.",
    image: profileImage,
  },
  {
    name: "Shelby Shaw",
    quote:
      "Jason did great work on my car when it was having multiple issues! He is affordable and honest, along with getting it fixed in a timely manner!!",
    image: profileImage,
  },
  {
    name: "Christina Alley",
    quote:
      "Jason has done a wonderful job on both of my vehicles. He has been straightforward and honest about the price and whether it is worth fixing or not. I absolutely love this place and I would recommend it to everyone if you want an honest mechanic.",
    image: profileImage,
  },
];


const offers = [
  {
    title: "BG Oil Change + Free T-Shirt",
    price: "starting at $121.48",
    description: "Upgrade your oil change and refresh your wardrobe with a free T-shirt! Better for your vehicle, better for your wallet."
  },
  {
    title: "Wheel Alignment",
    price: "$115",
    description:
      "Improve driving comfort and extend tire life with precise alignment. A smooth ride starts with balanced wheels.",
  },
  {
    title: "Induction Cleaning",
    price: "$190",
    description:
      "Restore your engine’s performance with professional induction cleaning. This service removes carbon build-up from the intake system, improving fuel efficiency, power, and overall engine health.",
  }
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
        What Topeka Drivers Are Saying About Our Auto Repair Services
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


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-black text-white font-Urbanist">
    <SEO page="home" />

      {/* Hero Section */}
      <section className="relative bg-HEMgray min-h-screen flex items-center justify-center bg-engine bg-cover bg-center pt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-Bungee text-HEMgreen uppercase tracking-wider animate-fadeIn">
            Precision Repairs. Trusted Results.
          </h1>
          <h2 className="text-6xl font-black mt-2 mb-2 animate-slideUp text-HEMgreen font-Play">High Quality Auto Service Done Right</h2>
          <p className="text-2xl mt-4 mb-8 animate-slideUp">
          Your time matters. Our crew delivers expert diagnostics and dependable repairs. Without the guess work.
          </p>
          <div className="flex justify-center space-x-4 p-5">
            <Link
              to="/contact"
              className="bg-HEMgreen text-black py-3 px-8 rounded-lg md:text-xl hover:bg-white hover:text-black transition-transform transform hover:scale-105"
            >
              Spots Fill Fast—Book Now
            </Link>
            <Link
              to="/services"
              className="border border-HEMgreen text-HEMgreen py-3 px-8 rounded-lg md:text-xl hover:bg-HEMgreen hover:text-black transition-transform transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <Slider />
      </section>

      {/* Why Choose Us Section with Parallax */}
      <section>
        <WhyChooseUs />
      </section>
      <section className="p-10">
        {/* Testimonials Section */}
        <TestimonialSlider />
      </section>
      {/* Exclusive Offers Section */}
      <section className="py-20 bg-HEMgray">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-Bungee text-HEMgreen">
            Exclusive Online Service Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                className="bg-dark p-6 rounded-lg shadow-lg hover:bg-HEMgreen hover:text-black transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-semibold ">{offer.title}</h3>
                <p className="text-lg mt-2">{offer.price}</p>
                <p className="mt-4">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
