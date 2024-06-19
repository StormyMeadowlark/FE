import { KeyIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import BestOfBestAutoRepair from "/src/assets/images/BestOfBest.png?react"
import FMP from "/src/assets/images/FactoryMotorPartsPartnersNetwork.png?react";
import Snap from "/src/assets/images/SnapLogo.png?react";
import CarFax from "/src/assets/images/CarFax.png?react";

export default function ThankYou() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#00ff00] pt-10">
      <div className="relative pb-8 mb-4">
        <div className='bg-[#333333]/75 lg:rounded-2xl md:shadow-xl lg:shadow-black lg:max-w-7xl mx-auto px-10 pt-10'>
          <div className="relative">
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <h2 className="lg:pb-4 lg:text-5xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-black text-2xl md:text-4xl font-Bungee">
                        we&apos;ve got you covered,
                        <br />
                        backed by the names you trust
                      </h2>
                      <p className="font-Urbanist tracking-wider font-medium text-xl text-white">
                        As proud members of FMP Partners Network Warranty
                        Program, SNAP Financing, & CarFax Car Care Service Shop
                        Loyalty Program we have so much to offer!
                      </p>
                      <div className="flex justify-between lg:pt-4 lg:pb-8 py-4 text-center">
                        <Link
                          to="https://fmppartnersnetwork.com/register-warranty/"
                          className="flex basis-1/4 lg:basis-1/4 lg:px-3 px-1.5 md:-my-16 -my-8"
                        >
                          <div>
                            <img
                              src={FMP}
                              alt="Factory Motor Parts Logo"
                              className=""
                            />
                            <h3 className="text-xl font-Urbanist font-semibold tracking-wider text-[#00ff00] -my-4 lg:text-3xl">
                              12 Month / 12,000 Mile Warranty
                            </h3>
                          </div>
                        </Link>
                        <Link
                          to="https://snapf.in/fcWxYYK"
                          className="flex basis-1/4 lg:basis-1/4 lg:px-3 px-1.5 py-1"
                        >
                          <div>
                            <img
                              src={Snap}
                              alt="Snap Financing Logo"
                              className="bg-[#777777] rounded-full"
                            />
                            <h3 className="text-xl font-Urbanist font-semibold tracking-wider text-[#00ff00] my-4  lg:text-3xl">
                              Up to $5000 in Financing
                            </h3>
                          </div>
                        </Link>
                        <Link
                          to="https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ"
                          className="flex basis-1/4 lg:basis-1/4 lg:px-3 px-1.5 py-1"
                        >
                          <div>
                            <img
                              src={CarFax}
                              alt="CarFax Car Care Service Center Logo"
                              className=""
                            />
                            <h3 className="text-xl font-Urbanist font-semibold tracking-wider text-[#00ff00] my-4 px-2 lg:text-3xl">
                              Maintenance Remainders
                            </h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-10 pb-10">
            <div className="mx-auto max-w-xl px-10 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
              <div>
                <div>
                  <span className="flex h-20 w-20 items-center justify-center hexagon bg-[#00ff00] text-[#33333]">
                    <KeyIcon className="h-12 w-12" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-3xl">
                    You are Key, THANK YOU!
                  </h2>
                  <p className="mt-4 text-lg font-Urbanist tracking-wider text-[white]">
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
    </div>
  );
}
