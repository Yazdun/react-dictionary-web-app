import useLocalStorage from '@rehooks/local-storage'
import { useContext, createContext, useEffect } from 'react'

const FontContext = createContext()

const fontFamilies = [
  {
    fontName: 'INCONSOLATA',
    fontCategory: 'mono',
    className: 'font_inconsolata',
  },
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
]

export function FontProvider({ children }) {
  const [font, setFont] = useLocalStorage()

  useEffect(
    () => {
      const fontFamily =
        fontFamilies.find(item => item === font) || fontFamilies[0]
      document.documentElement.classList.add(fontFamily.className)

      const fontFamiliesToRemove = fontFamilies.filter(
        item => item.fontName !== font,
      )

      for (let i = 0; i < fontFamiliesToRemove.length; i++) {
        document.documentElement.classList.remove(
          fontFamiliesToRemove[i].className,
        )
      }
    },
    [font], // Only re-call effect when value changes
  )

  return (
    <FontContext.Provider value={{ font, setFont, fontFamilies }}>
      {children},
    </FontContext.Provider>
  )
}

export function useFont() {
  return useContext(FontContext)
}
