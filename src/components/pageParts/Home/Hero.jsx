import CornerHexagons from '../../../components/CornerHexagons.svg?react'
import GreenButton from '../../../utils/greenButton'
import HeaderTwo from './header2'
export default function Hero() {
  return (
    <div className=''>
        <div className='relative isolate overflow-hidden pt-60'>
          <img 
            src='src/assets/images/Engine.jpg'
            alt='front side of engine block'
            className='absolute inset-0 -z-10 h-full w-full object-cover brightness-[30%]'
          />
          <div
          className="absolute -z-10 transform-gpu"
          aria-hidden="true"
          >
          <CornerHexagons className="transform-gpu opacity-[50%] blur-sm aspect-[1155/678]" />
        </div>
        <div className="mx-auto max-w-6xl py-20">
          <div className="text-center">
              <HeaderTwo textOne='Breakdowns won&apos;t' textTwo='break you down' textThree='with your topeka, ks' textFour='High End Mechanics' />
            <div className=" pt-20 flex items-center justify-center gap-x-6 font-Play font-bold">
            <GreenButton href='#' textarea='Call to Schedule' />
              <a href="#" className="text-sm lg:text-xl font-semibold leading-6 text-white hover:text-[#00ff00]">
                 <span aria-hidden="true">View Services</span>
              </a>
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
  )
}
