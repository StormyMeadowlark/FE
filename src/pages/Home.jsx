import Hero from '../components/pageParts/Home/Hero.jsx'
import NavBar from '../components/NavBar.jsx'
import OverviewIcons from '../components/pageParts/Home/Overview.jsx';
import '../App.css'
import CustomerCategories from '../components/pageParts/Home/CustomerCategories.jsx';
import WarrantyAndFinancing from '../components/pageParts/Home/WarrantyAndFinancing.jsx';
import AccountCallToAction from '../components/pageParts/Home/AccountCallToAction.jsx';
import CarfaxAndBBB from '../components/pageParts/Home/CarfaxAndBBB.jsx';
import Footer from '../components/pageParts/shared/Footer.jsx';
import ServiceOfferings from '../components/pageParts/Home/ServiceOfferings.jsx'
import HighlightedMakesAndModels from '../components/pageParts/Home/HighlightedMakesAndModels.jsx';
import BrandsWeWorkWith from '../components/pageParts/Home/BrandsWeWorkWith.jsx';
import Testimonials from '../components/pageParts/Home/Testimonials.jsx';
import OnlineDeals from '../components/pageParts/Home/OnlineDeals.jsx';

function Home() {
    return(
        <div>
            <div className='sticky top-0 left-0 right-0 z-[80]'>
                <NavBar />
            </div>
            <Hero />
            <ServiceOfferings />
            <CustomerCategories />
            <OverviewIcons />
            <div className='bg-[#333333]'>
                <AccountCallToAction />
                <HighlightedMakesAndModels />
            </div>
            <BrandsWeWorkWith />
            <WarrantyAndFinancing />
            <CarfaxAndBBB />
            <Testimonials />
            <div className='sticky z-[100]'>
                <OnlineDeals />
                <Footer />
            </div>
        </div>

    )
}

export default Home;