import useHover from "../../../hooks/useHover"
function ServiceOfferings() {
  const [PreMainHover, PreMainHoverProps] = useHover()
  const PreMainBeforeHover = PreMainBefore()
  const PreMainAfterHover = PreMainAfter()
  const [DiagnosticsHover, DiagnosticsHoverProps] = useHover()
  const DiagnosticsBeforeHover = DiagnosticsBefore()
  const DiagnosticsAfterHover = DiagnosticsAfter()
  const TiresBeforeHover = TiresBefore()
  const TiresAfterHover = TiresAfter()
  const [TiresHover, TiresHoverProps] = useHover()
  const [AlignmentsHover, AlignmentsHoverProps] = useHover()
  const AlignmentsBeforeHover = AlignmentsBefore()
  const AlignmentsAfterHover = AlignmentsAfter()
  const [BrakesHover, BrakesHoverProps] = useHover()
  const BrakesAfterHover = BrakesAfter()
  const BrakesBeforeHover= BrakesBefore()
  const [SteeringSuspensionHover, SteeringSuspensionHoverProps] = useHover()
  const SteeringAfterHover = SteeringAfter()
  const SteeringBeforeHover = SteeringBefore()
  const [RemoveReplaceHover, RemoveReplaceHoverProps] = useHover()
  const RemoveReplaceBeforeHover = RemoveReplaceBefore()
  const RemoveReplaceAfterHover = RemoveReplaceAfter()
  const [AirHeatHover, AirHeatHoverProps] = useHover()
  const AirHeatBeforeHover = AirHeatBefore()
  const AirHeatAfterHover = AirHeatAfter()
  const [ElectricalHover, ElectricalHoverProps] = useHover()
  const ElectricalBeforeHover = ElectricalBefore()
  const ElectircalAfterHover = ElectricalAfter()
  const [EconomyDieselHover, EconomyDieselHoverProps] = useHover()
  const EconomyDieselBeforeHover = EconomyDieselBefore()
  const EconomyDieselAfterHover = EconomyDieselAfter()
  const [InspectionHover, InspectionHoverProps] = useHover()
  const InspectionBeforeHover = InspectionBefore()
  const InspectionAfterHover = InspectionAfter()
  const [AllHover, AllHoverProps] = useHover()
  const AllBeforeHover = AllBefore()
  const AllAfterHover = AllAfter()

    return(
      <div className="px-2 lg:px-[5%]  bg-[#00ff00] pb-8 relative text-white">
        <section className="bg-[#333333] shadow-xl shadow-black flex flex-col md:px-10  px-2 text-center md:text-left rounded-md">
          <h2 className="relative pt-20 flex text-6xl font-Bungee text-stroke text-stroke-fill-black text-stroke-[#00ff00]">
            We Offer You
          </h2>
          <p className="relative max-w-7xl text-xl text-[#eeeeee] pt-10 pb-4 font-Urbanist tracking-wider">Full service repair & maintenance for most models manufactured after 2000. Just call us for older vehicles or other items with wheels, it isn&apos;t like we can&apos;t work on them... you just have to draw the line somewhere. </p>
        </section>
        <section className="py-10 px-20">
          <div className="md:flex md:px-[12%] sm:px-0">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...PreMainHoverProps} aria-label="Preventative Maintenance">
                {PreMainHover ? PreMainAfterHover : PreMainBeforeHover}
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...DiagnosticsHoverProps} aria-label="Diagnostics">
                {DiagnosticsHover ? DiagnosticsAfterHover : DiagnosticsBeforeHover}
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...TiresHoverProps} aria-label="Tires">
                {TiresHover ? TiresAfterHover : TiresBeforeHover}
              </button>
            </div>
          </div>
          <div className="md:flex justify-center">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...AlignmentsHoverProps} aria-label="Alignments">
                {AlignmentsHover ? AlignmentsAfterHover : AlignmentsBeforeHover}
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...BrakesHoverProps} aria-label='Brakes'>
                {BrakesHover ? BrakesAfterHover : BrakesBeforeHover}
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...SteeringSuspensionHoverProps} aria-label= 'Steering & Suspension'>
                {SteeringSuspensionHover ? SteeringAfterHover : SteeringBeforeHover}
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...RemoveReplaceHoverProps} aria-label="Remove & Replace">
                {RemoveReplaceHover ? RemoveReplaceAfterHover : RemoveReplaceBeforeHover}
              </button>
            </div>
          </div>
          <div className="md:flex md:px-[12%] sm:px-0">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...AirHeatHoverProps} aria-label="Air Conditioning & Heat">
                {AirHeatHover ? AirHeatAfterHover : AirHeatBeforeHover}
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...ElectricalHoverProps} aria-label="Electrical">
                {ElectricalHover ? ElectircalAfterHover : ElectricalBeforeHover}
              </button>
            </div>
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...EconomyDieselHoverProps} aria-label="Economy & Light Duty Diesel">
                {EconomyDieselHover ? EconomyDieselAfterHover : EconomyDieselBeforeHover}
              </button>
            </div>
          </div>
          <div className="md:flex justify-center md:px-[25%]">
            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...InspectionHoverProps} aria-label="Used Vehicle Inspection">
                {InspectionHover ? InspectionAfterHover : InspectionBeforeHover}
              </button>
            </div>

            <div className="flex flex-1 basis-1/4">
              <button className="px-3 sm:my-3 lg:my-0" {...AllHoverProps} aria-label="All Services">
                {AllHover ? AllAfterHover :  AllBeforeHover}
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

function PreMainBefore() {
  return(
    <div className=''>
      <img 
        src="src/assets/images/OilEngine.jpg" 
        alt=""
        aria-hidden="true"
        className= "h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Preventative Maintenance
      </p>
  </div>
  )
}

function PreMainAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/OilEngine.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className=" xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Preventative Maintenance
      </p>
  </div>
  )
}

function DiagnosticsBefore() {
  return(
    <div className="mt-0">
      <img 
        src="src/assets/images/Diagnostics.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Diagnostics<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function DiagnosticsAfter() {
  return(
    <div className="">
      <img 
        src="src/assets/images/Diagnostics.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Diagnostics<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function TiresBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/Tire2.jpeg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Tires<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function TiresAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/Tire2.jpeg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Tires<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function AlignmentsBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/Alignment2.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Alignments<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function AlignmentsAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/Alignment2.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Alignments<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function BrakesBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/Brake3.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Brakes<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function BrakesAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/Brake3.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Brakes<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function SteeringBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/SteeringSuspension.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Steering & Suspension
      </p>
  </div>
  )
}

function SteeringAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/SteeringSuspension.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Steering & Suspension
      </p>
  </div>
  )
}

function RemoveReplaceBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/EngineReplace.jpeg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Remove & Replace
      </p>
  </div>
  )
}

function RemoveReplaceAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/EngineReplace.jpeg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Remove & Replace
      </p>
  </div>
  )
}

function AirHeatBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/HeatingAC.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  A/C & Heating<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function AirHeatAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/HeatingAC.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  A/C & Heating<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function ElectricalBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/Electrical.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Electrical<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function ElectricalAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/Electrical.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Electrical<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function EconomyDieselBefore() {
  return(
    <div>
      <img 
        src="/src/assets/images/EconomyLightDuty.jpg" 
        alt=""
        aria-hidden="true"
        className= "absolute h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Economy & Light Duty Diesel
      </p>
  </div>
  )
}

function EconomyDieselAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/EconomyLightDuty.jpg" 
        alt=""
        aria-hidden="true"
        className= "absolute h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Economy & Light Duty Diesel
      </p>
  </div>
  )
}

function InspectionAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/Inspection.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Used Vehicle Inspections
      </p>
  </div>
  )
}


function InspectionBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/Inspection.jpg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  Used Vehicle Inspections
      </p>
  </div>
  )
}

function AllBefore() {
  return(
    <div>
      <img 
        src="src/assets/images/AllServices.jpeg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[50%] blur-[2px]"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  All Services<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

function AllAfter() {
  return(
    <div>
      <img 
        src="src/assets/images/AllServices.jpeg" 
        alt=""
        aria-hidden="true"
        className= "relative h-[100%] w-[100%] hexagon brightness-[30%] blur-none"
      />
      <p className="lg:w-full xl:text-3xl lg:text-xl md:text-lg sm:text-md z-50 lg:-translate-y-36  md:-translate-y-[4.5rem] -translate-y-16">
                  All Services<br /><span className="invisible">D</span>
      </p>
  </div>
  )
}

export default ServiceOfferings