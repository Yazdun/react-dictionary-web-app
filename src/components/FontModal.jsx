import { useFont } from '../context'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_font_check, framer_modal } from '../framer'
import { BsCheckLg } from 'react-icons/bs'

export const FontModal = () => {
  const { fontFamilies, setFont, font } = useFont()
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
              className={cn(
                'capitalize p-5 w-full flex justify-between items-center',
                className,
              )}
              onClick={() => setFont(item)}
            >
              <span>{fontCategory}</span>
              <AnimatePresence mode="wait" initial={false}>
                {font === item && (
                  <motion.span {...framer_font_check} key={item.fontCategory}>
                    <BsCheckLg className="text-green-400" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
        )
      })}
    </motion.ul>
  )
}
