import ImageButtonOne from "../../../utils/imageButton1"
export default function ListServices(props) {
    return(
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 md:-translate-y-28 -translate-y-28 text-white">
            {props.services.map((service) => {
                
                return (
                    <ul key={service.index} className="text-center justify-items-center">
                    <li  className='flex flex-1 justify-center'>
                        <ImageButtonOne href={service.href} icon={service.icon} title={service.title} />
                    </li> 
                    </ul>
                )
            })}
        </div>
    )
}