/*-------------------------------------------------------------------
|  🐼 React FC Layout
|
|  🐯 Purpose: APP LAYOUT FOR THE REACT-ROUTER-DOM
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Outlet } from 'react-router-dom'
import { Navigation } from './'
import { useFont } from '../context'

export const Layout = () => {
  const { font } = useFont()

  return (
    <div className={font.className}>
      <a href="#main" className="skip-to-main-content-link">
        Skip to main content
      </a>
      <Navigation />
      <main className="pb-10" id="main">
        <Outlet />
      </main>
    </div>
  )
}
