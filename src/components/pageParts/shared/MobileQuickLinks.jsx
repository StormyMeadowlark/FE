import { Link } from 'react-router-dom';
import useHover from '../../../hooks/useHover';
import { UserIcon, CalendarIcon, BanknotesIcon } from '@heroicons/react/24/outline'

function MobileQuickLinks() {
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
        <div className='md:hidden flex flex-1 justify-end '>
                <Link {...UserHoveringProps} to='user/login' className='p-2 focus:outline focus:outline-[#00FF00]'>
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

