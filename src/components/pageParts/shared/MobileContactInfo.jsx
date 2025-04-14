import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import useHover from "../../../hooks/useHover";
import { useEffect, useState } from "react";

function MobileContactInfo() {
  const [HoursHovering, HoursHoveringProps] = useHover();
  const HoursBeforeHovering = HoursBefore();
  const HoursAfterHovering = HoursAfter();
  const [LocationHovering, LocationHoveringProps] = useHover();
  const LocationBeforeHovering = LocationBefore();
  const LocationAfterHovering = LocationAfter();

  const [mapsLink, setMapsLink] = useState("");

  // Detect device type and set the appropriate maps link
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
    <div className="justify-center text-[#eeeeee]">
      <div {...HoursHoveringProps} className="flex items-center py-4">
        {HoursHovering ? HoursAfterHovering : HoursBeforeHovering}
        <address className="text-center">
          <span className="not-italic text-[12px] focus:outline focus:outline-[#00FF00]">
            Temporarily Closed
          </span>
        </address>
      </div>

      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        {...LocationHoveringProps}
        className="flex items-center py-4"
      >
        {LocationHovering ? LocationAfterHovering : LocationBeforeHovering}
        <address className="text-center">
          <span className="not-italic text-[12px] focus:outline focus:outline-[#00FF00]">
            315 SW 32nd Terrace
            <br />
            Topeka, KS 66611
          </span>
        </address>
      </a>
    </div>
  );
}

// Define the missing helper functions
function HoursBefore() {
  return (
    <ClockIcon className="w-6 h-6 mr-3 text-[#00FF00]" aria-hidden="true" />
  );
}

function HoursAfter() {
  return (
    <ClockIcon
      className="w-6 h-6 mr-3 text-[#00FF00] fill-current"
      aria-hidden="true"
    />
  );
}

function LocationBefore() {
  return (
    <MapPinIcon className="w-6 h-6 mr-3 text-[#00FF00]" aria-hidden="true" />
  );
}

function LocationAfter() {
  return (
    <MapPinIcon
      className="w-6 h-6 mr-3 text-[#00FF00] fill-current"
      aria-hidden="true"
    />
  );
}

export default MobileContactInfo;
