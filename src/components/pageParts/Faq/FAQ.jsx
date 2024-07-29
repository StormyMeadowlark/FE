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
      answer: "Our Address is: 315 SW 32nd Terrace, Topeka, KS 66611",
    },
    {
      question: "Do you offer towing services?",
      answer: `No, however, we highly suggest you use A&R Towing. You can reach them at: 
        <span className="text-[#00FF00]">785.580.8326</span>`,
    },
    {
      question: "Where can I apply for financing?",
      answer: `You can <a href="https://apply.snapfinance.com/snap-loan/landing?paramId=BEQypIc2AUit0%2BNU%2Fm1jaPTPmNwVgcoBtIkrDRYxxSNWnLK4%2F6jHOAnTCK%2F7zzpNYZvzNQFURVmZ1DLSxqlfxKK1BBntKkgGGZyAVpndtE8I0NZtBGnZW9EzgitoHBQ4PS4rmmxvCuatpRJCtYWdLaIPWUozRthskJZ%2BR0K80oTs2Imiv5xZxK5no%2F7Uk8FIAdivb2HeKPn%2FET1jcpYKiA%3D%3D&source=INTERNET&merchantId=490294963&lang=en" className="text-[#00ff00]">click here</a> to apply for snap financing. You can get approved for up to $5000 towards repairs at HEM Automotive.`,
    },
    {
      question: "Where can I register my warranty?",
      answer: `You can <a href="https://fmppartnersnetwork.com/register-warranty/" className="text-[#00ff00]">click here</a> to register your warranty.`,
    },
    {
      question: "What is your hourly rate?",
      answer: `Our hourly retail rate is $145. Call the shop for dealership & fleet rates.`,
    },
    {
      question: "Do you offer alignments?",
      answer: `Yes! We have a Hunter HawkEye Elite® alignment machine & alignment superstars that will take your vehicle from dancing to its own tune, to dancing to yours! The cash price is $145 does not include taxes or shop fee.`,
    },
    {
      question: "Do you offer advanced diagnostics?",
      answer: `Yes, our technicians are like car whisperers. They'll diagnose your car's issues faster than you can say 'Check Engine Light'.`,
    },
    {
      question: "Do you rebuild engines?",
      answer: `We do not completely rebuild engines. We do replace camshafts, lifters, glow plugs, etc. We use <a href="https://www.facebook.com/p/Miller-Precision-Machine-Inc-100049992863568/" className="text-[#00FF00]">Miller Precision</a> for remanufacturing heads.`,
    },
    {
      question: "Do you rebuild transmissions?",
      answer: `No, but we can replace most gear box fluid & we are masters at replacing them!`,
    },
    {
      question: "Do you sell & install wheels & tires?",
      answer: `Yes we do! We can work with tire sizes up to 40X14.5! Dually's & tires over 35" diameter are $5 extra. We are not able to service run flat tires.`,
    },
    {
      question: "Can I drop my car off before or after hours?",
      answer: `Yes! Please talk with a service advisor prior to your appointment.`,
    },
    {
      question: "Do you work on vehicles older than 2000?",
      answer: `Yes we do! Please call the shop to verify your particular make, model, and year prior to your appointment.`,
    },
    {
      question: "Do you service trailers?",
      answer: `Yes we do!`,
    },
    {
      question: "Do you service motorcycles?",
      answer: `Not at the moment, but it may be something to consider in the future.`,
    },
    {
      question: "Can you service my fleet?",
      answer: `Yes, we can service fleets of all sizes. Give the shop a call to schedule with us today!`,
    },
    {
      question: "What kind of warranty do you offer?",
      answer: `As part of the Factory Motor Parts Partners Network, we are pleased to offer a 12 month / 12,000 mile warranty on most services at no extra cost to you. The warranty is honored at over 35,000 repair facilities around the county. Along with the warranty is also roadside assistance. To register a warranty, <a href="https://fmppartnersnetwork.com/register-warranty/" className="text-[#00ff00]">click here</a>. For roadside assistance call, <span className="text-[#00ff00]">(877) 367-6144</span>. To learn more about your warranty, <a href="https://fmppartnersnetwork.com/wp-content/uploads/2022/05/FMP-Coverage-Statement-05.2022.pdf" className="text-[#00ff00]">click here</a>. To learn more about roadside assistance, <a href="https://fmppartnersnetwork.com/wp-content/uploads/2022/05/FMP-RSA-Benefit-Statment-125-05.2022.pdf" className="text-[#00ff00]">click here</a>.`,
    },
    {
      question: "What forms of payment do you accept?",
      answer: `We accept cash, debit, & all major credit cards (3% fee). We currently do not accept online payments.`,
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
