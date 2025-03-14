import CornerHexagons from "../../../components/CornerHexagons.svg?react";
import Engine from "../../../assets/images/HEM-Automotive-Engine-Block.jpg?react";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-60">
      <img
        src={Engine}
        alt="front side of engine block"
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[30%]"
        loading="lazy"
      />
      <div className="absolute -z-10 transform-gpu" aria-hidden="true">
        <CornerHexagons className="transform-gpu opacity-[50%] blur-sm aspect-[1155/678]" />
      </div>
      <div className="mx-auto max-w-6xl py-20">
        <div className="text-center">
          <h2 className="text-[#00ff00] px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-7xl uppercase font-Bungee">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden rotate-180"
        aria-hidden="true"
      >
        <CornerHexagons className="blur-sm aspect-[1155/678] opacity-50 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] overflow-auto" />
      </div>
    </div>
  );
}
