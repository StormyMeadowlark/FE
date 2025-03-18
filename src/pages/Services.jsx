import Hero from "../components/pageParts/Services/Hero";
import Service from "../components/pageParts/Services/Service";
import SEO from "../components/SEO";


const Services = () => {
    return (
      <div>
      <SEO page="services" />
        <Hero />
        <Service />
      </div>
    );
  };
export default Services;