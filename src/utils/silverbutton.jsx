import { Link } from "react-router-dom";

export default function SilverButton({href, text}) {

  return (
    <Link className="silverbg rounded-md p-6 md:px-8 shadow-lg shadow-[#222222] text-white border-b border-[#00ff00] text-base font-Play font-semibold tracking-wide w-full text-left flex" to={href}>
      {text}
    </Link>
  );
}



