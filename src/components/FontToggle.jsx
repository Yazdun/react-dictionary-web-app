import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useFont } from '../context'
import { useOnClickOutside } from '../hooks'
import { FontModal } from './FontModal'
import { GoChevronDown } from 'react-icons/go'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { framer_font_text } from '../framer'

export const FontToggle = () => {
  const [modal, setModal] = useState(false)
  const { font } = useFont()
  const ref = useRef(null)

  const toggle = () => setModal(prev => !prev)
  useOnClickOutside(ref, () => setModal(false))

  return (
    <div className="relative" ref={ref}>
      <button className="flex items-center gap-2 capitalize" onClick={toggle}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            {...framer_font_text}
            key={font.fontCategory}
            className={font.className}
          >
            {font.fontCategory}
          </motion.span>
        </AnimatePresence>
        <GoChevronDown
          className={cn(
            'text-lg text-primary-100 transition-all duration-300',
            modal && 'rotate-180 ',
          )}
        />
      </button>
      <AnimatePresence initial={false} mode="wait">
        {modal && <FontModal />}
      </AnimatePresence>
    </div>
  )
}
