import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <ul className="flex flex-wrap justify-evenly md:justify-center">
      {props.socials.map((social) => {
        return (
          <li key={social.title} className="w-12 h-12 md:w-14 md:h-14 ml-4 my-4">
            <Link to={social.href} className="">
              <img
                src={social.src}
                alt={social.alt} // Don't forget to add the alt text for accessibility
                className="w-full h-full transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00ff00] group-hover:brightness-125"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
