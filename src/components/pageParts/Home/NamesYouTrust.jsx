import { Link } from "react-router-dom";
import FMP from '/src/assets/images/FactoryMotorPartsPartnersNetwork.png?react'
import Snap from '/src/assets/images/SnapLogo.png?react'
import CarFax from '/src/assets/images/CarFax.png?react'
import Tools from "/src/assets/images/tools.jpg?react"
import Car from "/src/assets/images/Quality2.jpg?react"
import HexagonThing from "/src/assets/images/Convenience2.jpg"

  export default function NamesYouTrust() {
    return (
      <div className="overflow-hidden bg-[#333333] pb-10 text-white px-10 pt-4">
        <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
          <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>
          <div className="relative max-w-7xl">
            <h2 className="lg:pt-8 lg:pb-4 lg:text-5xl lg:max-w-5xl text-stroke text-stroke-fill-[#00ff00] text-stroke-black text-3xl md:text-4xl font-Bungee">
              we&apos;ve got you covered,
              <br />
              backed by the names you trust
            </h2>
            <div className="lg:flex lg:flex-1 justify-between lg:pt-4 lg:pb-8 py-4">
              <Link
                to="https://fmppartnersnetwork.com/register-warranty/"
                className="lg:basis-1/4 lg:px-3 basis-1/3 px-1.5 py-1"
              >
                <img src={FMP} alt="Factory Motor Parts Logo" className="" />
              </Link>
              <Link
                to="https://snapf.in/fcWxYYK"
                className="flex basis-1/3 lg:basis-1/4 lg:px-3 px-1.5 py-1"
              >
                <img
                  src={Snap}
                  alt="Snap Financing Logo"
                  className="bg-[#777777] rounded-full"
                />
              </Link>
              <Link
                to="https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ"
                className="flex basis-1/3 lg:basis-1/4 lg:px-3 px-1.5 py-1"
              >
                <img
                  src={CarFax}
                  alt="CarFax Car Care Service Center Logo"
                  className=""
                />
              </Link>
            </div>
            <p className="font-Urbanist tracking-wider font-medium text-xl text-white lg:max-w-3xl">
              As proud members of FMP Partners Network Warranty Program, SNAP
              Financing, & CarFax Car Care Service Shop Loyalty Program we have so much to offer!
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-3xl">
                12 Month / 12,000 Mile Warranty
              </h3>
              <p className="mt-4 text-lg font-Urbanist tracking-wider">
                Don&apos;t be surprised by a breakdown. Factory Motor Parts
                Network Partners Warranty Program offers one call claims,
                roadside assistance & many other benefits. After you activate
                it. Activate your warranty, just go do it.
              </p>
              <div className="rounded-full px-3 my-4 text-sm leading-6 text-gray-400 ring-1 ring-white/10 shadow-xl shadow-black border-b border-[#00ff00] font-Play">
                <div className="">
                  <Link
                    to="https://fmppartnersnetwork.com/register-warranty/"
                    className="font-semibold text-white"
                  >
                    <span className="hidden md:visible">
                      Been to the shop recently?{" "}
                    </span>
                    <span className="inset-0" aria-hidden="true" />
                    Activate Your Warranty.
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={HexagonThing} className="hexagon aspect-[6/5]" />
            </div>
          </div>
          <svg
            className="absolute right-full hidden translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={300}
            height={700}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
          <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-3xl my-4">
                  Up to $5000 in Financing
                </h3>
                <p className="mt-4 text-lg font-Urbanist tracking-wider">
                  Break downs suck when you aren&apos;t prepared, we understand.
                  Snap Financing offers financing for parts & repairs between
                  $300-$5000. Get approved before repairs are made with no
                  credit hit.
                </p>
                <div className="rounded-full px-3 my-4 text-sm leading-6 text-gray-400 ring-1 ring-white/10 shadow-xl shadow-black border-b border-[#00ff00] font-Play">
                  <div className="">
                    <Link
                      to="https://snapf.in/fcWxYYK"
                      className="font-semibold text-white"
                    >
                      <span className="font-light">
                        Interested in Financing?{"  "}
                      </span>
                      <span className="hidden md:visible" aria-hidden="true">
                        Click Here to Apply
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <img src={Tools} className="hexagon aspect-[6/5]" />
            </div>
          </div>
          <div className="relative my-4 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-3xl">
                Maintenance Remainders
              </h3>
              <p className="mt-4 text-lg font-Urbanist tracking-wider">
                As a member of CarFax Car Care Service Shop Loyalty Program, you
                have the option to receive a monthly vehicle health dashboard, &
                reminders when services are due via email, after your first
                visit with us.
              </p>
              <div className="rounded-full px-3 my-4 text-sm  text-gray-400 ring-1 ring-white/10 shadow-xl shadow-black border-b border-[#00ff00] font-Play">
                <div className="">      
                <Link
                    to="https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ"
                    className="font-semibold text-white"
                  >
                  <span className="font-light">
                    Want to receive reminders?{" "}
                  </span>
            
                    <span className="hidden md:visible" aria-hidden="true">
                      Click Here to Make a CarFax Account
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={Car} className="hexagon aspect-[6/5] z-10" />
            </div>
            <svg
              className="absolute left-full hidden -translate-x-1/2 translate-y-1/4 transform lg:block z-0"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }