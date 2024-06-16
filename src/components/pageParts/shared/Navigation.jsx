import '../../../App.css'
import useHover from '../../../hooks/useHover'
import { NavLink } from 'react-router-dom'

const navigation = [
    { name: 'SERVICE', href: 'services' },
    { name: 'FAQ', href: 'saq' },
    { name: 'ABOUT', href: 'about' },
    { name: 'CONTACT', href: 'contact' },
    { name: 'AUTO SCHOOL', href: 'auto-school' },
  ]
const service = { name: 'SERVICE', href: 'services', }
const factAnswerQuestion = { name: 'FAQ', href: 'faq', } 
const about = { name: 'ABOUT', href: 'about', } 
const contact = { name: 'CONTACT', href: 'contact', } 
const autoSchool = { name: 'AUTO SCHOOL', href: 'auto-school', }
 
function Navigation() {
  const [hovering, hoveringProps] = useHover()
  return (
    <div className="hidden lg:flex lg:gap-x-6 lg:align-bottom lg:justify-evenly lg:py-0 lg:my-0">
      <div className="">
        <NavLink
          to={service.href}
          {...hoveringProps}
          key={service.name}
          className="p-0.5 text-lg text-bold text-white text-center hover:border-t hover:border-b hover:border-[#00ff00] focus-visible:outline focus-visible:outline-[#00ff00] active:text-[#00ff00]"
        >
          {hovering ? service.name : service.name}
        </NavLink>
      </div>
      <div className="">
        <NavLink
          to={factAnswerQuestion.href}
          key={factAnswerQuestion.name}
          className="p-0.5 text-lg text-bold text-white text-center hover:border-t hover:border-b hover:border-[#00ff00] focus-visible:outline focus-visible:outline-[#00ff00] active:text-[#00ff00]"
        >
          {factAnswerQuestion.name}
        </NavLink>
      </div>
      <div className="">
        <NavLink
          to={about.href}
          key={about.name}
          className="p-0.5 text-lg text-bold text-white text-center hover:border-t hover:border-b hover:border-[#00ff00] focus-visible:outline focus-visible:outline-[#00ff00] active:text-[#00ff00]"
        >
          {about.name}
        </NavLink>
      </div>
      <div className="">
        <NavLink
          to={contact.href}
          key={contact.name}
          className="p-0.5 text-lg text-bold text-white text-center hover:border-t hover:border-b hover:border-[#00ff00] focus-visible:outline focus-visible:outline-[#00ff00] active:text-[#00ff00]"
        >
          {contact.name}
        </NavLink>
      </div>
      <div className="">
        <NavLink
          to={autoSchool.href}
          key={autoSchool.name}
          className="p-0.5 text-lg text-bold text-white text-center hover:border-t hover:border-b hover:border-[#00ff00] focus-visible:outline focus-visible:outline-[#00ff00] active:text-[#00ff00]"
        >
          {autoSchool.name}
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;

function MobileNavigation() {
  return(
        <div className="py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block rounded-lg px-4 text-lg font-semibold text-[#eeeeee]"
            >
              {item.name}
          </Link>
        ))}
      </div>
  )
}

export { MobileNavigation };