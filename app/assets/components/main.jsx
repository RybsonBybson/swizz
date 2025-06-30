import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import Menu from './Menu'

export const root = createRoot(document.getElementById('root'));


export function main() {
  root.render(
    <Menu />
  )
}

main();

