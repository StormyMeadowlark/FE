import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";
import Engine from "../assets/images/Car.jpg"; // Ensure this path is correct
import JasonHeadshot from "../assets/images/JasonHeadshot.png?react"
import ShawnHeadshot from "../assets/images/ShawnHeadshot.png?react"
import CharlesHeadshot from "../assets/images/CharlesHeadshot.png?react"
import RichardHeadshot from "../assets/images/RichardHeadshot.png?react"
import ShaneHeadshot from "../assets/images/ShaneHeadshot.png?react"


const crewMembers = [
  {
    name: "Jason - Owner",
    description: "",
    favorite: "",
    imageUrl: JasonHeadshot, // Ensure these images are correctly referenced
  },
  {
    name: "Shawn - Service Advisor",
    description: "",
    favorite: "",
    imageUrl: ShawnHeadshot, // Ensure these images are correctly referenced
  },
  {
    name: "Charles - Technician",
    description: "",
    favorite: "",
    imageUrl: CharlesHeadshot,
  },
  {
    name: "Richard - Technician",
    description: "",
    favorite: "",
    imageUrl: RichardHeadshot,
  },
  {
    name: "Shane - Technician",
    description: "",
    favorite: "",
    imageUrl: ShaneHeadshot,
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
    <div className="bg-HEMgray text-white">
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
            </div>
          </div>
        </div>
      </animated.div>

      <main className="max-w-7xl mx-auto p-5 font-urbanist">
        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <div>
            <p className="mt-2 text-white">
              At HEM Automotive, we’re more than just a repair shop—we’re your
              neighbors, your problem-solvers, and your go-to team for keeping
              your car running smoothly. Whether you need a quick oil change or
              help with a tricky diagnostic, we’ve got the tools, the know-how,
              and the commitment to get it done right.
            </p>
            <p className="mt-2 text-white">
              Our shop is equipped to handle just about anything, from everyday
              maintenance to complex repairs. We stay ahead of the curve by
              using the latest tools and techniques, so you can trust that your
              vehicle is in good hands.
            </p>
            <p className="mt-2 text-white">
              What sets us apart? It’s not just our expertise; it’s how we treat
              our customers. We’re all about clear communication, honest
              recommendations, and making sure you feel confident every step of
              the way. At HEM Automotive, car care doesn’t have to be
              stressful—it can be straightforward, reliable, and maybe even
              enjoyable.
            </p>
            <p className="mt-2 text-white">
              We’re here to help you get back on the road safely and
              efficiently, all while delivering the kind of service experience
              that keeps you coming back.
            </p>
          </div>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-white">
            At HEM Automotive, our mission is to ensure that breakdowns don’t
            break you down. We’re committed to keeping your vehicle in top shape
            with expert care, advanced diagnostics, and cutting-edge technology.
            From routine maintenance to complex repairs, we deliver reliable,
            high-quality service that gets you back on the road with confidence.
            Your trust and satisfaction drive everything we do.
          </p>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-3xl font-semibold">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-HEMgreen">
              <strong>Commitment to Quality At HEM Automotive</strong>
              <p className="mt-2 text-white">
                At HEM Automotive, quality isn’t just a promise—it’s our
                standard. From the parts we use to the hands that do the work,
                every detail is handled with precision and care. We specialize
                in keeping your trusted vehicle running smoothly for years to
                come, delivering reliable, long-lasting solutions you can count
                on.
              </p>
              <p className="mt-2 text-white">
                Whether it’s routine maintenance or unexpected repairs, we take
                pride in providing the kind of service that keeps our customers
                coming back. At HEM Automotive, your car is more than just a
                machine—it’s what keeps your life moving, and we’re here to
                ensure it’s always ready for the road ahead.
              </p>
            </li>
            <li className="text-HEMgreen">
              <strong>Your Convenience is Our Priority</strong>
              <p className="mt-2 text-white">
                We know life gets busy, so we’ve designed our services to fit
                your schedule. With after-hours pick-up and drop-off options,
                you can leave or retrieve your vehicle at a time that works best
                for you. Scheduling appointments is simple—just give us a call
                or stop by during business hours.{" "}
              </p>
              <p className="mt-2 text-white">
                While we work on your car, you can stay informed with timely
                updates through your preferred communication method, whether
                that’s text message or a direct call. At HEM Automotive, we make
                managing your vehicle’s maintenance as convenient and
                stress-free as possible.
              </p>
            </li>
            <li className="text-HEMgreen">
              <strong>Dedicated to Innovation</strong>
              <p className="mt-2 text-white">
                We believe in staying ahead of the curve. Our shop is equipped
                with the latest tools and technology, and our technicians are
                trained in advanced repair techniques to handle even the most
                complex challenges.
              </p>
              <p className="mt-2 text-white">
                To enhance your experience, we’re planning to roll out digital
                solutions like an online booking system and streamlined
                communication channels. At HEM Automotive, innovation drives our
                commitment to providing reliable, high-quality care for every
                vehicle that comes through our doors.
              </p>
            </li>
          </ul>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-4xl font-semibold text-center">Our Crew</h2>
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
