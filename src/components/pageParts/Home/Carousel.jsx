import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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
  // Add more testimonials as needed
];

const wordsPerMinute = 140;

const HomepageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useRef(testimonials.map(() => React.createRef()));

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

  return (
    <div className="bg-HEMgray">
      <Helmet>
        <title>HEM Automotive | Testimonials</title>
        <meta
          name="description"
          content="Read testimonials from satisfied customers of HEM Automotive. Discover why they consistently choose us for superior car repair and maintenance services."
        />
        <meta
          name="keywords"
          content="HEM Automotive, customer testimonials, car repair reviews, vehicle maintenance reviews"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HEM Automotive | Testimonials" />
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
            Experience the high-end mechanic difference. Hear directly from our
            customers why they consistently choose us.
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
  );
};

export default HomepageCarousel;
