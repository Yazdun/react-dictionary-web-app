import { Outlet } from 'react-router-dom'
import { Navigation } from './'
import cn from 'classnames'
import { useFont } from '../context'

export const Layout = () => {
  const { font } = useFont()

  return (
    <div className={cn('max-w-2xl m-auto flex flex-col gap-5', font.className)}>
      <Navigation />
      <main className="px-5">
        <Outlet />
      </main>
    </div>
  )
}
