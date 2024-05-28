import { useState } from 'react'
import '../../../App.css'
import { UserIcon, CalendarIcon, BanknotesIcon } from '@heroicons/react/24/outline'

const quickLinks = [
    {
        srOnly: 'Log-In or create account',
        icon: UserIcon,
        href: 'www.google.com',
        before: 'transparent',
        after: '#00FF00',
    },
    {
        srOnly: 'schedule appointment online',
        icon: CalendarIcon,
        href: 'www.facebook.com',
        before: 'transparent',
        after: '#00FF00',
    },
    {
        srOnly: 'Pay Bill online',
        icon: BanknotesIcon,
        href: 'www.pinterest.com',
        before: 'transparent',
        after: '#00FF00',
    },
    
]

function useMouseHover() {

    const [isHovered, setIsHovered] = useState(false);

    const hoveredProps = {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    }
    return [isHovered, hoveredProps]
}


function QuickLinks() {
    const [isHovered, hoveredProps] = useMouseHover();
    return(
        <div className='hidden lg:flex lg:flex-1 lg:justify-end '>
            {quickLinks.map((link) => (
                <button key={link.srOnly} href={link.href} className='p-2 focus:outline focus:outline-[#00FF00]'>
                    <span className='sr-only'>{link.srOnly}</span>
                    
                    <link.icon {...hoveredProps} className='h-7 w-7' aria-hidden='true' stroke='#00FF00' fill={isHovered ? (link.after) : (link.before)} />
                </button>
            ))}
        </div>
    )
}

export default QuickLinks;

function MobileQuickLinks() {
    return(
        <div className='py-6 flex'>
            <a href='#' className='-mx-3 block rounded-lg px-6 py-2.5 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]'>  
                <span className='sr-only'>Log-in or create account</span>
                <UserIcon className='h-7 w-7 hover:fill-[#00FF00]' aria-hidden='true' stroke='#00FF00' />
            </a>
            <a href='#' className='-mx-3 block rounded-lg px-6 py-2.5 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]'>  
                <span className='sr-only'>Schedule an online appointment</span>
                <CalendarIcon className='h-7 w-7 hover:fill-[#00FF00]' aria-hidden='true' stroke='#00FF00' />
            </a>
            <a href='#' className='-mx-3 block rounded-lg px-6 py-2.5 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]'>  
                <span className='sr-only'>Log-in or create account</span>
                <BanknotesIcon className='h-7 w-7 hover:fill-[#00FF00]' aria-hidden='true' stroke='#00FF00' />
            </a>
        </div>
    )
}

export { MobileQuickLinks }
