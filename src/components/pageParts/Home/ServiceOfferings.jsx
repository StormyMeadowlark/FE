import useHover from '/src/hooks/useHover.jsx'
const Services = [
  {
    index: 1,
    title: 'Preventative Maintenance',
    src: 'OilEngine.jpg',
    href: '#',
  },
  {
    index: 2,
    title: 'Diagnostics',
    src: 'Diagnostics.jpg',
    href: '#',
  },
  {
    index: 3,
    title: 'Wheels & Tires',
    src: 'Tire2.jpeg',
    href: '#',
  },
  {
    index: 4,
    title: 'Alignments',
    src: 'Alignment2.jpg',
    href: '#',
  },
  {
    index: 5,
    title: 'Brakes',
    src: 'Brake3.jpg',
    href: '#',
  },
  {
    index: 6,
    title: 'Steering & Suspension',
    src: 'SteeringSuspension.jpg',
    href: '#',
  },
  {
    index: 7,
    title: 'Remove & Replace',
    src: 'EngineReplace.jpeg',
    href: '#',
  },
  {
    index: 8,
    title: 'A/C & Heating',
    src: 'HeatingAC.jpg',
    href: '#',
  },
  {
    index: 9,
    title: 'Electrical',
    src: 'Electrical.jpg',
    href: '#',
  },
  {
    index: 10,
    title: 'Economy & Light Duty Diesel',
    src: 'EconomyLightDuty.jpg',
    href: '#',
  },
  {
    index: 11,
    title: 'Used Vehicle Inspection',
    src: 'Inspection.jpg',
    href: '#',
  },
  {
    index: 12,
    title: 'All Services',
    src: 'AllServices.jpeg',
    href: '#',
  },
]

const BeforeHover = "relative h-[100%] w-[100%] hexagon brightness-[50%] transition linear blur-[2px]"
function beforeHover(service) {
  return(
      <button key={service.index} href={service.href} className="px-3 sm:my-3 lg:my-0">
        <img 
          src={getServiceSrc()}
          alt=" "
          aria-hidden="true"
          className= "relative h-[100%] w-[100%] hexagon brightness-[50%] transition linear blur-[2px]"
        />
        {service.title}
      </button>
  )
}

function getServiceSrc(service) {
  return(
    "src/assets/images/" +
    service.src
  )
}


function afterHover(service) {
  return(
    <div>
      <button key={service.index} href={service.href} className="px-3 sm:my-3 lg:my-0">
        <img 
          src={getServiceSrc(service)}
          alt=" "
          aria-hidden="true"
          className= "relative h-[100%] w-[100%] hexagon brightness-[30%] transition linear blur-none"
        />
        {service.title}
      </button>
    </div>
  )
}

function ServiceOfferings() {
    return(
      <div className="px-2 lg:px-[20%]  bg-[#00ff00] py-40 relative text-white">
        <section className="bg-[#333333] shadow-xl shadow-black flex flex-col md:px-10 lg:px-20 px-2 text-center md:text-left rounded-md">
          <h2 className="relative pt-20 flex text-6xl font-Bungee text-stroke text-stroke-fill-black text-stroke-[#00ff00]">
            We Offer You
          </h2>
          <p className="relative max-w-3xl text-xl text-[#eeeeee] pt-10 pb-4 font-Urbanist tracking-wider">Full service repair & maintenance for most models manufactured after 2000. Just call us for older vehicles or other items with wheels, it isn&apos;t like we can&apos;t work on them... you just have to draw the line somewhere. </p>
        </section>
        <section className="py-10 px-20">
          <div className="md:flex md:px-[12%] sm:px-0">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/OilEngine.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Preventative Maintenance
                </p>
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/Diagnostics.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Diagnostics
                </p>
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/Tire2.jpeg" 
                alt=""
                aria-hidden="true"
                className= "h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Tires
                </p>
              </button>
            </div>
          </div>
          <div className="md:flex justify-center">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/Alignment2.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Alignments
                </p>
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/Brake3.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Brakes  
                </p>
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/SteeringSuspension.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Steering & Suspension
                </p>
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/EngineReplace.jpeg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Remove & Replace
                </p>
              </button>
            </div>
          </div>
          <div className="md:flex md:px-[12%] sm:px-0">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/HeatingAC.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  A/C & Heating
                </p>
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/Electrical.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Electrical
                </p>
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/EconomyLightDuty.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36"> 
                  Economy & Light Duty Diesel
                </p>
              </button>
            </div>
          </div>
          <div className="md:flex justify-center md:px-[25%]">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0 ">
                <img 
                src="src/assets/images/Inspection.jpg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  Used Vehicle Inspection
                </p>
              </button>
            </div>

            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/AllServices.jpeg" 
                alt=""
                aria-hidden="true"
                className= "relative h-[100%] w-[100%] hexagon brightness-[50%] hover:brightness-[30%] transition linear blur-[2px] hover:blur-none"
                />
                <p className="flex justify-center xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 -translate-y-36">
                  All Services
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
export default ServiceOfferings