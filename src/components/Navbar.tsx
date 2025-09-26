'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">SomnoSense</span>
              <span className="ml-2 text-xs text-gray-500 font-normal">™</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#about-bruxism" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About Bruxism
              </Link>
              <Link href="/#our-solution" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Our Solution
              </Link>
              <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </Link>
              <Link href="/#for-researchers" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                For Researchers
              </Link>
              <Link href="/#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Join Waitlist
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/#about-bruxism" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                About Bruxism
              </Link>
              <Link href="/#our-solution" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                Our Solution
              </Link>
              <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                How It Works
              </Link>
              <Link href="/#for-researchers" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                For Researchers
              </Link>
              <Link href="/#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 mt-2" onClick={() => setIsOpen(false)}>
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}