import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CornerHexagons from "../../../components/CornerHexagons.svg?react";
import GreenButton from "../../../utils/greenButton";
import HeaderTwo from "./header2";
import Engine from "../../../assets/images/Engine.jpg?react";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(30px)" },
    config: { mass: 1, tension: 200, friction: 40 },
  });

  return (
    <div className="animate-fadeIn min-h-[75vh]">
      <Helmet>
        <title>HEM Automotive | High-End Mechanics in Topeka, KS</title>
        <meta
          name="description"
          content="Breakdowns won't break you down with your Topeka, KS High End Mechanics at HEM Automotive. Contact us today or view our services."
        />
        <meta
          name="keywords"
          content="HEM Automotive, high-end mechanics, Topeka KS, car repair, vehicle maintenance, luxury car service"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | High-End Mechanics in Topeka, KS"
        />
        <meta
          property="og:description"
          content="Breakdowns won't break you down with your Topeka, KS High End Mechanics at HEM Automotive. Contact us today or view our services."
        />
        <meta property="og:image" content={Engine} />
        <meta property="og:url" content="https://www.hemautomotive.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="relative isolate overflow-hidden pt-60 min-h-[75vh]">
        <img
          src={Engine}
          alt="Front side of an engine block"
          className="absolute inset-0 -z-10 w-full object-cover brightness-[30%]"
          loading="lazy"
        />
        <div className="bg-gradient-to-b from-transparent to-zinc-900 via-transparent h-[100vh]">
          <animated.div style={props} className="mx-auto max-w-6xl pt-2">
            <div className="text-center">
              <HeaderTwo
                textOne="Breakdowns won't"
                textTwo="break you down"
                textThree="with your Topeka, KS"
                textFour="High End Mechanics"
              />
              <div className="pt-20 flex items-center justify-center gap-x-6 font-Play font-bold">
                <GreenButton
                  href={"contact"}
                  textarea="Contact Today"
                  className="transition-transform transform hover:scale-105"
                  aria-label="Contact Today"
                />
                <Link
                  to={"services"}
                  className="text-sm lg:text-xl font-semibold leading-6 text-white transition-transform transform hover:scale-110"
                  aria-label="View Services"
                >
                  <span>View Services</span>
                </Link>
              </div>
            </div>
          </animated.div>
          <div
            className="absolute inset-0 -z-10 transform-gpu overflow-hidden rotate-180"
            aria-hidden="true"
          >
            <CornerHexagons className="blur-sm aspect-[1155/678] opacity-50 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] overflow-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
