'use client'
import { useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    twttr?: {
      widgets: { load: (el?: HTMLElement | null) => void }
    }
  }
}

export default function TweetEmbed({ tweetId }: { tweetId: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load(ref.current)
    }
  }, [tweetId])

  return (
    <div ref={ref} className="tweet-embed-wrap">
      <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
        <a href={`https://twitter.com/0xgks/status/${tweetId}`} />
      </blockquote>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={() => window.twttr?.widgets.load(ref.current)}
      />
    </div>
  )
}
