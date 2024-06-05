import { Link } from "react-router-dom";

export default function GreenButtonSmall({href, text}) {
    return(
        <Link 
        to={href}
        className="rounded-sm bg-[#00ff00] px-3.5 py-2.5 text-base font-semibold text-[#333333] shadow-lg shadow-black font-Play">
            {text}
        </Link>
    )
}