function MobileMenu(setMobileMenuOpen) {
    if setMobileMenuOpen(true) {
        return <Bars3Icon className='h-6 w-6' aria-hidden='true' />
    }
    return <Bars3Icon className='h-6 w-6 hidden' aria-hidden='true' />
        
    }
}