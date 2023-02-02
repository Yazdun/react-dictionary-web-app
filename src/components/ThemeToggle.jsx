/*-------------------------------------------------------------------
|  🐼 React FC ThemeToggle
|
|  🐯 Purpose: TOGGLE LIGHT MODE / DARK MODE
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { FaRegMoon } from 'react-icons/fa'
import { useTheme } from '../context'

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <label className="relative flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(darkMode ? false : true)}
        className="sr-only peer"
        aria-label={
          darkMode
            ? 'dark mode is the active theme'
            : 'light mode is the active theme'
        }
      />
      <div className="w-9 h-5 bg-light-400 peer-focus:outline-none peer-focus:ring-black dark:peer-focus:ring-slate-200 peer-focus-visible:ring-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-100"></div>
      <span>
        <FaRegMoon className="text-light-400 dark:text-primary-100" />
      </span>
    </label>
  )
}
