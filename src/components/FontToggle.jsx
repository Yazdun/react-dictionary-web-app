/*-------------------------------------------------------------------
|  🐼 React FC FontToggle
|
|  🐯 Purpose: ALLOWS USERS TO TOGGLE BETWEEN DIFFERENT FONTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useFont } from '../context'
import { useOnClickOutside } from '../hooks'
import { FontModal } from './FontModal'
import { GoChevronDown } from 'react-icons/go'
import cn from 'classnames'

export const FontToggle = () => {
  const [modal, setModal] = useState(false)
  const { font } = useFont()
  const ref = useRef(null)

  const toggle = () => setModal(prev => !prev)
  useOnClickOutside(ref, () => setModal(false))

  return (
    <div className="md:relative" ref={ref}>
      <button
        className="flex items-center gap-2 capitalize"
        aria-label={modal ? 'close font selection' : 'open font selection'}
        onClick={toggle}
      >
        <span className={font.className}>{font.fontCategory}</span>
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
