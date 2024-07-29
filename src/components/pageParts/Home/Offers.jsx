import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <div className="bg-HEMgray text-white py-12 px-4 md:px-10 lg:px-16">
      <Helmet>
        <title>HEM Automotive | Exclusive Online Offers</title>
        <meta
          name="description"
          content="Take advantage of HEM Automotive's limited time exclusive online offers. Experience premium car care at unbeatable rates. Induction cleaning, wheel alignment, and headlight refresh services available at special prices."
        />
        <meta
          name="keywords"
          content="HEM Automotive, exclusive offers, car services, induction cleaning, wheel alignment, headlight refresh, special pricing"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HEM Automotive | Exclusive Online Offers"
        />
        <meta
          property="og:description"
          content="Take advantage of HEM Automotive's limited time exclusive online offers. Experience premium car care at unbeatable rates. Induction cleaning, wheel alignment, and headlight refresh services available at special prices."
        />
        <meta property="og:url" content="https://www.hemautomotive.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-Bungee text-HEMgreen mb-10">
          Exclusive Online Offers
        </h2>
        <p className="text-center text-xl text-[#aaaaaa] font-bold mb-10 font-Urbanist tracking-wider">
          Limited time special pricing on select services only through HEM
          Automotive! Experience premium car care at unbeatable rates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="p-6 border bg-[#222222] border-HEMgreen rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-Bungee text-lg text-HEMgreen mb-2">
                {offer.title}
              </h3>
              <h4 className="text-white font-bold mb-2 text-xl">
                {offer.price}
              </h4>
              <p className="text-[#aabbaa]">{offer.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-[#cccccc] italic mt-6 text-center">
          *Prices are cash, do not include additional shop fees or taxes.
        </p>
      </div>
    </div>
  );
};

const offers = [
  {
    title: "Induction Cleaning",
    price: "$190",
    description:
      "Improve your engine's performance with our intensive induction cleaning from BG.",
  },
  {
    title: "Wheel Alignment",
    price: "$100",
    description: "Ensure your ride is smooth and your tires wear evenly.",
  },
  {
    title: "3M Headlight Refresh",
    price: "$170",
    description: "Restore your headlights to their factory shine.",
  },
];

export default Offers;
