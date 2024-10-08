import { NavLink } from "react-router-dom";
import {
  UserIcon,
  CalendarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../../context/AuthContext";
import useHover from "../../../hooks/useHover";

function QuickLinks() {
  const { isLoggedIn } = useAuth();
  const isMobile = window.innerWidth < 1024; // Simple screen size check

  const [UserHovering, UserHoveringProps] = !isMobile
    ? useHover()
    : [false, {}];
  const [AppointmentHovering, AppointmentHoveringProps] = !isMobile
    ? useHover()
    : [false, {}];
  const [PaymentHovering, PaymentHoveringProps] = !isMobile
    ? useHover()
    : [false, {}];

  return (
    <div className="hidden lg:flex flex-wrap justify-around items-center gap-x-6 py-4">
      <NavLink
        {...UserHoveringProps}
        to={isLoggedIn ? "/profile" : "/login"}
        className="p-2"
      >
        <span className="sr-only">
          {isLoggedIn ? "Go to Profile" : "Log-In or Create Account"}
        </span>
        {UserHovering ? <UserAfter /> : <UserBefore />}
      </NavLink>

      <NavLink {...AppointmentHoveringProps} to="/schedule" className="p-2">
        <span className="sr-only">Schedule an Appointment</span>
        {AppointmentHovering ? <AppointmentAfter /> : <AppointmentBefore />}
      </NavLink>

      <NavLink {...PaymentHoveringProps} to="/payment" className="p-2">
        <span className="sr-only">Online Payments</span>
        {PaymentHovering ? <PaymentAfter /> : <PaymentBefore />}
      </NavLink>
    </div>
  );
}

function UserBefore() {
  return <UserIcon className="h-7 w-7 text-[#00FF00]" aria-hidden="true" />;
}

function UserAfter() {
  return (
    <UserIcon
      className="h-7 w-7 text-[#00FF00] fill-current"
      aria-hidden="true"
    />
  );
}

function AppointmentBefore() {
  return <CalendarIcon className="h-7 w-7 text-[#00FF00]" aria-hidden="true" />;
}

function AppointmentAfter() {
  return (
    <CalendarIcon
      className="h-7 w-7 text-[#00FF00] fill-current"
      aria-hidden="true"
    />
  );
}

function PaymentBefore() {
  return (
    <BanknotesIcon className="h-7 w-7 text-[#00FF00]" aria-hidden="true" />
  );
}

function PaymentAfter() {
  return (
    <BanknotesIcon
      className="h-7 w-7 text-[#00FF00] fill-current"
      aria-hidden="true"
    />
  );
}

export default QuickLinks;

function MobileQuickLinks({ onCloseMenu }) {
  const { isLoggedIn } = useAuth();

  const handleLinkClick = () => {
    if (onCloseMenu) onCloseMenu();
  };

  return (
    <div className="py-6 flex">
      <NavLink
        to={isLoggedIn ? "/profile" : "/login"}
        className="block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]"
        onClick={handleLinkClick}
      >
        <UserIcon
          className="h-7 w-7 text-[#00FF00] hover:fill-[#00FF00]"
          aria-hidden="true"
        />
      </NavLink>
      <NavLink
        to="/schedule"
        className="block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]"
        onClick={handleLinkClick}
      >
        <CalendarIcon
          className="h-7 w-7 text-[#00FF00] hover:fill-[#00FF00]"
          aria-hidden="true"
        />
      </NavLink>
      <NavLink
        to="/payment"
        className="block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]"
        onClick={handleLinkClick}
      >
        <BanknotesIcon
          className="h-7 w-7 text-[#00FF00] hover:fill-[#00FF00]"
          aria-hidden="true"
        />
      </NavLink>
    </div>
  );
}

export { MobileQuickLinks };
