/*-------------------------------------------------------------------
|  🐼 React CTX FontContext
|
|  🐯 Purpose: TOGGLE APP FONTS GLOBALLY
|
|  🐸 Returns: CTX PROVIDER / CTX HOOK
*-------------------------------------------------------------------*/

import useLocalStorage from '@rehooks/local-storage'
import { useContext, createContext } from 'react'

const FontContext = createContext()

const fontFamilies = [
  {
    fontName: 'INTER',
    fontCategory: 'sans serif',
    className: 'font_inter',
  },
  {
    fontName: 'LORA',
    fontCategory: 'serif',
    className: 'font_lora',
  },
  {
    fontName: 'INCONSOLATA',
    fontCategory: 'mono',
    className: 'font_inconsolata',
  },
]

export function FontProvider({ children }) {
  const currentFont = localStorage.getItem('font')
  const [font, setFont] = useLocalStorage(
    'font',
    currentFont || fontFamilies[0],
  )

  return (
    <FontContext.Provider value={{ font, setFont, fontFamilies }}>
      {children}
    </FontContext.Provider>
  )
}

export function useFont() {
  return useContext(FontContext)
}
