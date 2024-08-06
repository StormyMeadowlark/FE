import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";
import Engine from "../assets/images/Car.jpg"; // Ensure this path is correct
import Holder from "../assets/images/default-user.jpg"

const crewMembers = [
  {
    name: "Shawn - Service Advisor",
    description: "",
    favorite: "",
    imageUrl: Holder, // Ensure these images are correctly referenced
  },
  {
    name: "Charles",
    description: "",
    favorite: "",
    imageUrl: Holder,
  },
  {
    name: "Richard - ",
    description: "",
    favorite: "",
    imageUrl: Holder,
  },
  {
    name: "Shane - ",
    description: "",
    favorite: "",
    imageUrl: Holder,
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
          <p>
            HEM Automotive is a distinguished automotive repair and maintenance
            shop committed to providing top-tier service with a unique blend of
            professionalism and approachability. Our facility, equipped to
            handle a broad range of automotive challenges, ensures reliable and
            efficient service. While our expertise covers a wide spectrum of
            vehicle types, our offerings include services that cater to the
            intricate needs associated with general maintenance and advanced
            diagnostics, which owners of high-end vehicles might find
            particularly beneficial. Our shop is functional and well-suited
            for quality service, utilizes the latest automotive technologies and
            repair techniques. We are also enhancing our customer experience
            through the integration of digital solutions and improved
            communication channels. At HEM Automotive, we strive to make every
            interaction with our clients smooth and pleasant, delivering a
            service experience that is approachable, professional, and engaging,
            making automotive care accessible and less intimidating for all our
            customers.
          </p>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p>
            HEM Automotive&apos;s mission is to provide top-notch automotive services
            that exceed customer expectations. The focus is on keeping vehicles
            in optimal condition using advanced diagnostic tools, cutting-edge
            technology, and expert technicians. At HEM Automotive, the goal is
            to ensure that breakdowns don&apos;t break you down, emphasizing
            reliability, precision, and high-quality service to all customers.
          </p>
        </animated.section>

        <animated.section style={fadeIn} className="mt-4">
          <h2 className="text-3xl font-semibold">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Commitment to Quality At HEM Automotive</strong>
              <br />
              We&apos;re committed to quality in every aspect of our business.
              From the parts we use to the hands that do the work, we ensure
              that every detail is handled with care. We stand behind our work
              with comprehensive warranties and our dedication to customer
              satisfaction is unwavering. At HEM Automotive, we don&apos;t just
              fix cars—we ensure they perform as beautifully as the day they
              rolled off the showroom floor. Whether you need routine
              maintenance or emergency repairs HEM Automotive are your local
              high end mechanics making sure breakdowns don&apos;t break you
              down. We&apos;re your trusted partner for all your automotive needs.
            </li>
            <li>
              <strong>Your Convenience is Our Priority</strong>
              <br />
              We ensure our automotive services integrate seamlessly into your
              busy lifestyle. Schedule appointments with ease via phone or in
              person, choosing times that best suit your schedule, whether
              it&apos;s early mornings or late evenings. We offer services for most repairs, utilizing the latest
              technology to ensure quick and accurate results. Our commitment to
              excellent customer service includes providing timely updates
              through your preferred communication method—email or direct calls.
              For added convenience, take advantage of our vehicle pick-up and
              drop-off options. While your car is serviced, relax in our
              comfortable waiting area, where we offer complimentary beverages and Wi-Fi
              to make your wait more enjoyable. At HEM Automotive, we make
              managing your vehicle&apos;s maintenance effortless and
              stress-free.
            </li>
            <li>
              <strong>Dedicated to Innovation</strong>
              <br />
              We are continuously adapting and integrating effective
              technologies and methods to enhance our repair and maintenance
              capabilities. Our shop is well-equipped, allowing us to
              efficiently handle complex automotive challenges. We ensure our
              technicians are trained with the latest automotive technologies
              and repair techniques for precise diagnostics and reliable
              repairs. Plans are underway to integrate digital solutions like an
              online booking system and enhanced communication channels to
              improve customer experience. At HEM Automotive, we strive to
              combine practical technology with exceptional service, providing
              superior automotive care and ensuring that every vehicle receives
              the best possible attention.
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
