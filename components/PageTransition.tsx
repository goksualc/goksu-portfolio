'use client'

import { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  )
}


