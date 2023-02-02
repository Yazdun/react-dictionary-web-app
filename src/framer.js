/*-------------------------------------------------------------------
|  🐼 Framer Motion Animations
|
|  🐯 Purpose: DIFFERENT FRAMER MOTION ANIMATIONS TO USE IN COMPONENTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const framer_modal = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

export const framer_font_check = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.35 },
}

export const framer_opacity = {
  initial: { opacity: 0, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
  transition: { duration: 0.2 },
}
