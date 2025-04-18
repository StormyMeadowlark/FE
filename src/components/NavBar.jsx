import '../App.css'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './limeGreenAndBlackLogo.svg?react'
import ContactInfo from './pageParts/shared/ContactInfo'
import Navigation, { MobileNavigation } from './pageParts/shared/Navigation'
import QuickLinks, { MobileQuickLinks } from './pageParts/shared/QuickLinks'
import { Link } from 'react-router-dom'

function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='absolute top-0 inset-x-0 z-50 bg-black/50 font-Play '>
            <header className='px-3'>
                <nav className='flex flex-1 items-center justify-evenly
                ' aria-label='Global'>
                    <div className=''>
                        <Link to='/' className='flex flex-1'>
                            <span className='sr-only'>H.E.M. Automotive</span>
                            <Logo className='scale-75' />
                        </Link>
                    </div>
                    <div>
                        <ContactInfo />
                        <Navigation />
                    </div>
                    <div className='flex lg:hidden'>
                        <button type="button" 
                            onClick={() => {setMobileMenuOpen(true);}}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Open Menu</span>
                            <Bars3Icon className="h-6 w-6 z-30" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className='fixed inset-0 z-10' />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-[#333333] py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link to='/' className="p-1.5">
                                <span className="sr-only">H.E.M Automotive</span>
                                <Logo className='w-[100%]' />
                            </Link>
                            <button type="button" className="rounded-md p-2.5 text-gray-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="pt-6 flow-root">
                            <div className="divide-y divide-[#777777] gray ">
                                <MobileNavigation />
                                <MobileQuickLinks />
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default NavBar;