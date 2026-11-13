'use client'
import { useState } from 'react'
import { events, categoryTabs, type EventCategory } from '../../app/data'

type Ev = (typeof events)[number]

function EventItem({ ev }: { ev: Ev }) {
  const [open, setOpen] = useState(false)
  return (
    <li>
      <details onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}>
        <summary>
          <span className="ac-ev-year">{ev.year}</span>
          <span>
            <strong>{ev.name}</strong>, {ev.location} · <em>{ev.role}</em>
          </span>
        </summary>
        <div className="ac-ev-body">
          <p>{ev.desc}</p>
          {ev.video ? (
            open && (
              <div className="ac-video">
                <iframe
                  src={`https://www.youtube.com/embed/${ev.video}`}
                  title={ev.name}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )
          ) : ev.photo ? (
            <img src={ev.photo} alt={ev.name} loading="lazy" className="ac-ev-photo" />
          ) : null}
        </div>
      </details>
    </li>
  )
}

export default function Events() {
  const [cat, setCat] = useState<EventCategory>('all')
  const list = cat === 'all' ? events : events.filter((e) => e.category === cat)
  return (
    <>
      <p className="ac-filter" role="group" aria-label="Filter events">
        Filter:{' '}
        {categoryTabs.map((t, i) => (
          <span key={t.key}>
            {i > 0 && ' · '}
            <button type="button" onClick={() => setCat(t.key)} aria-pressed={cat === t.key} className={cat === t.key ? 'active' : ''}>
              {t.label}
            </button>
          </span>
        ))}
      </p>
      {list.length === 0 ? (
        <p>No events in this category yet.</p>
      ) : (
        <ul className="ac-events">
          {list.map((ev) => (
            <EventItem key={ev.name + ev.year} ev={ev} />
          ))}
        </ul>
      )}
    </>
  )
}
