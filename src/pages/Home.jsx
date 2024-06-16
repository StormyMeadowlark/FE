import Hero from '../components/pageParts/Home/Hero.jsx'
import OverviewIcons from '../components/pageParts/Home/Overview.jsx';
import '../App.css'
import ServiceOfferings from '../components/pageParts/Home/ServiceOfferings.jsx'
import Testimonials from '../components/pageParts/Home/Testimonials.jsx';
import OnlineDeals from '../components/pageParts/Home/OnlineDeals.jsx';
import ThankYou from '../components/pageParts/Home/ThankYou.jsx';
import CustomerCategories from '../components/pageParts/Home/CustomerCategories.jsx'
import OfferingOverview from '../components/pageParts/Home/OfferingOverview.jsx';

const Home = () => {
    return (
      <div>
        <Hero />
        <ServiceOfferings />
        <CustomerCategories />
        <OverviewIcons />
        <OfferingOverview />
        <ThankYou />
        <div className="sticky z-[100]">
          <Testimonials />
          <OnlineDeals />
        </div>
      </div>
    );
}

export default Home;