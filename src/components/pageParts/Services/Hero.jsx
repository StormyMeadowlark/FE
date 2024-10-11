import CornerHexagons from "../../../components/CornerHexagons.svg?react";
import Engine from "../../../assets/images/Engine.jpg?react";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-60">
      {/* Engine Image Background */}
      <img
        src={Engine}
        alt="front side of engine block"
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        loading="lazy"
      />

      {/* Hexagon Overlay */}
      <div className="absolute inset-0 -z-10 transform-gpu" aria-hidden="true">
        <CornerHexagons className="opacity-30 blur-sm" />
      </div>

      {/* Centered Services Text */}
      <div className="mx-auto max-w-6xl py-20 text-center">
        <h1 className="text-[#00ff00] text-stroke text-stroke-[#333333] px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-7xl uppercase font-Bungee tracking-wider transition-transform duration-500 transform hover:translate-y-1 hover:opacity-90">
          Comprehensive Auto Services for Quality Car Care in Topeka
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mt-4 tracking-wider max-w-3xl mx-auto leading-relaxed">
          Your trusted local experts delivering superior car care for all makes
          and models, without the dealership hassle.
        </p>
      </div>

      {/* Bottom Hexagon Overlay */}
      <div
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden rotate-180"
        aria-hidden="true"
      >
        <CornerHexagons className="blur-sm opacity-50" />
      </div>
    </div>
  );
}
