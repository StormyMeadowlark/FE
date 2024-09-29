import { Link } from "react-router-dom";
import FMP from '/src/assets/images/FactoryMotorPartsPartnersNetwork.png?react'
import Snap from '/src/assets/images/SnapLogo.png?react'
import CarFax from '/src/assets/images/CarFax.png?react'
import Tools from "/src/assets/images/Tools.jpg?react"
import GreenTool from "/src/assets/images/ToolsWithGreenScrewDriver.jpg?react";
import HexagonThing from "/src/assets/images/Convenience2.jpg"

  export default function NamesYouTrust() {
    return (
      <div className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#00ff00]">
        <div className="relative">
          <div className="mx-auto lg:max-w-7xl lg:px-10 bg-[#333333]/75 rounded-t-2xl pt-10 drop-shadow-xl shadow-black">
            <div className="mx-auto max-w-xl px-10 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
              <div>
                <div>
                  <div className="relative">
                    <h2 className="lg:pt-8 lg:pb-4 lg:text-5xl  text-stroke text-stroke-fill-[#00ff00] text-stroke-black text-2xl md:text-4xl font-Bungee">
                      we&apos;ve got you covered,
                      <br />
                      backed by the names you trust
                    </h2>
                    <p className="font-Urbanist tracking-wider font-medium text-xl text-white">
                      As proud members of FMP Partners Network Warranty Program,
                      SNAP Financing, & CarFax Car Care Service Shop Loyalty
                      Program we have so much to offer!
                    </p>
                    <div className="flex flex-1 justify-between lg:pt-4 lg:pb-8 py-4 text-center">
                      <Link
                        to="https://fmppartnersnetwork.com/register-warranty/"
                        className="flex basis-1/3 lg:basis-1/4 lg:px-3 px-1.5 md:-my-16 -my-8"
                      >
                        <div>
                          <img
                            src={FMP}
                            alt="Factory Motor Parts Logo"
                            className=""
                          />
                          <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] -my-4 lg:text-3xl">
                            12 Month / 12,000 Mile Warranty
                          </h3>
                        </div>
                      </Link>
                      <Link
                        to="https://snapf.in/fcWxYYK"
                        className="flex basis-1/3 lg:basis-1/4 lg:px-3 px-1.5 py-1"
                      >
                        <div>
                          <img
                            src={Snap}
                            alt="Snap Financing Logo"
                            className="bg-[#777777] rounded-full"
                          />
                          <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] my-4  lg:text-3xl">
                            Up to $5000 in Financing
                          </h3>
                        </div>
                      </Link>
                      <Link
                        to="https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ"
                        className="flex basis-1/3 lg:basis-1/4 lg:px-3 px-1.5 py-1"
                      >
                        <div>
                          <img
                            src={CarFax}
                            alt="CarFax Car Care Service Center Logo"
                            className=""
                          />
                          <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] my-4  lg:text-3xl">
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
      </div>
    );
}