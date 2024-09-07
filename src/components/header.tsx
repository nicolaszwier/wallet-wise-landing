"use client"

import Link from 'next/link'
import MenuLinks from './menu-links'
import { useState } from 'react'

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false)
  
  const handleMenuToggle = () => {
    setMenuToggle((last)=>!last)
  }

  const handleClickOutside = (event:any) => {
    let menu = document.getElementById("mobile-menu");
    if (!menu?.contains(event.target)) {
      setMenuToggle(false)
    }
}

  return (
    <header className="w-full h-20 flex justify-between p-6 ">
      <div></div>
      <MenuLinks />
      <div className="flex md:hidden">
        <button data-collapse-toggle="mobile-menu" onMouseUp={handleMenuToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      {menuToggle && (
        <div onMouseUp={(event)=>handleClickOutside(event)} className="absolute w-screen left-0 top-0 bottom-0 shadow-sm z-50 flex md:hidden justify-center transition-all">
        
          <div className="absolute w-11/12 md:block md:w-auto mt-20" id="mobile-menu">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-blue-400 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:hover:bg-blue-500">Home</Link>
              </li>
              <li>
                <Link href="/#features" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white md:dark:hover:bg-transparent'>Features</Link>
              </li>
              <li>
                <Link href="/#download" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Download</Link>
              </li>
              <li>
                <Link href="/frequently-asked-questions" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}