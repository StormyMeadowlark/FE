import { TruckIcon, UsersIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const supportLinks = [
  {
    name: 'Retail',
    href: '#',
    description:
      'Explore the benefits of being an HEM Automotive Retail Customer.',
    icon: UsersIcon,
    experience: 'Retail Experience',
    image: 'src/assets/images/Retail.jpg',
  },
  {
    name: 'Dealership',
    href: '#',
    description:
      'Special pricing & more when your dealership uses HEM Automotive.',
    icon: TruckIcon,
    experience: 'Dealership Experience',
    image: 'src/assets/images/Dealership.jpg',
  },
  {
    name: 'Fleet & Other',
    href: '#',
    description:
      'We work with fleets in all shapes & forms.',
    icon: UserGroupIcon,
    experience: 'Fleet & Other Experience',
    image: 'src/assets/images/Fleet.jpg',
  },
]

export default function CustomerCategories() {
  return (
    <div className='bg-[#00ff00]'>
      {/* Header */}
      <div className="relative bg-[#333333] py-20">
        <div className="relative mx-auto max-w-7xl ">
          <h1 className="text-3xl text-stroke text-stroke-fill-black text-stroke-[#00ff00] md:text-5xl uppercase font-Bungee ">Where ever you come from</h1>
          <p className="max-w-3xl text-xl text-[#dddddd] pb-14 font-Urbanist tracking-wider">
            Since opening in 2020 our technicians have done repairs on all types of vehicles. From firetrucks & trailers to cars, trucks, SUVs, & more HEM Automotive will give your vehicles the care they deserve & get the job done... Regardless of how many you have!
          </p>
        </div>
      </div>
      {/* Overlapping cards */}
      <section className="relative  z-10 mx-auto max-w-7xl px-6 lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="Customer Experience">
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 lg:-translate-y-10 -translate-y-36">
          {supportLinks.map((link) => (
            <div key={link.name} className=''>
              <img   
                src={link.image} 
                alt=""
                aria-hidden="true"
                className='brightness-[30%] rounded-md' 
              />
              <div className="-translate-y-full -mb-40">
                <div className="lg:visible hidden lg:inline-block -mb-8 -translate-y-12 hexagon -translate-x-4 lg:bg-[#00FF00] bg-[#777777] p-5 shadow-lg">
                  <link.icon className="h-16 w-16 lg:text-[#333333] text-[#00FF00]" aria-hidden="true" />
                </div>
                <div className="px-6 pb-8 md:px-8">
                  <h3 className="text-2xl font-Urbanist font-medium tracking-wider text-white">{link.name}</h3>
                  <p className="mt-4 text-lg text-[#cccccc] font-Urbanist tracking-wide">{link.description}</p>
                </div>
                <div className="silverbg45 rounded-md p-6 md:px-8 hover:scale-[98%] shadow-lg shadow-[#222222] text-white hover:text-[#00ff00] border-b border-[#00ff00]">
                  <a href={link.href} className="text-base font-Play font-semibold tracking-wide ">
                    {link.experience}
                  </a>
                </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}