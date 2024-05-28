import SilverButton from "../../../utils/silverbutton";
import { ServiceCarousel } from "../shared/Carousel";

const services = [
    {
      ServiceName: "PREVENTATIVE MAINTENANCE",
      href: '#',
    },
    {
      ServiceName: "DIAGNOSTICS",
      href: '#',
    },
    {
      ServiceName: "TIRES",
      href: '#',
    },
    {
      ServiceName: "ALIGNMENTS",
      href: '#',
    },
    {
      ServiceName: "BRAKES",
      href: '#',
    },
    {
      ServiceName: "STEERING & SUSPENSION",
      href: '#',
    },
    {
      ServiceName: "REMOVE & REPLACE",
      href: '#',
    },
    {
      ServiceName: "A/C & HEATING",
      href: '#',
    },
    {
      ServiceName: "ELECTRICAL",
      href: '#',
    },
    {
      ServiceName: "ECONOMY & LIGHT DUTY DIESEL",
      href: '#',
    },
    {
      ServiceName: "USED CAR INSPECTIONS",
      href: '#',
    },
    {
      ServiceName: "ALL SERVICES",
      href: '#',
    },
  ];

function ServiceOfferings() {
    return(
      <div className="sm:px-8 lg:px-[20%]  bg-[#00ff00] py-40 relative">
        <section className="bg-[#777777] rounded-[5%] shadow-xl shadow-black flex flex-col px-20  text-white">
          <h2 className="relative pt-20 flex text-6xl font-Bungee text-stroke text-stroke-fill-black text-stroke-[#00ff00]">
            We Offer You
          </h2>
          <p className="relative max-w-3xl text-xl text-[#eeeeee] pt-10 pb-10 font-Urbanist tracking-wider">Full service repair & maintenance for most models manufactured after 2000. Just call us for older vehicles or other items with wheels, it isn&apos;t like we can&apos;t work on them... you just have to draw the line somewhere. </p>
          <div className="flex">
            <div>
              <div className="grid grid-cols-3 gap-y-8 gap-x-8 pr-10 pb-20">
                {services.map((ServiceName) => (
                  <SilverButton className='text-base font-Play font-normal tracking-wide text-white ' key={ServiceName.ServiceName} href={ServiceName.href} text={ServiceName.ServiceName}>
                  </SilverButton>
                ))}
              </div>
            </div>
            <div className="w-[50%] pl-10">
              <ServiceCarousel />
            </div>
          </div>
        </section>
      </div>
    )
  }
export default ServiceOfferings