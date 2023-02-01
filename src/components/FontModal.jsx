import { useFont } from '../context'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { framer_modal } from '../framer'

export const FontModal = () => {
  const { fontFamilies, setFont } = useFont()
  return (
    <motion.ul
      {...framer_modal}
      className="absolute right-0 border bg-light-100 dark:bg-dark-400 rounded-md shadow-sm min-w-[15rem] dark:border-2 dark:shadow-none dark:border-dark-100 top-10"
    >
      {fontFamilies.map(item => {
        const { fontName, fontCategory, className } = item
        return (
          <li
            key={fontName}
            className="border-b last-of-type:border-none dark:border-dark-100 dark:border-b-2"
          >
            <button
              className={cn('capitalize p-5 w-full flex ', className)}
              onClick={() => setFont(item)}
            >
              {fontCategory}
            </button>
          </li>
        )
      })}
    </motion.ul>
  )
}
