import '../../../App.css'
import { PhoneIcon, ClockIcon, MapPinIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import useHover from '../../../hooks/useHover';
import { Link } from 'react-router-dom';

function MobileContactInfo() {
  const [PhoneNumberHovering, PhoneNumberHoveringProps] = useHover();
  const PhoneNumberBeforeHovering =  PhoneNumberBefore();
  const PhoneNumberAfterHovering = PhoneNumberAfter();
  const [HoursHovering, HoursHoveringProps] = useHover();
  const HoursBeforeHovering =  HoursBefore();
  const HoursAfterHovering = HoursAfter();
  const [LocationHovering, LocationHoveringProps] = useHover();
  const LocationBeforeHovering =  LocationBefore();
  const LocationAfterHovering = LocationAfter();
  const [SocialsHovering, SocialsHoveringProps] = useHover();
  const SocialsBeforeHovering =  SocialsBefore();
  const SocialsAfterHovering = SocialsAfter();
    return (
      <div className="justify-center text-[#eeeeee]">
        <button
          {...PhoneNumberHoveringProps}
          className="flex items-center py-4"
        >
          {PhoneNumberHovering
            ? PhoneNumberAfterHovering
            : PhoneNumberBeforeHovering}
          <address className="flex text-center">
            <span className="not-italic text-[12px] focus:outline focus:outline-[#00FF00]">
              785.730.2900
            </span>
          </address>
        </button>
        <button {...HoursHoveringProps} className="flex items-center py-4">
          {HoursHovering ? HoursAfterHovering : HoursBeforeHovering}
          <address className="text-center">
            <span className="not-italic text-[12px] focus:outline focus:outline-[#00FF00]">
              Monday - Friday
              <br />
              8:00 am - 4:00 pm{" "}
            </span>
          </address>
        </button>
        <button {...LocationHoveringProps} className="flex items-center py-4">
          {LocationHovering ? LocationAfterHovering : LocationBeforeHovering}
          <address className="text-center">
            <span className="not-italic text-[12px] focus:outline focus:outline-[#00FF00]">
              315 SW 32nd Terrace
              <br />
              Topeka, KS 66611
            </span>
          </address>
        </button>
        <button
          {...SocialsHoveringProps}
          className="flex text-center items-center py-4"
        >
          {SocialsHovering ? SocialsAfterHovering : SocialsBeforeHovering}
          <div className="text-[12px] focus:outline focus:outline-[#00FF00]">
            Socials
          </div>
        </button>
      </div>
    );
}


function PhoneNumberBefore() {
  return(
    <div>
      <PhoneIcon className=' w-6 h-6 mr-3 ease-linear duration-150' aria-hidden='true' stroke='#00FF00' opacity={.7} />
    </div>
  )
}
function PhoneNumberAfter() {
  return(
    <div>
      <PhoneIcon className=' w-6 h-6 mr-3 ease-linear duration-150' aria-hidden='true' stroke='#00FF00' opacity={.7} fill='#00FF00' />
    </div>
  )
}

function HoursBefore() {
  return(
    <div>
      <ClockIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' opacity={.7} />
    </div>
  )
}

function HoursAfter() {
  return(
    <div>
      <ClockIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' opacity={.7} fill='#00FF00' />
    </div>
  )
}

function LocationBefore() {
  return(
    <div>
      <MapPinIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' opacity={.7} />
    </div>
  )
}

function LocationAfter() {
  return(
    <div>
      <MapPinIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' opacity={.7} fill='#00FF00' />
    </div>
  )
}
function SocialsBefore() {
  return(
    <div>
      <HandThumbUpIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' opacity={.7} />
    </div>
  )
}

function SocialsAfter() {
  return(
    <div>
      <HandThumbUpIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' opacity={.7} fill='#00FF00' />
    </div>
  )
}




export default MobileContactInfo;