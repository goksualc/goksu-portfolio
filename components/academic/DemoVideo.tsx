'use client'
import { useEffect, useRef } from 'react'

export default function DemoVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const play = () => {
      if (ref.current) {
        ref.current.muted = true
        ref.current.play().catch(() => {})
      }
    }
    play()
    document.addEventListener('touchstart', play, { once: true })
    return () => document.removeEventListener('touchstart', play)
  }, [])
  return <video ref={ref} src={src} autoPlay loop muted playsInline preload="metadata" className="ac-demo" />
}
