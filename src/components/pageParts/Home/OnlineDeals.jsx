import useHover from "../../../hooks/useHover";


function OnlineDeals() {
    const[Hex1Hovering, Hex1HoveringProps] = useHover();
    const[Hex2Hovering, Hex2HoveringProps] = useHover();

    return(
        <div className="relative flex flex-col py-20 bg-[#00ff00] px-20">
            <div className="relative mx-auto max-w-7xl">
                <div className="justify-center pb-10 ">
                    <h3 className="text-6xl text-stroke-[#333333] text-stroke text-stroke-fill-white sm:text-4xl md:text-5xl lg:text-6xl uppercase  font-Bungee">Exclusive online offers</h3>
                    <p className="max-w-3xl text-xl text-[#333333] font-Urbanist tracking-wider">
                        Your reward for scrolling to the end of the page!
                    </p>
                </div>
            </div>
            <div>
                <div className="flex mx-auto justify-center pt-10 max-w-7xl">
                        <button {...Hex1HoveringProps} className="absolute hexagon bg-[#333333] text-center p-10 text-xl text-white mx-8 justify-center">
                            <p className="relative text-Urbanist tracking-wider h-[30rem] w-[30rem]">
                                {Hex1Hovering ? "Terms and Conditions" : "online offer 1"}
                            </p>
                        </button>
                        <button {...Hex2HoveringProps} className="absolute hexagon bg-[#333333] text-center p-10 text-xl text-white mx-8 justify-center">
                            <p className="relative text-Urbanist tracking-wider h-[30rem] w-[30rem]">
                                {Hex2Hovering ? "Terms and Conditions 2" : "online offer 2"}
                            </p>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default OnlineDeals