import useHover from "../../../hooks/useHover";
import Deals1 from "/src/assets/images/AirCon.jpg?react"
import Deals2 from "/src/assets/images/AirSpecial2.jpg?react";
import Deals3 from "/src/assets/images/Cash.jpg?react";

function OnlineDeals() {
    const[Hex1Hovering, Hex1HoveringProps] = useHover();
    const[Hex2Hovering, Hex2HoveringProps] = useHover();
    const[Hex3Hovering, Hex3HoveringProps] = useHover();

    return(
    <div className="relative lg:flex lg:flex-col py-20 lg:py-0 bg-[#00ff00] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
            <div className="justify-center">
                <h3 className="text-6xl text-stroke-[#333333] text-stroke text-stroke-fill-white sm:text-4xl md:text-5xl lg:text-6xl uppercase  font-Bungee pt-10">Exclusive online offers</h3>
                <p className="max-w-3xl text-xl text-[#333333] font-Urbanist tracking-wider">
                    Your reward for scrolling to the end of the page!
                </p>
            </div>
        </div>
        <div className="pt-10 lg:grid lg:grid-cols-3 mx-auto justify-center md:pt-0 lg:pt-10 lg:max-w-7xl">
                <div {...Hex1HoveringProps} className="text-center lg:p-4 text-xl text-white mx-8 justify-center">
                    <p className="text-Urbanist tracking-wider">
                        {Hex1Hovering ? Offer1After() : Offer1Before()}
                    </p>
                </div>
                <div {...Hex2HoveringProps} className="text-center p-4 text-xl text-white mx-8 justify-center">
                    <p className="text-Urbanist tracking-wider">
                        {Hex2Hovering ? Offer2After() : Offer2Before()}
                    </p>
                </div>
                <div {...Hex3HoveringProps} className="text-center p-4 text-xl text-white mx-8 justify-center">
                    <p className="text-Urbanist tracking-wider">
                        {Hex3Hovering ? Offer3After() : Offer3Before()}
                    </p>
                </div>
            </div>
        </div>
        
    )
}

function Offer1Before() {
    return (
      <div>
        <div className="flex flex-1 justify-center">
          <img src={Deals1} alt="" className="hexagon object-fit brightness-[30%] aspect-[6/5]" />
        </div>
        <div className="lg:-translate-y-[150%] -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-2xl lg:p-2">
          <p>A/C Service Special</p>
          <p className="lg:text-sm">R1234yf cooling systems</p>
          <p className="lg:text-3xl">$436.88 </p>
          <p className="lg:line-through text-sm">$500</p>
        </div>
      </div>
    );
}
function Offer2Before() {
    return (
      <div>
        <div className="flex flex-1 justify-center">
          <img
            src={Deals2}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="lg:-translate-y-[150%] -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-2xl lg:p-2">
          <p>A/C Service Special</p>
          <p className="lg:text-sm">R134a cooling systems</p>
          <p className="lg:text-3xl">$147 </p>
          <p className="lg:line-through text-sm">$300</p>
        </div>
      </div>
    );
}
function Offer3Before() {
    return (
      <div>
        <div className="flex flex-1 justify-center">
          <img
            src={Deals3}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="lg:-translate-y-[150%] -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-3xl lg:p-2">
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
        <div className="flex flex-1 justify-center">
          <img
            src={Deals1}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="lg:-translate-y-[150%] -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-sm lg:p-2">
          <p>
            Price is subject to change without notice. Prices listed are cash
            prices and dose not include shop fee or taxes. Price is for R1234fy
            freon upto 1lb. Price includes leak detection test.
          </p>
        </div>
      </div>
    );
}
function Offer2After() {
    return (
      <div>
        <div className="flex flex-1 justify-center">
          <img
            src={Deals2}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="lg:-translate-y-[150%] -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-sm p-2">
          <p>
            Price is subject to change without notice. Prices listed are cash
            prices and dose not include shop fee or taxes. Price is for R134a
            freon upto 2lbd. Price includes leak detection test.
          </p>
        </div>
      </div>
    );
}
function Offer3After() {
    return (
      <div>
        <div className="flex flex-1 justify-center">
          <img
            src={Deals3}
            alt=""
            className="hexagon object-fit brightness-[30%] aspect-[6/5]"
          />
        </div>
        <div className="lg:-translate-y-[150%] -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-sm p-2">
          <p>
            Valid only for first time reviews. One per customer. Cannot be
            combined with any other offer. Terms subject to change without
            notice
          </p>
        </div>
      </div>
    );
}

export default OnlineDeals