import ImageButtonOne from "../../../utils/imageButton1"
export default function ListServices(props) {
    return(
<div className="grid grid-cols-3 lg:grid-cols-4 pt-8 -translate-y-28 text-white md:px-8">
            {props.services.map((service) => {
                
                return (
                    <ul key={service.index} className="text-center justify-items-center lg:-mb-16 -mb-12 ">
                    <li  className='flex flex-1 justify-center'>
                        <ImageButtonOne href={service.href} icon={service.icon} title={service.title} />
                    </li> 
                    </ul>
                )
            })}
        </div>
    )
}