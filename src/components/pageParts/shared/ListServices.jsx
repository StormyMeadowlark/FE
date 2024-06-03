export default function ListServices(props) {
    return(
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 md:-translate-y-28 -translate-y-28 text-white">
            {props.services.map((service) => {
                
                return (
                    <ul key={service.index} className="text-center justify-items-center">
                    <li  className='flex flex-1 justify-center'>
                        <button href={service.href}>
                            <img  
                                src={service.icon}
                                alt=""
                                aria-hidden="true"
                                className= "hexagon brightness-[50%] blur-[2px] object-fill px-3 top-4"
                            />
                                <div className="px-4 lg:mx-auto xl:text-2xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-24  md:-translate-y-[4.5rem] -translate-y-16">
                                    {service.title}
                                </div>
                        </button>
                    </li> 
                    </ul>
                )
            })}
        </div>
    )
}