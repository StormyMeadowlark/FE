import '../../../App.css'
import { PhoneIcon, ClockIcon, MapPinIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

function ContactInfo() {
    return(
        <div className='flex gap-x-6 pb-8 -mt-10 justify-center text-[#eeeeee]'>
            <div className='hidden lg:flex lg:items-center'>
                <PhoneIcon className=' w-6 h-6 mr-3 hover:fill-[#00FF00] ease-linear duration-150' aria-hidden='true' stroke='#00FF00' opacity={.7} />
                <address className='text-center'>
                  <a className='not-italic text-[12px] focus:outline focus:outline-[#00FF00]' href='#'>785.730.2900</a>
                </address>
            </div>
            <div className='hidden lg:flex lg:items-center'>
                <ClockIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' opacity={.7} />
                <address className='text-center'>
                  <a className='not-italic text-[12px] focus:outline focus:outline-[#00FF00]' href='#'>Monday - Friday<br />8:00 am - 4:00 pm </a>
                </address>
            </div>
            <div className='hidden lg:flex lg:items-center'>
                <MapPinIcon className=' w-6 h-6 mr-3 hover:fill-[#00FF00] ease-linear duration-150' aria-hidden='true' stroke='#00FF00' opacity={.7} />
                <address className='text-center'>
                  <a className='not-italic text-[12px] focus:outline focus:outline-[#00FF00]' href='#'>315 SW 32nd Terrace<br />Topeka, KS 66611</a>
                </address>
            </div>
            <div className='hidden lg:flex text-center lg:items-center'>
                <HandThumbUpIcon className='w-6 h-6 mr-3 hover:fill-[#00FF00] ease-linear duration-150' aria-hidden='true' stroke='#00FF00' opacity={.7} />
                <a className='text-[12px] focus:outline focus:outline-[#00FF00]' href='#'>
                  Socials
                </a>
            </div>
        </div>
    )
}

export default ContactInfo;