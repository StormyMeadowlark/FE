import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import useHover from "../../../hooks/useHover";
import { useEffect, useState } from "react";

function ContactInfo() {
  const [HoursHovering, HoursHoveringProps] = useHover();
  const HoursBeforeHovering = HoursBefore();
  const HoursAfterHovering = HoursAfter();
  const [LocationHovering, LocationHoveringProps] = useHover();
  const LocationBeforeHovering = LocationBefore();
  const LocationAfterHovering = LocationAfter();

  const [mapsLink, setMapsLink] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setMapsLink("https://maps.app.goo.gl/poof47736HkKffnB9");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setMapsLink(
        "http://maps.apple.com/?q=315+SW+32nd+Terrace,+Topeka,+KS+66611"
      );
    } else {
      setMapsLink(
        "https://maps.google.com/?q=315+SW+32nd+Terrace,+Topeka,+KS+66611"
      );
    }
  }, []);

  return (
    <div className="flex gap-x-6 pb-8 -mt-10 md:pt-6 justify-center text-[#eeeeee]">
      <ContactItem
        href="#"
        IconComponent={HoursHovering ? HoursAfterHovering : HoursBeforeHovering}
        text="Temporarily Closed"
        {...HoursHoveringProps}
      />
      <ContactItem
        href={mapsLink}
        IconComponent={
          LocationHovering ? LocationAfterHovering : LocationBeforeHovering
        }
        text="315 SW 32nd Terrace Topeka, KS 66611"
        {...LocationHoveringProps}
      />
    </div>
  );
}

function ContactItem({ href, IconComponent, text, ...hoverProps }) {
  return (
    <a
      href={href}
      className="flex items-center py-4 focus-visible:outline-none"
      {...hoverProps}
    >
      {IconComponent}
      <address className="text-center not-italic text-[12px]">
        {text.split("\n").map((line, idx) => (
          <span key={idx}>{line}</span>
        ))}
      </address>
    </a>
  );
}


function HoursBefore() {
  return <ClockIcon className="w-6 h-6 text-[#00FF00]" aria-hidden="true" />;
}

function HoursAfter() {
  return (
    <ClockIcon
      className="w-6 h-6 text-[#00FF00] fill-current"
      aria-hidden="true"
    />
  );
}

function LocationBefore() {
  return <MapPinIcon className="w-6 h-6 text-[#00FF00]" aria-hidden="true" />;
}

function LocationAfter() {
  return (
    <MapPinIcon
      className="w-6 h-6 text-[#00FF00] fill-current"
      aria-hidden="true"
    />
  );
}

export default ContactInfo;
