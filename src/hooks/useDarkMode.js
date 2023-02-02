/*-------------------------------------------------------------------
|  🐼 React Hook useDarkMode
|
|  🐯 Purpose: TOGGLE LIGHT MODE / DARK MODE
|
|  🐸 Returns: THEME STATE AND A FUNCTION TO CHANGE THE APP'S THEME
*-------------------------------------------------------------------*/

import { useEffect } from 'react'
import { useMedia, useLocalStorage } from './'

export function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled')
  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode()
  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode
  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      if (enabled) {
        document.documentElement.classList.add('dark')
        document.body.classList.add('bg-dark-400', 'text-white')
        document.body.classList.remove('bg-light-100')
      } else {
        document.documentElement.classList.remove('dark')
        document.body.classList.add('bg-light-100')
        document.body.classList.remove('bg-dark-400', 'text-white')
      }
    },
    [enabled], // Only re-call effect when value changes
  )
  // Return enabled state and setter
  return [enabled, setEnabledState]
}
// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}
