import CalandClo from '../../../assets/svgIcons/CalendarAndClock.svg?react'
import CanandCof from '../../../assets/svgIcons/CoffeeAndCandy.svg?react'
import DirtyCar from '../../../assets/svgIcons/DirtyCarIcon.svg?react'
import GoodHand from '../../../assets/svgIcons/GoodHandIcon.svg?react'
import HandDollarSign from '../../../assets/svgIcons/HandWithDollarSign.svg?react'
import GearsAndChain from '../../../assets/svgIcons/TimingChainIcon.svg?react'



const OverviewInformation = [
    {
        name: 'convenience like never before',
        href: '#',
        icon: CalandClo,
        description: 'appointment & maintenance reminders, secure 24/7 drop off & pick-up, online scheduling, estimates, bill pay & so much more',
    },
    {
        name: 'your vehicle in good hands',
        href: '#',
        icon: GoodHand,
        description: 'because we know your vehicle like the back of ours',
    },
    {
        name: 'protection inside and out',
        href: '#',
        icon: DirtyCar,
        description: "because mechanics get dirty, but your car shouldn't",
    },
    {
        name: 'OEM or Aftermarket',
        href: '#',
        icon: GearsAndChain,
        description: 'because sometimes Aluminum holds up better than plastic',
    },
    {
        name: 'amenities like a dealership',
        href: '#',
        icon: CanandCof,
        description: 'because we like clean restrooms, snacks, drinks, and A/C too',
    },
    {
        name: 'without the dealership prices',
        href: '#',
        icon: HandDollarSign,
        description: "because sometimes the dealership isn't the place for you",
    },
]


function OverviewIcons() {
    return(
        <div className='bg-[#333333] py-20 '>
            <section className="relative z-10 mx-auto px-6 lg:px-8 max-w-7xl bg-[#777777] rounded-[5%] shadow-2xl shadow-black" aria-labelledby="landing-page-section">
                <div>
                    <h2 className="sr-only" id="contact-heading">
                        Service Overview
                    </h2>
                    <h2 className='relative uppercase pt-20 pb-10 font-Bungee text-6xl text-stroke text-stroke-fill-black text-stroke-[#00ff00] px-20'>
                        Quality & Affordability
                    </h2>
                    <p className='max-w-3xl text-xl text-[#eeeeee] pb-20 font-Urbanist tracking-wider px-20'>To bring you the dealership quality & amenities but without the price tag. How you spend the money you save is up to you. But we suggest you get these wheels. Because your mechanic said too, is always a justifiable reason, in our handbook.</p>
                </div>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-12 pb-20 max-w-7xl px-20">
                    {OverviewInformation.map((description) => (
                        <a key={description.name} className="flex flex-col rounded-2xl bg-[#333333] shadow-xl shadow-[#111111] border-b border-[#00ff00]/50 sentence-case text-[#dddddd]" href={description.href}>
                            <div className="relative flex-1 px-6 pb-8 md:px-8">
                                <div className="inline-block -translate-y-12 bg-[#00ff00] p-5 -translate-x-10 hexagon">
                                <description.icon className="w-12" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-medium text-white uppercase -mt-10 font-Urbanist tracking-wide">{description.name}</h3>
                                <p className="mt-4 font-Urbanist tracking-wide">{description.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>

    )
}

export default OverviewIcons;