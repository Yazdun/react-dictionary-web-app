import { Outlet } from 'react-router-dom'
import { Navigation } from './'

export const Layout = () => {
  return (
    <div className="max-w-2xl m-auto">
      <Navigation />
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  )
}
