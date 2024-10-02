import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import GreenButton from "../utils/greenButton";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import AOS from "aos";
import "aos/dist/aos.css";
import CheckOil from "../assets/images/Maintenance.webp";
import Diagnostics from "../assets/images/Diagnostics.webp";
import Alignment from "../assets/images/Alignment2.webp";
import RemoveReplace from "../assets/images/EngineReplace.webp";
import Inspection from "../assets/images/Inspection.webp";
import HeatAC from "../assets/images/HeatingAC.webp";
import BestofBest from "../assets/images/BestOfBest.webp";
import SilverButton from "../utils/silverbutton";


const testimonials = [
  {
    name: "Catfish S.",
    quote:
      "HEM Automotive never disappoints. They repair in a timely manner to keep with a fair price. Anytime I've taken my vehicle there, Jason and crew have been upfront about the cost and kept me up to date with progress. Took my vehicle there to fix what I thought was a suspension type issue; HEM figured out it was the transmission b4 any work was done. We were able to get warranty work taken care of because of their attention to detail.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Gordan Haight",
    quote:
      "Jason Worked on my 1993 Lexus ES300, gave me a great deal and the car has been running flawlessly ever since he put his hands on it. 10/10 thank you",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Chad Nelson",
    quote:
      "Took my sons jeeps to HEMS to find out what was going wrong with it. They didn't overcharge me like another shop was trying to do. They found the problem and repaired it. It cme out cheaper than the estimate. Would recommend and will be back",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Joe Hawkinson",
    quote:
      "We've had many things done on our vehicles with HEM; from a routine oil change, and tires, to diagnosing and fixing a broken car horn, even rebuilding the top of on of our truck's 5.7 hemi engine. The people here have always been very kind, courteous, patient, and professional.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Shelby Shaw",
    quote:
      "Jason did great work on my car when it was having multiple isues! He is affordable and honest, along with getting it fixed in a timely manner!!",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Christina Alley",
    quote:
      "Jason at 8 AM has done a wonderful job on both of my vehicles he has been stright up and honest about the price and whether it is worth fixing or not I absolutely loved this place and I would recommend it to everyone if you want an honest mechanic that does a very good job and stands behind his work then give ATM a call",
    image: "https://via.placeholder.com/150",
  },
];

const reasons = [
  {
    title: "Superior Customer Service",
    description:
      "Our team is dedicated to providing an exceptional experience with personalized attention and care.",
  },
  {
    title: "Advanced Technology",
    description:
      "We use the latest technology to diagnose and repair your vehicle, ensuring optimal performance and reliability.",
  },
  {
    title: "Trust and Transparency",
    description:
      "We believe in honest communication and transparency, so you always know what’s happening with your vehicle.",
  },
  {
    title: "TechNet Professional Automotive Service Facility",
    description:
      "Enjoy a 24,000 mile / 24 month warranty with the TechNet Professional Nationwide Warranty, providing peace of mind and assurance for your vehicle.",
  },
  {
    title: "SNAP Financing",
    description:
      "Take advantage of up to $5,000 in financing through SNAP, making it easier to manage the costs of major repairs and upgrades.",
  },
  {
    title: "Carfax Car Care Loyalty Service Shop Program",
    description:
      "Benefit from email maintenance reminders and a free Carfax report, helping you stay on top of your vehicle's care and history.",
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
      "induction cleaning and oil changes! Book between now and 10/8/24 to lock in your price. We do diesel oil changes too!",
  },
  {
    title: "3M Headlight Refresh",
    price: "$170",
    description: "Restore your headlights to their factory shine.",
  },
];

const services = [
  {
    title: "Wheel Alignment",
    description: "Precision alignment services for smooth driving",
    image: Alignment,
    link: "services/alignments",
  },
  {
    title: "Routine Maintenance",
    description: "Keep your vehicle running like a well-oiled machine",
    image: CheckOil,
    link: "services/preventative-maintenance",
  },
  {
    title: "Diagnostic Services",
    description: "Advanced diagnostics for all vehicle problems",
    image: Diagnostics,
    link: "services/diagnostics",
  },
  {
    title: "Refresh & Upgrade",
    description: "Essential updates & improvements for a more enjoyable drive",
    image: RemoveReplace,
    link: "services/remove-replace",
  },
  {
    title: "Used Vehicle Inspection",
    description: "Peace of mind when buying a used vehicle",
    image: Inspection,
    link: "services/inspection",
  },
  {
    title: "A/C & Heating",
    description: "Repair & recharge all heating & cooling systems",
    image: HeatAC,
    link: "services/ac-heating",
  },
];

const wordsPerMinute = 140;

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useRef(testimonials.map(() => React.createRef()));
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const calculateDuration = (text) => {
    const words = text.split(" ").length;
    return (words / wordsPerMinute) * 60000; // Convert minutes to milliseconds
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, calculateDuration(testimonials[current].quote));

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts or updates
  }, [current]);

  useLayoutEffect(() => {
    const maxTestimonialHeight = refs.current.reduce((max, ref) => {
      return ref.current ? Math.max(max, ref.current.offsetHeight) : max;
    }, 0);
    setMaxHeight(maxTestimonialHeight);
  }, [refs]);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleFirstTab = (e) => {
    if (e.keyCode === 9) {
      setIsKeyboardNavigation(true);
      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    setIsKeyboardNavigation(false);
    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleFirstTab);
    return () => {
      window.removeEventListener("keydown", handleFirstTab);
      window.removeEventListener("mousedown", handleMouseDownOnce);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { mass: 1, tension: 200, friction: 40 },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

    return (
      <div className="bg-black overflow-hidden">
        <Helmet>
          <title>HEM Automotive | Your High-End Mechanic in Topeka, KS</title>
          <meta
            name="description"
            content="Experience superior car repair and maintenance services at HEM Automotive in Topeka, KS. Trust our advanced technology and expert mechanics for all your vehicle needs."
          />
          <meta
            name="keywords"
            content="auto repair, car maintenance, vehicle diagnostics, wheel alignment, Topeka KS, HEM Automotive"
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="High-End Mechanic Services in Topeka, KS | HEM Automotive"
          />
          <meta
            property="og:description"
            content="Explore top-notch car repair at HEM Automotive in Topeka, KS. From wheel alignment to diagnostics, our expert mechanics ensure your vehicle's optimal driving condition."
          />
          <meta property="og:url" content="https://hemautomotive.com" />
          <meta property="og:type" content="website" />
        </Helmet>

        {/* Hero Section */}
        <div className="relative isolate overflow-hidden min-h-[100vh] text-center font-sans text-5xl md:text-7xl lg:text-8xl text-white uppercase bg-engine bg-cover bg-center bg-no-repeat">
          <div className="relative pt-60 min-h-[100vh] bg-gradient-to-b from-black/70 to-HEMgreen via-black/70 border-b-HEMgreen">
            {/* Hero Content */}
            <animated.div
              style={props}
              className="relative mx-auto max-w-6xl pt-20 z-10"
            >
              <h1 className="leading-tight font-bold font-sans">
                Breakdowns won&apos;t break you down with your Topeka, KS
                High-End Mechanics
              </h1>
              <div className="py-20 flex items-center justify-center gap-x-6 font-Play font-bold">
                <GreenButton
                  href={"contact"}
                  textarea="Contact Today"
                  className="transition-transform transform hover:scale-105"
                  aria-label="Contact Today"
                />
                <Link
                  to={"services"}
                  className={`text-sm lg:text-xl font-semibold leading-6 text-white transition-transform transform hover:scale-110 ${
                    isKeyboardNavigation ? "focus:border-HEMgreen" : ""
                  }`}
                  aria-label="View Services"
                >
                  <span>View Services</span>
                </Link>
              </div>
            </animated.div>
          </div>
        </div>
        <Element name="featured-services">
          <div className="relative min-h-[100vh] bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-500">
            <Helmet>
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
                content="Featured Services | HEM Automotive"
              />
              <meta
                property="og:description"
                content="Explore HEM Automotive's featured services, including wheel alignment, routine maintenance, diagnostic services, and more. Experience unparalleled full-service repair and maintenance."
              />
              <meta property="og:image" content={Alignment} />
              <meta property="og:url" content="https://hemautomotive.com" />
              <meta property="og:type" content="website" />
            </Helmet>

            <section className="py-16 px-4 mx-auto max-w-7xl">
              <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-Bungee text-[#00ff00] mb-10 uppercase">
                Our Featured Services
              </h2>
              <p className="text-center text-xl text-white font-bold mb-12 font-Urbanist tracking-wider max-w-2xl mx-auto">
                Experience unparalleled full-service repair and maintenance for
                most models manufactured after 2000. For vintage automobiles or
                any unique vehicles, we invite you to contact us directly. Our
                expertise extends beyond a single manufacturer, ensuring every
                vehicle receives the exceptional care it deserves.
              </p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-cover bg-center h-80 hover:scale-105 animate-fadeIn"
                    style={{ backgroundImage: `url(${service.image})` }}
                    role="article"
                    aria-labelledby={`${service.title.replace(
                      /\s+/g,
                      "-"
                    )}-title`}
                    aria-describedby={`${service.title.replace(
                      /\s+/g,
                      "-"
                    )}-description`}
                    whileHover="hover"
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
                        text={`Learn more about ${service.title}`}
                        href="services"
                        aria-label={`Learn more about ${service.title} services`}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <div className="text-center mt-10">
                <button
                  className={`bg-[#444444] text-white py-3 px-8 rounded-md shadow-lg border-b border-[#00ff00] text-lg font-Play font-semibold tracking-wide transition-transform transform hover:scale-105 ${
                    isKeyboardNavigation ? "focus:border-HEMgreen" : ""
                  }`}
                  aria-label="View all services available at HEM Automotive"
                >
                  View All Services
                </button>
              </div>
            </section>
          </div>
        </Element>

        <Element name="benefits">
          <div className="py-20 px-10 bg-gradient-to-b from-zinc-500 via-zinc-500 to-HEMgray animate-fadeIn">
            <Helmet>
              <meta
                name="description"
                content="Discover why HEM Automotive is the best choice for your vehicle's care, offering superior customer service, advanced technology, and transparency."
              />
              <meta
                name="keywords"
                content="HEM Automotive, customer service, advanced technology, vehicle care, transparency, quality, comfort, convenience"
              />
              <meta name="robots" content="index, follow" />
              <meta
                property="og:title"
                content="HEM Automotive | Why Choose Us"
              />
              <meta
                property="og:description"
                content="Discover why HEM Automotive is the best choice for your vehicle's care, offering superior customer service, advanced technology, and transparency."
              />
              <meta property="og:url" content="https://www.hemautomotive.com" />
              <meta property="og:type" content="website" />
            </Helmet>
            <section className="relative mx-auto max-w-7xl py-16 px-4">
              <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 uppercase">
                Why Choose Us
              </h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className={`relative p-6 border border-[#00ff00] rounded-lg bg-[#222222] transition-transform transform hover:scale-105 ${
                      hoverIndex === index
                        ? "bg-[#333333]"
                        : "hover:bg-[#333333]"
                    }`}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(-1)}
                    role="article"
                    aria-labelledby={`reason-title-${index}`}
                    aria-describedby={`reason-description-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 + index * 0.2 },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="inset-0 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <h3
                        id={`reason-title-${index}`}
                        className="text-2xl font-Urbanist font-medium tracking-wider text-white mb-4"
                      >
                        {reason.title}
                      </h3>
                      <p
                        id={`reason-description-${index}`}
                        className="text-lg text-[#cccccc] font-Urbanist tracking-wide"
                      >
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
        </Element>

        <Element name="offers">
          <div className="bg-HEMgray text-white py-12 px-4 md:px-10 lg:px-16">
            <Helmet>
              <meta
                name="description"
                content="Take advantage of HEM Automotive's limited time exclusive online offers. Experience premium car care at unbeatable rates. Induction cleaning, wheel alignment, and headlight refresh services available at special prices."
              />
              <meta
                name="keywords"
                content="HEM Automotive, exclusive offers, car services, induction cleaning, wheel alignment, headlight refresh, special pricing"
              />
              <meta name="robots" content="index, follow" />
              <meta
                property="og:title"
                content="HEM Automotive | Exclusive Online Offers"
              />
              <meta
                property="og:description"
                content="Take advantage of HEM Automotive's limited time exclusive online offers. Experience premium car care at unbeatable rates. Induction cleaning, wheel alignment, and headlight refresh services available at special prices."
              />
              <meta property="og:url" content="https://www.hemautomotive.com" />
              <meta property="og:type" content="website" />
            </Helmet>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
                Exclusive Online Offers
              </h2>
              <p className="text-center text-xl text-[#aaaaaa] font-bold mb-10 font-Urbanist tracking-wider">
                Limited time special pricing on select services only through HEM
                Automotive! Experience premium car care at unbeatable rates.
              </p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {offers.map((offer, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border bg-[#222222] border-HEMgreen rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 + index * 0.2 },
                      },
                    }}
                  >
                    <h3 className="font-Bungee text-lg text-HEMgreen mb-2">
                      {offer.title}
                    </h3>
                    <h4 className="text-white font-bold mb-2 text-xl">
                      {offer.price}
                    </h4>
                    <p className="text-[#aabbaa]">{offer.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-[#cccccc] italic mt-6 text-center">
                *Prices are cash, do not include additional shop fees or taxes.
              </p>
            </div>
          </div>
        </Element>

        <Element name="appreciation">
          <div className="bg-[#333333]" data-aos="fade-up">
            <Helmet>
              <meta
                name="description"
                content="We truly appreciate your support. Help us achieve the top spot for Best Auto Repair in Topeka, KS by leaving a review. Your feedback drives us to excellence."
              />
              <meta
                name="keywords"
                content="HEM Automotive, customer appreciation, auto repair reviews, Topeka KS"
              />
              <meta name="robots" content="index, follow" />
              <meta
                property="og:title"
                content="HEM Automotive | Appreciation"
              />
              <meta
                property="og:description"
                content="We truly appreciate your support. Help us achieve the top spot for Best Auto Repair in Topeka, KS by leaving a review. Your feedback drives us to excellence."
              />
              <meta property="og:url" content="https://www.hemautomotive.com" />
              <meta property="og:type" content="website" />
            </Helmet>
            <div className="text-white p-6 max-w-7xl mx-auto animate-fadeIn">
              <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
                We Truly Appreciate You!
              </h2>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <p className="text-center text-lg md:text-xl lg:text-2xl font-Urbanist text-[#cccccc] mb-10">
                    In 2022, thanks to your support, we were proud finalists for
                    the Best of the Best Auto Repair in Topeka, KS. Let's aim
                    for the top spot in 2025! Keep being awesome and help us
                    achieve that goal by leaving a review. Your feedback keeps
                    us striving for excellence!
                  </p>
                  <div className="flex flex-col md:flex-row mt-6 justify-center mb-20">
                    <div className="mx-4 mb-10 md:mb-0">
                      <a
                        href="https://www.google.com/search?q=hem+automotive"
                        className="inline-flex items-center justify-center rounded-md silverbg px-6 py-3 text-xl font-black shadow-xl border-b border-[#00ff00] shadow-[#222222] font-Play text-center text-white transform transition-transform duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Review on Google"
                      >
                        Review on Google
                      </a>
                    </div>
                    <div className="mx-4">
                      <a
                        href="https://www.yelp.com/biz/hem-automotive-topeka"
                        className="inline-flex items-center justify-center rounded-md silverbg px-6 py-3 text-xl font-black shadow-xl border-b border-[#00ff00] shadow-[#222222] font-Play text-center text-white transform transition-transform duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Review on Yelp"
                      >
                        Review on Yelp
                      </a>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="md:w-1/4 flex m-2 pl-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={BestofBest}
                    className="h-auto"
                    alt="Best of Best Award"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Element>

        <Element name="testimonials">
          <div className="bg-HEMgray">
            <Helmet>
              <meta
                name="description"
                content="Read testimonials from satisfied customers of HEM Automotive. Discover why they consistently choose us for superior car repair and maintenance services."
              />
              <meta
                name="keywords"
                content="HEM Automotive, customer testimonials, car repair reviews, vehicle maintenance reviews"
              />
              <meta name="robots" content="index, follow" />
              <meta
                property="og:title"
                content="HEM Automotive | Testimonials"
              />
              <meta
                property="og:description"
                content="Read testimonials from satisfied customers of HEM Automotive. Discover why they consistently choose us for superior car repair and maintenance services."
              />
              <meta property="og:url" content="https://www.hemautomotive.com" />
              <meta property="og:type" content="website" />
            </Helmet>
            <div className="text-white p-6 max-w-7xl mx-auto animate-fadeIn">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10 text-center">
                  Testimonials
                </h2>
                <p className="relative max-w-3xl text-xl text-[#aaaaaa] font-bold m-6 p-4 font-Urbanist tracking-wider text-center mx-auto">
                  Experience the high-end mechanic difference. Hear directly
                  from our customers why they consistently choose us.
                </p>
              </div>
              <div className="bg-[#222222] text-white p-6 rounded-md shadow-lg shadow-black max-w-xl mx-auto mb-20 font-Play outline outline-HEMgreen">
                <div className="flex justify-center items-center">
                  <button
                    onClick={handlePrev}
                    className="text-[#aaaaaa] p-2"
                    aria-label="Previous testimonial"
                  >
                    &lt;
                  </button>
                  <motion.div
                    className="text-center mx-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={current}
                  >
                    <img
                      src={testimonials[current].image}
                      alt={`Photo of ${testimonials[current].name}`}
                      className="w-24 h-24 rounded-full mx-auto"
                      loading="lazy"
                    />
                    <div
                      ref={refs.current[current]}
                      style={{ minHeight: `${maxHeight}px` }}
                      className="text-lg font-Urbanist text-[#cccccc] mt-4"
                    >
                      "{testimonials[current].quote}"
                      <p className="text-md font-Play font-bold text-[#ffffff] mt-2">
                        - {testimonials[current].name}
                      </p>
                    </div>
                  </motion.div>
                  <button
                    onClick={handleNext}
                    className="text-[#aaaaaa] p-2"
                    aria-label="Next testimonial"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>
    );
};

export default Home;
