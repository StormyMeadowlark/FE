import { KeyIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import BestOfBestAutoRepair from "/src/assets/images/BestOfBest.png?react"

export default function ThankYou() {
  return (
    <div className="relative overflow-hidden bg-[#00ff00]">
      <div className="relative lg:mt-8 lg:pb-8 my-4">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-10">
          <div className="mx-auto max-w-xl px-10 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
            <div>
              <div>
                <span className="flex h-16 w-16 items-center justify-center hexagon bg-[#333333] text-white">
                  <KeyIcon className="h-12 w-12" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#333333] sm:text-3xl">
                  You are Key, THANK YOU!
                </h2>
                <p className="mt-4 text-lg font-Urbanist tracking-wider text-[#444444]">
                  Seriously, we appreciate you! In 2022 you voted & we were an
                  Auto Repair finalist for the Best of the Best in Topeka, KS.
                  Keep being awesome & lets go for winner in 2025! For now be
                  awesome & leave us a review!
                </p>
                <div className="flex mt-6 justify-between">
                  <div className="mx-4">
                    <Link
                      to="https://www.google.com/search?q=hem+automotive"
                      className="inline-flex rounded-md silverbg px-4 py-4 text-xl font-black shadow-xl border-b border-[#00ff00] shadow-[#222222]  font-Play text-center text-white"
                    >
                      Review on Google
                    </Link>
                  </div>
                  <div className="mx-4">
                    <Link
                      to="https://www.yelp.com/biz/hem-automotive-topeka"
                      className="inline-flex rounded-md silverbg px-4 py-4 text-xl font-black shadow-xl border-b border-[#00ff00] shadow-[#222222] font-Play text-center text-white"
                    >
                      Review on Yelp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl flex flex-1 lg:mt-8 mt-8 mx-10">
            <div className="flex flex-1 justify-center md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="lg:absolute lg:left-0 lg:h-full lg:w-auto "
                src={BestOfBestAutoRepair}
                alt="Best of the Best 2022 Finalist"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
