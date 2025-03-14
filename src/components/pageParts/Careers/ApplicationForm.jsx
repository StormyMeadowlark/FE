import { useState } from "react";
import axios from "axios";
import Engine from "../../../assets/images/HEM-Automotive-Crew-Candid.jpg"
import  "dotenv";



const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    expectedPay: "",
    education: "",
    jobHistory: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      await axios.post(
        `https://my-garage-ed2e46b8c87b.herokuapp.com/api/v1/application/submit-application`,
        formData
      );
      alert("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[#333333] font-Urbanist">
      <div className="relative isolate overflow-hidden pt-60">
        <img
          src={Engine}
          alt="Front side of an engine block"
          className="absolute inset-0 -z-10 h-[36rem] w-full object-cover object-scale object-top brightness-[30%] lazyload"
          loading="lazy"
        />
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <div className="text-white pb-16">
              <h2 className="text-[#00ff00] text-3xl md:text-5xl lg:text-7xl uppercase font-Bungee">
                Careers
              </h2>
            </div>
          </div>
          <div className="flex flex-1 px-4 justify-center">
            <div className="my-10 py-10 px-10 bg-[#333333] rounded-md shadow-md outline outline-1 outline-[#00ff00]">
              <h3 className="text-[#00ff00] text-3xl md:text-5xl lg:text-5xl uppercase font-Bungee pt-10">
                Join Our Crew
              </h3>
              <p className="text-xl text-white font-bold tracking-wider max-w-xl">
                Ready to shift your career into high gear? Fill out the form
                below and let&apos;s see if you&apos;re a fit to roll with us!
              </p>
              <form
                className="space-y-6 py-10 flex flex-col"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <textarea
                  name="experience"
                  placeholder="Experience"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <textarea
                  name="skills"
                  placeholder="Skills"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <textarea
                  name="education"
                  placeholder="Education"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <textarea
                  name="jobHistory"
                  placeholder="Job History"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <textarea
                  type="text"
                  name="otherInformation"
                  placeholder="Other information you wish to share"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <input
                  type="text"
                  name="expectedPay"
                  placeholder="Expected Pay"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
                />
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#00ff00] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-Play"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
