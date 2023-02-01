import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useOnClickOutside } from '../hooks'
import { FontModal } from './FontModal'

export const FontToggle = () => {
  const [modal, setModal] = useState(false)
  const ref = useRef(null)

  const toggle = () => setModal(prev => !prev)
  useOnClickOutside(ref, () => setModal(false))

  return (
    <div className="relative" ref={ref}>
      <button onClick={toggle}>FontToggle</button>
      <AnimatePresence initial={false} mode="wait">
        {modal && <FontModal />}
      </AnimatePresence>
    </div>
  )
}
