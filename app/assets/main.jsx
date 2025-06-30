import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './Menu'

export const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
