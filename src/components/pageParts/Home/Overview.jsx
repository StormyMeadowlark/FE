import useHover from "../../../hooks/useHover";
import ListOverview from '../shared/ListOverView';

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
        <div className='bg-[#111111] py-8 overflow-hidden'>
            <section className="relative z-10 mx-auto px-6 lg:px-8 max-w-7xl" aria-labelledby="landing-page-section">
                <div>
                    <h2 className="sr-only" id="contact-heading">
                        Service Overview
                    </h2>
                    <div {...QualityHoveringProps} className='uppercase pt-8 font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] md:px-20 transition ease-linear'>
                        {QualityHoving ? QualityCardAfter : QualityCardBefore}
                    </div>
                    <div {...ConvenienceHoveringProps} className='relative uppercase pt-8 font-Bungee lg:text-8xl md:text-6xl text-3xl text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] md:px-20 transition ease-linear'>
                        {ConvenienceHovering ? ConvenienceCardAfter : ConvenienceCardBefore}
                    </div>
                    <div {...AffordabilityHoveringProps}className='pb-10 relative uppercase pt-8 font-Bungee lg:text-8xl md:text-6xl text-3xl text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] md:px-20 transition ease-linear'>
                        {AffordabilityHovering ? AffordabilityCardAfter : AffordabilityCardBefore}
                        </div>
                    </div>
            </section>
        </div>

    )
}


function QualityCardsBefore() {
    return(
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <h1 className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] hover:text-stroke-fill-transparent transition ease-linear pb-4'>Quality,
            </h1>
    </section>

    )
}

function QualityCardsAfter() {
    const overviewCardsQuality =  [
        {
            title: 'Quality1',
            name: 'OEM or After-market',
            image: '',
            description: 'Because sometimes Aluminum holds up better than plastic.',
    
        },
        {
            title: 'Quality2',
            name: 'Protection Inside & out',
            image: '',
            description: 'Because mechanics get dirty, but your car shouldn&apos;t.',
    
        },
        {
            title: 'Quality3',
            name: 'Your vehicle in good hand',
            image: '',
            description: 'because we know your vehicle like the back of ours',
    
        },
    ]
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-[#00ff00] transition ease-linear pb-4'>Quality,
            </div>
            <div>
                <ListOverview OverviewCards={overviewCardsQuality} />
            </div>
    </section>
    </div>
    )
}

function ConvenienceCardsBefore() {
    return(
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] hover:text-stroke-fill-transparent transition ease-linear pb-4'>Convenience,
            </div>
    </section>

    )
}

function ConvenienceCardsAfter() {
    const overviewCardsConvenience =  [
        {
            title: 'Convenience1',
            name: 'Maintenance Reminders',
            image: '',
            description: 'Through CarFax for now, a better experience is coming soon!',
    
        },
        {
            title: 'Convenience2',
            name: 'Around the Clock Pick-up & Drop-off',
            image: '',
            description: 'Just let us know at your appointment & we will let you know what to do.',
    
        },
        {
            title: 'Convenience3',
            name: 'Additional Features Are Coming Soon',
            image: '',
            description: 'More convenience for you via online scheduling & branded appointment reminders.',
    
        },
    ]
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-[#00ff00] transition ease-linear pb-4'>Convenience,
            </div>
            <div>
                <ListOverview OverviewCards = {overviewCardsConvenience} />
            </div>
    </section>
    </div>
    )
}


function AffordabilityCardsBefore() {
    return(
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-transparent text-stroke-[#00ff00] pb-4'>Affordability.
            </div>
        </section>

    )
}

function AffordabilityCardsAfter() {
    const overviewCardsAffordability =  [
        {
            title: 'Affordability1',
            name: 'amenities like a dealership without the price',
            image: '',
            description: 'Because we like clean restrooms, free-wifi, snacks & drinks, too',
    
        },
        {
            title: 'Affordability2',
            name: 'Financing',
            image: '',
            description: 'No joke, up to $5000 through SNAP! Financing. Interested? Keep scrolling for more info.'
    
        },
        {
            title: 'Affordability3',
            name: 'More Features',
            image: '',
            description: 'We have a website now! But we can do better. Online estimates & bill pay coming soon..',
    
        },
    ]
    return(
        <div className=''>
        <section className="relative z-10 mx-auto max-w-5xl text-white" aria-labelledby="landing-page-section">
            <div className='relative uppercase font-Bungee text-3xl md:text-6xl lg:text-8xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-[#00ff00] transition ease-linear pb-4'>Affordability.
            </div>
            <div>
                <ListOverview OverviewCards = {overviewCardsAffordability} />
            </div>
    </section>
    </div>
    )
}

export default OverviewIcons;