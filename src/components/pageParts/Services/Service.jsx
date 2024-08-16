import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ImageLeftCard from "../../../utils/ImageLeftCard";
import ImageRightCard from "../../../utils/ImageRightCard";
import Maintenance from "../../../assets/images/Maintenance.jpg?react";
import Diagnostics from "/src/assets/images/Diagnostics.jpg?react";
import Tires from "/src/assets/images/Tires.jpeg?react";
import Alignment from "/src/assets/images/Alignment2.jpg?react";
import Brakes from "/src/assets/images/Brake3.jpg?react";
import SteeringSuspension from "/src/assets/images/SteeringSuspension.jpg?react";
import RemoveReplace from "/src/assets/images/EngineReplace.jpeg?react";
import HeatAC from "/src/assets/images/HeatingAC.jpg?react";
import Electrical from "/src/assets/images/Electrical.jpg?react";
import EconomyDiesel from "/src/assets/images/EconomyLightDuty.jpg?react";
import Inspection from "/src/assets/images/Inspection.jpg?react";

const services = [
  {
    title: "Preventative Maintenance",
    description:
      "Preventative car maintenance is like taking your car to the spa. Imagine your trusty vehicle lounging on a comfy chaise longue, cucumber slices over its headlights, getting pampered so it can keep running smoothly. Instead of massages and facials, it gets oil changes and tire rotations. This routine TLC helps your car avoid those unexpected breakdowns that always seem to happen at the worst possible times - like when you're late for that important meeting or on your way to the airport.",
    src: Maintenance,
    link: "/services/preventative-maintenance", // Updated key to `link`
  },
  {
    title: "Diagnostics",
    description:
      "When that pesky 'check engine' light pops on, it's your car's way of sending an SOS. Instead of guessing what might be wrong (because cars are really bad at charades), diagnostics give you the scoop straight from the source. With automotive diagnostics, you can plug in a special device that reads your car's secret code language, revealing the hidden mysteries behind its ailments. It's like your car is confessing its deepest, darkest secrets - 'I've got a misfire in cylinder 3,' or 'My oxygen sensor is feeling under the weather.'",
    src: Diagnostics,
    link: "/services/diagnostics", // Updated key to `link`
  },
  {
    title: "Tires",
    description:
      "Imagine your car strutting down the street like it's on a fashion runway - and what's the one thing that makes or breaks its look? Tires & Wheels! We have sales, along with tire repair. It's all about keeping your car stylish, safe, and ready for any adventure. So, give your car the red-carpet treatment it deserves - because every ride deserves to feel like a star!",
    src: Tires,
    link: "/services/tires", // Updated key to `link`
  },
  {
    title: "Alignments",
    description:
      "Picture this: your car's wheels are its feet, and just like you, it needs to walk straight and not do an accidental cha-cha down the highway. When the wheels are misaligned, it's like your car is trying to dance to a tune only it can hear. Alignments ensure all four wheels are perfectly in sync, making your drive smooth and your tires wear evenly.",
    src: Alignment,
    link: "/services/alignments", // Updated key to `link`
  },
  {
    title: "Brakes",
    description:
      "Regular brake service is crucial because, let's face it, nobody wants to be the star of a slow-motion action scene where the car just keeps rolling and rolling. By keeping your brakes in good shape, you're ensuring they're ready to perform their heroics every time you need to stop, whether it's for a red light, a squirrel crossing, or that epic garage entrance.",
    src: Brakes,
    link: "/services/brakes", // Updated key to `link`
  },
  {
    title: "Steering & Suspension",
    description:
      "Signs you need steering and suspension service are as obvious as a squeaky wheel at a roller derby. If your car is pulling to one side, bouncing like it's on a trampoline, or making noises that sound like a jazz band in a blender, it's crying out for some professional attention. The service includes checking and adjusting everything from the shocks and struts to the steering linkage and ball joints, ensuring your car glides smoothly and steers with precision.",
    src: SteeringSuspension,
    link: "/services/steering-suspension", // Updated key to `link`
  },
  {
    title: "Remove & Replace",
    description:
      "When your engine or transmission starts acting up - think knocking, stalling, or just plain refusing to move - it's a sign that these vital organs need some serious attention. This service is all about carefully extracting the old, tired engine or transmission and replacing it with a shiny, new (or expertly refurbished) one. It's like giving your car a new lease on life, minus the dramatic recovery montage.",
    src: RemoveReplace,
    link: "/services/remove-replace", // Updated key to `link`
  },
  {
    title: "A/C & Heating",
    description:
      "When your car's air conditioning decides to go on vacation just as the sun hits its peak, or the heater opts for a siesta on the coldest morning of the year, it's time for some HVAC TLC. This service is all about diagnosing and fixing issues like mysterious hot air blasts when you're craving coolness, or an uncooperative heater that leaves you shivering and hugging yourself like a penguin.",
    src: HeatAC,
    link: "/services/ac-heating", // Updated key to `link`
  },
  {
    title: "Electrical",
    description:
      "Automotive electrical services are like giving your car a brain upgrade and a fresh set of nerves. Imagine your car as a high-tech robot (think less Terminator, more R2-D2), buzzing with circuits, wires, and electrical gizmos that make everything from your headlights to your radio work like a charm. When these systems go haywire, it's like your car's having a midlife crisis, complete with flickering lights and mysterious beeps.",
    src: Electrical,
    link: "/services/electrical", // Updated key to `link`
  },
  {
    title: "Economy & Light Duty Diesel",
    description:
      "Light duty diesel services at an automotive repair shop are about giving your diesel-powered vehicle the TLC it deserves. From oil changes to fuel filter replacements and everything in between, these services keep your ride roaring and ready for any adventure, ensuring it stays as dependable and heroic as ever. So, treat your diesel vehicle to this luxurious spa day, and it'll keep saving the day for you - one epic road trip at a time!",
    src: EconomyDiesel,
    link: "/services/diesel", // Updated key to `link`
  },
  {
    title: "Used Vehicle Inspection",
    description:
      "Used vehicle inspections at an automotive repair shop are like sending a detective to investigate a potential partner before committing to a blind date. You want to know if this car has a dark past, a hidden limp, or any quirks that might make you regret swiping right. It's all about ensuring you're not bringing home a lemon that'll sour your relationship faster than expired milk. whether you're eyeing a vintage classic or a practical daily driver, a used vehicle inspection at an automotive repair shop ensures you're not driving off into the sunset with a lemon. It's your insurance policy against regrettable automotive blind dates - because finding the right car should be as thrilling as a rom-com, not a horror flick.",
    src: Inspection,
    link: "/services/inspection", // Updated key to `link`
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
