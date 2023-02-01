import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider, FontProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FontProvider>
          <App />
        </FontProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
