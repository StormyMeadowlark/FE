import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AppreciationComponent = () => {
  return (
    <div className="bg-[#333333]">
      <Helmet>
        <title>HEM Automotive | Appreciation</title>
        <meta
          name="description"
          content="We truly appreciate your support. Help us achieve the top spot for Best Auto Repair in Topeka, KS by leaving a review. Your feedback drives us to excellence."
        />
        <meta
          name="keywords"
          content="HEM Automotive, customer appreciation, auto repair reviews, Topeka KS"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HEM Automotive | Appreciation" />
        <meta
          property="og:description"
          content="We truly appreciate your support. Help us achieve the top spot for Best Auto Repair in Topeka, KS by leaving a review. Your feedback drives us to excellence."
        />
        <meta property="og:url" content="https://www.hemautomotive.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="text-white p-6 max-w-7xl mx-auto animate-fadeIn">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
          We Truly Appreciate You!
        </h2>
        <p className="text-center text-lg md:text-xl lg:text-2xl font-Urbanist text-[rgb(204,204,204)] mb-10">
          In 2022, thanks to your support, we were proud finalists for the Best
          of the Best Auto Repair in Topeka, KS. Let's aim for the top spot in
          2025! Keep being awesome and help us achieve that goal by leaving a
          review. Your feedback keeps us striving for excellence!
        </p>
        <div className="flex flex-col md:flex-row mt-6 justify-center mb-20">
          <div className="mx-4 mb-10">
            <Link
              to="https://www.google.com/search?q=hem+automotive"
              className="inline-flex items-center justify-center rounded-md silverbg px-6 py-3 text-xl font-black shadow-xl border-b border-[#00ff00] shadow-[#222222] font-Play text-center text-white transform transition-transform duration-300 hover:scale-105"
              aria-label="Review on Google"
            >
              Review on Google
            </Link>
          </div>
          <div className="mx-4">
            <Link
              to="https://www.yelp.com/biz/hem-automotive-topeka"
              className="inline-flex items-center justify-center rounded-md silverbg px-6 py-3 text-xl font-black shadow-xl border-b border-[#00ff00] shadow-[#222222] font-Play text-center text-white transform transition-transform duration-300 hover:scale-105"
              aria-label="Review on Yelp"
            >
              Review on Yelp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppreciationComponent;
