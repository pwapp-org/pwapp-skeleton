import {
  React,
  BrowserRouter,
  createRoot
} from '@vendors/react'

import { App } from './App'
import './styles.css'

const container = document.getElementById('root')

createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
