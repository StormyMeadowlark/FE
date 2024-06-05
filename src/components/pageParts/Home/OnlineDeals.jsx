import useHover from "../../../hooks/useHover";
import Deals1 from "/src/assets/images/SimpleVehicleMaintenance.jpg?react"

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
        <div className="pt-10 lg:flex lg:flex-1 mx-auto justify-center md:pt-0 lg:pt-10 lg:max-w-7xl">
                <div {...Hex1HoveringProps} className="text-center lg:p-4 text-xl text-white mx-8 justify-center">
                    <p className="relative text-Urbanist tracking-wider ">
                        {Hex1Hovering ? Offer1After() : Offer1Before()}
                    </p>
                </div>
                <div {...Hex2HoveringProps} className="text-center p-4 text-xl text-white mx-8 justify-center">
                    <p className="relative text-Urbanist tracking-wider">
                        {Hex2Hovering ? Offer2After() : Offer2Before()}
                    </p>
                </div>
                <div {...Hex3HoveringProps} className="text-center p-4 text-xl text-white mx-8 justify-center">
                    <p className="relative text-Urbanist tracking-wider">
                        {Hex3Hovering ? Offer3After() : Offer3Before()}
                    </p>
                </div>
            </div>
        </div>
        
    )
}

function Offer1Before() {
    return(
        <div>
            <div className="hexagon">
                <img src={Deals1} alt="" className="object-cover brightness-[30%]"/>
            </div>
            <div className="lg:-translate-y-36 -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-xl">
                <p>Full Synthetic Dexos Oil Change</p>
                <p>Price</p>
                <p>When you use code XYZ</p>
            </div>
        </div>
    )
}
function Offer2Before() {
    return(
        <div>
            <div className="hexagon">
                <img src={Deals1} alt="" className="object-cover brightness-[30%]"/>
            </div>
            <div className="lg:-translate-y-36 -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-xl">
                <p>Full Synthetic Dexos Oil Change</p>
                <p>Price</p>
                <p>When you use code XYZ</p>
            </div>
        </div>
    )
}
function Offer3Before() {
    return(
        <div>
            <div className="hexagon">
                <img src={Deals1} alt="" className="object-cover brightness-[30%]"/>
            </div>
            <div className="lg:-translate-y-36 -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-xl">
                <p>Full Synthetic Dexos Oil Change</p>
                <p>Price</p>
                <p>When you use code XYZ</p>
            </div>
        </div>
    )
}
function Offer1After() {
    return(
        <div>
            <div className="hexagon">
                <img src={Deals1} alt="" className="object-cover brightness-[30%]"/>
            </div>
            <div className="lg:-translate-y-36 -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-xl">
                <p>legal</p>
                <p>legal</p>
                <p>legal</p>
            </div>
        </div>
    )
}
function Offer2After() {
    return(
        <div>
            <div className="hexagon">
                <img src={Deals1} alt="" className="object-cover brightness-[30%]"/>
            </div>
            <div className="lg:-translate-y-36 -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-xl">
                <p>legal</p>
                <p>legal</p>
                <p>legal</p>
            </div>
        </div>
    )
}
function Offer3After() {
    return(
        <div>
            <div className="hexagon">
                <img src={Deals1} alt="" className="object-cover brightness-[30%]"/>
            </div>
            <div className="lg:-translate-y-36 -translate-y-48 md:-translate-y-36 flex flex-1 flex-col lg:block md:text-base lg:text-xl">
                <p>legal</p>
                <p>legal</p>
                <p>legal</p>
            </div>
        </div>
    )
}

export default OnlineDeals