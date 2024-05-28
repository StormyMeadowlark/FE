// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const brands = [
  { name: 'SCHEDULE', href: '#' },
  { name: 'ESTIMATE', href: '#' },
  { name: 'SERVICE', href: '#' },
  { name: 'SALES', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'CONTACT', href: '#' },
  { name: 'SHOP', href: '#' },
  { name: 'AUTO SCHOOL', href: '#' },
] 

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
    return(
      <div className="w-[60%]">
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
          <div className="block my-20 mx-[10%] justify-center text-Urbanist">
        <p
          className="inline-block h-[100%] w-[100%] text-justify text-3xl bg-black/75 p-10 rounded-2xl shadow-inner shadow-[#00ff00]/50 text-white"
        >
              HEM Automotive never disappoints. They repair in a timely mannerto keep
              with a fair price. Anytime I&apos;ve taken my vehicle there, Jason
              and crew have been upfront about the cost and kept me up to date
              with progress. Took my vehicle there to fix what I thought was a
              suspension type issue; HEM figured out it was the transmission b4
              any work was done. We were able to get warranty work taken care of
              because of their attention to detail.<br />
              <span className="flex justify-end text-xl">Author<br /></span>
              <span className='flex justify-end text-sm'>Location</span>
            </p>
          </div>
          <img
            src="https:///images.unsplash.com/photo-1656248948968164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
          />
        </Carousel>
      </div>
    )
  }
} 

export { TestimonialCarousel }

class SpecialsCarousel extends React.Component {
  render() {
    return(
      <div className="w-[60%]">
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
          <div className="block my-20 mx-[10%] justify-center ">
        <p
          className="inline-block h-[100%] w-[100%] text-justify text-3xl bg-black/75 p-8 rounded-3xl shadow-inner shadow-[#00ff00]/50"
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
          <img
            src="https:///images.unsplash.com/photo-1656248948968164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
          />
        </Carousel>
      </div>
    )
  }
} 

export { SpecialsCarousel }