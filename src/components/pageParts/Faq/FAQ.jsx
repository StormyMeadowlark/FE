import { useState } from "react"
import { Link } from "react-router-dom";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-[#333333] text-white pb-20">
      <div className="grid md:grid-cols-2 gap-x-20 lg:grid-cols-3 mx-10 lg:mx-0">
        <Panel
          title="Where are you located?"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">
            Our Address is:
            <address className="not-italic">
              315 SW 32nd Terrace, Topeka, KS 66611
            </address>
          </p>
        </Panel>
        <Panel
          title="Do you offer towing services?"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">
            No, however, we highly suggest you use
          </p>
        </Panel>
        <Panel
          title="Where can I apply for financing?"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">
            You can{" "}
            <span>
              <Link
                to="https://apply.snapfinance.com/snap-loan/landing?paramId=BEQypIc2AUit0%2BNU%2Fm1jaPTPmNwVgcoBtIkrDRYxxSNWnLK4%2F6jHOAnTCK%2F7zzpNYZvzNQFURVmZ1DLSxqlfxKK1BBntKkgGGZyAVpndtE8I0NZtBGnZW9EzgitoHBQ4PS4rmmxvCuatpRJCtYWdLaIPWUozRthskJZ%2BR0K80oTs2Imiv5xZxK5no%2F7Uk8FIAdivb2HeKPn%2FET1jcpYKiA%3D%3D&source=INTERNET&merchantId=490294963&lang=en"
                className="text-[#00ff00]"
              >
                click here
              </Link>
            </span>{" "}
            to apply for snap financing. You can get approved for up to $5000
            towards repairs at HEM Automotive
          </p>
        </Panel>
        <Panel
          title="Where can I register my warranty?"
          isActive={activeIndex === 3}
          onShow={() => setActiveIndex(3)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">
            You can{" "}
            <span>
              <Link
                to="https://fmppartnersnetwork.com/register-warranty/"
                className="text-[#00ff00]"
              >
                click here
              </Link>
            </span>{" "}
            to register your warranty.
          </p>
        </Panel>
        <Panel
          title="What is your hourly rate?"
          isActive={activeIndex === 4}
          onShow={() => setActiveIndex(4)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Our hourly retail rate is $145. Call the shop for dealership & fleet rates.</p>
        </Panel>
        <Panel
          title="Do you offer alignments?"
          isActive={activeIndex === 5}
          onShow={() => setActiveIndex(5)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">
            Yes! We have a hunter alignment lift & alignment superstars that will take your vehicle from dancing to its own tune, to dancing to yours! The cash price is $145 does not include taxes or shop fee.
          </p>
        </Panel>
        <Panel
          title="Do you do advanced diagnostics?"
          isActive={activeIndex === 6}
          onShow={() => setActiveIndex(6)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Yes, our technicians are like car whisperers.</p>
        </Panel>
        <Panel
          title="Do you rebuild engines?"
          isActive={activeIndex === 7}
          onShow={() => setActiveIndex(7)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">We do not completely rebuild engines. We do replace camshafts, lifts, glow plugs and use Miller Precision for remanufacturing heads.</p>
        </Panel>
        <Panel
          title="Do you rebuild transmissions?"
          isActive={activeIndex === 8}
          onShow={() => setActiveIndex(8)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">No, but we do service them & replace them.</p>
        </Panel>
        <Panel
          title="Do you sell and install wheels and tires?"
          isActive={activeIndex === 9}
          onShow={() => setActiveIndex(9)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Yes we do! We can work with tires from size to size and wheels from size to size.</p>
        </Panel>
        <Panel
          title="Can I drop my car off before or after hours?"
          isActive={activeIndex === 10}
          onShow={() => setActiveIndex(10)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Yes, we do ask that you talk with a service advior prior to your appointment so we can best accommodate you.</p>
        </Panel>
        <Panel
          title="Do you work on vehicles older than 2000?"
          isActive={activeIndex === 11}
          onShow={() => setActiveIndex(11)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Yes we do! Please call the shop to verify your particular make, model, and year prior to your appointment.</p>
        </Panel>
        <Panel
          title="Do you service trailers?"
          isActive={activeIndex === 12}
          onShow={() => setActiveIndex(12)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Yes we do!</p>
        </Panel>
        <Panel
          title="Do you service motorcycles?"
          isActive={activeIndex === 13}
          onShow={() => setActiveIndex(13)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Not at the moment, but it may be something to consider in the future.</p>
        </Panel>
        <Panel
          title="Can you service my fleet?"
          isActive={activeIndex === 14}
          onShow={() => setActiveIndex(14)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">Yes, we can service fleets of all sizes. Give the shop a call to schedule with us today!</p>
        </Panel>
        <Panel
          title="What kind of warranty do you offer?"
          isActive={activeIndex === 15}
          onShow={() => setActiveIndex(15)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">
            As part of the Factory Motor Parts Partners Network, we are pleased
            to offer a 12 month / 12,000 mile warranty on most services at no
            extra cost to you. The warranty is honored at over 35,000 repair
            facilities around the county. Along with the warranty is also
            roadside assistance.
          </p>
          <p>
            To register a warranty,{" "}
            <span className="text-[#00ff00]">
              <Link to="https://fmppartnersnetwork.com/register-warranty/">
                Click Here
              </Link>
            </span>
            <div className="">
              For roadside assistance call,{" "}
              <span>
                <Link className="">
                  <span className="inline-flex">
                    <address className="text-[#00ff00] not-italic">
                      (877) 367-6144
                    </address>
                  </span>
                </Link>
              </span>
            </div>
            <p>
              To learn more about your warranty,{" "}
              <span className="text-[#00ff00]">
                <Link to="https://fmppartnersnetwork.com/wp-content/uploads/2022/05/FMP-Coverage-Statement-05.2022.pdf">
                  Click Here
                </Link>
              </span>
            </p>
            <p>
              To learn more about roadside assistance,{" "}
              <span className="text-[#00ff00]">
                <Link to="https://fmppartnersnetwork.com/wp-content/uploads/2022/05/FMP-RSA-Benefit-Statment-125-05.2022.pdf">
                  Click Here
                </Link>
              </span>
            </p>
          </p>
        </Panel>
        <Panel
          title="What forms of payment do you accept?"
          isActive={activeIndex === 16}
          onShow={() => setActiveIndex(16)}
        >
          <p className="text-lg font-Urbanist tracking-wide font-medium">
            We accept cash, debit, & all major credit cards (3% fee). We currently do not accept tap to pay, or online payments.
          </p>
        </Panel>
      </div>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel bg-[#333333] text-white lg:max-w-[55vw] lg:mx-40">
      
        <h3 className="font-bold text-3xl font-Play text-[#00ff00] pt-8">{title}</h3>
        {isActive ? <p className="pt-4">{children}</p> : <button onClick={onShow} className="silverbg45 p-2 mt-4 text-stroke text-stroke-black text-stroke-fill-[#00ff00] font-Play text-xl font-black">show me</button>}
   
    </section>
  );
}