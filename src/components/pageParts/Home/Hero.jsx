import { Link } from 'react-router-dom'
import CornerHexagons from '../../../components/CornerHexagons.svg?react'
import GreenButton from '../../../utils/greenButton'
import HeaderTwo from './header2'
import Engine from "../../../assets/images/Engine.jpg?react"

export default function Hero() {
  return (
    <div className="">
      <div
        className="relative isolate overflow-hidden pt-60"
      >
        <img
          src={Engine}
          alt="front side of engine block"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[30%]"
          loading="lazy"
        />
        <div className="absolute -z-10 transform-gpu" aria-hidden="true">
          <CornerHexagons className="transform-gpu opacity-[50%] blur-sm aspect-[1155/678]" />
        </div>
        <div className="mx-auto max-w-6xl py-20">
          <div className="text-center">
            <HeaderTwo
              textOne="Breakdowns won't"
              textTwo="break you down"
              textThree="with your topeka, ks"
              textFour="High End Mechanics"
            />
            <div className=" pt-20 flex items-center justify-center gap-x-6 font-Play font-bold">
              <GreenButton href={"contact"} textarea="Contact Today" />
              <Link
                to={"services"}
                className="text-sm lg:text-xl font-semibold leading-6 text-white"
              >
                <span aria-hidden="true">View Services</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden rotate-180 "
          aria-hidden="true"
        >
          <CornerHexagons className="blur-sm aspect-[1155/678]  opacity-50 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] overflow-auto" />
        </div>
      </div>
    </div>
  );
}
