import Hero from '../components/pageParts/Home/Hero.jsx'
import OverviewIcons from '../components/pageParts/Home/Overview.jsx';
import '../App.css'
import Footer from '../components/pageParts/shared/Footer.jsx';
import ServiceOfferings from '../components/pageParts/Home/ServiceOfferings.jsx'
import HighlightedMakesAndModels from '../components/pageParts/Home/HighlightedMakesAndModels.jsx';
import BrandsWeWorkWith from '../components/pageParts/Home/BrandsWeWorkWith.jsx';
import Testimonials from '../components/pageParts/Home/Testimonials.jsx';
import OnlineDeals from '../components/pageParts/Home/OnlineDeals.jsx';
import ThankYou from '../components/pageParts/Home/ThankYou.jsx';
import NamesYouTrust from '../components/pageParts/Home/NamesYouTrust.jsx';
import CustomerCategories from '../components/pageParts/Home/CustomerCategories.jsx'

const Home = () => {
    return(
        <div>
            <Hero />
            <ServiceOfferings />
            <CustomerCategories />
            <OverviewIcons />
            <div className='bg-[#333333]'>
                <HighlightedMakesAndModels />
            </div>
            <BrandsWeWorkWith />
            <NamesYouTrust />
            <ThankYou />
            <div className='sticky z-[100]'>
                <Testimonials />
                <OnlineDeals />
            </div>
        </div>

    )
}

export default Home;