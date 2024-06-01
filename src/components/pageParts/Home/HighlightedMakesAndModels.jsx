import useHover from "../../../hooks/useHover";

export default function HighlightedMakesAndModels() {
  const[Pic1Hovering, Pic1HoveringProps] = useHover();
  const[Pic2Hovering, Pic2HoveringProps] = useHover();
  const[Pic3Hovering, Pic3HoveringProps] = useHover();
  const[Pic4Hovering, Pic4HoveringProps] = useHover(); 
  const Pic1BeforeVar = Pic1Before();
  const Pic1AfterVar = Pic1After();
  const Pic2BeforeVar = Pic2Before();
  const Pic2AfterVar = Pic2After();
  const Pic3BeforeVar = Pic3Before();
  const Pic3AfterVar = Pic3After();
  const Pic4BeforeVar = Pic4Before();
  const Pic4AfterVar = Pic4After();
  return (
    <div>
      <div className="px-10 lg:max-w-7xl overflow-hidden sm:pt-10 lg:pt-40 bg-[#333333] lg:flex mx-auto">
            <div className="flex flex-col">
              <h2 className="text-3xl py-10 text-stroke text-stroke-black text-stroke-fill-[#00ff00] lg:text-7xl uppercase font-Bungee">Highlighted Makes & Models</h2>
              <p className="font-Urbanist tracking-wide font-medium text-xl  text-white">
                Although we do service almost every make & model manufactured after 2000, we do see certain vehicles in the shop more frequently.
              </p>
              <p className="mt-6 text-[#cccccc] font-Urbanist tracking-wide">
                Here to keep you on the road. Hover over the images to see what commonly brings these vehicles to the shop!
              </p>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="inline-flex rounded-sm bg-[#00ff00] px-3.5 py-2.5 text-lg font-semibold text-[#333333] shadow-lg hover:bg-[#00cc00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#00dd00] font-Play shadow-black hover:text-white hover:scale-[98%]"
                >
                  View All Makes
                </a>
              </div>
            </div>
              <button {...Pic1HoveringProps} aria-label='Learn more about what commonly brings Jeep Grand Cherokees & similar vehicles into the shop' className="mt-8 lg:px-10">
                {Pic1Hovering ? Pic1AfterVar : Pic1BeforeVar}
              </button>
          </div>
          <div className="lg:flex max-w-7xl mx-auto -mt-20 lg:mt-0">
          <button {...Pic2HoveringProps} aria-label='Learn more about what commonly brings Dodge 2500 & similar vehicles into the shop' className="lg:top-4 lg:translate-x-16 px-10 lg:w-[350rem]">
            {Pic2Hovering ? Pic2AfterVar : Pic2BeforeVar}
          </button>
          <button {...Pic3HoveringProps} aria-label='' className="lg:-translate-y-1/4 px-10 ">
            {Pic3Hovering ? Pic3AfterVar : Pic3BeforeVar}
          </button>
          <button {...Pic4HoveringProps} aria-label='' className="px-10 lg:-translate-y-14">
            {Pic4Hovering ? Pic4AfterVar : Pic4BeforeVar}
          </button>
        </div>
        </div>
    )
  }  

function Pic1Before() {
  
  return(
    <div>
      <img src="src/assets/images/Jeep.jpg"
        alt="Image of Jeep Grand Cherokee driving down a fall city road"
        className="aspect-[6/5]  hexagon"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent" aria-hidden='true'>
        2010 - present<br />Chrysler 3.6L PentaStar Engine<br />Oil Filter Housing
      </p>
      <button className="text-transparent -translate-y-40 text-sm md:text-xl md:-translate-y-52" aria-hidden='true'>Still Learning 
      </button>
    </div>
  )
}

function Pic1After() {
  const [Button1Hovering, Button1HoveringProps] = useHover();
  const ButtonBeforeVar = ButtonBefore();
  const ButtonAfterVar = ButtonAfter();
  return(
    <div className="text-white">
      <img src="src/assets/images/Jeep.jpg"
        className="aspect-[6/5] hexagon brightness-50"
        aria-hidden='true'
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist ">
        2010 - present<br />3.6L PentaStar Engine<br />Oil filter housing
      </p>
      <button {...Button1HoveringProps} className="-translate-y-40 text-sm md:text-xl md:-translate-y-52 " aria-label="Click here to Call Now">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
    </div>
  )
}

function Pic2Before() {
  return(
    <div className="">
      <img src="src/assets/images/Truck.jpg"
        aria-hidden='true'
        className="aspect-[6/5] hexagon "
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-[13.75rem] font-urbanist text-transparent" aria-hidden='true'>
      Vehicles with XYZ Engine
      </p>
      <button className="text-transparent -translate-y-40 text-sm md:text-xl md:-translate-y-[13.5rem]" aria-hidden='true'>call to schedule now 
      </button>
    </div>
  )
}

function Pic2After() {
  const [Button1Hovering, Button1HoveringProps] = useHover();
  const ButtonBeforeVar = ButtonBefore();
  const ButtonAfterVar = ButtonAfter();
  return(
    <div className="text-white">
      <img src="src/assets/images/Truck.jpg"
        aria-hidden='true'
        className="aspect-[6/5] hexagon brightness-50"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-[13.75rem] font-urbanist ">
        Years<br />Chrysler 5.7L V8 Hemi<br />Camshaft, lifter, valves, MDS delete
      </p>
      <button {...Button1HoveringProps} className="-translate-y-40 text-sm md:text-xl md:-translate-y-[13.5rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#00dd00]" aria-label="Click Here to Call Now">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
    </div>
  )
}


function Pic3Before() {
  return(
    <div className="lg:translate-x-5 lg:-translate-y-8">
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[6/5] hexagon "
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent">
      Vehicles with XYZ Engine
      </p>
      <button className="text-transparent -translate-y-40 text-sm md:text-xl md:-translate-y-52">call to schedule now 
      </button>
    </div>
  )
}

function Pic3After() {
  const [Button1Hovering, Button1HoveringProps] = useHover();
  const ButtonBeforeVar = ButtonBefore();
  const ButtonAfterVar = ButtonAfter();
  return(
    <div className="text-white lg:translate-x-5 lg:-translate-y-8">
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[6/5] hexagon brightness-50"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist ">
        Vehicles with XYZ Engine
      </p>
      <button {...Button1HoveringProps} className="-translate-y-40 text-sm md:text-xl md:-translate-y-52">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
    </div>
  )
}


function Pic4Before() {
  return(
    <div className="lg:-translate-y-4">
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[6/5] hexagon "
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent">
      Vehicles with XYZ Engine
      </p>
      <button className="text-transparent -translate-y-40 text-sm md:text-xl md:-translate-y-52">call to schedule now 
      </button>
    </div>
  )
}

function Pic4After() {
  const [Button1Hovering, Button1HoveringProps] = useHover();
  const ButtonBeforeVar = ButtonBefore();
  const ButtonAfterVar = ButtonAfter();
  return(
    <div className="text-white lg:-translate-y-4">
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[6/5] hexagon brightness-50"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist ">
        Vehicles with XYZ Engine
      </p>
      <button {...Button1HoveringProps} className="-translate-y-40 text-sm md:text-xl md:-translate-y-52">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
    </div>
  )
}
  
function ButtonBefore() {
  return(
    <div className="silverbg p-2 rounded-sm shadow-inner shadow-black border-b border-[#00ff00]">
      Call to Schedule Now
    </div>
  )
}
function ButtonAfter() {
  return(
    <div className="silverbg45 p-2 rounded-sm shadow-inner shadow-black text-[#00ff00] border-b border-transparent">
      Call to Schedule Now
    </div>
  )
}