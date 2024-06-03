export default function List(props) {
    return(
        <ul className="flex justify-evenly">
            {props.socials.map((social) => {
                return (
                    <li key={social.title} className='px-2'>
                        <a href={social.href}>
                                {social.icon()}
                        </a>
                    </li> 
                )
            })}
        </ul>
    )
}

