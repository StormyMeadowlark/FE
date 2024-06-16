import { Link } from "react-router-dom";

export default function ImageLinkOne({href, icon, title}) {
    return(
        <Link to={`services/${href}`}>
            <img  
                src={icon}
                alt=""
                aria-hidden="true"
                className= "hexagon brightness-[50%] blur-[2px] object-fill px-3 top-4 aspect-[6/5]"
            />
                <div className="px-4 lg:mx-auto md:text-4xl  text-xl z-50 lg:-translate-y-30  md:-translate-y-40 -translate-y-20">
                    {title}
                </div>
        </Link>
    )
}