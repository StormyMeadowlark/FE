import { Link } from "react-router-dom";

export default function ImageLinkOne({href, icon, title}) {
    return (
      <div className="">
        <Link to={`services/${href}`}>
          <div className="flex flex-col my-2">
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="hexagon aspect-[6/5] brightness-[50%] blur-[2px] object-fill md:h-45 md:w-45 self-center"
            />
            <div className="px-3 lg:px-0 z-50 md:-translate-y-[8rem] -translate-y-20 text-center  font-bold">
              {title}
            </div>
          </div>
        </Link>
      </div>
    );
}