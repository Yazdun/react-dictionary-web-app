import { appRoutes } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components'
import { MotionConfig } from 'framer-motion'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          {appRoutes.map(route => {
            const { Component, path } = route
            return <Route path={path} key={path} element={<Component />} />
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </MotionConfig>
  )
}

export default App
