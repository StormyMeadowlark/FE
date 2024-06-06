// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class BrandCarousel extends React.Component {
  render() {
    return (
      <div className="max-w-7xl">
        <Carousel
          stopOnHover
          autoPlay
          infiniteLoop
          axis="horizontal"
          showStatus={false}
          showThumbs={false}
          ariaLabel="Global"
          centerMode={true}
          centerSlidePercentage="33"
          showArrows={false}
          showIndicators={false}
        >
          <div className="">
            <img className="" src="https://www.factorymotorparts.com/application/files/6215/5908/0189/FVP_2018_VERIFIED_PROVEN_CMYK.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/2315/3475/2792/KYB_World_Class_Shocks__Struts.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/2916/8234/3167/MOOG-Color-PMS-ProblemSolver.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/5615/3475/2647/DENSO.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/6215/5908/0189/FVP_2018_VERIFIED_PROVEN_CMYK.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/2315/3475/2792/KYB_World_Class_Shocks__Struts.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/2916/8234/3167/MOOG-Color-PMS-ProblemSolver.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/5615/3475/2647/DENSO.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/6215/5908/0189/FVP_2018_VERIFIED_PROVEN_CMYK.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/2315/3475/2792/KYB_World_Class_Shocks__Struts.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/2916/8234/3167/MOOG-Color-PMS-ProblemSolver.png" alt="" />
          </div>
          <div>
            <img className="" src="https://www.factorymotorparts.com/application/files/5615/3475/2647/DENSO.png" alt="" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default BrandCarousel;

class ServiceCarousel extends React.Component {
  render() {
    return(
      <div>
        <Carousel
          stopOnHover
          autoPlay
          interval="3000"
          transitionTime="1500"
          infiniteLoop
          axis="horizontal"
          showStatus={false}
          showThumbs={false}
        >
          <div className="basis-1/2 p-10">
            <img 
            className= "block h-[100%] w-[100%]" 
            src="src/assets/images/OilEngine.jpg" 
            alt=""
            aria-hidden="true" />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/Diagnostics.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/Tire2.jpeg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/Alignment2.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/Brake3.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/SteeringSuspension.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/EngineReplace.jpeg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/HeatingAC.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/Electrical.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/EconomyLightDuty.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/Inspection.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="basis-1/2 p-10">
            <img
              className= "block h-[100%] w-[100%]"
              src="src/assets/images/AllServices.jpeg"
              alt=""
              aria-hidden="true"
            />
          </div>

        </Carousel>
      </div>
    )
  }
} 

export { ServiceCarousel }

class TestimonialCarousel extends React.Component {
  render() {
    return (
      <div className="lg:w-[60%] w-[100%]">
        <Carousel
          stopOnHover
          autoPlay
          interval="5000"
          transitionTime="1500"
          infiniteLoop
          axis="horizontal"
          showStatus={false}
          showThumbs={false}
        >
          <div className="mx-4 text-Urbanist">
            <p className="flex flex-col h-[100%] w-[100%] text-justify xl:text-3xl text-sm md:text-lg lg:text-2xl bg-black/75 p-10 rounded-2xl shadow-inner shadow-[#00ff00]/50 text-white">
              HEM Automotive never disappoints. They repair in a timely manner
              to keep with a fair price. Anytime I&apos;ve taken my vehicle
              there, Jason and crew have been upfront about the cost and kept me
              up to date with progress. Took my vehicle there to fix what I
              thought was a suspension type issue; HEM figured out it was the
              transmission b4 any work was done. We were able to get warranty
              work taken care of because of their attention to detail.
              <br />
              <span className="flex justify-end lg:text-xl md:text-normal text-sm">
                Catfish S.
                <br />
              </span>
              <span className="flex justify-end text-sm">Google</span>
            </p>
          </div>
          <div className="mx-4 text-Urbanist">
            <p className="flex flex-col h-[100%] w-[100%] text-justify xl:text-3xl text-sm md:text-lg lg:text-2xl bg-black/75 p-10 rounded-2xl shadow-inner shadow-[#00ff00]/50 text-white">
              Jason Worked on my 1993 Lexus ES300, gave me a great deal and the
              car has been running flawlessly ever since he put his hands on it.
              10/10 thank you
              <br />
              <span className="flex justify-end lg:text-xl md:text-normal text-sm">
                Gordan Haight
                <br />
              </span>
              <span className="flex justify-end text-sm">Facebook</span>
            </p>
          </div>
          <div className="mx-4 text-Urbanist">
            <p className="flex flex-col h-[100%] w-[100%] text-justify xl:text-3xl text-sm md:text-lg lg:text-2xl bg-black/75 p-10 rounded-2xl shadow-inner shadow-[#00ff00]/50 text-white">
              Took my sons jeeps to HEMS to find out what was going wrong with
              it. They didn&apos;t overcharge me like another shop was trying to
              do. They found the problem and repaired it. It cme out cheaper
              than the estimate. Would recommend and will be back
              <br />
              <span className="flex justify-end lg:text-xl md:text-normal text-sm">
                Chad Nelson
                <br />
              </span>
              <span className="flex justify-end text-sm">Facebook</span>
            </p>
          </div>
          <div className="mx-4 text-Urbanist">
            <p className="flex flex-col h-[100%] w-[100%] text-justify xl:text-3xl text-sm md:text-lg lg:text-2xl bg-black/75 p-10 rounded-2xl shadow-inner shadow-[#00ff00]/50 text-white">
              Jason did great work on my car when it was having multiple isues!
              He is affordable and honest, along with getting it fixed in a
              timely manner!!
              <br />
              <span className="flex justify-end lg:text-xl md:text-normal text-sm">
                Shelby Shaw
                <br />
              </span>
              <span className="flex justify-end text-sm">Facebook</span>
            </p>
          </div>
          <div className="mx-4 text-Urbanist">
            <p className="flex flex-col h-[100%] w-[100%] text-justify xl:text-3xl text-sm md:text-lg lg:text-2xl bg-black/75 p-10 rounded-2xl shadow-inner shadow-[#00ff00]/50 text-white">
              We&apos;ve had many things done on our vehilces with HEM; from a
              routine oil change, and tires, to diagnosing and fixing a broken
              car horn, even rebuilding the top of on of our truck&apos;s 5.7
              hemi engine. The people here have always been very kind,
              courteous, patient, and professional.
              <br />
              <span className="flex justify-end lg:text-xl md:text-normal text-sm">
                Joe Hawkinson
                <br />
              </span>
              <span className="flex justify-end text-sm">Google</span>
            </p>
          </div>
          <div className="mx-4 text-Urbanist">
            <p className="flex flex-col h-[100%] w-[100%] text-justify xl:text-3xl text-sm md:text-lg lg:text-2xl bg-black/75 p-10 rounded-2xl shadow-inner shadow-[#00ff00]/50 text-white">
              Jason at 8 AM has done a wonderful job on both of my vehicles he
              has been stright up and honest about the price and whether it
              isworth fixing or not I absolutely loved this place and I would
              recommend it to everyone if you want an honest mechanic that does
              a very good job and stands behind his work then give ATM a call
              <br />
              <span className="flex justify-end lg:text-xl md:text-normal text-sm">
                Christina Alley
                <br />
              </span>
              <span className="flex justify-end text-sm">Google</span>
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
} 

export { TestimonialCarousel }

class SpecialsCarousel extends React.Component {
  render() {
    return(
      <div className="">
        <Carousel
          stopOnHover
          autoPlay
          interval="3000"
          transitionTime="1500"
          infiniteLoop
          axis="horizontal"
          showStatus={false}
          showThumbs={false}
        >
          <div className="block lg:my-20 lg:mx-[10%] justify-center ">
        <p
          className="inline-block h-[100%] w-[100%] text-justify lg:text-3xl text-sm bg-black/75 lg:p-8 rounded-3xl shadow-inner shadow-[#00ff00]/50"
        >
              HEM Automotive never disappoints. They repair in a timely mannerto keep
              with a fair price. Anytime I&apos;ve taken my vehicle there, Jason
              and crew have been upfront about the cost and kept me up to date
              with progress. Took my vehicle there to fix what I thought was a
              suspension type issue; HEM figured out it was the transmission b4
              any work was done. We were able to get warranty work taken care of
              because of their attention to detail.
            </p>
          </div>
        </Carousel>
      </div>
    )
  }
} 

export { SpecialsCarousel }