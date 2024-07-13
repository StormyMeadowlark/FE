import Engine from "../assets/images/Car.jpg?react";
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,

} from "@heroicons/react/24/outline";

import FacebookIcon from "../assets/svgIcons/FacebookIcon.svg?react";
import YouTubeIcon from "../assets/svgIcons/YouTubeIcon.svg?react";
import TikTokIcon from "../assets/svgIcons/TikTokIcon.svg?react";
import TwitterIcon from "../assets/svgIcons/TwitterIcon.svg?react";
import InstagramIcon from "../assets/svgIcons/InstagramIcon.svg?react";
import GoogleIcon from "../assets/svgIcons/GoogleIcon.svg?react";
import CarFaxIcon from "../assets/svgIcons/CarFaxIcon.svg?react";
import YelpIcon from "../assets/svgIcons/YelpIcon.svg?react";
import List from "../components/pageParts/shared/Socials"
import VIN from "../components/pageParts/Contact/VIN";

    const socials = [
      {
          title: 'Facebook',
          href: 'https://www.facebook.com/HEMautomotive/',
          icon: FacebookIcon,
      },
      {
          title: 'Youtube',
          href: 'https://www.youtube.com/@hemautomotive',
          icon: YouTubeIcon,
      },
      {
          title: 'Tiktok',
          href: 'https://www.tiktok.com/@hemautomotive',
          icon: TikTokIcon,
      },
      {
          title: 'X',
          href: 'https://www.x.com/@hemautomotive',
          icon: TwitterIcon,
      },
      {
          title: 'Instagram',
          href: 'https://www.instagram.com/hemautomotive/',
          icon: InstagramIcon,
      },
  ]

  const reviews = [
    {
        title: 'Google',
        href: 'https://www.google.com/search?q=hem+automotive',
        icon: GoogleIcon,
    },
    {
      title: 'CarFax',
      href: 'https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ',
      icon: CarFaxIcon,
  },
    {
        title: 'Yelp',
        href: 'https://www.yelp.com/biz/hem-automotive-topeka',
        icon: YelpIcon,
    },

]
const Contact = () => {
  return (
    <div className="bg-[#333333] font-Urbanist">
      <div className="relative isolate overflow-hidden pt-60">
        <img
          src={Engine}
          alt="front side of engine block"
          className="absolute inset-0 -z-10 h-[36rem] w-full object-cover object-scale brightness-[30%]"
          loading="lazy"
        />
        <div className="mx-auto max-w-[100rem]">
          <div className="text-center">
            <div className="text-white pb-16">
              <h2 className=" text-stroke text-stroke-fill-[#00ff00] text-stroke-[#333333] px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-7xl uppercase font-Bungee font-black">
                Contact
              </h2>
              <p className="relative text-xl text-[#aaaaaa] font-bold font-Urbanist tracking-wider">
                Breakdowns won&apos;t break you down.{" "}
              </p>
            </div>
            <div className="my-10 py-10 bg-[#333333] flex flex-1 justify-evenly rounded-md shadow-md shadow-[#00ff00]  outline outline-1 outline-[#00ff00]">
              <div className="">
                <div className="text-white pb-12  max-w-xl">
                  <h3 className=" text-stroke text-stroke-fill-[#00ff00] text-stroke-[#111111] px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-4xl uppercase font-Bungee text-left py-4">
                    Book An Appointment
                  </h3>
                  <p className="text-pretty text-left font-Urbanist tracking-wide">
                    Call or come on down to the shop. Our service advisor is
                    happy to schedule an appointment. Our high end mechanics
                    will give your car the care it deservers.
                  </p>
                </div>

                <div className="hidden lg:flex lg:items-center py-4">
                  <div className="hexagon bg-[#00ff00] h-20 content-center">
                    <div className="w-20 flex justify-center">
                      <ClockIcon
                        className="w-12 h-12"
                        aria-hidden="true"
                        stroke="black"
                        opacity={0.7}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-Urbanist font-black tracking-wide text-3xl text-stroke-fill-[#aaaaaa] text-stroke text-stroke-black pb-2 text-left px-8">
                      Hours
                    </h4>
                    <address className="text-left px-10">
                      <span className="not-italic text-xl text-white">
                        Monday - Friday
                        <br />
                        8:00 am - 4:00 pm{" "}
                      </span>
                    </address>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center py-4">
                  <div className="hexagon bg-[#00ff00] h-20 content-center">
                    <div className="w-20 flex justify-center">
                      <PhoneIcon
                        className="w-12 h-12"
                        aria-hidden="true"
                        stroke="black"
                        opacity={0.7}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-Urbanist font-black tracking-wide text-3xl text-stroke-fill-[#aaaaaa] text-stroke text-stroke-black pb-2 text-left px-8">
                      Phone
                    </h4>
                    <address className="text-left px-10">
                      <span className="not-italic text-xl  text-white">
                        785.730.2900
                      </span>
                    </address>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center py-4 pb-20">
                  <div className="hexagon bg-[#00ff00] h-20 content-center">
                    <div className="w-20 flex justify-center">
                      <MapPinIcon
                        className="w-12 h-12"
                        aria-hidden="true"
                        stroke="black"
                        opacity={0.7}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-Urbanist font-black tracking-wide text-3xl text-stroke-fill-[#aaaaaa] text-stroke text-stroke-black pb-2 text-left px-8">
                      Address
                    </h4>
                    <address className="text-left px-10">
                      <span className="not-italic text-xl text-white">
                        315 SW 32nd Terrace
                        <br />
                        Topeka, KS 66111{" "}
                      </span>
                    </address>
                  </div>
                </div>
                <div className="pt-10 border-t-8 border-[#00ff00]">
                  <h4 className="font-Urbanist font-black tracking-wide text-3xl text-stroke-fill-[#aaaaaa] text-stroke text-stroke-black pb-2 text-left px-8">
                    Follow Us
                  </h4>
                  <div className="basis-[80rem] max-w-7xl">
                    <div className="h-16">
                      <List socials={socials} />
                    </div>
                    <h4 className="font-Urbanist font-black tracking-wide text-3xl text-stroke-fill-[#aaaaaa] text-stroke text-stroke-black pb-2 text-left px-8">
                      Leave us a Review
                    </h4>
                    <div>
                      <List socials={reviews} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className=" text-stroke text-stroke-fill-[#00ff00] text-stroke-[#333333] px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-5xl uppercase font-Bungee font-black pt-10">
                  Request a Quote
                </h3>
                <form className="space-y-6 py-10">
                  <div>
                    <h3
                      className="block text-base font-medium leading-6 text-white
                font-Urbanist tracking-wide text-left"
                    >
                      What kind of customer are you?
                      <p className="text-[.8rem] text-[#aaaaaa]">
                        Defaults to retail
                      </p>
                    </h3>
                    <div className="flex pt-4">
                      <input
                        type="radio"
                        id="Retail"
                        name="customerCategory"
                        value="Retail"
                        className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                        defaultChecked
                      />
                      <label
                        htmlFor="Retail"
                        className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                      >
                        {" "}
                        Retail
                      </label>

                      <input
                        type="radio"
                        id="Dealership"
                        name="customerCategory"
                        value="Dealership"
                        className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                      />
                      <label
                        htmlFor="Dealership"
                        className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                      >
                        {" "}
                        Dealership
                      </label>

                      <input
                        type="radio"
                        id="Fleet"
                        name="customerCategory"
                        value="Fleet"
                        className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                      />
                      <label
                        htmlFor="Fleet"
                        className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                      >
                        {" "}
                        Fleet
                      </label>

                      <input
                        type="radio"
                        id="Other"
                        name="customerCategory"
                        value="Other"
                        className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                      />
                      <label
                        htmlFor="Other"
                        className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                      >
                        {" "}
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="basis-[50%]">
                      <label
                        htmlFor="FirstName"
                        className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                      >
                        First Name:
                      </label>
                      <div className="mt-2">
                        <input
                          id="firstName"
                          name="firstName"
                          type="Name"
                          required
                          placeholder="FirstName"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                          maxLength="100"
                          pattern="[a-zA-Z]"
                        />
                      </div>
                    </div>

                    <div className="basis-[50%]">
                      <label
                        htmlFor="LastName"
                        className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                      >
                        Last Name:
                      </label>
                      <div className="mt-2">
                        <input
                          id="LastName"
                          name="LastName"
                          type="Name"
                          required
                          placeholder="LastName"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                          maxLength="100"
                          pattern="[a-zA-Z]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="basis-[30%]">
                      <label
                        htmlFor="PhoneNumber"
                        className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                      >
                        Phone Number:
                      </label>
                      <div className="mt-2">
                        <input
                          id="PhoneNumber"
                          name="PhoneNumber"
                          type="PhoneNumber"
                          placeholder="7857302900"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                          minLength="10"
                          maxLength="10"
                          pattern="^[0-9]{10}$"
                        />
                      </div>
                    </div>

                    <div className="basis-[70%]">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                      >
                        Email:
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="HEMautomotive@example.com"
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <VIN />
                  </div>
                  <div>
                    <label
                      htmlFor="EmailBody"
                      className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                    >
                      What repair or maintenance needs done?
                    </label>

                    <div className="mt-2">
                      <textarea
                        placeholder="Provide as many details as you feel necessary"
                        id="EmailBody"
                        name="EmailBody"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#00ff00] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-Play"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;