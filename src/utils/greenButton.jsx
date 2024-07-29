import { Link } from "react-router-dom";

export default function GreenButton({href, textarea}) {
    return (
      <Link
        to={href}
        className="rounded-sm bg-[#00ff00] px-3.5 py-2.5 text-lg lg:text-2xl font-semibold text-[#333333] shadow-lg shadow-black font-Play transition-transform transform hover:scale-105"
      >
        {textarea}
      </Link>
    );
}