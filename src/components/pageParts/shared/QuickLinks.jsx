import { NavLink } from "react-router-dom";
import useHover from "../../../hooks/useHover";
import {
  UserIcon,
  CalendarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../../context/AuthContext"; // Assuming you have an AuthContext for managing auth state

function QuickLinks() {
  const [UserHovering, UserHoveringProps] = useHover();
  const [AppointmentHovering, AppointmentHoveringProps] = useHover();
  const [PaymentHovering, PaymentHoveringProps] = useHover();

  const { isLoggedIn } = useAuth(); // Check if the user is logged in

  const UserBeforeHover = UserBefore();
  const AppointmentBeforeHover = AppointmentBefore();
  const PaymentBeforeHover = PaymentBefore();
  const UserAfterHover = UserAfter();
  const AppointmentAfterHover = AppointmentAfter();
  const PaymentAfterHover = PaymentAfter();

  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-center">
      <NavLink
        {...UserHoveringProps}
        to={isLoggedIn ? "/profile" : "/login"} // Redirect to profile if logged in
        className="p-2 focus-visible:outline-none"
      >
        <span className="sr-only">
          {isLoggedIn ? "Go to Profile" : "Log-In or Create Account"}
        </span>
        {UserHovering ? UserAfterHover : UserBeforeHover}
      </NavLink>
      <NavLink
        {...AppointmentHoveringProps}
        to="/schedule"
        className="p-2 focus:outline focus-visible:outline-none"
      >
        <span className="sr-only">Schedule an Appointment</span>
        {AppointmentHovering ? AppointmentAfterHover : AppointmentBeforeHover}
      </NavLink>
      <NavLink
        {...PaymentHoveringProps}
        to="/payment"
        className="p-2 focus-visible:outline-none"
      >
        <span className="sr-only">Online Payments</span>
        {PaymentHovering ? PaymentAfterHover : PaymentBeforeHover}
      </NavLink>
    </div>
  );
}

function UserBefore() {
  return (
    <UserIcon
      className="h-7 w-7"
      aria-hidden="true"
      stroke="#00FF00"
      fill="transparent"
    />
  );
}

function UserAfter() {
  return (
    <UserIcon
      className="h-7 w-7"
      aria-hidden="true"
      stroke="#00FF00"
      fill="#00FF00"
    />
  );
}

function AppointmentBefore() {
  return (
    <CalendarIcon
      className="h-7 w-7"
      aria-hidden="true"
      stroke="#00FF00"
      fill="transparent"
    />
  );
}

function AppointmentAfter() {
  return (
    <CalendarIcon
      className="h-7 w-7"
      aria-hidden="true"
      stroke="#00FF00"
      fill="#00FF00"
    />
  );
}

function PaymentBefore() {
  return (
    <BanknotesIcon
      className="h-7 w-7"
      aria-hidden="true"
      stroke="#00FF00"
      fill="transparent"
    />
  );
}

function PaymentAfter() {
  return (
    <BanknotesIcon
      className="h-7 w-7"
      aria-hidden="true"
      stroke="#00FF00"
      fill="#00FF00"
    />
  );
}

export default QuickLinks;

function MobileQuickLinks({ onCloseMenu }) {
  const { isLoggedIn } = useAuth(); // Check if the user is logged in

  const handleLinkClick = () => {
    if (onCloseMenu) onCloseMenu(); // Close the menu after link click
  };

  return (
    <div className="py-6 flex">
      <NavLink
        to={isLoggedIn ? "/profile" : "/login"} // Redirect to profile if logged in
        className="block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]"
        onClick={handleLinkClick}
      >
        <span className="sr-only">Log-in or create account</span>
        <UserIcon
          className="h-7 w-7 hover:fill-[#00FF00]"
          aria-hidden="true"
          stroke="#00FF00"
          fill={isLoggedIn ? "#00FF00" : "transparent"}
        />
      </NavLink>
      <NavLink
        to="/schedule"
        className="block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]"
        onClick={handleLinkClick} // Close menu on click
      >
        <span className="sr-only">Schedule an online appointment</span>
        <CalendarIcon
          className="h-7 w-7 hover:fill-[#00FF00]"
          aria-hidden="true"
          stroke="#00FF00"
        />
      </NavLink>
      <NavLink
        to="/payment"
        className="block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]"
        onClick={handleLinkClick} // Close menu on click
      >
        <span className="sr-only">Online payments</span>
        <BanknotesIcon
          className="h-7 w-7 hover:fill-[#00FF00]"
          aria-hidden="true"
          stroke="#00FF00"
        />
      </NavLink>
    </div>
  );
}

export { MobileQuickLinks };