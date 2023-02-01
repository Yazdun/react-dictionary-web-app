import { FaRegMoon } from 'react-icons/fa'
import { useTheme } from '../context'

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <label class="relative flex items-center cursor-pointer gap-2">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(prev => !prev)}
        className="sr-only peer"
      />
      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span>
        <FaRegMoon />
      </span>
    </label>
  )
}
