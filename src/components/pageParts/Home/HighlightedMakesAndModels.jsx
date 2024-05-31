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
      <div className="px-10 lg:max-w-7xl overflow-hidden sm:py-10 lg:py-40 bg-[#333333] lg:flex mx-auto">
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
            <div className="">
              <button {...Pic1HoveringProps} className="mt-8 lg:mt-72 lg:w-[80%]">
                {Pic1Hovering ? Pic1AfterVar : Pic1BeforeVar}
              </button>
              <div className="">
                <button {...Pic2HoveringProps} className="">
                  {Pic2Hovering ? Pic2AfterVar : Pic2BeforeVar}
                </button>
                <button {...Pic3HoveringProps} className="">
                  {Pic3Hovering ? Pic3AfterVar : Pic3BeforeVar}
                </button>
                <button {...Pic4HoveringProps}  className="">
                  {Pic4Hovering ? Pic4AfterVar : Pic4BeforeVar}
                </button>
              </div>
            </div>
          </div>
    )
  }  

function Pic1Before() {
  
  return(
    <div>
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[7/5] hexagon"
      />
      <p className="-translate-y-56 text-2xl font-urbanist text-transparent">
        \s
      </p>
      <button className="text-transparent -translate-y-48 p-2">Give me some credit. Still Learning 
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
        alt=""
        className="aspect-[7/5] hexagon brightness-50"
      />
      <p className="-translate-y-56 text-2xl font-urbanist ">
        Vehicles with XYZ Engine
      </p>
      <button {...Button1HoveringProps} className="-translate-y-48">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
    </div>
  )
}

function Pic2Before() {
  return(
    <div>
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[7/5] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon "
      />
      <p className="-translate-y-56 text-2xl font-urbanist text-transparent">
      Vehicles with XYZ Engine
      </p>
      <button className="text-transparent -translate-y-48 p-2">call to schedule now 
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
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[7/5] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon brightness-50"
      />
      <p className="-translate-y-56 text-2xl font-urbanist">
        Vehicles with XYZ Engine
      </p>
      <button {...Button1HoveringProps} className="-translate-y-48">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
    </div>
  )
}


function Pic3Before() {
  return(
    <div>
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon "
      />
      <p className="-translate-y-56 text-2xl text-transparent font-urbanist">
      Vehicles with XYZ Engine
      </p>
      <button className="text-transparent -translate-y-48 p-2">call to schedule now 
      </button>
    </div>
  )
}

function Pic3After() {
  const [Button1Hovering, Button1HoveringProps] = useHover();
  const ButtonBeforeVar = ButtonBefore();
  const ButtonAfterVar = ButtonAfter();
  return(
    <div className="text-white">
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon brightness-50"
      />
      <p className="-translate-y-56 text-2xl  font-urbanist">
        Vehicles with XYZ Engine
      </p>
      <button {...Button1HoveringProps} className="-translate-y-48">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
    </div>
  )
}


function Pic4Before() {
  return(
    <div>
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[7/5] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon "
      />
      <p className="-translate-y-56 text-2xl text-transparent font-urbanist">
      Vehicles with XYZ Engine
      </p>
      <button className="text-transparent -translate-y-48 p-2">call to schedule now 
      </button>
    </div>
  )
}

function Pic4After() {
  const [Button1Hovering, Button1HoveringProps] = useHover();
  const ButtonBeforeVar = ButtonBefore();
  const ButtonAfterVar = ButtonAfter();
  return(
    <div className="text-white">
      <img src="src/assets/images/Jeep.jpg"
        alt=""
        className="aspect-[7/5] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon brightness-50"
      />
      <p className="-translate-y-56 text-2xl  font-urbanist">
        Vehicles with XYZ Engine
      </p>
      <button {...Button1HoveringProps} className="-translate-y-48">{Button1Hovering ? ButtonAfterVar : ButtonBeforeVar }</button>
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