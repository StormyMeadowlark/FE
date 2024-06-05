import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Logo from "../../../components/limeGreenAndBlackLogo.svg?react";
import List from "./Socials";
import FacebookIcon from "../../../assets/svgIcons/FacebookIcon.svg?react";
import YouTubeIcon from "../../../assets/svgIcons/YouTubeIcon.svg?react";
import TikTokIcon from "../../../assets/svgIcons/TikTokIcon.svg?react";
import TwitterIcon from"../../../assets/svgIcons/TwitterIcon.svg?react";
import InstagramIcon from "../../../assets/svgIcons/InstagramIcon.svg?react";
import GoogleIcon from "../../../assets/svgIcons/GoogleIcon.svg?react";
import CarFaxIcon from "../../../assets/svgIcons/CarFaxIcon.svg?react";
import YelpIcon from "../../../assets/svgIcons/YelpIcon.svg?react";
import { Link } from "react-router-dom";

  export default function Footer() {
    const socials = [
      {
          title: 'Facebook',
          href: 'https://www.facebook.com/HEMautomotive/',
          icon: FacebookIcon,
      },
      {
          title: 'Youtube',
          href: 'https://www.youtube.com/@hemautomotive',
          icon: YouTubeIcon,
      },
      {
          title: 'Tiktok',
          href: 'https://www.tiktok.com/@hemautomotive',
          icon: TikTokIcon,
      },
      {
          title: 'X',
          href: 'https://www.x.com/@hemautomotive',
          icon: TwitterIcon,
      },
      {
          title: 'Instagram',
          href: 'https://www.instagram.com/hemautomotive/',
          icon: InstagramIcon,
      },
  ]

  const reviews = [
    {
        title: 'Google',
        href: 'https://www.google.com/search?q=hem+automotive',
        icon: GoogleIcon,
    },
    {
      title: 'CarFax',
      href: 'https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ',
      icon: CarFaxIcon,
  },
    {
        title: 'Yelp',
        href: 'https://www.yelp.com/biz/hem-automotive-topeka',
        icon: YelpIcon,
    },

]
    return (
      <footer className="bg-[#333333] shadow-inner shadow-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
      <div className="max-w-7xl mx-auto text-white font-Play py-8">
        <div className="flex flex-1 justify-between">
          <div className="flex basis-3/4">
            <div>
              <Logo />
            </div>
            <div>
              <div className='translate-y-6 flex flex-col px-10 text-4xl'>
                    <div className="py-1">
                      <a href='services' className='text-md text-bold text-white text-center'>SERVICE</a>
                    </div>
                    <div className="py-1">
                      <a href='faq' className='text-md text-bold text-white text-center'>FAQ</a>
                    </div>
                    <div className="py-1">
                      <a href='contact' className='text-md text-bold text-white text-center'>CONTACT</a>
                    </div>
                    <div className="py-1">
                      <a href='auto-school' className='text-md text-bold text-white text-center'>AUTO SCHOOL</a>
                    </div>
              </div>
            </div>
          </div>









            <div>
              <div className='flex flex-col align-middle text-[#eeeeee]'>
                <div className='hidden lg:flex lg:items-center pb-4'>
                  <PhoneIcon className=' w-6 h-6 mr-3' aria-hidden='true' stroke='#00FF00' />
                  <address>
                    <span className='not-italic text-xl' href='#'>785.730.2900</span>
                  </address>
                </div>
                <div className='hidden lg:flex lg:items-center pb-4'>
                  <ClockIcon className='w-6 h-6 mr-3 justify-center' aria-hidden='true' stroke='#00FF00' />
                  <address>
                    <span className='not-italic text-xl' href='#'>Monday - Friday<br />8:00 am - 4:00 pm </span>
                  </address>
                </div>
                <div className='hidden lg:flex lg:items-center'>
                  <MapPinIcon className=' w-6 h-6 mr-3' aria-hidden='true' stroke='#00FF00' />
                  <address>
                    <div className='not-italic text-xl' href='#'>315 SW 32nd Terrace<br />Topeka, KS 66611</div>
                  </address>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='bg-[#222222] py-2.5 text-[#00ff00] text-center flex justify-center shadow-inner shadow-[#00ff00]'>
        <div className="flex justify-between basis-[80rem] max-w-7xl">
          <div>
            <List socials={socials} />
          </div>
          <div>
            <List socials={reviews} />
          </div>
        </div>
      </div>
      <div className="border-t border-[#00ff00] silverbg py-2">
        <div className="max-w-7xl mx-auto flex">
          <div className="flex flex-1 justify-between">
            <div>
              <Link className="font-Play text-[#00ff00] tracking-wide" to='https://www.stormymeadowlark.com'>Website Designed & Maintained by:<br /> Stormy Meadowlark Design Co.</Link>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-end">
                <Link className="text-sm font-Play tracking-wide" to="legal">Legal</Link>
              </div>
              <div>
                <h3 className="text-sm text-Play tracking-wide">&copy; 2024 HEM AUTO LLC</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}