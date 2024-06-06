import { Link } from 'react-router-dom';
export default function List(props) {
    return(
        <ul className="flex justify-evenly">
            {props.socials.map((social) => {
                return (
                    <li key={social.title} className='lg:px-2 px-0.5'>
                        <Link href={social.href}>
                                {social.icon()}
                        </Link>
                    </li> 
                )
            })}
        </ul>
    )
}

