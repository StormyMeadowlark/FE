import { TestimonialCarousel } from '../shared/Carousel'

function Testimonials() {
    return (
      <div className="relative flex flex-col lg:py-20 py-8 bg-gradient-to-b from-[#00ff00] to-[#333333] px-10 text-wrap">
        <div className="relative mx-auto max-w-7xl">
          <div className="justify-center pb-4 md:pb-4">
            <h3 className="lg:text-6xl text-stroke-black text-stroke text-stroke-fill-white text-4xl md:text-5xl uppercase  font-Bungee">
              Experience
              <br />
              <span className="mt-8 text-stroke text-stroke-fill-black text-stroke-[#00ff00]">
                The High-End Mechanic Difference
              </span>
            </h3>
            <p className="max-w-3xl text-xl text-[#dddddd] font-Urbanist tracking-wider mt-4">
              But don&apos;t take it from us. Here&apos;s what our customers
              have to say:
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-1 justify-center">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    );
}

export default Testimonials