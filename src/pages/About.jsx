import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";
import Engine from "../assets/images/Car.jpg"; // Ensure this path is correct

const crewMembers = [
  {
    name: "Shawn - Service Advisor",
    description:
      "With over 10 years of experience in the automotive industry, Shawn ensures that all customer inquiries are handled with exceptional care and professionalism.",
    favorite:
      "Shawn loves the challenge of diagnosing complex car issues and ensuring customer satisfaction with every visit.",
    imageUrl: "/images/shawn.jpg", // Ensure these images are correctly referenced
  },
  {
    name: "Charles - Lead Technician",
    description:
      "Charles, known affectionately as 'Chuckie,' has been with HEM Automotive for over 15 years. His expertise lies in European luxury vehicles.",
    favorite:
      "He enjoys tweaking engine performance to squeeze out every bit of power while ensuring the cars run smoothly.",
    imageUrl: "/images/charles.jpg",
  },
  {
    name: "Shane - Diagnostic Specialist",
    description:
      "Shane's ability to quickly identify and solve complex electronic issues is unparalleled.",
    favorite:
      "Shane loves the satisfaction that comes from solving problems that others find too challenging.",
    imageUrl: "/images/shane.jpg",
  },
  {
    name: "Richard - Hybrid Systems Expert",
    description: "Richard specializes in hybrid and electric vehicles.",
    favorite:
      "Richard takes pride in contributing to environmental sustainability through his work.",
    imageUrl: "/images/richard.jpg",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });
  const slideIn = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0)" },
    delay: 500,
  });

  return (
    <div className="bg-hemBlack text-white">
      <Helmet>
        <title>
          About Us - Quality Automotive Services in Topeka | HEM Automotive
        </title>
        <meta
          name="description"
          content="Discover HEM Automotive's commitment to quality automotive care in Topeka. Learn about our services, mission, and why you should choose us."
        />
      </Helmet>

      <animated.div
        style={slideIn}
        className="font-Urbanist relative isolate overflow-hidden pt-60"
      >
        <img
          src={Engine}
          alt="Front side of an engine block"
          className="absolute inset-0 -z-10 h-[36rem] w-full object-cover object-scale brightness-[30%] lazyload"
          loading="lazy"
        />
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <div className="pb-16">
              <animated.h1
                style={fadeIn}
                className="text-HEMgreen text-3xl md:text-5xl lg:text-7xl uppercase font-Bungee"
              >
                About HEM Automotive
              </animated.h1>
              <p className="text-xl text-HEMgray font-bold tracking-wider">
                Breakdowns won't break you down.
              </p>
            </div>
          </div>
        </div>
      </animated.div>

      <main className="max-w-7xl mx-auto p-5 font-urbanist">
        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p>
            At HEM Automotive, we pride ourselves on delivering the high-end
            experience for our valued customers and their vehicles.
          </p>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            Our mission is to provide quality and convenient automotive repair
            and maintenance.
          </p>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Quality:</strong> Using top-tier equipment and highly
              knowledgeable technicians.
            </li>
            <li>
              <strong>Convenience:</strong> Flexible scheduling and efficient
              services.
            </li>
            <li>
              <strong>Innovation:</strong> Advanced technology and diagnostic
              tools.
            </li>
          </ul>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-2xl font-semibold">Our Crew</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {crewMembers.map((member, idx) => (
              <animated.div key={idx} style={index === idx ? fadeIn : {}}>
                <div className="bg-hemGray rounded-xl p-5 my-4 shadow-lg flex items-center space-x-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl text-HEMgreen">{member.name}</h3>
                    <p>{member.description}</p>
                    <p className="text-HEMgreen">{member.favorite}</p>
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        </animated.section>
      </main>
    </div>
  );
};

export default About;
