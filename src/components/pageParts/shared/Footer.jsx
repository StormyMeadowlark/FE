import { ClockIcon, PhoneIcon, MapPinIcon, HandThumbUpIcon } from "@heroicons/react/24/outline"
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react"
  export default function Footer() {

    return (
      <footer className="bg-[#333333]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="border-y border-black silverbg shadow-xl shadow-black outline outline-black justify-content-center py-20">
          <div className="md:flex max-w-7xl mx-auto">
            <div className="flex justify-start">
              <h3 className="text-6xl text-stroke-black text-stroke text-stroke-fill-[#00ff00] sm:text-4xl md:text-5xl lg:text-6xl uppercase font-Bungee">Stay in the know</h3>
            </div>
            <div className="flex flex-1 justify-end">
              <form className="font-Play ">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="rounded-2xl bg-[#333333] border-b border-[#00ff00] font-Play md:pr-52 mr-2 py-4"
                  placeholder="Email Address"
                />
                <div className="text-sm font-Play inline-flex">
                  <button
                    type="submit"
                    className="rounded-md bg-[#00ff00] px-6 py-1 text-lg font-semibold text-[#333333] shadow-lg hover:bg-[#00cc00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#00dd00] font-Play shadow-black hover:text-white hover:scale-[95%] "
                  >
                    Enter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>












      <div className="max-w-7xl mx-auto text-white font-Play py-20">
        <div className="flex flex-1 justify-between">
          <div className="flex basis-3/4">
            <div>
              <Logo />
            </div>
            <div>
              <div className='translate-y-6 flex flex-col px-10 text-4xl'>
                    <div className="py-1">
                      <a href='#' className='text-md text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>SCHEDULE</a>
                    </div>
                    <div className="py-1">
                      <a href='#' className='text-md text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>ESTIMATE</a>
                    </div>
                    <div className="py-1">
                      <a href='#' className='text-md text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>SERVICE</a>
                    </div>
                    <div className="py-1">
                      <a href='#' className='text-md text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>AUTO SCHOOL</a>
                    </div>
              </div>
            </div>
          </div>









            <div className="my-10">
              <div className='flex flex-col align-middle text-[#eeeeee]'>
                <div className='hidden lg:flex lg:items-center pb-4'>
                  <PhoneIcon className=' w-6 h-6 mr-3 hover:fill-[#00FF00] ease-linear duration-150' aria-hidden='true' stroke='#00FF00' />
                  <address>
                    <a className='not-italic text-xl focus:outline focus:outline-[#00FF00]' href='#'>785.730.2900</a>
                  </address>
                </div>
                <div className='hidden lg:flex lg:items-center pb-4'>
                  <ClockIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' />
                  <address>
                    <a className='not-italic text-xl focus:outline focus:outline-[#00FF00]' href='#'>Monday - Friday<br />8:00 am - 4:00 pm </a>
                  </address>
                </div>
                <div className='hidden lg:flex lg:items-center'>
                  <MapPinIcon className=' w-6 h-6 mr-3 hover:fill-[#00FF00] ease-linear duration-150' aria-hidden='true' stroke='#00FF00' />
                  <address>
                    <a className='not-italic text-xl focus:outline focus:outline-[#00FF00]' href='#'>315 SW 32nd Terrace<br />Topeka, KS 66611</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
      </div>















      <div className="border-t border-[#00ff00] silverbg py-2">
        <div className="max-w-7xl mx-auto flex">
          <div className="flex flex-1 justify-between">
            <div>
              <a className="font-Play text-[#00ff00] tracking-wide" href='#'>Website Designed & Maintained by:<br /> Stormy Meadowlark Design Co.</a>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-end">
                <a className="text-sm font-Play tracking-wide hover:scale-105 hover:font-black" href="#">Legal</a>
              </div>
              <div>
                <h3 className="text-sm text-Play tracking-wide">&copy; 2024 HEM AUTO LLC</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}