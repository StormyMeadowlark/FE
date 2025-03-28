import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";
import Engine from "../assets/images/HEM-Automotive-Crew.jpg"; // Ensure this path is correct
import Charles from "../assets/images/Charles.png?react"
import Shane from "../assets/images/Shane.png?react"
import Shawn from "../assets/images/Shawn.png?react"
import Richard from "../assets/images/Richard.png?react"
import Jason from "../assets/images/Jason.png?react"
const crewMembers = [
  {
    name: "Jason - Owner",
    description: "",
    favorite: "",
    imageUrl: Jason,
  },
  {
    name: "Shawn - Service Advisor",
    description: "",
    favorite: "",
    imageUrl: Shawn, // Ensure these images are correctly referenced
  },
  {
    name: "Charles - Tech",
    description: "",
    favorite: "",
    imageUrl: Charles,
  },
  {
    name: "Richard - Tech",
    description: "",
    favorite: "",
    imageUrl: Richard,
  },
  {
    name: "Shane - Tech ",
    description: "",
    favorite: "",
    imageUrl: Shane,
  },
];

const About = () => {
  const [index] = useState(0);
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
          <p>
            HEM Automotive is a distinguished automotive repair and maintenance
            shop committed to providing top-tier service with a unique blend of
            professionalism and approachability. 
            <p>Our facility, equipped to
            handle a broad range of automotive challenges, ensures reliable and
            efficient service. </p>
            <p>Our expertise covers a wide spectrum of
            vehicle types, our offerings include services that cater to the
            intricate needs associated with general maintenance and advanced
            diagnostics, which owners of high-end vehicles might find
            particularly beneficial.</p>
            
            <p>Our shop is functional and well-suited
            for quality service, utilizes the latest automotive technologies and
            repair techniques. 
            </p>
            <p>
            We are also enhancing our customer experience
            through the integration of digital solutions and improved
            communication channels. At HEM Automotive, we strive to make every
            interaction with our clients smooth and pleasant, delivering a
            service experience that is approachable, professional, and engaging,
            making automotive care accessible and less intimidating for all our
            customers.
            </p>
          </p>
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
