import useHover from "../../../hooks/useHover"
import ListServices from "../shared/ListServices"
function ServiceOfferings() {
  const services= [
    {
      title: 'Preventative Maintenance',
      href: '#',
      icon: "src/assets/images/OilEngine.jpg",
    },
    {
      title: 'Diagnostics',
      href: '#',
      icon: "src/assets/images/Diagnostics.jpg",
    },
    {
      title: 'Tires',
      href: '#',
      icon: 'src/assets/images/Tire2.jpeg',
    },
    {
      title: 'Alignments',
      href: '#',
      icon: 'src/assets/images/Alignment2.jpg',
    },
    {
      title: 'Brakes',
      href: '#',
      icon: 'src/assets/images/Brake3.jpg',
    },
    {
      title: 'Steering & Suspension',
      href: '#',
      icon: 'src/assets/images/SteeringSuspension.jpg',
    },
    {
      title: 'Remove & Replace',
      href: '#',
      icon: 'src/assets/images/EngineReplace.jpeg',
    },
    {
      title: 'A/C & Heating',
      href: '#',
      icon: 'src/assets/images/HeatingAC.jpg',
    },
    {
      title: 'Electrical',
      href: '#',
      icon: 'src/assets/images/Electrical.jpg',
    },
    {
      title: 'Economy & Light Duty Diesel',
      href: '#',
      icon: '/src/assets/images/EconomyLightDuty.jpg',
    },
    {
      title: 'Used Vehicle Inspections',
      href: '#',
      icon: 'src/assets/images/Inspection.jpg',
    },
    {
      title: 'All Services',
      href: '#',
      icon: 'src/assets/images/AllServices.jpeg',
    },
  ]


    return(
      <div className="relative bg-[#00ff00]">
        <div className="bg-[#333333] py-20">
        <div className="relative mx-auto max-w-7xl ">
          <h1 className="text-3xl text-stroke text-stroke-fill-black text-stroke-[#00ff00] md:text-5xl uppercase font-Bungee ">
            We Offer You
          </h1>
          <p className="relative max-w-7xl text-xl text-[#eeeeee] py-4 font-Urbanist tracking-wider">Full service repair & maintenance for most models manufactured after 2000. Just call us for older vehicles or other items with wheels, it isn&apos;t like we can&apos;t work on them... you just have to draw the line somewhere. </p>
        </div>
        </div>
        <section className="relative mx-auto max-w-7xl bg-[#00ff00] -mb-20 font-Play">
          <ListServices services={services}/>
        </section>
        </div>
    )
  }

export default ServiceOfferings