
import DirtyCar from '../../../assets/svgIcons/DirtyCarIcon.svg?react'
import GoodHand from '../../../assets/svgIcons/GoodHandIcon.svg?react'
import GearsAndChain from '../../../assets/svgIcons/TimingChainIcon.svg?react'
import useHover from "../../../hooks/useHover";


function OverviewIcons() {
    const[QualityHoving, QualityHoveringProps] = useHover();
    const[ConvenienceHovering, ConvenienceHoveringProps] = useHover();
    const[AffordabilityHovering, AffordabilityHoveringProps] = useHover();
    const QualityCardBefore = QualityCardsBefore()
    const QualityCardAfter = QualityCardsAfter()
    const ConvenienceCardBefore = ConvenienceCardsBefore()
    const ConvenienceCardAfter = ConvenienceCardsAfter()
    const AffordabilityCardBefore = AffordabilityCardsBefore()
    const AffordabilityCardAfter = AffordabilityCardsAfter()

    return(
        <div className='bg-[#111111] py-20 overflow-hidden'>
            <section className="relative z-10 mx-auto px-6 lg:px-8 max-w-7xl" aria-labelledby="landing-page-section">
                <div>
                    <h2 className="sr-only" id="contact-heading">
                        Service Overview
                    </h2>
                    <div {...QualityHoveringProps} className='relative uppercase pt-8 font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] transition ease-linear'>
                        {QualityHoving ? QualityCardAfter : QualityCardBefore}
                    </div>
                    <div {...ConvenienceHoveringProps} className='relative uppercase pt-8 font-Bungee lg:text-8xl md:text-6xl text-3xl text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] md:px-20 transition ease-linear'>
                        {ConvenienceHovering ? ConvenienceCardAfter : ConvenienceCardBefore}
                    </div>
                    <div {...AffordabilityHoveringProps}className=' m-10 relative uppercase pt-8 font-Bungee lg:text-8xl md:text-6xl text-3xl text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] md:px-20 transition ease-linear'>
                        {AffordabilityHovering ? AffordabilityCardBefore : AffordabilityCardAfter}
                        </div>
                    </div>
            </section>
        </div>

    )
}


function QualityCardsBefore() {
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] hover:text-stroke-fill-transparent transition ease-linear'>Quality,
            </div>
            <div className='pt-14 border-t border-[#00ff00] text-stroke-white lowercase text-stroke text-stroke-fill-white font-Urbanist text-xl font-light hidden'>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-4">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GearsAndChain className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">OEM or Aftermarket</h3>
                        <p className="mt-8 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Because sometimes Aluminum holds up better than plastic.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <DirtyCar className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Protection Inside & out</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Because mechanics get dirty, but your car shouldn&apos;t.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GoodHand className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Your vehicle in good hands</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">because we know your vehicle like the back of ours</p>
                    </div>
                </div>
            </div>
    </section>
    </div>
    )
}

function QualityCardsAfter() {
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-[#00ff00] transition ease-linear'>Quality,
            </div>
            <div className='pt-14 border-t border-[#00ff00] text-stroke-white lowercase text-stroke text-stroke-fill-white font-Urbanist text-xl font-light flex'>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GearsAndChain className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">OEM or Aftermarket</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Because sometimes Aluminum holds up better than plastic.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <DirtyCar className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Protection Inside & out</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Because mechanics get dirty, but your car shouldn&apos;t.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GoodHand className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Your vehicle in good hands</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">because we know your vehicle like the back of ours</p>
                    </div>
                </div>
            </div>
    </section>
    </div>
    )
}

function ConvenienceCardsBefore() {
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] hover:text-stroke-fill-transparent transition ease-linear'>Convenience,
            </div>
            <div className='pt-14 border-t border-[#00ff00] text-stroke-white lowercase text-stroke text-stroke-fill-white font-Urbanist text-xl font-light hidden'>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GearsAndChain className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Maintenance Reminders</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Through CarFax for now, a better experience is coming soon!</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <DirtyCar className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Around the Clock Pick-up & Drop-off</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Just let us know at your appointment & we will let you know what to do.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GoodHand className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Additional Features Are Coming Soon</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">because we know your vehicle like the back of ours</p>
                    </div>
                </div>
            </div>
    </section>
    </div>
    )
}

function ConvenienceCardsAfter() {
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-[#00ff00] transition ease-linear'>Convenience,
            </div>
            <div className='pt-14 border-t border-[#00ff00] text-stroke-white lowercase text-stroke text-stroke-fill-white font-Urbanist text-xl font-light flex'>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GearsAndChain className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Maintenance Reminders</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Through CarFax for now, a better experience is coming soon!</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <DirtyCar className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Around the Clock Pick-up & Drop-off</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Just let us know at your appointment & we will let you know what to do.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GoodHand className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Additional Features Are  Coming Soon</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">More convenience for you via online scheduling & branded appointment reminders.</p>
                    </div>
                </div>
            </div>
    </section>
    </div>
    )
}


function AffordabilityCardsBefore() {
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00]'>Affordability.
            </div>
            <div className='pt-14 border-t border-[#00ff00] text-stroke-white lowercase text-stroke text-stroke-fill-white font-Urbanist text-xl font-light hidden'>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GearsAndChain className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">amenities like a dealership without the price</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Because sometimes Aluminum holds up better than plastic.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <DirtyCar className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Financing</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">No joke, up to $5000 through SNAP! Financing. Interested?<br />Click Here to Learn more.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GoodHand className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">More Features</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">We have a website now! But we can do better. Online estimates & bill pay coming soon.</p>
                    </div>
                </div>
            </div>
    </section>
    </div>
    )
}

function AffordabilityCardsAfter() {
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-[#00ff00] transition ease-linear'>Affordability.
            </div>
            <div className='pt-14 border-t border-[#00ff00] text-stroke-white lowercase text-stroke text-stroke-fill-white font-Urbanist text-xl font-light flex'>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GearsAndChain className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">amenities like a dealership without the price</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">Because sometimes Aluminum holds up better than plastic.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mr-8 mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <DirtyCar className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">Financing</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">No joke, up to $5000 through SNAP! Financing. Interested?<br />Click Here to Learn more.</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd] mt-8">
                    <div className="relative flex-1 px-6 pb-8 md:px-8">
                        <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                            <GoodHand className="w-12" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">More Features</h3>
                        <p className="mt-4 font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight">We have a website now! But we can do better. Online estimates & bill pay coming soon.</p>
                    </div>
                </div>
            </div>
    </section>
    </div>
    )
}

export default OverviewIcons;