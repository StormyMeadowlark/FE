import SilverButton from "../../../utils/silverbutton";
import { ServiceCarousel } from "../shared/Carousel";
import useHover from "../../../hooks/useHover";


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
  const [PreventativeMaintenanceHovering, PreventativeMaintenanceHoveringProps] = useHover()
  const [DiagnoticsHovering, DiagnosticsHoveringProps] = useHover() 
  const [TiresHovering, TiresHoveringProps] = useHover() 
  const [AlignmentHovering, AlignmentsHoveringProps] = useHover()
  const [BrakesHovering, BrakesHoveringProps] = useHover() 
  const [SteeringSuspensionHovering, SteeringSuspensionHoveringProps] = useHover()  
  const [RemoveReplaceHovering, RemoveReplaceHoveringProps] = useHover()  
  const [AcHeatingHovering, AcHeatingHoveringProps] = useHover()
  const [ElectricalHovering, ElectricalHoveringProps] = useHover()
  const [EconomyLightDutyHovering, EconomyLightDutyHoveringProps] = useHover()
  const [UsedCarInspectionHovering, UsedCarInspectionHoveringProps] = useHover() 
  const [AllServicesHovering, AllServicesHoveringProps] = useHover() 
    return(
      <div className="sm:px-8 lg:px-[20%]  bg-[#00ff00] py-40 relative">
        <section className="bg-[#777777] rounded-[5%] shadow-xl shadow-black flex flex-col px-20  text-white">
          <h2 className="relative pt-20 flex text-6xl font-Bungee text-stroke text-stroke-fill-black text-stroke-[#00ff00]">
            We Offer You
          </h2>
          <p className="relative max-w-3xl text-xl text-[#eeeeee] pt-10 pb-10 font-Urbanist tracking-wider">Full service repair & maintenance for most models manufactured after 2000. Just call us for older vehicles or other items with wheels, it isn&apos;t like we can&apos;t work on them... you just have to draw the line somewhere. </p>
          <div className="md:flex lg:px-[12%] sm:px-0">
            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...PreventativeMaintenanceHoveringProps}className="px-3 sm:my-3 lg:my-0">
                <img 
                src="src/assets/images/OilEngine.jpg" 
                alt=""
                aria-hidden="true"
                className= "h-[100%] w-[100%] brightness-50 hover:brightness-100 transition linear"
                />
                <div className="absolute lg:w-full lg:max-text-3xl sm:text-md md:text-xl top-1/4 z-50">
                  {PreventativeMaintenanceHovering ? " " : "Preventative Maintenance"}
                </div>
              </button>
            </div>



            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...DiagnosticsHoveringProps} className="px-3 sm:my-3 lg:my-0 hexagon">
                <img
                  src="src/assets/images/Diagnostics.jpg"
                  alt=""
                  aria-hidden="true"
                  className= "h-[100%] w-[100%]"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {DiagnoticsHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>


            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...TiresHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  src="src/assets/images/Tire2.jpeg"
                  alt=""
                  aria-hidden="true"
                  className= "h-[100%] w-[100%]"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {TiresHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
              
            </div>
          </div>
          <div className="md:flex justify-center">
            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...AlignmentsHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  src="src/assets/images/Alignment2.jpg"
                  alt=""
                  aria-hidden="true"
                  className= "h-[100%] w-[100%]"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {AlignmentHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>


            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...BrakesHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  src="src/assets/images/Brake3.jpg"
                  alt=""
                  aria-hidden="true"
                  className= "h-[100%] w-[100%]"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {BrakesHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>


            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...SteeringSuspensionHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  className= "h-[100%] w-[100%]"
                  src="src/assets/images/SteeringSuspension.jpg"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {SteeringSuspensionHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>


            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...RemoveReplaceHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  className= "h-[100%] w-[100%]"
                  src="src/assets/images/EngineReplace.jpeg"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {RemoveReplaceHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>
          </div>


          <div className="md:flex lg:px-[12%] sm:px-0">
            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...AcHeatingHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  className= "h-[100%] w-[100%]"
                  src="src/assets/images/HeatingAC.jpg"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {AcHeatingHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>


            <div className="flex flex-1 basis-1/4 hexagon">
            <button {...ElectricalHoveringProps} className="px-3 sm:my-3 lg:my-0">
              <img
                className= "h-[100%] w-[100%]"
                src="src/assets/images/Electrical.jpg"
                alt=""
                aria-hidden="true"
              />
              <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                {ElectricalHovering ? "Terms and Conditions" : "online offer 1"}
              </div>
            </button>
            </div>


            <div className="flex flex-1 basis-1/4 hexagon">
            <button {...EconomyLightDutyHoveringProps} className="px-3 sm:my-3 lg:my-0">
              <img
                className= "h-[100%] w-[100%]"
                src="src/assets/images/EconomyLightDuty.jpg"
                alt=""
                aria-hidden="true"
              />
              <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                {EconomyLightDutyHovering ? "Terms and Conditions" : "online offer 1"}
              </div>
            </button>
            </div>
          </div>





          <div className="md:flex justify-center lg:px-[25%] sm:px-0">
            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...UsedCarInspectionHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  className= "h-[100%] w-[100%]"
                  src="src/assets/images/Inspection.jpg"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {UsedCarInspectionHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>

            <div className="flex flex-1 basis-1/4 hexagon">
              <button {...AllServicesHoveringProps} className="px-3 sm:my-3 lg:my-0">
                <img
                  className= "h-[100%] w-[100%]"
                  src="src/assets/images/AllServices.jpeg"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute w-full text-3xl text-center inset-y-1/2 z-50">
                  {AllServicesHovering ? "Terms and Conditions" : "online offer 1"}
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
export default ServiceOfferings