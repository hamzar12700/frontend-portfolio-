import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './ContextApi/Context'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

  <GlobalProvider>

    <App />

  </GlobalProvider>,
  </BrowserRouter>

)
