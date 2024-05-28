import '../../../App.css'


const navigation = [
    { name: 'SCHEDULE', href: '#' },
    { name: 'ESTIMATE', href: '#' },
    { name: 'SERVICE', href: '#' },
    { name: 'SALES', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'CONTACT', href: '#' },
    { name: 'SHOP', href: '#' },
    { name: 'AUTO SCHOOL', href: '#' },
  ]


function Navigation() {
  return(
    <div className='hidden lg:flex lg:gap-x-6 lg:align-bottom lg:justify-evenly'>
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className='text-md text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default Navigation;

function MobileNavigation() {
  return(
        <div className="space-y-2 py-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="focus:outline focus:outline-[#00FF00] -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#eeeeee]"
            >
              {item.name}
          </a>
        ))}
      </div>
  )
}

export { MobileNavigation };