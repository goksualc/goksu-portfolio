'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          goksu.dev
        </Link>
        <div className="space-x-6 text-sm">
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
