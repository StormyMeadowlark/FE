import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const questionsAnswers = [
    {
      question: "Where are you located?",
      answer:
        "Our address is: 315 SW 32nd Terrace, Topeka, KS 66611. Swing by and let us take care of your ride!",
    },
    {
      question: "Do you offer towing services?",
      answer: `While we don't offer towing services directly, we highly recommend A&R Towing. They're reliable and can be reached at <span class="text-[#00FF00]">785.580.8326</span>.`,
    },
    {
      question: "Where can I apply for financing?",
      answer: `Need a little help with those repairs? You can <a href="https://apply.snapfinance.com/snap-loan/landing?paramId=BEQypIc2AUit0%2BNU%2Fm1jaPTPmNwVgcoBtIkrDRYxxSNWnLK4%2F6jHOAnTCK%2F7zzpNYZvzNQFURVmZ1DLSxqlfxKK1BBntKkgGGZyAVpndtE8I0NZtBGnZW9EzgitoHBQ4PS4rmmxvCuatpRJCtYWdLaIPWUozRthskJZ%2BR0K80oTs2Imiv5xZxK5no%2F7Uk8FIAdivb2HeKPn%2FET1jcpYKiA%3D%3D&source=INTERNET&merchantId=490294963&lang=en" class="text-[#00ff00]">click here</a> to apply for Snap Financing. You can get approved for up to $5000 towards repairs at HEM Automotive.`,
    },
    {
      question: "Where can I register my warranty?",
      answer: `No need to register! But you can <a href="https://www.technetprofessional.com/warranty" class="text-[#00ff00]">click here to learn more about your warranty</a> and all the perks that come with it.`,
    },
    {
      question: "What is your hourly rate?",
      answer: `Our hourly retail rate is $145. For dealership and fleet rates, give us a call. We're here to help!`,
    },
    {
      question: "Do you offer alignments?",
      answer: `Absolutely! Our Hunter HawkEye Elite® alignment machine and skilled technicians will have your vehicle driving straight as an arrow. The cash price is $115, excluding taxes and shop fees.`,
    },
    {
      question: "Do you offer advanced diagnostics?",
      answer: `Yes, our technicians are like car whisperers. They'll diagnose your car's issues faster than you can say 'Check Engine Light'.`,
    },
    {
      question: "Do you rebuild engines?",
      answer: `We don't fully rebuild engines, but we can replace camshafts, lifters, glow plugs, and more. For remanufacturing heads, we trust <a href="https://www.facebook.com/p/Miller-Precision-Machine-Inc-100049992863568/" class="text-[#00FF00]">Miller Precision</a>.`,
    },
    {
      question: "Do you rebuild transmissions?",
      answer: `While we don't rebuild transmissions, we can replace most gearbox fluids and are masters at replacing transmissions!`,
    },
    {
      question: "Do you sell & install wheels & tires?",
      answer: `Yes, we do! We can handle tire sizes up to 40X14.5. For duallys and tires over 35" in diameter, there’s a $5 extra charge. However, we don’t service run-flat tires.`,
    },
    {
      question: "Can I drop my car off before or after hours?",
      answer: `Yes! Just chat with a service advisor before your appointment to make arrangements.`,
    },
    {
      question: "Do you work on vehicles older than 2000?",
      answer: `Yes, we do! Please call the shop to confirm service availability for your specific make, model, and year.`,
    },
    {
      question: "Do you service trailers?",
      answer: `Yes, we do! Bring your trailer in, and we'll take care of it.`,
    },
    {
      question: "Do you service motorcycles?",
      answer: `Not at the moment, but it's something we might consider in the future. Stay tuned!`,
    },
    {
      question: "Can you service my fleet?",
      answer: `Yes, we can service fleets of all sizes. Give the shop a call to schedule an appointment with us today!`,
    },
    {
      question: "What kind of warranty do you offer?",
      answer: `As a TechNet Professional Automotive Service Facility, we offer a 24-month/24,000-mile warranty on most services at no extra cost. The warranty is honored at over 15,000 repair facilities across the country. This includes roadside assistance and road hazard protection.
To learn more about the Nationwide Warranty, <a href="https://www.technetprofessional.com/warranty" class="text-[#00ff00]">click here</a>.
For Roadside Assistance details, <a href="https://www.technetprofessional.com/roadside" class="text-HEMgreen">click here</a>.
For Road Hazard Tire Protection information, <a href="https://www.technetprofessional.com/hazard" class="text-HEMgreen">click here</a>.`,
    },
    {
      question: "What forms of payment do you accept?",
      answer: `We accept cash, debit, and all major credit cards (with a 3% fee). Currently, we do not accept online payments.`,
    },
    {
      question: "Why should I choose HEM Automotive?",
      answer: `At HEM Automotive, we pride ourselves on delivering superior customer service, advanced technology, and a commitment to trust and transparency. Our skilled technicians and welcoming atmosphere ensure that breakdowns won't break you down. We're not just fixing cars; we're building relationships!`,
    },
    {
      question: "How can I contact HEM Automotive?",
      answer: `You can reach us by phone at (785) 730-2900 or email us using the form on the <a href="https://hemautomotive.com/contact" className="text-HEMgreen">Contact page</a>. We're here to answer any questions and help you with all your automotive needs!`,
    },
    {
      question:
        "What is the best way to stay updated on promotions and news from HEM Automotive?",
      answer: `Follow us on our social media channels. We love keeping our customers in the loop with the latest news, promotions, and helpful tips!`,
    },
    {
      question: "What types of vehicles does HEM Automotive service?",
      answer: `HEM Automotive services a wide range of vehicles, including domestic and imported cars. While we specialize in advanced diagnostics and comprehensive repairs, we are also focusing on attracting more European and luxury vehicle owners to expand our customer base.`,
    },
    {
      question: "Does HEM Automotive offer online booking for appointments?",
      answer: `Currently, we do not offer an online booking system. However, you can call us at (785) 730-2900 to schedule an appointment. Know what you need done? Visit the <a href="https://hemautomotive.com/contact">Contact Page</a> to fill out an online quote request.`,
    },
    {
      question: "What amenities are available in the waiting area?",
      answer: `While we do not offer a shuttle service, we provide complimentary beverages, Wi-Fi & clean restrooms, in our waiting area for your comfort.`,
    },
    {
      question: "What should I expect during a visit to HEM Automotive?",
      answer: `At HEM Automotive, we pride ourselves on delivering superior customer service. Our team will thoroughly inspect your vehicle, provide detailed explanations of the work needed, and ensure you're informed every step of the way. We prioritize trust, transparency, and quality service.`,
    },
    {
      question: "Does HEM Automotive handle fleet maintenance?",
      answer: `Yes, we offer specialized services for fleet vehicles. Whether you have a small business fleet or a larger commercial fleet, our experienced technicians can provide comprehensive maintenance and repair solutions.`,
    },
    {
      question:
        "How does HEM Automotive ensure the security and privacy of customer information?",
      answer: `We prioritize the security and privacy of our customers' information. Our systems are designed with advanced security measures to protect your data, and we follow strict protocols to ensure confidentiality.`,
    },
    {
      question:
        "What is the 'With your local high-end mechanics, breakdowns won&apos;t break you down' slogan about?",
      answer: `Our slogan reflects our commitment to providing high-quality, reliable services that keep your vehicle running smoothly. We aim to make auto repairs and maintenance as hassle-free as possible, so breakdowns won't break you down.`,
    },
    {
      question: "How can I apply for a position at HEM Automotive?",
      answer: `We are always looking for talented individuals to join our team. Visit our Careers page to submit your application.`,
    },
    {
      question:
        "What are the warranty benefits of being part of TechNet Professional Automotive Service Facilities?",
      answer: `As a TechNet Professional Automotive Service Facility, HEM Automotive offers benefits such as nationwide warranty coverage, roadside assistance, and access to quality parts and services. Our customers enjoy peace of mind knowing their vehicle maintenance and repairs are backed by a trusted network.`,
    },
    {
      question: "Can I get updates on my vehicle's service status via text?",
      answer: `At this time, we do not provide updates via text. Please feel free to contact us by phone for the latest information on your vehicle's service status.`,
    },
  ];

  const filteredQuestions = questionsAnswers.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-[#333333] text-white pb-20">
      <Helmet>
        <title>Frequently Asked Questions | HEM Automotive</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about HEM Automotive's services, location, financing options, warranty registration, and more."
        />
        <meta
          name="keywords"
          content="HEM Automotive FAQ, HEM Automotive services, car repair, car maintenance, financing, warranty registration"
        />
      </Helmet>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center font-Play text-[#00ff00] mb-8">
          Frequently Asked Questions
        </h1>
        <div className="mb-8 text-white">
          <label htmlFor="search" className="sr-only">
            Search for a question
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#222222] shadow-md shadow-black text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
            aria-label="Search questions"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-x-20 md:gap-x-8 lg:grid-cols-3 mx-10 lg:mx-20 justify-self-center">
          {filteredQuestions.map((item, index) => (
            <Panel
              key={index}
              title={item.question}
              isActive={activeIndex === index}
              onShow={() => setActiveIndex(index)}
            >
              <p
                className="text-lg font-Urbanist tracking-wide font-medium"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </Panel>
          ))}
        </div>
      </div>
    </main>
  );
}

function Panel({ title, children, isActive, onShow }) {
  const panelId = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <section
      className="panel bg-[#333333] text-white lg:max-w-[55vw]"
      data-aos="fade-up"
    >
      <h3 className="font-bold text-3xl font-Play text-[#dddddd] pt-8">
        {title}
      </h3>
      {isActive ? (
        <div
          className="pt-4 block"
          id={panelId}
          role="region"
          aria-labelledby={panelId}
        >
          {children}
        </div>
      ) : (
        <button
          onClick={onShow}
          className="p-2 mt-4 text-stroke text-stroke-black text-stroke-fill-[#00ff00] font-Play text-xl font-black flex hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff00] focus-visible:ring-opacity-75"
          aria-expanded={isActive}
          aria-controls={panelId}
        >
          <p>Find out</p>
          <ChevronDownIcon className="h-7" />
        </button>
      )}
    </section>
  );
}
