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
      <Navigation />
      <main className="pb-10">
        <Outlet />
      </main>
    </div>
  )
}
