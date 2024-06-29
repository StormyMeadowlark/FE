import CornerHexagons from "../components/CornerHexagons.svg?react";
import RegistrationForm from "../components/pageParts/shared/RegistrationForm";
import MobileNavigation from "../components/pageParts/shared/MobileNavigation.jsx";

import Engine from "../assets/images/Engine.jpg?react";

export default function Register() {
  return (
    <div className="">
      <div className="sticky inset-y-0 inset-x-0 z-50 bg-black/50 font-Play">
        <MobileNavigation />
      </div>
      <div className="relative isolate overflow-hidden pt-60 h-[100vh]">
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
            <div className="text-white">
              <RegistrationForm />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden rotate-180 "
          aria-hidden="true"
        >
          <CornerHexagons className="blur-sm aspect-[1155/678]  opacity-50 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] overflow-auto" />
        </div>
      </div>
    </div>
  );
}
