"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Collection', href: '#' },
  { name: 'Mint NFT', href: '#' },
  { name: 'Profile', href: '#' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <main>
    <header className=" border-b-4 border-white-500    bg-gradient-to-r from-pink-500 to-indigo-500 ...">
    <nav className="flex items-center justify-between p-4 lg:px-32" aria-label="Global">
      <div className="flex lg:flex-1 text-white">
        <a href="#" className="-m-1.5 p-1.5 font-bold">
          NFTATIVE
          
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 items-center justify-center">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
            {item.name}
          </a>
        ))}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end rounded-lg bg-white">
        <a href="#" className="text-sm font-semibold p-2  leading-6 text-gray-900">
          Connect Wallet
        </a>
      </div>
      </div>
      
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            NFTATIVE
          
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  </main>
  )
}

export default Header