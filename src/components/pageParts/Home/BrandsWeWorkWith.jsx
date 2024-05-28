import BrandCarousel from "../shared/Carousel"

function BrandsWeWorkWith() {
    return(
        <div className="flex flex-col justify-center py-10 bg-[#00ff00]">
            <div className="flex justify-center pb-5 text-6xl text-stroke-[#333333] text-stroke text-stroke-fill-white sm:text-4xl font-Bungee">
                <h3 className="">Brands We Trust</h3>
            </div>
            <div className="flex justify-center">
                <BrandCarousel />
            </div>
        </div>
    )
}

export default BrandsWeWorkWith