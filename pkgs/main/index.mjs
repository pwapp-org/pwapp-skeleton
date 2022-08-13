import {
  React, createRoot
} from '@vendors/react'
import { App } from './App'
//import './css/style.scss'

const container = document.getElementById('root')

createRoot(container).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
