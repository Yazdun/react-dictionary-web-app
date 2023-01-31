import { appRoutes } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route>
          {appRoutes.map(route => {
            const { Component, path } = route
            return <Route path={path} key={path} element={<Component />} />
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
