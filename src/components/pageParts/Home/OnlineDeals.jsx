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
        <div className="flex flex-1 justify-center basis-1/3">
          <img
            src={Deals1}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="-translate-y-48 lg:block lg:text-[12px] lg:p-2 text-[22px] leading-[1.2] lg:-translate-y-48">
          <p className="lg:text-3xl">A/C Service Special</p>
          <p className="lg:text-xl text-nowrap">R1234yf cooling systems</p>
          <p className="">Includes leak detection test</p>
          <p className="lg:text-3xl">$436.88 </p>
          <p className="line-through text-sm">$500</p>
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
          <p className="lg:text-3xl">A/C Service Special</p>
          <p className="lg:text-xl">R134a cooling systems</p>
          <p className="">Includes leak detection test</p>
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
          <p>Get $5 off</p>
          <p>CODE: REVIEW-5</p>
        </div>
      </div>
    );
}
function Offer1After() {
    return (
      <div>
        <div className="flex flex-1 justify-center basis-1/3">
          <img
            src={Deals1}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="-translate-y-48 lg:block lg:text-[12px] lg:p-2 text-[21px] leading-[1.2] lg:-translate-y-[120%]">
          <p className="">Cash price.</p>
          <p className="">Shop fee & tax not included.</p>
          <p className="">Upto 1lb of freon.</p>
          <p className="">Price subject to change</p>
          <p className="">without notice.</p>
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
          <p className="">Upto 2lb of freon.</p>
          <p className="">Price subject to change</p>
          <p className="">without notice.</p>
        </div>
      </div>
    );
}
function Offer3After() {
    return (
      <div>
        <div className="flex flex-1 justify-center basis-1/3">
          <img
            src={Deals3}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="lg:-translate-y-[150%] -translate-y-48 lg:block lg:text-3xl  lg:p-2">
          <p className="md:text-sm text-[12px]">First time review only</p>
          <p className="md:text-sm text-[12px]">One per customer.</p>
          <p className="md:text-sm text-[12px]">Cannot be combined with other offers.</p>
        </div>
      </div>
    );
}

export default OnlineDeals