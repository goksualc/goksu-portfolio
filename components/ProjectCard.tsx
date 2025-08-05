'use client'
import { motion } from 'framer-motion'

type ProjectProps = {
  title: string
  description: string
  tags: string[]
  link?: string
}

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white w-full sm:w-[400px] hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="bg-gray-100 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View Project →
        </a>
      )}
    </motion.div>
  )
}
