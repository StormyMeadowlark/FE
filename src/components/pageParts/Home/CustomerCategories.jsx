import { TruckIcon, UsersIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import ListCustomerCategories from '../shared/ListCustomerCategories'

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
          <h1 className="text-3xl text-stroke text-stroke-fill-black text-stroke-[#00ff00] md:text-5xl uppercase font-Bungee pb-4">Where ever you come from</h1>
          <p className="max-w-3xl text-xl text-[#dddddd] pb-14 font-Urbanist tracking-wider">
            Since opening in 2020 our technicians have done repairs on all types of vehicles. From firetrucks & trailers to cars, trucks, SUVs, & more HEM Automotive will give your vehicles the care they deserve & get the job done... Regardless of how many you have!
          </p>
        </div>
      </div>
      {/* Overlapping cards */}
      <section className="relative  z-10 mx-auto max-w-7xl px-6 lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="Customer Experience">
        </h2>
        <ListCustomerCategories supportLinks={supportLinks} />
      </section>
    </div>
  )
}