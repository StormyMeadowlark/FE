
import Affordability from "/src/assets/images/Affordability.jpg?react"
import Alignment from "/src/assets/images/Alignment.jpg?react"
import Alignment2 from "/src/assets/images/Alignment2.jpg?react"
import AllServices from "/src/assets/images/AllServices.jpeg?react"
import Brakes from "/src/assets/images/Brakes.jpg?react"
function BrandsWeWorkWith() {
    return(
      <div className=" bg-[#00ff00]">
        <section className="flex mx-auto text-4xl py-4 text-stroke text-stroke-fill-[333333] text-stroke-white md:text-5xl lg:text-6xl uppercase font-Bungee max-w-7xl">
          <p className="flex flex-1 justify-center">Brands we work with</p>
        </section>
      <div className="grid place-items-center bg-[#00ff00] max-w-7xl mx-auto overflow-hidden pb-4 object-scale-down"> 
        <div className="gallery w-[300px] h-[50px] py-4">
          <span style={{"--i":1}}>
            <img className="" src={Affordability} alt="" />
          </span>
          <span style={{"--i":2}}>
            <img className="" src={Alignment} alt="" />
          </span>
          <span style={{"--i":3}}>
            <img className="" src={Alignment2}  alt="" />
          </span>
          <span style={{"--i":4}}>
            <img className="" src={AllServices} alt="" />
          </span>
          <span style={{"--i":5}}>
            <img className="" src={Brakes}  alt="" />
          </span>
</div>
</div>
</div>
    )
}

export default BrandsWeWorkWith