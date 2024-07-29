import { Link } from 'react-router-dom';
export default function List(props) {
    return(
        <ul className="flex justify-evenly">
            {props.socials.map((social) => {
                return (
                  <li key={social.title} className="w-14 ml-4">
                    <Link to={social.href} className=''>
                      <img src={social.src} className="w-14 h-14" />
                    </Link>
                  </li>
                );
            })}
        </ul>
    )
}

