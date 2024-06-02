import { TestimonialCarousel } from '../shared/Carousel'

function Testimonials() {
    return(
        <div className="relative flex flex-col py-20 bg-[#333333] px-20 overflow-hidden">
            <div className="relative mx-auto max-w-7xl">
                <div className="justify-center pb-10 ">
                    <h3 className="text-6xl text-stroke-black text-stroke text-stroke-fill-white sm:text-4xl md:text-5xl lg:text-6xl uppercase  font-Bungee">Experience<br />
                    <span className="mt-8 text-stroke text-stroke-fill-black text-stroke-[#00ff00]">The High-End Mechanic Difference</span></h3>
                    <p className="max-w-3xl text-xl text-[#dddddd] font-Urbanist tracking-wider mt-4">
                        But don&apos;t take it from us. Here&apos;s what our customers have to say:
                    </p>
                </div>
            </div>
            <div>
                <div className="flex lg:mx-auto justify-center -mt-20">
                    <TestimonialCarousel />
                </div>
            </div>
        </div>
    )
}

export default Testimonials