import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/main.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider as GeneralProvider } from './context/GeneralContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </GeneralProvider>
  </React.StrictMode>,
)
