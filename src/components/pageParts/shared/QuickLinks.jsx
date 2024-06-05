import { Link } from 'react-router-dom';
import useHover from '../../../hooks/useHover';
import { UserIcon, CalendarIcon, BanknotesIcon } from '@heroicons/react/24/outline'

function QuickLinks() {
    const [UserHovering, UserHoveringProps] = useHover();
    const [AppointmentHovering, AppointmentHoveringProps] = useHover();
    const [PaymentHovering, PaymentHoveringProps] = useHover();
    const UserBeforeHover = UserBefore();
    const AppointmentBeforeHover = AppointmentBefore();
    const PaymentBeforeHover = PaymentBefore();
    const UserAfterHover = UserAfter();
    const AppointmentAfterHover = AppointmentAfter();
    const PaymentAfterHover = PaymentAfter();
    return(
        <div className='hidden lg:flex lg:flex-1 lg:justify-end '>
                <Link {...UserHoveringProps} to='user' className='p-2 focus:outline focus:outline-[#00FF00]'>
                    <span className='sr-only'>Log-In or Create Account</span>
                    {UserHovering ? UserAfterHover : UserBeforeHover}
                </Link>
                <Link {...AppointmentHoveringProps} to='schedule' className='p-2 focus:outline focus:outline-[#00FF00]'>
                    <span className='sr-only'>Log-In or Create Account</span>
                    {AppointmentHovering ? AppointmentAfterHover : AppointmentBeforeHover}
                </Link>
                <Link {...PaymentHoveringProps} to='payment' className='p-2 focus:outline focus:outline-[#00FF00]'>
                    <span className='sr-only'>Log-In or Create Account</span>
                    {PaymentHovering ? PaymentAfterHover : PaymentBeforeHover}
                </Link>
        </div>
    )
}

function UserBefore() {
    return(
        <UserIcon className='h-7 w-7' aria-hidden='true' stroke='#00FF00' fill='transparent' />
    )
}

function UserAfter() {
    return(
        <UserIcon className='h-7 w-7' aria-hidden='true' stroke='#00FF00' fill='#00ff00' />
    )
}

function AppointmentBefore() {
    return(
        <CalendarIcon className='h-7 w-7' aria-hidden='true' stroke='#00FF00' fill='transparent' />
    )
}

function AppointmentAfter() {
    return(
        <CalendarIcon className='h-7 w-7' aria-hidden='true' stroke='#00FF00' fill='#00ff00' />
    )
}

function PaymentBefore() {
    return(
        <BanknotesIcon className='h-7 w-7' aria-hidden='true' stroke='#00FF00' fill='transparent' />
    )
}

function PaymentAfter() {
    return(
        <BanknotesIcon className='h-7 w-7' aria-hidden='true' stroke='#00FF00' fill='#00ff00' />
    )
}


export default QuickLinks;

function MobileQuickLinks() {
    return(
        <div className='py-6 flex'>
            <a href='#' className='block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]'>  
                <span className='sr-only'>Log-in or create account</span>
                <UserIcon className='h-7 w-7 hover:fill-[#00FF00]' aria-hidden='true' stroke='#00FF00' />
            </a>
            <a href='#' className='block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]'>  
                <span className='sr-only'>Schedule an online appointment</span>
                <CalendarIcon className='h-7 w-7 hover:fill-[#00FF00]' aria-hidden='true' stroke='#00FF00' />
            </a>
            <a href='#' className='block rounded-lg px-4 py-4 text-base font-semibold leading-7 text-white focus:outline focus:outline-[#00FF00]'>  
                <span className='sr-only'>Log-in or create account</span>
                <BanknotesIcon className='h-7 w-7 hover:fill-[#00FF00]' aria-hidden='true' stroke='#00FF00' />
            </a>
        </div>
    )
}

export { MobileQuickLinks }
