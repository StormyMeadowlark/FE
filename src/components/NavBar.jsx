import '../App.css'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './limeGreenAndBlackLogo.svg?react'
import ContactInfo from './pageParts/shared/ContactInfo'
import Navigation, { MobileNavigation } from './pageParts/shared/Navigation'
import QuickLinks, { MobileQuickLinks } from './pageParts/shared/QuickLinks'

function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='absolute top-0 inset-x-0 z-50 bg-black/50 font-Play'>
            <header className='px-3 pt-4 pb-8'>
                <nav className='flex flex-1 items-center justify-evenly
                ' aria-label='Global'>
                    <div>
                        <a href='#' className='flex flex-1 focus:outline focus:outline-[#00FF00]'>
                            <span className='sr-only'>H.E.M Automotive</span>
                            <Logo className='hover:scale-[110%] duration-200 ease-in-out' />
                        </a>
                    </div>
                    <div>
                        <ContactInfo />
                        <Navigation />
                    </div>
                    <div>
                        <QuickLinks />
                    </div>
                    <div className='flex lg:hidden'>
                        <button type="button" 
                            onClick={() => {setMobileMenuOpen(true);}}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400 focus:outline focus:outline-[#00FF00]"
                        >
                            <span className="sr-only">Open Menu</span>
                            <Bars3Icon className="h-6 w-6 z-30" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className='fixed inset-0 z-10' />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#333333] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5 focus:outline focus:outline-[#00FF00]">
                                <span className="sr-only">H.E.M Automotive</span>
                                <Logo className='w-[100%] hover:scale-[110%]' />
                            </a>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400 focus:outline focus:outline-[#00FF00]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/25">
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