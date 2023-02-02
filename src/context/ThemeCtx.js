/*-------------------------------------------------------------------
|  🐼 React CTX ThemeContext
|
|  🐯 Purpose: TOGGLE APP'S THEME GLOBALLY
|
|  🐸 Returns: CTX PROVIDER / CTX HOOK
*-------------------------------------------------------------------*/

import { useContext, createContext } from 'react'
import { useDarkMode } from '../hooks'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
