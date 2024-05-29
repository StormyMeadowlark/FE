import CornerHexagons from '../../../components/CornerHexagons.svg?react'
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
            <h1 className=" text-white text-3xl md:text-5xl lg:text-7xl uppercase bold font-Urbanist font-black">
              Breakdowns won&apos;t<br />break you down<br /><br />with your Topeka, KS<br />high end mechanics
            </h1>
            <div className="pb-40 pt-20 flex items-center justify-center gap-x-6 font-Play font-bold">
              <a
                href="#"
                className="rounded-sm bg-[#00ff00] px-3.5 py-2.5 text-lg lg:text-2xl font-semibold text-[#333333] hover:text-white shadow-lg shadow-black hover:bg-[#00cc00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-[98%] focus-visible:bg-[#00dd00] "
              >
                Call to Schedule
              </a>
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
