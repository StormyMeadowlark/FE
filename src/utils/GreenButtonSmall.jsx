export default function GreenButtonSmall({href, text}) {
    return(
        <button 
        href={href}
        className="rounded-sm bg-[#00ff00] px-3.5 py-2.5 text-base font-semibold text-[#333333] hover:text-white shadow-lg shadow-black hover:bg-[#00cc00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-[98%] focus-visible:bg-[#00dd00] font-Play">
            {text}
        </button>
    )
}