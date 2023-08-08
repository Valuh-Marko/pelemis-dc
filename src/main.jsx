import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/main.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider as GeneralProvider } from './context/GeneralContext.jsx'
import { Provider as RoutesProvider } from './context/RoutesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesProvider>
      <GeneralProvider>
        <Router>
          <Routes>
            <Route path='/pelemis-dc/*' element={<App />} />
          </Routes>
        </Router>
      </GeneralProvider>
    </RoutesProvider>
  </React.StrictMode>,
)
