import { Outlet } from 'react-router-dom'
import { Navigation } from './'
import cn from 'classnames'
import { useFont } from '../context'

export const Layout = () => {
  const { font } = useFont()

  return (
    <div className={font.className}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
