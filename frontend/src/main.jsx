import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IoPrint } from 'react-icons/io5'
import {Provider} from './components/ui/provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider>
    <App />
    </Provider>
  </StrictMode>,
)


