'use client'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Left - JEET SARTHI Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo-jeet.svg"
            alt="JEET SARTHI Logo"
            width={100}
            height={30}
            className="object-contain"
            priority
          />
        </div>

        {/* Right - Powered By SHIKSHA NATION */}
        <div className="flex flex-col items-end leading-tight">
          <span className="text-sm text-gray-700 font-medium">Powered By</span>
          <Image
            src="/images/logo-shiksha.png"
            alt="Shiksha Nation Logo"
            width={130}
            height={40}
            className="object-contain mt-1"
          />
        </div>
      </div>
    </nav>
  )
}
