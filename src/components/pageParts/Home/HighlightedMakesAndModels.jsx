import useHover from "../../../hooks/useHover";
import GreenButtonSmall from "../../../utils/GreenButtonSmall";
import Jeep from "/src/assets/images/Jeep.jpg?react";
import Truck from "/src/assets/images/Truck.jpg?react";
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
  const title = 'Highlighted Makes & Model'
  const subtitle = 'Although we do service almost every make & model manufactured after 2000, we do see certain vehicles in the shop more frequently.'
  const subsubtitle = 'Here to keep you on the road. Hover over the images to see what commonly brings these vehicles to the shop!'
  return (
    <div>
      <div className="px-10 lg:max-w-7xl overflow-hidden sm:pt-10 lg:pt-8 bg-[#333333] lg:flex mx-auto">
            <div className="flex flex-col flex-1 basis-1/2">
              <h2 className="text-3xl py-4 text-stroke text-stroke-black text-stroke-fill-[#00ff00] lg:text-5xl uppercase font-Bungee">{title}</h2>
              <p className="font-Urbanist tracking-wide font-medium text-xl  text-white">{subtitle}
              </p>
              <p className="mt-6 text-[#cccccc] font-Urbanist tracking-wide">
                {subsubtitle}
              </p>
              <div className="pt-4">
                <GreenButtonSmall href={'makes'} text={'View All Makes'}  />
              </div>
            </div>
              <div {...Pic1HoveringProps} aria-label='Learn more about what commonly brings Jeep Grand Cherokees & similar vehicles into the shop' className="mt-8 lg:px-10 lg:flex lg:basis-1/2">
                {Pic1Hovering ? Pic1AfterVar : Pic1BeforeVar}
              </div>
          </div>
          <div className="lg:flex max-w-7xl mx-auto -mt-20 lg:mt-0">
          <div {...Pic2HoveringProps} aria-label='Learn more about what commonly brings Dodge 2500 & similar vehicles into the shop' className="lg:top-4 lg:translate-x-16 px-10 lg:w-[350rem]">
            {Pic2Hovering ? Pic2AfterVar : Pic2BeforeVar}
          </div>
          <div {...Pic3HoveringProps} aria-label='' className="lg:-translate-y-1/4 px-10 ">
            {Pic3Hovering ? Pic3AfterVar : Pic3BeforeVar}
          </div>
          <div {...Pic4HoveringProps} aria-label='' className="px-10 lg:-translate-y-14">
            {Pic4Hovering ? Pic4AfterVar : Pic4BeforeVar}
          </div>
        </div>
        </div>
    )
  }  

function Pic1Before() {
  
  return(
    <div>
      <img src={Jeep}
        alt="Image of Jeep Grand Cherokee driving down a fall city road"
        className="aspect-[6/5]  hexagon"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent" aria-hidden='true'>
        2010 - present<br />Chrysler 3.6L PentaStar Engine<br />Oil Filter Housing
      </p>
      <div className="text-transparent -translate-y-40 text-sm md:text-xl md:-translate-y-52" aria-hidden='true'>Still Learning 
      </div>
    </div>
  )
}

function Pic1After() {
  return(
    <div className="text-white">
      <img src={Jeep}
        className="aspect-[6/5] hexagon brightness-50"
        aria-hidden='true'
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-center ">
        2010 - present<br />3.6L PentaStar Engine<br />Oil filter housing
      </p>
    </div>
  )
}

function Pic2Before() {
  return(
    <div className="">
      <img src={Truck}
        aria-hidden='true'
        className="aspect-[6/5] hexagon "
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-[13.75rem] font-urbanist text-transparent" aria-hidden='true'>
      Vehicles with XYZ Engine
      </p>
    </div>
  )
}

function Pic2After() {
  return(
    <div className="text-white">
      <img src={Truck}
        aria-hidden='true'
        className="aspect-[6/5] hexagon brightness-50"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-[13.75rem] font-urbanist text-center ">
        <br />Chrysler 5.7L V8 Hemi<br />Camshaft, lifter, valves, MDS delete
      </p>
    </div>
  )
}


function Pic3Before() {
  return(
    <div className="lg:translate-x-5 lg:-translate-y-8">
      <img src={Jeep}
        alt=""
        className="aspect-[6/5] hexagon "
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent">
      Vehicles with XYZ Engine
      </p>
    </div>
  )
}

function Pic3After() {
  return(
    <div className="text-white lg:translate-x-5 lg:-translate-y-8">
      <img src={Jeep}
        alt=""
        className="aspect-[6/5] hexagon brightness-50"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent">
        Vehicles with XYZ Engine
      </p>
    </div>
  )
}


function Pic4Before() {
  return(
    <div className="lg:-translate-y-4">
      <img src={Jeep}
        alt=""
        className="aspect-[6/5] hexagon "
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent">
      Vehicles with XYZ Engine
      </p>
      <div className="text-transparent -translate-y-40 text-sm md:text-xl md:-translate-y-52">call to schedule now 
      </div>
    </div>
  )
}

function Pic4After() {
  return(
    <div className="text-white lg:-translate-y-4">
      <img src={Jeep}
        alt=""
        className="aspect-[6/5] hexagon brightness-50"
      />
      <p className="-translate-y-44 text-md md:text-2xl md:-translate-y-56 font-urbanist text-transparent">
        Vehicles with XYZ Engine
      </p>
    </div>
  )
}