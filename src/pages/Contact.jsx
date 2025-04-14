import { useState } from "react";
import axios from "axios";
import HemAutomotiveMap from "../components/pageParts/Contact/map";
import SEO from "../components/SEO";

import Engine from "../assets/images/HEM-Automotive-Front-Desk.jpg";
import { PhoneIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

import FacebookIcon from "../assets/PNGicons/FacebookIcon.png";
import YouTubeIcon from "../assets/PNGicons/YouTubeIcon.png";
import TikTokIcon from "../assets/PNGicons/TikTokIcon.png";
import InstagramIcon from "../assets/PNGicons/InstagramIcon.png";
import GoogleIcon from "../assets/PNGicons/GoogleIcon.png";
import CarFaxIcon from "../assets/PNGicons/CarfaxIcon.png";
import YelpIcon from "../assets/PNGicons/YelpIcon.png";

const socials = [
  { title: "Facebook", href: "https://www.facebook.com/HEMautomotive/", icon: FacebookIcon },
  { title: "Youtube", href: "https://www.youtube.com/@hemautomotive", icon: YouTubeIcon },
  { title: "Tiktok", href: "https://www.tiktok.com/@hemautomotive", icon: TikTokIcon },
  { title: "Instagram", href: "https://www.instagram.com/hemautomotive/", icon: InstagramIcon },
];

const reviews = [
  { title: "Google", href: "https://www.google.com/search?q=hem+automotive", icon: GoogleIcon },
  { title: "CarFax", href: "https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ", icon: CarFaxIcon },
  { title: "Yelp", href: "https://www.yelp.com/biz/hem-automotive-topeka", icon: YelpIcon },
];

const List = ({ items }) => (
  <ul className="flex space-x-4">
    {items.map((item) => (
      <li key={item.title}>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <img src={item.icon} alt={item.title} className="h-8 w-8 transition-transform duration-300 ease-in-out transform hover:scale-125" />
        </a>
      </li>
    ))}
  </ul>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("Submit");
  const [result, setResult] = useState("");

  // Validation functions
  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    else if (formData.firstName.length < 2 || formData.firstName.length > 50)
      errors.firstName = "First name must be between 2 and 50 characters";
    if (!formData.lastName) errors.lastName = "Last name is required";
    else if (formData.lastName.length < 2 || formData.lastName.length > 50)
      errors.lastName = "Last name must be between 2 and 50 characters";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      errors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");
  const errors = validate();
  setFormErrors(errors);

  if (Object.keys(errors).length === 0) {
    try {
      await axios.post(
        `https://my-garage-ed2e46b8c87b.herokuapp.com/api/v1/email/send-quote`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
        setResult(
          "Thank you for your submission! HEM Automotive will reach out to you shortly!"
        );
    } catch (error) {
      console.error("Error sending quote request:", error);
      setResult("Oh no! Please try again. We didn't get your request!");
    } finally {
      setStatus("Submit");
    }
  } else {
    setStatus("Submit");
    setResult("Please fix the errors in the form before submitting.");
  }
};

  return (
    <div className="bg-[#333333] font-Urbanist">
    <SEO page="contact" />
      <div className="relative isolate overflow-hidden pt-60">
        <img
          src={Engine}
          alt="Front side of an engine block"
          className="absolute inset-0 -z-10 h-[36rem] w-full object-cover object-scale brightness-[30%] lazyload"
          loading="lazy"
        />
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <div className="text-white pb-16">
              <h2 className="text-[#00ff00] text-3xl md:text-5xl lg:text-7xl uppercase font-Bungee">
                Contact
              </h2>
              <p className="text-xl text-[#aaaaaa] font-bold tracking-wider">
                Breakdowns won&apos;t break you down.
              </p>
            </div>
            <div className="my-10 py-10 bg-[#333333] rounded-md shadow-md outline outline-1 outline-[#00ff00]">
              <div className=" flex flex-col lg:flex-row justify-evenly ">
                <div className="w-full lg:w-[40%]">
                  <div className="text-white pb-12">
                    <h3 className="text-HEMgreen text-3xl md:text-5xl lg:text-4xl uppercase font-Bungee text-left py-4 px-4">
                      Book An Appointment
                    </h3>
                    <p className="text-pretty text-left tracking-wide px-4">
                      Call or come on down to the shop. Our service advisor is
                      happy to schedule an appointment. Our high-end mechanics
                      will give your car the care it deserves.
                    </p>
                  </div>
                  <div className="hidden lg:flex items-center py-4">
                    <div className="hexagon bg-[#00ff00] h-20 flex items-center justify-center aspect-[6/5]">
                      <ClockIcon
                        className="w-12 h-12"
                        aria-hidden="true"
                        stroke="black"
                        opacity={0.7}
                      />
                    </div>
                    <div className="px-8">
                      <h4 className="font-Urbanist font-black tracking-wide text-3xl text-[#aabbaa] pb-2 text-left">
                        Hours
                      </h4>
                      <address className="text-left text-xl text-white">
                        Temporarily Closed
                      </address>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center py-4 pb-20">
                    <div className="hexagon bg-[#00ff00] h-20 flex items-center justify-center aspect-[6/5]">
                      <MapPinIcon
                        className="w-12 h-12"
                        aria-hidden="true"
                        stroke="black"
                        opacity={0.7}
                      />
                    </div>
                    <div className="px-8">
                      <h4 className="font-Urbanist font-black tracking-wide text-3xl text-stroke-black text-stroke pb-2 text-left text-[#aabbaa]">
                        Address
                      </h4>
                      <address className="text-left text-xl text-white">
                        315 SW 32nd Terrace
                        <br />
                        Topeka, KS 66111
                      </address>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <h3 className="text-[#00ff00] text-3xl md:text-5xl lg:text-5xl uppercase font-Bungee pt-10">
                    Request a Quote or Test drive
                  </h3>
                  <form className="space-y-6 py-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-x-4">
                      <div className="basis-1/2">
                        <label
                          htmlFor="firstName"
                          className="block text-base font-medium leading-6 text-white tracking-wide text-left"
                        >
                          First Name:
                        </label>
                        <div className="mt-2">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            placeholder="First Name"
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                            maxLength="50"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          {formErrors.firstName && (
                            <div className="error text-red-500">
                              {formErrors.firstName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="basis-1/2">
                        <label
                          htmlFor="lastName"
                          className="block text-base font-medium leading-6 text-white tracking-wide text-left"
                        >
                          Last Name:
                        </label>
                        <div className="mt-2">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            placeholder="Last Name"
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                            maxLength="50"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          {formErrors.lastName && (
                            <div className="error text-red-500">
                              {formErrors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4">
                      <div className="basis-1/3">
                        <label
                          htmlFor="phoneNumber"
                          className="block text-base font-medium leading-6 text-white tracking-wide text-left"
                        >
                          Phone Number:
                        </label>
                        <div className="mt-2">
                          <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            placeholder="7857302900"
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                            minLength="10"
                            maxLength="10"
                            pattern="^[0-9]{10}$"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                          {formErrors.phoneNumber && (
                            <div className="error text-red-500">
                              {formErrors.phoneNumber}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="basis-2/3">
                        <label
                          htmlFor="email"
                          className="block text-base font-medium leading-6 text-white tracking-wide text-left"
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
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {formErrors.email && (
                            <div className="error text-red-500">
                              {formErrors.email}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-base font-medium leading-6 text-white tracking-wide text-left"
                      >
                        Leave us a message
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Provide as many details as you feel necessary"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {formErrors.message && (
                          <div className="error text-red-500">
                            {formErrors.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#00ff00] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-Play"
                      >
                        {status}
                      </button>
                      <h5 className="text-base font-medium leading-6 text-white tracking-wide text-left">
                        {result}
                      </h5>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mx-10 border-t-8 border-[#00ff00]">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="p-2.5 text-[#00ff00] text-center mt-2">
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0 md:space-x-10">
                      <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h5 className="pb-2 text-2xl font-Play">Follow Us</h5>
                        <div className="flex justify-center">
                          <List items={socials} />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <h5 className="pb-2 text-2xl font-Play">
                          Leave Us a Review
                        </h5>
                        <div className="flex justify-center">
                          <List items={reviews} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 justify-center">
              <HemAutomotiveMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;