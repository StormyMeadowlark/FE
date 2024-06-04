import '../../../App.css'
import useHover from '../../../hooks/useHover'
import { NavLink } from 'react-router-dom'

const navigation = [
    { name: 'SERVICE', href: 'Services' },
    { name: 'FAQ', href: 'Faq' },
    { name: 'ABOUT', href: 'About' },
    { name: 'CONTACT', href: 'Contact' },
    { name: 'AUTO SCHOOL', href: 'AutoSchool' },
  ]
const service = { name: 'SERVICE', href: 'Services', }
const factAnswerQuestion = { name: 'FAQ', href: 'Faq', } 
const about = { name: 'ABOUT', href: 'About', } 
const contact = { name: 'CONTACT', href: 'Contact', } 
const autoSchool = { name: 'AUTO SCHOOL', href: 'AutoSchool', }
 
function Navigation() {
  const [hovering, hoveringProps] = useHover()
  return(
    <div className='hidden lg:flex lg:gap-x-6 lg:align-bottom lg:justify-evenly lg:py-0 lg:my-0'>
    <div className=''>
        <NavLink to={service.href} {...hoveringProps} key={service.name} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear active:scale-[98%]'>
          {hovering ? service.name : service.name}
        </NavLink>
    </div>
    <div className=''>
        <NavLink to={factAnswerQuestion.href} key={factAnswerQuestion.name}  className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {factAnswerQuestion.name}
        </NavLink>
    </div>
    <div className=''>
        <NavLink to={about.href} key={about.name} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {about.name}
        </NavLink>
    </div>
    <div className=''>
        <NavLink to={contact.href} key={contact.name} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {contact.name}
        </NavLink>
    </div>
    <div className=''>
        <NavLink  to={autoSchool.href} key={autoSchool.name} className='text-lg text-bold text-white text-center border-y border-[#000000]/0 hover:border-y hover:border-[#00FF00] focus:outline focus:outline-[#00FF00] duration-100 ease-linear'>
          {autoSchool.name}
        </NavLink>
    </div>

    </div>
  )
}

export default Navigation;

function MobileNavigation() {
  return(
        <div className="py-4 space-y-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className=" focus:outline focus:outline-[#00FF00] block rounded-lg px-4 text-lg font-semibold text-[#eeeeee]"
            >
              {item.name}
          </NavLink>
        ))}
      </div>
  )
}

export { MobileNavigation };