import '../../../App.css'
import useHover from '../../../hooks/useHover'

const navigation = [
    { name: 'SERVICE', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'CONTACT', href: '#' },
    { name: 'AUTO SCHOOL', href: '#' },
  ]
const service = { name: 'SERVICE', href: '#', }
const factAnswerQuestion = { name: 'FAQ', href: '#', } 
const about = { name: 'ABOUT', href: '#', } 
const contact = { name: 'CONTACT', href: '#', } 
const autoSchool = { name: 'AUTO SCHOOL', href: '#', }
 
function Navigation() {
  const [hovering, hoveringProps] = useHover()
  return(
    <div className='hidden lg:flex lg:gap-x-6 lg:align-bottom lg:justify-evenly lg:py-0 lg:my-0'>
    <div className=''>
        <a {...hoveringProps} key={service.name} href={service.href} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {hovering ? service.name : service.name}
        </a>
    </div>
    <div className=''>
        <a key={factAnswerQuestion.name} href={factAnswerQuestion.href} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {factAnswerQuestion.name}
        </a>
    </div>
    <div className=''>
        <a key={about.name} href={about.href} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {about.name}
        </a>
    </div>
    <div className=''>
        <a key={contact.name} href={contact.href} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {contact.name}
        </a>
    </div>
    <div className=''>
        <a key={autoSchool.name} href={autoSchool.href} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {autoSchool.name}
        </a>
    </div>

    </div>
  )
}

export default Navigation;

function MobileNavigation() {
  return(
        <div className="py-4 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" focus:outline focus:outline-[#00FF00] block rounded-lg px-4 text-lg font-semibold text-[#eeeeee]"
            >
              {item.name}
          </a>
        ))}
      </div>
  )
}

export { MobileNavigation };