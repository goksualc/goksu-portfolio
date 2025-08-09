'use client'

import React, { useEffect, useRef } from 'react'

type RevealProps = {
  children: React.ReactNode
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  delayMs?: number
  durationMs?: number
  offsetY?: number
  once?: boolean
}

export function RevealOnScroll({
  children,
  as = 'div',
  className,
  delayMs = 0,
  durationMs = 500,
  offsetY = 24,
  once = true,
}: RevealProps) {
  const Tag = as as React.ElementType
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current as HTMLElement | null
    if (!element) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      element.classList.add('reveal--visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            if (once) obs.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={['reveal', className].filter(Boolean).join(' ')}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
        transitionDelay: `${delayMs}ms`,
        // Custom property for translate offset
        ['--reveal-translate' as unknown as string]: `${offsetY}px`,
      }}
    >
      {children}
    </Tag>
  )
}

type RevealListProps = Omit<RevealProps, 'delayMs' | 'as'> & {
  children: React.ReactNode
  intervalMs?: number
  itemAs?: keyof React.JSX.IntrinsicElements
}

export function RevealList({ children, intervalMs = 70, itemAs = 'div', ...rest }: RevealListProps) {
  const array = React.Children.toArray(children)
  return (
    <>
      {array.map((child, index) => (
        <RevealOnScroll key={index} delayMs={index * intervalMs} as={itemAs} {...rest}>
          {child}
        </RevealOnScroll>
      ))}
    </>
  )
}


