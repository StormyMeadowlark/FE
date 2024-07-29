import useHover from "../../../hooks/useHover";
import Deals1 from "/src/assets/images/AirCon.jpg?react"
import Deals2 from "/src/assets/images/AirSpecial2.jpg?react";
import Deals3 from "/src/assets/images/Cash.jpg?react";

function OnlineDeals() {
    const[Hex1Hovering, Hex1HoveringProps] = useHover();
    const[Hex2Hovering, Hex2HoveringProps] = useHover();
    const[Hex3Hovering, Hex3HoveringProps] = useHover();

    return (
      <div className="relative py-20 lg:py-0 bg-[#333333] overflow-hidden flex flex-shrink  justify-center">
        <div className="bg-[#111111]/75 max-w-7xl m-8 p-8 lg:rounded-2xl lg:shadow-inner shadow-[#00ff00]">
          <div className="relative mx-auto max-w-7xl">
            <div className="justify-center">
              <h3 className="text-6xl text-stroke-[#00ff00] text-stroke text-stroke-fill-[#11111] sm:text-4xl md:text-5xl lg:text-6xl uppercase  font-Bungee pt-10">
                Exclusive online offers
              </h3>
              <p className="max-w-3xl text-xl text-[#eeeeee] font-Urbanist tracking-wider">
                Your reward for scrolling to the end of the page!
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 mx-auto justify-center lg:pt-10 lg:max-w-7xl">
            <div
              {...Hex1HoveringProps}
              className="text-center text-xl text-white mx-8 justify-center basis-1/3 lg:mt-0"
            >
              <p className="text-Urbanist tracking-wider">
                {Hex1Hovering ? Offer1After() : Offer1Before()}
              </p>
            </div>
            <div
              {...Hex2HoveringProps}
              className="text-center text-xl text-white mx-8 justify-center -mt-28 lg:mt-0 basis-1/3"
            >
              <p className="text-Urbanist tracking-wider">
                {Hex2Hovering ? Offer2After() : Offer2Before()}
              </p>
            </div>
            <div
              {...Hex3HoveringProps}
              className="text-center text-xl text-white mx-8 justify-center -mt-28 lg:mt-0 basis-1/3"
            >
              <p className="text-Urbanist tracking-wider">
                {Hex3Hovering ? Offer3After() : Offer3Before()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

function Offer1Before() {
    return (
      <div>
        <div className="flex flex-1 justify-center basis-1/3 z-0">
          <img
            src={Deals1}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5] z-0"
          />
        </div>
        <div className="lg:block lg:text-[12px] lg:p-2 text-[22px] leading-[1.2] -translate-y-64">
          <p className="lg:text-3xl">HUGE</p>
          <p className="lg:text-3xl text-nowrap">ALIGNMENT</p>
          <p className="lg:text-3xl">SALE</p>
          <p className="lg:text-7xl">$100</p>
        </div>
      </div>
    );
}
function Offer2Before() {
    return (
      <div>
        <div className="flex flex-1 justify-center basis-1/3">
          <img
            src={Deals2}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="-translate-y-48 lg:block lg:text-[12px] lg:p-2 text-[22px] leading-[1.2] lg:-translate-y-48">
          <p className="lg:text-3xl">Direct Injection Cleaning</p>
          <p className="lg:text-xl"></p>
          <p className=""></p>
          <p className="lg:text-3xl">$147</p>
          <p className="line-through text-sm">$300</p>
        </div>
      </div>
    );
}
function Offer3Before() {
    return (
      <div>
        <div className="flex flex-1 justify-center basis-1/3">
          <img
            src={Deals3}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="-translate-y-48 lg:block lg:text-3xl lg:p-2">
          <p className="">Leave a Review</p>
          <p>Google</p>
          <p>Yelp</p>
          <p>CarFax</p>
        </div>
      </div>
    );
}
function Offer1After() {
return (
  <div>
    <div className="flex flex-1 justify-center basis-1/3 z-0">
      <img
        src={Deals1}
        alt=""
        className="hexagon object-fit brightness-[30%] aspect-[6/5] z-0"
      />
    </div>
    <div className="lg:block lg:text-[12px] lg:p-2 text-[22px] leading-[1.2] -translate-y-64">
    <br />
    <br />
    <br />
    <br />
      <p className="">Cash price.</p>
      <p className="">Taxes & shop fees not included.</p>
      <p className="">Price subject to change</p>
      <p className="">without notice.</p>
      <p className="">Cannot be combine with any other offer.</p>
      <br />
      <br/>
      <br />
    </div>
  </div>
);
}
function Offer2After() {
    return (
      <div>
        <div className="flex flex-1 justify-center basis-1/3">
          <img
            src={Deals2}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="-translate-y-48 lg:block lg:text-[12px] lg:p-2 text-[21px] leading-[1.2] lg:-translate-y-[120%]">
          <p className="">Cash price.</p>
          <p className="">Shop fee & tax not included.</p>
          <p className="">Price subject to change</p>
          <p className="">without notice.</p>
        </div>
      </div>
    );
}


export default OnlineDeals