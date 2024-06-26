 import SilverButton from "../../../utils/silverbutton"
export default function ListCustomerCategories(props) {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 -translate-y-24 lg:-translate-y-36 gap-y-10">
        {props.supportLinks.map((link) => (
          <div key={link.name} className=''>
          <div>
            <img   
              src={link.image} 
              alt=""
              aria-hidden="true"
              className='brightness-[30%] rounded-md object-cover' 
            />
            <div className="-translate-y-full lg:-mb-56 -mb-40">
              <div className="px-6 md:px-8">
                <h3 className="text-2xl font-Urbanist font-medium tracking-wider text-white">{link.name}</h3>
                <p className="mt-2 text-lg text-[#cccccc] font-Urbanist tracking-wide">{link.description}</p>
              </div>
              <div className="">
                <SilverButton href={`experience/${link.href}`} text={link.experience} />
              </div>
              </div>
            </div>
            </div>
          ))}
      </div>
    )
}