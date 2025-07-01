import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import Menu from './Menu'
import { Toaster } from 'react-hot-toast';

export const root = createRoot(document.getElementById('root'));


export function main() {
  const body = document.querySelector("body");
  body.style.setProperty("--COLOR", body.style.getPropertyValue("--LACCENT"));

  root.render(
    <>
      <Toaster position='top-right' />
      <Menu />
    </>
  )
}

main();

