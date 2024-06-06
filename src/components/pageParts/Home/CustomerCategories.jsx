import { TruckIcon, UsersIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import ListCustomerCategories from '../shared/ListCustomerCategories'
import HeaderOne from '../../../utils/header1'
import Retail from '/src/assets/images/Retail.jpg?react'
import Dealership from '/src/assets/images/Dealership.jpg?react'
import Fleet from '/src/assets/images/Fleet.jpg?react'

const supportLinks = [
  {
    name: 'Retail',
    href: 'retail',
    description:
      'Explore the benefits of being an HEM Automotive Retail Customer.',
    icon: UsersIcon,
    experience: 'Retail Experience',
    image: Retail,
  },
  {
    name: 'Dealership',
    href: 'used-car-dealership',
    description:
      'Special pricing & more when your dealership uses HEM Automotive.',
    icon: TruckIcon,
    experience: 'Dealership Experience',
    image: Dealership,
  },
  {
    name: 'Fleet & Other',
    href: 'fleet-and-other',
    description:
      'We work with fleets in all shapes & forms.',
    icon: UserGroupIcon,
    experience: 'Fleet & Other Experience',
    image: Fleet,
  },
]

export default function CustomerCategories() {
  return (
    <div className='bg-[#00ff00]'>
      {/* Header */}
      <div className="relative bg-[#333333] py-20 px-10">
        <div className="relative mx-auto max-w-7xl ">
          <HeaderOne textOne='Where ever you come from' />
          <p className="relative max-w-7xl text-xl text-[#eeeeee] pt-4 font-Urbanist tracking-wider">
            Since opening in 2020 our technicians have done repairs on all types of vehicles. From firetrucks & trailers to cars, trucks, SUVs, & more HEM Automotive will give your vehicles the care they deserve & get the job done... Regardless of how many you have!
          </p>
        </div>
      </div>
      {/* Overlapping cards */}
      <section className="relative  z-10 mx-auto max-w-7xl px-6 lg:px-8 md:pt-10 pt-20" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="Customer Experience">
        </h2>
        <ListCustomerCategories supportLinks={supportLinks} />
      </section>
    </div>
  )
}