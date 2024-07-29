import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "@react-spring/web";

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
    title: "FMP Partners Network Program",
    description:
      "Enjoy a 12,000 mile / 12 month warranty with the FMP Partners Network Program, providing peace of mind and assurance for your vehicle.",
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

const Benefits = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { mass: 1, tension: 200, friction: 40 },
  });

  return (
    <div className="py-20 px-10 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-500 animate-fadeIn">
      <Helmet>
        <title>HEM Automotive | Why Choose Us</title>
        <meta
          name="description"
          content="Discover why HEM Automotive is the best choice for your vehicle's care, offering superior customer service, advanced technology, and transparency."
        />
        <meta
          name="keywords"
          content="HEM Automotive, customer service, advanced technology, vehicle care, transparency, quality, comfort, convenience"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HEM Automotive | Why Choose Us" />
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
        <animated.div
          style={props}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`relative p-6 border border-[#00ff00] rounded-lg bg-[#222222] transition-transform transform hover:scale-105 ${
                hoverIndex === index ? "bg-[#333333]" : "hover:bg-[#333333]"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              role="article"
              aria-labelledby={`reason-title-${index}`}
              aria-describedby={`reason-description-${index}`}
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
            </div>
          ))}
        </animated.div>
      </section>
    </div>
  );
};

export default Benefits;
