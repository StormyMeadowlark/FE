import CornerHexagons from '../components/CornerHexagons.svg?react'
import GreenButton from '../utils/greenButton';
export default function ErrorPage() {
    return(
        <div id="error-page">
            <div className='relative isolate overflow-hidden py-[13%] bg-black'>
          <img 
            src='/src/assets/images/Engine.jpg'
            alt='front side of engine block'
            className='absolute inset-0 -z-10 object-cover h-[100vh] w-full  brightness-[30%]'
          />
          <div
          className="absolute -z-10 transform-gpu"
          aria-hidden="true"
          >
          <CornerHexagons className="transform-gpu opacity-[50%] blur-sm aspect-[1155/678]" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
              <h2 className=' text-white px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-7xl uppercase bold font-Urbanist font-black py-14'>You&apos;ve encounted an Error with HEM Automotive.</h2>
              <h1 className=' text-white px-8 md:px-4 lg:px-0 text-xl md:text-3xl lg:text-5xl uppercase bold font-Urbanist font-extralight tracking-wide'>Breakdowns Won&apos;t Break<span className='font-black'> You</span> Down...<br /> it never said anything about us though.</h1>
            <div className=" pt-20 flex items-center justify-center gap-x-6 font-Play font-bold">
            <GreenButton href='/' textarea='Click Here to Return Home to Us!' />
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