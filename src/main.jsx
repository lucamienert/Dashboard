import { createRoot } from 'react-dom/client'
import App from './App'
import Routing from './utils/Routing'
import './index.css'

const root = document.getElementById('root')
createRoot(root).render(
  <Routing>
    <App />
  </Routing>
)
