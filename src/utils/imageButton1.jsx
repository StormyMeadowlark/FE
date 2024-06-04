export default function ImageButtonOne({href, icon, title}) {
    return(
        <button href={href}>
            <img  
                src={icon}
                alt=""
                aria-hidden="true"
                className= "hexagon brightness-[50%] blur-[2px] object-fill px-3 top-4"
            />
                <div className="px-4 lg:mx-auto xl:text-2xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-24  md:-translate-y-[4.5rem] -translate-y-16">
                    {title}
                </div>
        </button>
    )
}